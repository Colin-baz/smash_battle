"use client";

import { useEffect, useState } from "react";
import VideoGrid from "@/components/VideoGrid";

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
}

const FEATURED_IDS = [
    "nvRvDYkGKLk",
    "7XOxR2xtrsY",
    "stWV2qNWemA",
];

export default function FeaturedVideos() {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
            const ids = FEATURED_IDS.join(",");
            try {
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${ids}&key=${key}`
                );
                const data = await res.json();
                const items = data.items.map((item: any) => ({
                    id: item.id,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.high.url,
                }));
                setVideos(items);
            } catch (err) {
                console.error("Erreur récupération vidéos mises en avant :", err);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="latest-videos">
            <h2>Derniers épisodes sortis</h2>
            <VideoGrid videos={videos} />
        </section>
    );
}
