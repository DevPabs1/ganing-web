import dotenv from 'dotenv';
dotenv.config();

export default function handler(req, res) {
    const { GITHUB_CLIENT_ID } = process.env;
    const redirectParams = new URLSearchParams({
        client_id: GITHUB_CLIENT_ID,
        scope: 'read:user repo', // Request repo scope to check permissions
    }).toString();

    res.redirect(`https://github.com/login/oauth/authorize?${redirectParams}`);
}
