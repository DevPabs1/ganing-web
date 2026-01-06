import { createMeeting } from '../server/zoomClient.js';
import { createCalendarEvent } from '../server/googleClient.js';
import { sendConfirmationEmail } from '../server/emailClient.js';

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { name, email, date, time, description } = req.body;
        console.log(`Booking request for ${name} at ${time} on ${date}`);

        // Helper to convert 12h time (10:00 AM) to 24h (10:00)
        // Ensure "time" string format is handled robustly
        if (!time) throw new Error("Time is required");

        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');

        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }

        // Pad hours and minutes to ensure 2 digits (e.g., "09")
        hours = hours.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');

        const formattedTime = `${hours}:${minutes}`;

        // 1. Create Zoom Meeting
        // Ensure date is YYYY-MM-DD
        const dateOnly = date.split('T')[0];

        // Construct time with explicit +07:00 offset for Jakarta/Bangkok time
        const dateTimeStr = `${dateOnly}T${formattedTime}:00+07:00`;

        const zoomLink = await createMeeting(`Consultation with ${name}`, dateTimeStr);

        // 2. Create Google Calendar Event
        const event = await createCalendarEvent({
            summary: `Consultation: ${name}`,
            description: description,
            startDateTime: dateTimeStr,
            endDateTime: new Date(new Date(dateTimeStr).getTime() + 60 * 60000).toISOString(),
            meetingLink: zoomLink,
            attendeeEmail: email
        });

        // 3. Send Confirmation Email via Nodemailer
        await sendConfirmationEmail({
            customerName: name,
            customerEmail: email,
            dateTime: dateTimeStr,
            meetingLink: zoomLink,
            description: description
        });

        res.status(200).json({
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
}
