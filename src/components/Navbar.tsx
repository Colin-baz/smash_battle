import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo">
                <Link href="/">
                    <Image src="/logo_blanc.png" alt="Smash Battle Logo" width={120} height={50}/>
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/episodes">Épisodes</Link></li>
                    <li><Link href="/informations">Informations</Link></li>
                </ul>
            </nav>
            <div className="socials">
                <a href="https://www.youtube.com/@Fishy_Animation" target="_blank" rel="noopener noreferrer">
                    <button className="buttons" >Consulter la chaîne</button>
                </a>
                <div className="social-icons">
                    <a href="https://www.tiktok.com/@fishy_animation" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/tik-tok.png" alt="Tiktok Icon" width={48} height={48}/>
                    </a>
                    <a href="https://www.instagram.com/fishyanimation/" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/instagram.png" alt="Instagram Icon" width={48} height={48}/>
                    </a>
                </div>
            </div>
        </header>
    );
}
