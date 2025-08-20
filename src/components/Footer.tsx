import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <Link href="/">
                        <Image src="/logo_blanc.png" alt="Smash Battle Logo" width={230} height={100}/>
                    </Link>
                </div>
                <ul className="footer-socials">
                    <h2>Réseaux Sociaux</h2>
                    <li><Link href="https://">YouTube</Link></li>
                    <li><Link href="https://">Instagram</Link></li>
                    <li><Link href="https://">TikTok</Link></li>
                </ul>
                <ul className="footer-navigation">
                    <h2>Navigation</h2>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/episodes">Épisodes</Link></li>
                    <li><Link href="/personnages">Personnages</Link></li>
                    <li><Link href="/informations">Informations</Link></li>
                </ul>
                <ul className="footer-links">
                    <h2>Informations supplémentaires</h2>
                    <li><Link href="/mentions-legales">Mentions légales</Link></li>
                    <li><Link href="/sources">Sources</Link></li>
                </ul>
            </div>
            <p>© 2025 Smash Battle. Tous droits réservés.</p>
        </footer>
    );
}
