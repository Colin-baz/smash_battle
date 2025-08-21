"use client";

interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
}

export default function VideoGrid({ videos }: { videos: Video[] }) {
    return (
        <div className="video-grid">
            {videos.map((video) => (
                <div key={video.id} className="video-card">
                    <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                        <img src={video.thumbnail} alt={video.title} />
                    </a>
                    <h3>{video.title}</h3>
                    <p className="video-description">
                        {video.description.length > 150
                            ? video.description.slice(0, 150) + "..."
                            : video.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
