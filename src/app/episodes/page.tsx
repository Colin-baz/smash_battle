"use client";

import { useEffect, useState } from "react";

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
}

// Liste des vidéos "épisodes" (IDs YouTube à remplir)
const EPISODE_IDS = [
    "sQDDJvLPVNM",
    "KR6Maa6Vy7w",
    "stWV2qNWemA",
    "7XOxR2xtrsY",
    "nvRvDYkGKLk"
];

export default function EpisodesPage() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState<"asc" | "desc">("desc");

    useEffect(() => {
        const fetchData = async () => {
            const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
            const ids = EPISODE_IDS.join(",");
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${ids}&key=${key}`
                );
                const data = await res.json();

                const items = data.items.map((item: any) => ({
                    id: item.id,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.high.url,
                    publishedAt: item.snippet.publishedAt,
                }));

                setVideos(items);
            } catch (err) {
                console.error("Erreur API YouTube", err);
            }
        };

        fetchData();
    }, []);

    // 🔎 Recherche + tri
    const filteredVideos = videos
        .filter((video) =>
            search ? video.title.toLowerCase().includes(search.toLowerCase()) : true
        )
        .sort((a, b) =>
            order === "asc"
                ? new Date(a.publishedAt).getTime() -
                new Date(b.publishedAt).getTime()
                : new Date(b.publishedAt).getTime() -
                new Date(a.publishedAt).getTime()
        );

    return (
        <div className="episodes-page">
            <h1>Épisodes Smash Battle</h1>

            <div className="controls">
                <input type="text" placeholder="Rechercher une vidéo..." value={search} onChange={(e) => setSearch(e.target.value)}/>

                <div className="order">
                    <button className={order === "desc" ? "active" : ""} onClick={() => setOrder("desc")}>Plus récents</button>
                    <button className={order === "asc" ? "active" : ""} onClick={() => setOrder("asc")}>Plus anciens</button>
                </div>
            </div>

            <div className="video-grid">
                {filteredVideos.map((video) => (
                    <div key={video.id} className="video-card">
                        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                            <img src={video.thumbnail} alt={video.title}/>
                        </a>
                        <h3>{video.title}</h3>
                        <p>{video.description.slice(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
