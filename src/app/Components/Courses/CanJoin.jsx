import React from 'react';
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import coathcing from "../../../../public/images/coathcing.webp"
import Image from 'next/image';
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';
import Professionalskill from '../Page-Components/Professionalskill';
const CanJoin = ({ conjoin_data }) => {
    return (
        <div>
            <section className='py-12 cus_container'>
                <div className="relative  justify-center items-center">
                    <div className="relative z-10 text-center">
                        <Title
                            title={'<span class="text-primary"> Who Can Join</span>'}
                            text_color={'text-secondary relative z-10'}
                        />
                        <Image
                            src={titlewhitebg.src}
                            width={1000}
                            height={500}
                            alt="bg-shape"
                            className="absolute  hidden md:block top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-60 opacity-100 pointer-events-none select-none"
                        />
                    </div>
                    <div className='md:pt-6'>
                        <Description
                            description={'Perfect for beginners & career changers.'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 md:pt-12 gap-6 md:gap-14 lg:gap-20">
                    <div className="boy relative w-full">
                        <Image
                            src={coathcing}
                            width={1000}
                            height={500}
                            alt="boy"
                            className=" mx-auto"
                        />
                    </div>
                    <section className="flex items-center">
                        <div className='w-full'>
                            <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">

                                {conjoin_data.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex items-center bg-white text-black px-6 py-4 rounded-[17px] shadow-sm hover:scale-[1.02] transition-all duration-300 overflow-visible ${index === 4 ? 'sm:col-span-2' : ''}`}
                                    >
                                        <Image
                                            src={item.icon}
                                            width={1000}
                                            height={500}
                                            alt="check"
                                            className="w-[38px] md:w-[45px] h-[38px] md:h-[45px] 2xl:w-[55px] 2xl:h-[55px] object-contain absolute left-2 md:-left-4 
                                            top-2 md:top-0"
                                        />
                                        <p className="text-lg 2xl:text-xl font-medium pl-10 md:pl-5">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}

                            </div>
                            <div className="buttons text-[25px] flex justify-center md:justify-start m-auto sm:mb-0 pt-6 md:pt-12">
                                <Buttons btnname=' Book Your Seats Now' text_color={'text-white'} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Professionalskill/>
        </div>
    )
}

export default CanJoin
