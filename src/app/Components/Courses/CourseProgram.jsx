import Image from 'next/image';
import React from 'react';
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';
import smallbublebg from "../../../../public/images/smallbublebg.webp";
const CourseProgram = ({ program_data ,title ,description }) => {
    return (
        <div className=''>
            <div className="relative cus_container">
                <div className="relative">
                    <Image
                        src={smallbublebg.src}
                        alt="bubble-bg"
                        width={1000}
                        height={500}
                        className="absolute  top-[31%] left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[700px] h-20 sm:w-60 pointer-events-none select-none opacity-90"
                    />
                    <Title
                        title={title}
                        text_color={"text-secondary relative z-10"}
                    />
                </div>
                <Description
                    description={"What You all Learn"}
                    text_color={"text-secondary"}
                />
                <section className="w-full py-8 md:py-16">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-9">
                        {program_data.map((item, index) =>
                            <div
                                key={index}
                                className="relative flex items-center bg-[#6C47FF] text-white ps-4 py-4 2xl:py-5 rounded-[17px] shadow-sm hover:scale-[1.02] transition-all duration-300 overflow-visible"
                            >
                                <Image
                                    src={item.icon}
                                    alt="check"
                                    width={1000}
                                    height={500}
                                    className="w-[42px] 2xl:w-[50px] h-[42px] 2xl:h-[50px] object-contain absolute left-2 md:-left-5 top-2"
                                />
                                <p className="text-lg 2xl:text-xl font-medium pl-10 md:pl-5">
                                    {item.text}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CourseProgram
