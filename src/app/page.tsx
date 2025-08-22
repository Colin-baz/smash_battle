import Carousel from "@/components/Carousel";
import LatestVideos from "@/components/LatestVideos";
import InfoSection from "@/components/InfoSection";

export default function HomePage() {
    return (
        <main>
            <Carousel />
            <LatestVideos />
            <InfoSection />
        </main>
    );
}

