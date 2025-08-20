import "../styles/styles.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Smash Battle",
    description: "Site officiel de la série d'animation 2D Smash Battle",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
        <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
