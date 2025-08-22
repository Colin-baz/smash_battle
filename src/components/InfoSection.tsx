"use client";

import Image from "next/image";
import Link from "next/link";

export default function InfoSection() {
    return (
        <section className="info-section">
            <div className="info-image">
                <Image src="/images/info_section.png" alt="Illustration section info" width={500} height={300}/>
            </div>

            <div className="info-content">
                <h2>À propos de Smash Battle</h2>
                <p>
                    Smash Battle est une série d’animation inspirée de l’univers de Super
                    Smash Bros, mêlant des références à la pop culture, aux jeux vidéo et
                    à l’animation japonaise.
                </p>
                <Link href="/informations">
                    <button className="info-button">En savoir plus</button>
                </Link>
            </div>
        </section>
    );
}
