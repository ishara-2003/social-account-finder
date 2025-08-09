export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { code } = req.query;
            // Exchange code for access token
            const response = await fetch(`https://graph.facebook.com/v17.0/oauth/access_token?client_id=YOUR_META_APP_ID&client_secret=YOUR_META_APP_SECRET&code=${code}&redirect_uri=${encodeURIComponent('YOUR_REDIRECT_URI')}`);
            const data = await response.json();
            // Store access token securely (e.g., in session or database)
            res.redirect('/?integrated=true');
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
