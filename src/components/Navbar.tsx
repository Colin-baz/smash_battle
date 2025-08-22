import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="header">
            <div className="logo">
                <Link href="/">
                    <Image src="/logo_blanc.png" alt="Smash Battle Logo" width={120} height={50} />
                </Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link href="/">Accueil</Link></li>
                    <li><Link href="/episodes">Épisodes</Link></li>
                    <li><Link href="/informations">Informations</Link></li>
                </ul>
            </nav>
        </header>
    );
}
