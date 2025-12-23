import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from '../UiUx/Title';
import Image from 'next/image';
import Description from '../UiUx/Description';

const industrialdata = [
    {
        icon: '/icons/book.svg',
        title: 'Practical Learning',
        description: 'Learn by doing, not just reading'
    },
    {
        icon: '/icons/medal.svg',
        title: 'Career Ready',
        description: 'Build skills employers actually need'
    },
    {
        icon: '/icons/bag.svg',
        title: 'Industry Exposure',
        description: 'Work on real-world projects and scenarios'
    },
]
const WhatIndustrial = () => {
    return (
        <div className='cus_container'>
            <div>
                <div className="relative py-3">
                    <Image
                        src={titlewhitebg.src}
                        alt="bubble-bg"
                        width={1000}
                        height={500}
                        className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                    />

                    <div className="relative z-10 text-center md:pt-5">
                        <Title
                            title={'<span class="text-primary"> Why Choose </span> Our Institute'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>
                <Description
                    description={'B2B Campus industrial training offers hands-on experience, real tools, <br/> and job-ready skills for a strong career start'}
                    text_color={'text-black'}
                />
            </div>
            <div className=' py-12 md:py-16  max-w-[85%] m-auto'>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Image
                            src={'/images/WhatIndustrialleft.webp'}
                            alt=''
                            width={1000}
                            height={500}
                            className='max-w-[90%]'
                        />

                        <div>
                           <p className=''>100%</p>  
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='space-y-6 w-full'>
                            {industrialdata.map((data, index) => (
                                <div className='flex p-4 bg-white gap-6 rounded-2xl' key={index}>
                                    <div className='bg-[#E4E0FC] flex justify-center items-center rounded-[50%] w-[61px] h-[61px]'>
                                        <Image
                                            src={data.icon}
                                            alt='icon'
                                            width={1000}
                                            height={500}
                                            className='max-w-8'
                                        />
                                    </div>
                                    <div>
                                     <p className='text-primary text-2xl font-semibold'>
                                        {data.title}
                                     </p>
                                     <span className='text-[17px] text-secondary'>
                                        {data.description}
                                     </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIndustrial
