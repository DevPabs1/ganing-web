import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    next();
});

// Routes
import { getAvailability, createCalendarEvent } from './googleClient.js';
import { createMeeting } from './zoomClient.js';
import { sendConfirmationEmail, sendContactEmail } from './emailClient.js';

app.get('/', (req, res) => {
    res.send('Ganing Web Booking API is running');
});

// GitHub Auth Routes
app.get('/api/auth/github', (req, res) => {
    const { GITHUB_CLIENT_ID } = process.env;
    const redirectParams = new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        scope: 'read:user repo',
    }).toString();
    res.redirect(`https://github.com/login/oauth/authorize?${redirectParams}`);
});

app.get('/api/auth/github/callback', async (req, res) => {
    const { code } = req.query;
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

    if (!code) {
        return res.status(400).send('No code provided');
    }

    try {
        const tokenResponse = await axios.post(
            'https://github.com/login/oauth/access_token',
            {
                client_id: GITHUB_CLIENT_ID,
                client_secret: GITHUB_CLIENT_SECRET,
                code,
            },
            {
                headers: { Accept: 'application/json' },
            }
        );

        const accessToken = tokenResponse.data.access_token;
        if (!accessToken) throw new Error('Failed to obtain access token');

        const userResponse = await axios.get('https://api.github.com/user', {
            headers: { Authorization: `token ${accessToken}` },
        });
        const username = userResponse.data.login;

        const repoResponse = await axios.get(
            'https://api.github.com/repos/DevPabs1/ganing-web',
            {
                headers: { Authorization: `token ${accessToken}` },
            }
        );

        const permissions = repoResponse.data.permissions;

        if (permissions && (permissions.push || permissions.admin)) {
            // Redirect to frontend (locally running on 5173 usually)
            res.redirect(`http://localhost:5173/?token=${accessToken}&username=${username}`);
        } else {
            res.redirect('http://localhost:5173/login?error=access_denied');
        }
    } catch (error) {
        console.error('GitHub Auth Error:', error.response?.data || error.message);
        res.redirect('http://localhost:5173/login?error=auth_failed');
    }
});

// ... (previous code)

app.post('/api/availability', async (req, res) => {
    try {
        const { date } = req.body;
        console.log(`Checking availability for: ${date}`);
        const slots = await getAvailability(date);
        res.json({ slots });
    } catch (error) {
        console.error("Availability Error Stack:", error);
        res.status(500).json({ error: "Failed to fetch availability", details: error.message });
    }
});

app.post('/api/book', async (req, res) => {
    try {
        const { name, email, date, time, description } = req.body;
        console.log(`Booking request for ${name} at ${time} on ${date}`);

        // Helper to convert 12h time (10:00 AM) to 24h (10:00)
        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        const formattedTime = `${hours}:${minutes}`;

        // 1. Create Zoom Meeting
        // Ensure date is YYYY-MM-DD
        const dateOnly = date.split('T')[0];

        // FIXED: Construct time with explicit +07:00 offset for Jakarta/Bangkok time
        // The frontend sends user selection for 10:00 AM. We want this to be 10:00 AM Jakarta Time.
        const dateTimeStr = `${dateOnly}T${formattedTime}:00+07:00`;

        const zoomLink = await createMeeting(`Consultation with ${name}`, dateTimeStr);

        // 2. Create Google Calendar Event
        const event = await createCalendarEvent({
            summary: `Consultation: ${name}`,
            description: description,
            startDateTime: dateTimeStr,
            endDateTime: new Date(new Date(dateTimeStr).getTime() + 60 * 60000).toISOString(),
            meetingLink: zoomLink,
            attendeeEmail: email // Pass the customer email
        });

        // 3. Send Confirmation Email via Nodemailer
        // This ensures the customer gets a nicely formatted email even if Google Calendar fails to send one
        await sendConfirmationEmail({
            customerName: name,
            customerEmail: email,
            dateTime: dateTimeStr,
            meetingLink: zoomLink,
            description: description
        });

        res.json({
            success: true,
            message: "Booking confirmed!",
            meetingLink: zoomLink,
            eventId: event.id
        });
    } catch (error) {
        console.error("Booking Error:", error);
        res.status(500).json({
            success: false,
            message: "Booking failed",
            error: error.message
        });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        console.log(`Received contact message from ${name} (${email})`);

        const emailSent = await sendContactEmail({ name, email, message });

        if (emailSent) {
            res.json({ success: true, message: "Message sent successfully!" });
        } else {
            res.status(500).json({ success: false, message: "Failed to send email" });
        }
    } catch (error) {
        console.error("Contact Endpoint Error:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
