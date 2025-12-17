"use client";

import Image from "next/image";
import trainerImg from "../../../../public/images/trainerImg.webp";
import trainingImg from "../../../../public/images/training.webp";
import supportImg from "../../../../public/images/support.webp";
import successImg from "../../../../public/images/success.webp";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from "../UiUx/Title";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const features = [
    {
        title: "Expert Trainers",
        description: "Reliable, experienced trainers guiding you throughout your journey.",
        img: trainerImg,
        variant: "A",
    },
    {
        title: "Hands-on Training",
        description: "100% practical, skill-based training designed for real jobs.",
        img: trainingImg,
        variant: "B",
    },
    {
        title: "Career Support",
        description: "Placement focused training with interview prep and life-changing support.",
        img: supportImg,
        variant: "C",
    },
    {
        title: "Success Focused",
        description: "We train for real success, not just certificates.",
        img: successImg,
        variant: "D",
    },

];

export default function WhyChooseSection() {
    return (
        <div className="pb-6 md:pb-16">
            <section className="md:pt-6 cus_container ">
                <div className="relative py-3">
                    <img
                        src={titlewhitebg.src}
                        alt="bubble-bg"
                        className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                    />

                    <div className="relative z-10 text-center md:pt-5 pb-4 md:pb-12">
                        <Title
                            title={'<span class="text-primary"> Why Choose </span> Our Institute'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <div className="" key={idx}>
                            <Card {...feature} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

function Card({ title, description, img, variant }) {
    switch (variant) {
        case "A":
            return (
                <div className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg 
                transition-all hover:-translate-y-2 hover:shadow-2xl mb-4  m-auto">
                    <div className="w-full h-72 overflow-hidden relative">
                        <Image src={img} alt={title} fill className="object-cover" />
                    </div>
                    <div className="p-6 bg-white">
                        <h3 className="text-[22px] 2xl:text-[26px] font-bold text-purple-700 mb-2 ">{title}</h3>
                        <p className=" text-gray-700 text-[17px]">{description}</p>
                    </div>
                </div>
            );

        case "B":
            return (
                <div className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg 
                transition-transform duration-500 hover:scale-105 h-86 m-auto">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center 
                    bg-black/30 group-hover:bg-black/20 transition-colors duration-300 px-4">
                        <h3 className="text-2xl font-extrabold text-white mb-2">{title}</h3>
                        <p className="text-white max-w-xs">{description}</p>
                    </div>
                </div>
            );

        case "C":
            return (
                <div className="relative cursor-pointer group overflow-hidden rounded-3xl shadow-lg 
                transition-all hover:-translate-y-2 hover:shadow-2xl mb-4 m-auto">
                    <div className="w-full h-72 overflow-hidden relative">
                        <Image src={img} alt={title} fill className="object-cover" />
                    </div>
                    <div className="p-6 bg-white">
                        <h3 className="text-[22px] 2xl:text-[26px] font-bold text-purple-700 mb-2 ">{title}</h3>
                        <p className=" text-gray-700 text-[17px]">{description}</p>
                    </div>
                </div>
            );

        case "D":
            return (
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg group cursor-pointer m-auto">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className="object-cover brightness-75 group-hover:brightness-90 
                        transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-black/20 
                    flex flex-col justify-center items-center text-center px-4">
                        <h3 className="text-3xl font-extrabold text-white mb-3 drop-shadow-lg">
                            {title}
                        </h3>
                        <p className="text-white max-w-xs drop-shadow-md">{description}</p>
                    </div>
                </div>
            );

        default:
            return null;
    }
}
