import React from 'react'
import Title from '../UiUx/Title'
import Image from 'next/image';
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import hasimg from "../../../../public/images/hasimg.webp"
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';

export const logos = [
    {
        id: 1,
        src: "/images/iso.webp",
        alt: "ISO Certified"
    },
    {
        id: 2,
        src: "/images/semrush.webp",
        alt: "Semrush Academy"
    },
    {
        id: 3,
        src: "/images/google.webp",
        alt: "Google 5 Star"
    },
    {
        id: 4,
        src: "/images/placement.webp",
        alt: "100% Placement"
    },
    {
        id: 5,
        src: "/images/hubspot.webp",
        alt: "HubSpot Academy"
    },
    {
        id: 6,
        src: "/images/meta.webp",
        alt: "Meta Certification"
    },
    {
        id: 7,
        src: "/images/facebook.webp",
        alt: "Facebook Blueprint"
    }
];


const Professionalskill = ({clickscroll}) => {
    return (
        <div className=" pb-6 cus_container"
        >
            <div className="relative flex justify-center items-center">

                {/* Background Image */}
                <Image
                    src={titlewhitebg.src}
                    width={1000}
                    height={500}
                    alt="bg-shape"
                    className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px]  md:w-[756px] sm:w-60 opacity-100 pointer-events-none select-none"
                />

                {/* Title On Top */}
                <div className="relative z-10 text-center">
                    <Title
                        title={'We help students build real <br/> <span class="text-primary">professional skills</span>'}
                        text_color={'text-secondary'}
                    />
                </div>
            </div>


            {/* <div className="  w-full hasimg relative left-[11%] max-w-[118px]">
                <Image
                    src={hasimg}
                    width={1000}
                    height={5000}
                    className='w-full ' />
            </div> */}
            <div className="w-full">
                <div className="grid grid-cols-2 md:flex flex-wrap justify-center gap-[15px] mb-[3%] mt-[3%] place-items-center pt-6">
                    {logos.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white m-0 cursor-pointer rounded-[25px] p-6 flex items-center justify-center border-none w-full max-w-[340px] h-[158px]     md:shadow-md shadow-[0_0_20px_4px_rgba(93,56,222,0.5)] transition-shadow duration-500 ease-in-out hover:shadow-[0_0_20px_4px_rgba(93,56,222,0.5)] hover:animate-pulse hover:-rotate-1 hover:scale-105 will-change-transform"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="buttons text-[25px] md:hidden flex justify-center m-auto mt-[2%]" onClick={clickscroll}>
                <Buttons btnname='Enquire Now' text_color={'text-white'} />
            </div>

        </div>


    )
}

export default Professionalskill
