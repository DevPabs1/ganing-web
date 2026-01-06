import { google } from 'googleapis';
import dotenv from 'dotenv';
dotenv.config();

// Load environment variables
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3001/oauth2callback';

export const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

// NOTE: In a real production app, you'd store tokens in a database.
// For this single-user-provider use case, we might hardcode the REFRESH TOKEN in .env
console.log("Loading Credentials...");
console.log("Client ID:", process.env.GOOGLE_CLIENT_ID ? "Set" : "Missing");
console.log("Client Secret:", process.env.GOOGLE_CLIENT_SECRET ? "Set" : "Missing");
console.log("Refresh Token:", process.env.GOOGLE_REFRESH_TOKEN ? "Set" : "Missing");

if (process.env.GOOGLE_REFRESH_TOKEN) {
    oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });
    console.log("Credentials set via refresh token.");
} else {
    console.error("ERROR: No Refresh Token found in environment variables.");
}

export const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export async function getAvailability(dateStr) {
    // Treat dateStr as the target day.
    const timeZone = 'Asia/Jakarta';
    const dateOnly = dateStr.split('T')[0]; // YYYY-MM-DD

    // 1. Query FreeBusy for the whole day in Jakarta Time
    const startOfDay = `${dateOnly}T00:00:00+07:00`;
    const endOfDay = `${dateOnly}T23:59:59+07:00`;

    const response = await calendar.freebusy.query({
        requestBody: {
            timeMin: startOfDay,
            timeMax: endOfDay,
            timeZone: timeZone,
            items: [{ id: 'primary' }]
        }
    });

    const busySlots = response.data.calendars.primary.busy || [];

    // Define working hours (9 AM to 5 PM Jakarta Time)
    const workStart = 9;
    const workEnd = 17;
    const slotDuration = 60; // minutes

    const availableSlots = [];

    for (let hour = workStart; hour < workEnd; hour++) {
        // 2. Construct specific slot times with +07:00 offset
        // Pad hour with leading zero if needed
        const hourStr = hour.toString().padStart(2, '0');
        const slotStartStr = `${dateOnly}T${hourStr}:00:00+07:00`;

        // Calculate end time
        // An easier way is to use timestamps for comparison, but we need the ISO string for the object
        const slotStartDate = new Date(slotStartStr);
        const slotEndDate = new Date(slotStartDate.getTime() + slotDuration * 60000);

        // 3. Check Intersection with Busy Slots
        // We compare using timestamps to be safe across timezones
        const isBusy = busySlots.some(busy => {
            const busyStart = new Date(busy.start).getTime();
            const busyEnd = new Date(busy.end).getTime();
            const currentSlotStart = slotStartDate.getTime();
            const currentSlotEnd = slotEndDate.getTime();

            // Overlap condition: Start < BusyEnd AND End > BusyStart
            return (currentSlotStart < busyEnd && currentSlotEnd > busyStart);
        });

        if (!isBusy) {
            // Format for display (e.g., "09:00 AM")
            // Since we know the hour is 'hour', we can just format it manually or use toLocaleString
            // Using toLocaleTimeString with the known timezone ensures correctness
            const timeString = slotStartDate.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: timeZone
            });
            availableSlots.push(timeString);
        }
    }

    return availableSlots;
}

export async function createCalendarEvent(eventDetails) {
    const { summary, description, startDateTime, endDateTime, meetingLink, attendeeEmail } = eventDetails;

    const event = {
        summary: summary,
        location: meetingLink,
        description: `${description}\n\nJoin Zoom Meeting: ${meetingLink}`,
        start: {
            dateTime: startDateTime,
            timeZone: 'Asia/Jakarta', // Use correct TZ
        },
        end: {
            dateTime: endDateTime,
            timeZone: 'Asia/Jakarta',
        },
        attendees: [
            { email: attendeeEmail }, // The Customer
            { email: 'wallstreetinquries@gmail.com' } // The Host (You)
        ],
    };

    const response = await calendar.events.insert({
        calendarId: 'primary',
        resource: event,
        sendUpdates: 'all',
    });

    console.log("Google Calendar Event Created:", {
        id: response.data.id,
        status: response.data.status,
        htmlLink: response.data.htmlLink,
        attendees: response.data.attendees
    });

    return response.data;
}
