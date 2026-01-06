import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const ZOOM_ACCOUNT_ID = process.env.ZOOM_ACCOUNT_ID;
const ZOOM_CLIENT_ID = process.env.ZOOM_CLIENT_ID;
const ZOOM_CLIENT_SECRET = process.env.ZOOM_CLIENT_SECRET;

export async function getZoomAccessToken() {
    try {
        const credentials = Buffer.from(`${ZOOM_CLIENT_ID}:${ZOOM_CLIENT_SECRET}`).toString('base64');
        const response = await axios.post('https://zoom.us/oauth/token', null, {
            params: {
                grant_type: 'account_credentials',
                account_id: ZOOM_ACCOUNT_ID
            },
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        });
        return response.data.access_token;
    } catch (error) {
        console.error('Error getting Zoom token:', error.response?.data || error.message);
        throw error;
    }
}

export async function createMeeting(topic, startTime) {
    const token = await getZoomAccessToken();

    try {
        const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', {
            topic: topic,
            type: 2, // Scheduled meeting
            start_time: startTime,
            duration: 60, // 1 hour default
            timezone: 'UTC'
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data.join_url;
    } catch (error) {
        console.error('Error creating Zoom meeting:', error.response?.data || error.message);
        throw error;
    }
}
