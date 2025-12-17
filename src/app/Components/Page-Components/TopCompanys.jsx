'use client'
import React, { useState } from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Title from '../UiUx/Title'
import Image from 'next/image';
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';

export const logos = [
    { id: 1, src: "/images/beatum.webp", alt: "ISO Certified", desc: "10+ Students Recruited" },
    { id: 2, src: "/images/equatis.webp", alt: "Semrush Academy", desc: "6+ Students Recruited" },
    { id: 3, src: "/images/b2b.webp", alt: "Google 5 Star", desc: "30+ Students Recruited" },
    { id: 4, src: "/images/softer.webp", alt: "100% Placement", desc: "12+ Students Recruited" },
    { id: 5, src: "/images/pixa.png", alt: "HubSpot Academy", desc: "4+ Students Recruited" },
    { id: 6, src: "/images/nutrition.webp", alt: "Meta Certification", desc: "6+ Students Recruited" },
    { id: 7, src: "/images/bitpixel.webp", alt: "Facebook Blueprint", desc: "8+ Students Recruited" },
    { id: 8, src: "/images/amr.webp", alt: "Facebook Blueprint", desc: "7+ Students Recruited" },
    { id: 9, src: "/images/arvik.webp", alt: "Facebook Blueprint", desc: "10+ Students Recruited" },
    { id: 10, src: "/images/pal.webp", alt: "Facebook Blueprint", desc: "4+ Students Recruited" },
    { id: 11, src: "/images/weballures.webp", alt: "Facebook Blueprint", desc: "9+ Students Recruited" },
    { id: 12, src: "/images/oryn.webp", alt: "Facebook Blueprint", desc: "11+ Students Recruited" },
    { id: 13, src: "/images/logoxmart.webp", alt: "Facebook Blueprint", desc: "4+ Students Recruited" },
    { id: 14, src: "/images/jaseir.webp", alt: "Facebook Blueprint", desc: "3+ Students Recruited" },
    { id: 15, src: "/images/cyberzenix.webp", alt: "Facebook Blueprint", desc: "5+ Students Recruited" },
];

const TopCompanys = ({ clickscroll }) => {
    const [mobileVisibleCount, setMobileVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setMobileVisibleCount(prev => prev + 4);
    };

    const mobileLogosToShow = logos.slice(0, mobileVisibleCount);

    return (
        <div className='main-bg py-12 md:py-16 '>
            <div className='cus_container'>
                {/* Title */}
                <div className="relative md:pt-5 md:pb-10">

                    <img
                        src={titlewhitebg.src}
                        alt="bubble-bg"
                        className="absolute hidden md:block  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[900px]  sm:w-60 pointer-events-none select-none opacity-90"
                    />

                    <div className="relative z-10 text-center">
                        <Title
                            title={'<span class="text-primary">B2B Campus Programs </span> <br/>  Trained 100+ Learners Through'}
                            text_color={'text-secondary'}
                        />

                    </div>
                </div>

                {/* Cards Section - Desktop */}
                <div className="w-full hidden md:block">
                    <div className="flex flex-wrap justify-center gap-5 px-[5%] mb-[3%]  place-items-center">
                        {logos.map((item) => (
                            <div
                                key={item.id}
                                className="
                                bg-white/80 backdrop-blur-lg 
                                cursor-pointer shadow-md rounded-[25px] 
                                flex flex-col justify-between 
                                w-full sm:w-[48%] md:w-[32%] lg:w-[18%] max-w-[340px] h-[170px] overflow-hidden
                                transition-all duration-300 
                                hover:scale-[1.07] hover:shadow-xl hover:-translate-y-2
                                border border-purple-200/50
                            "
                            >
                                {/* Logo */}
                                <div className="
                                flex items-center justify-center 
                                h-[70%] p-6 
                                transition-all duration-300 
                                hover:scale-110
                            ">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={140}
                                        height={70}
                                        className="
                                        object-contain
                                        transition duration-300 
                                        hover:brightness-110 hover:scale-[1.08]
                                    "
                                    />
                                </div>

                                {/* Description */}
                                <div className="
                                bg-linear-to-r from-[#8c5fef] to-[#7154FF] 
                                text-white text-center 
                                h-[30%] flex items-center justify-center 
                                text-[16px] font-semibold
                                transition-all duration-300 
                                hover:from-[#732dec] hover:to-[#6346FA]
                            ">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cards Section - Mobile with Load More */}
                <div className="md:hidden">
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5 md:px-[5%] mb-[3%] mt-[3%] place-items-center">
                        {mobileLogosToShow.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white/80 backdrop-blur-lg cursor-pointer shadow-md rounded-[25px] flex flex-col justify-between w-[46%] sm:w-[48%] max-w-[340px] h-[170px] overflow-hidden transition-all duration-300 hover:scale-[1.07] hover:shadow-xl hover:-translate-y-2 borderborder-purple-200/50"
                            >
                                <div className="flex items-center justify-center h-[70%] p-6 transition-all duration-300 hover:scale-110">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={140}
                                        height={70}
                                        className="
                                        object-contain
                                        transition duration-300 
                                        hover:brightness-110 hover:scale-[1.08]
                                    "
                                    />
                                </div>
                                <div className="
                                bg-linear-to-r from-[#8c5fef] to-[#7154FF] 
                                text-white text-center 
                                h-[30%] flex items-center justify-center 
                                text-[16px] font-semibold
                                transition-all duration-300 
                                hover:from-[#732dec] hover:to-[#6346FA]
                            ">
                                    {item.desc}
                                </div>
                            </div>
                        ))}
                    </div>

                    {mobileVisibleCount < logos.length && (
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleLoadMore}
                                className="px-6 py-3 rounded-xl bg-[#6346FA] text-white text-[16px] transition-all duration-300 hover:bg-[#4a2fd1]"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>

                {/* Description + Button */}
                <Description
                    description={'Dreaming of your first big placement?'}
                    text_color={'text-secondary'}
                />

                <div className="buttons text-[25px] hidden md:flex justify-center m-auto mt-[2%]" onClick={clickscroll}>
                    <Buttons btnname='Enquire Now' text_color={'text-white'} />
                </div>
            </div>
        </div>
    )
}

export default TopCompanys
