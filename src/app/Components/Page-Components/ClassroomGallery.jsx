"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Title from "../UiUx/Title";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";

const allImages = [
    "/images/classroomGallery1.webp",
    "/images/classroomGallery2.webp",
    "/images/classroomGallery3.webp",
    "/images/classroomGallery4.webp",
    "/images/classroomGallery5.webp",
    "/images/classroomGallery6.webp",
    "/images/classroomGallery7.webp",
    "/images/classroomGallery8.webp",
    "/images/classroomGallery9.webp",
    "/images/classroomGallery10.webp",
    "/images/classroomGallery11.webp",
    "/images/classroomGallery12.webp",
    "/images/classroomGallery13.webp",
];

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function ClassroomGallery() {
    const [galleryImages, setGalleryImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const randomEight = shuffleArray(allImages).slice(0, 8);
        setGalleryImages(randomEight);
    }, []);

    useEffect(() => {
        if (activeIndex !== null && !isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => (document.body.style.overflow = "auto");
    }, [activeIndex, isMobile]);

    const nextImage = () =>
        setActiveIndex((prev) => (prev + 1) % galleryImages.length);

    const prevImage = () =>
        setActiveIndex(
            (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );

    return (
        <section className="bg-[#e9e6ff] py-12">
            <div className="cus_container pb-12">
                <div className="relative pb-4">
                    <Image
                        src={titlewhitebg.src}
                        alt="bubble-bg"
                        width={1000}
                        height={500}
                        className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 w-[480px] md:w-[700px] h-20 opacity-90"
                    />
                    <div className="relative z-10 text-center">
                        <Title
                            title={'<span class="text-primary">B2B Campus </span> Learning Hub'}
                            text_color={"text-secondary"}
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1253px] mx-auto px-4">
                <div
                    className="hidden md:grid gap-4"
                    style={{
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridTemplateRows: "repeat(4, 180px)",
                        gridTemplateAreas: `
              "a a b b"
              "a a c d"
              "e f c d"
              "e f g h"
            `,
                    }}
                >
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            style={{ gridArea: String.fromCharCode(97 + index) }}
                            onClick={() => setActiveIndex(index)}
                            className="relative cursor-pointer rounded-xl overflow-hidden border-2 border-indigo-500"
                        >
                            <Image
                                src={src}
                                alt="B2B Campus Classroom"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-4 md:hidden">
                    {galleryImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative h-[220px] rounded-xl overflow-hidden border-2 border-indigo-500"
                        >
                            <Image src={src} alt="Classroom" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {activeIndex !== null && !isMobile && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
                    <div className="inset-0 z-50 bg-black/80 flex items-center justify-center w-full h-full max-w-[1660px] relative">
                        <button
                            onClick={() => setActiveIndex(null)}
                            className="absolute top-6 right-6 text-white text-4xl font-bold"
                        >
                            ✕
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-6 text-white text-5xl font-bold cursor-pointer"
                        >
                            ‹
                        </button>

                        <div className="relative w-[90%] max-w-4xl h-[80vh]">
                            <Image
                                src={galleryImages[activeIndex]}
                                alt="Popup"
                                fill
                                className="object-contain rounded-xl"
                            />
                        </div>

                        <button
                            onClick={nextImage}
                            className="absolute right-6 text-white text-5xl font-bold cursor-pointer"
                        >
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
