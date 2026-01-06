import express from 'express';
import cors from 'cors';
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
import { sendConfirmationEmail } from './emailClient.js';

app.get('/', (req, res) => {
    res.send('Ganing Web Booking API is running');
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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
