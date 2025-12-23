'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Title from '../UiUx/Title'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Description from '../UiUx/Description';

import coathcing from "../../../../public/images/coathcing.webp";
import coathcing2 from "../../../../public/images/coathcing2.webp";
import coathcing3 from "../../../../public/images/coathcing3.webp";
import coathcing4 from "../../../../public/images/coathcing4.webp";
import coathcing5 from "../../../../public/images/coathcing5.webp";
import coathcing6 from "../../../../public/images/coathcing6.webp";
import coathcing8 from "../../../../public/images/coathcing8.webp";
import coathcing9 from "../../../../public/images/coathcing9.webp";
import coathcing10 from "../../../../public/images/coathcing10.webp";
import coathcing11 from "../../../../public/images/coathcing11.webp";
const coachingImages = [
    coathcing,
    coathcing2,
    coathcing3,
    coathcing4,
    coathcing5,
    coathcing6,
    coathcing8,
    coathcing9,
    coathcing10,
    coathcing11,
];
const featuresData = [
    "Hands-on practical training with real industry tools",
    "Work on live industry projects from day one",
    "Industry-standard tools & workflows",
    "Build a professional portfolio that stands out",
];

const Whatyoulearn = () => {
    const [randomImage, setRandomImage] = useState(null);
    useEffect(() => {
        const lastIndex = localStorage.getItem("lastCoachingImage");

        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * coachingImages.length);
        } while (newIndex === Number(lastIndex));

        localStorage.setItem("lastCoachingImage", newIndex);
        setRandomImage(coachingImages[newIndex]);
    }, []);
    return (
        <div className='main-bg'>
            <div className="cus_container py-12 md:py-16">
                <div className="text-center">
                    <div className="relative py-3">
                        <Image
                            src={titlewhitebg.src}
                            alt="bubble-bg"
                            width={1000}
                            height={500}
                            className="absolute hidden md:block -bottom-5 left-1/2 -translate-x-1/2 w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                        />

                        <div className="relative z-10 text-center md:pt-5">
                            <Title
                                title={'<span class="text-primary"> Why Choose </span> Our Institute'}
                                text_color={'text-secondary'}
                            />
                        </div>
                    </div>
                    <Description
                        description={'Our comprehensive training program is designed to make you industry-ready'}
                        text_color={'text-black relative z-10'}
                    />
                </div>

                <div className="pt-12 grid-cols-1 lg:grid grid-cols-2">
                    <div>
                        {randomImage && (
                            <Image
                                src={randomImage}
                                width={1000}
                                height={500}
                                alt="coaching"
                                className="max-w-[90%] mx-auto"
                                priority
                            />
                        )}
                    </div>

                    <div className='flex items-center pt-6 md:pt-0'>
                        <div className='md:max-w-[85%] w-full m-auto space-y-6'>
                            {
                                featuresData.map((data, index) => (
                                    <div className='py-5 px-4 bg-white w-full rounded-lg' key={index}>
                                        <div className='flex items-center gap-3'>
                                            <Image
                                                src={'/icons/greentick.svg'}
                                                alt=''
                                                width={1000}
                                                height={500}
                                                className='max-w-7'
                                            />
                                            <span className='text-xl'>
                                                {data}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whatyoulearn
