const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

export async function getLatestVideos(maxResults = 3) {
    if (!API_KEY || !CHANNEL_ID) {
        throw new Error("l'API ou l'identifiant de la chaîne YouTube n'est pas configuré dans le .env.local");
    }

    const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}`
    );

    if (!res.ok) {
        throw new Error("Impossible de charger les vidéos YouTube");
    }

    return res.json();
}
