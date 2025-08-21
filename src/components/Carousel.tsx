"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";

// Import CSS de base + modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
    return (
        <div className="carousel">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div
                        className="slide"
                        style={{ backgroundImage: "url('/images/carousel1.png')" }}
                    >
                        <div className="slide-content">
                            <h2>Découvrez Smash Battle !</h2>
                            <p>
                                Basée sur le jeu vidéo Super Smash Bros, Smash Battle est une
                                série animée regroupant de nombreuses références à l'animation
                                japonaise et à plusieurs jeux vidéo.
                            </p>
                            <a href="" rel="">
                                <button>En savoir plus</button>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div
                        className="slide"
                        style={{ backgroundImage: "url('/images/carousel2.png')" }}
                    >
                        <div className="slide-content">
                            <h2>Retrouvez la chaîne YouTube FishyAnimation</h2>
                            <a href="https://www.youtube.com/@Fishy_Animation" target="_blank" rel="noopener noreferrer">
                                <button>Consulter la chaîne</button>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
