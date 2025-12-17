import React from 'react'
import Title from '../UiUx/Title'
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import leaf from "../../../../public/images/leaf.webp";
import Certificate from './Certificate';
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';
import Image from 'next/image';
const items = [
    {
        icon: "/images/leaf.webp",
        title: "1500+",
        subtitle: "Learners trained with practical skills",
        icon2: "/images/leaf2.webp"
    },
    {
        icon: "/images/leaf.webp",
        title: "10,000+",
        subtitle: "Hours of real project based learning",
        icon2: "/images/leaf2.webp"
    },
    {
        icon: "/images/leaf.webp",
        title: "12+",
        subtitle: "Industry-focused courses available",
        icon2: "/images/leaf2.webp"
    },
    ,
    {
        icon: "/images/leaf.webp",
        title: "98%",
        subtitle: "Student satisfaction & positive feedback",
        icon2: "/images/leaf2.webp"
    }
];
const CampusProgram = ({ clickscroll }) => {
    return (
        <div className='md:pb-12 pt-12'>
            <div className="cus_container">
                <div className="relative ">
                    <Image
                        src={smallbublebg.src}
                        alt="bubble-bg"
                        width={1000}
                        height={500}
                        className="absolute hidden md:block  top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[900px]  sm:w-60 pointer-events-none select-none opacity-90"
                    />

                    <div className="relative z-10 text-center">
                        <Title
                            title={'<span class="text-primary">B2B Campus Programs </span> <br/>  Trained 100+ Learners Through'}
                            text_color={'text-secondary'}
                        />
                        <Description
                            description={'Helping learners gain the skills, confidence, and direction to <br /> move ahead in their careers.'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>
                <Certificate />
                <div className="buttons text-[25px] flex justify-center m-auto  py-4" onClick={clickscroll}>
                    <Buttons btnname='Get Skilled with B2B Campus' text_color={'text-white'} />
                </div>
            </div>
        </div>
    )
}

export default CampusProgram

