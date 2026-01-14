import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
    const { code } = req.query;
    const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

    if (!code) {
        return res.status(400).send('No code provided');
    }

    try {
        // 1. Exchange code for access token
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

        if (!accessToken) {
            throw new Error('Failed to obtain access token');
        }

        // 2. Verify user and permissions
        // First get the user to know who they are
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: { Authorization: `token ${accessToken}` },
        });

        const username = userResponse.data.login;

        // 3. Check permissions on the specific repo
        // Note: User must be a collaborator to see this if it's private, 
        // or just checking permissions field if public.
        const repoResponse = await axios.get(
            'https://api.github.com/repos/DevPabs1/ganing-web',
            {
                headers: { Authorization: `token ${accessToken}` },
            }
        );

        const permissions = repoResponse.data.permissions;

        // Check if user has push or admin rights
        if (permissions && (permissions.push || permissions.admin)) {
            // Success! Redirect to frontend with token
            // In a real app, you'd create your own JWT here. 
            // For this simple restriction, we'll pass a flag/token back to frontend.
            res.redirect(`/?token=${accessToken}&username=${username}`);
        } else {
            res.redirect('/login?error=access_denied');
        }

    } catch (error) {
        console.error('GitHub Auth Error:', error.response?.data || error.message);
        res.redirect('/login?error=auth_failed');
    }
}
