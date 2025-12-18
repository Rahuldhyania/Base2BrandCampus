import Image from 'next/image'
import React from 'react'
import Title from '../UiUx/Title'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Description from '../UiUx/Description';

const classskill = [
    {
        icon: '/icons/Orientation.svg',
        title: 'Orientation'
    },
    {
        icon: '/icons/laptop.svg',
        title: 'Practical Learning'
    },
        {
        icon: '/icons/msg.svg',
        title: 'Doubt Clearing Sessions'
    },
        {
        icon: '/icons/assignment.svg',
        title: 'Assignments'
    },
        {
        icon: '/icons/casestudy.svg',
        title: 'Case Studies'
    },
        {
        icon: '/icons/internship.svg',
        title: 'Internship'
    },
        {
        icon: '/icons/Placements.svg',
        title: 'Placements'
    },
        {
        icon: '/icons/feedback.svg',
        title: 'Feedback'
    },
        {
        icon: '/icons/Convocation.svg',
        title: 'Convocation'
    },
]
const ClassroomSkills = () => {
    return (
        <div className=''>
            <div className="cus_container py-12 md:py-16">
                <div>
                    <div className="relative">
                        <Image
                            src={titlewhitebg.src}
                            width={1000}
                            height={500}
                            alt="bubble-bg"
                            className="absolute hidden md:block -bottom-8 left-1/2 -translate-x-1/2 w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                        />

                        <div className="relative z-10 text-center">
                            <Title
                                title={'The Journey from B2B Campus Classroom <br/> <span class="text-primary"> Skills to Career Success </span> '}
                                text_color={'text-secondary'}
                            />
                        </div>
                    </div>
                    <div className='z-10 relative'>
                        <Description
                            description={'A Journy of Excellence & Placements'}
                            text_color={'text-black'}
                        />
                    </div>
                </div>
                <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        classskill.map((data, index) => (
                            <div key={index} className='flex items-center gap-2 bg-white py-4 2xl:py-5 px-6 2xl:px-8 shadow-lg rounded-2xl'>
                                <Image
                                    src={data.icon}
                                    alt=''
                                    width={1000}
                                    height={500}
                                    className='max-w-[45px] 2xl:max-w-[55px]'
                                />
                                <p className='text-lg 2xl:text-xl font-semibold'>
                                    {data.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ClassroomSkills
