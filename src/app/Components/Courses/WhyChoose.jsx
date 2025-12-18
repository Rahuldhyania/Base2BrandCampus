import React from 'react';
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';
import circleBg from "../../../../public/images/circlebg.webp";
import smallbublebg from "../../../../public/images/smallbublebg.webp"
import Image from 'next/image';
import profile from "../../../../public/images/profile.webp";
import start from "../../../../public/icons/star.svg";
import Buttons from '../UiUx/Buttons';
const WhyChoose = ({ featuresNumbered }) => {
    return (
        <div>
            <section className="cus_container py-12">

                <div className="relative pb-4">

                    <Image
                        src={smallbublebg.src}
                        alt="bubble-bg"
                        width={1000}
                        height={500}
                        className="absolute  hidden md:block  top-[31%] left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[700px] h-20 sm:w-60 pointer-events-none select-none opacity-90"
                    />

                    <div className="relative z-10 text-center">
                        <Title
                            title={'<span class="text-primary">Why Choose Our Institute?</span> <br/>'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>

                <div className=" mx-auto md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresNumbered.map(({ id, number, title, description }) => (
                        <div
                            key={id}
                            className="relative bg-[#6346FA] rounded-2xl p-6 text-white overflow-hidden"
                            style={{ minHeight: '180px' }}
                        >
                            <div className="absolute inset-0 pointer-events-none">
                                <Image
                                    src={circleBg}
                                    alt="circle-bg"
                                    fill
                                    className="object-cover opacity-100"
                                />
                            </div>
                            <div className="text-2xl w-[55px] h-[55px] bg-white rounded-full flex justify-center items-center text-black font-bold mb-4 relative z-10">
                                {number}
                            </div>
                            <h3 className="text-lg 2xl:text-2xl  mb-2 relative z-10">{title}</h3>
                            <p className="text-sm 2xl:text-[17px] md:w-[85%] leading-relaxed relative z-10">{description}</p>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center flex-col lg:flex-row gap-4 lg:gap-10 pt-4'>
                    <div className='flex items-center gap-5'>
                        <Image
                            src={profile.src}
                            alt='profile'
                            width={2000}
                            height={500}
                            className='max-w-[120px] md:max-w-[170px]'
                        />
                        <div>
                            <div className='flex'>
                                {
                                    [start, start, start, start, start].map((data, index) => (
                                        <Image
                                            src={data}
                                            alt='start'
                                            width={1000}
                                            height={500}
                                            className='max-w-6'
                                            key={index}
                                        />
                                    ))
                                }
                            </div>
                            <div>
                                <p className='text-base md:text-xl'>
                                    Rated <span className='text-primary'>4.9/5</span> by <span className='text-primary'>1254+ Students</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Buttons
                            btnname={'Start Learning Now'}
                            text_color={'text-white'}
                        />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default WhyChoose
