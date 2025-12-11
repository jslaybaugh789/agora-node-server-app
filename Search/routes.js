import { google } from 'googleapis';

export default function YoutubeRoutes(app, API_KEY) {
    const ytAPI = google.youtube({
        version: "v3",
        auth: API_KEY
    });
    const searchYoutube = async (req, res) => {
        const results = await ytAPI.search.list({
            part: "snippet",
            q: req.body.query,
            type: "video"
        })
        res.json(results);
    }
    const getVideoById = async (req, res) => {
        const results = await ytAPI.videos.list({
            part: "snippet",
            id: req.params.videoId
        })
        res.json(results);
    }
    app.post("/api/search", searchYoutube);
    app.get("/api/search/:videoId", getVideoById);
}