# How to Get Your API Credentials

I (the AI) cannot generate these keys for you because they require logging into your private Google and Zoom accounts. You must generate them yourself.

Follow these steps carefully.

## Part 1: Google Calendar API

1.  **Go to Google Cloud Console:**
    *   Open [console.cloud.google.com](https://console.cloud.google.com/).
    *   Create a **New Project** (name it "Ganing Web").

2.  **Enable the API:**
    *   In the search bar at the top, type "Google Calendar API".
    *   Click on it and click **Enable**.

3.  **Configure Consent Screen:**
    *   Go to **APIs & Services** > **OAuth consent screen**.
    *   Choose **External** -> Create.
    *   Fill in App Name ("Ganing Booking") and User Support Email.
    *   Skip "Scopes" (or add `./auth/calendar`).
    *   Add your own email to **Test Users**. (CRITICAL: If you don't do this, it won't work).

4.  **Create Credentials:**
    *   Go to **Credentials** (left sidebar).
    *   Click **Create Credentials** > **OAuth client ID**.
    *   Application type: **Web application**.
    *   **Authorized redirect URIs**: Add `https://developers.google.com/oauthplayground` (We will use this to get the refresh token easily).
    *   Click **Create**.
    *   **COPY** the `Client ID` "YOUR_CLIENT_ID" and `Client Secret` "YOUR_CLIENT_SECRET".

5.  **Get the Refresh Token (The Tricky Part):**
    *   Go to [Google OAuth Playground](https://developers.google.com/oauthplayground).
    *   Click the **Gear Icon** (top right). Check "Use your own OAuth credentials". Paste your Client ID and Secret.
    *   In the left list, find "Google Calendar API v3" and select `https://www.googleapis.com/auth/calendar`.
    *   Click **Authorize APIs**. Login with your Google Account.
    *   Click **Exchange authorization code for tokens**.
    *   **COPY** the `Refresh Token`. YOUR_REFRESH_TOKEN

## Part 2: Zoom API

1.  **Go to Zoom Marketplace:**
    *   Open [marketplace.zoom.us](https://marketplace.zoom.us/).
    *   Sign in.
    *   Click **Develop** (top right) > **Build App**.

2.  **Create Server-to-Server OAuth App:**
    *   Find **Server-to-Server OAuth** and click **Create**.
    *   Name it "Ganing Web".

3.  **Get Credentials:**
    *   You will immediately see **Account ID**, **Client ID**, and **Client Secret**.
    *   **COPY** these.

4.  **Add Scopes:**
    *   Go to the **Scopes** tab.
    *   Click **+ Add Scopes**.
    *   Select **Meeting** -> check `meeting:write:admin` or `meeting:write:meeting`.
    *   Click **Done**.

## Part 3: Update Your Project

1.  Rename `.env.example` to `.env` in your `Ganing Web` folder.
2.  Paste the keys you copied into the file:

```env
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
GOOGLE_REFRESH_TOKEN=YOUR_GOOGLE_REFRESH_TOKEN

ZOOM_ACCOUNT_ID=YOUR_ZOOM_ACCOUNT_ID
ZOOM_CLIENT_ID=YOUR_ZOOM_CLIENT_ID
ZOOM_CLIENT_SECRET=YOUR_ZOOM_CLIENT_SECRET
```

3.  Restart the backend:
    *   Press `Ctrl+C` to stop the current server.
    *   Run `node server/index.js` again.
