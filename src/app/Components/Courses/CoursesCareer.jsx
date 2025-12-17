import Image from "next/image";
import React from "react";
import Description from "../UiUx/Description";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from "../UiUx/Title";
import Buttons from "../UiUx/Buttons";
const CoursesCareer = ({ items, featuresMain ,title ,description,left_banner ,max_width}) => {
    return (
        <div className="main-bg py-12 md:py-18">
            <section className="cus_container m-auto">
                <div className=" px-6 py-3 border-none rounded-[50px] bg-[#FFFFFF] grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {items.map((item, index) =>
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center justify-center group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-float p-1.5 rounded-[19px] gap-6 cursor-pointer"
                        >
                            <div className="wrap-div flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-center sm:text-left">
                                <div className="bg-[#DDD7FF] flex justify-center items-center rounded-[50px] p-2  transition-all duration-300 hover:scale-110">
                                    <Image
                                        src={item.icon}
                                        alt="icon"
                                        width={1000}
                                        height={500}
                                        className="w-8 h-8 md:w-[45px] md:h-[45px] object-contain p-2"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-[#6346FA] text-[22px]  md:text-[30px] lg:text-[31px] transition-all duration-300 group-hover:text-purple-600">
                                        {item.title}
                                    </h3>
                                    <p className="text-[14px] md:text-[15px] lg:text-[18px] transition-all duration-300 group-hover:text-gray-700">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pt-12">
                    <div className="relative flex justify-center items-center">
                        <Image
                            src={titlewhitebg.src}
                            width={1000}
                            height={500}
                            alt="bg-shape"
                            className="absolute hidden md:block top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-60 opacity-100 pointer-events-none select-none"
                        />

                        <div className="relative z-10 text-center">
                            <Title
                                title={title}
                                text_color={"text-secondary"}
                            />
                            <div className="pt-3">
                                <Description
                                    description={description}
                                    text_color={"text-secondary"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] md:pt-12">
                        <div className="boy relative w-full  hidden md:block">
                            <Image
                                src={left_banner}
                                width={1000}
                                height={500}
                                alt="boy"
                                className={`mx-auto relative top-1.5 md:top-0 ${max_width ? max_width : ''}`}
                            />
                        </div>
                        <section className="flex items-center pt-6 lg:pt-0">
                            <div>
                                <div className="max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {featuresMain.map((item, index) =>
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className=" items-start gap-4">
                                                <div className="flex justify-start items-center pb-3 rounded-xl">
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        width={1000}
                                                        height={500}
                                                        className="h-[46px] w-[46px] object-contain"
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="text-[#4A38F4] font-semibold text-xl leading-tight pb-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-[15px] 2xl:text-[17px] md:w-[85%] mt-1 leading-snug">
                                                        {item.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="max-w-[95%] mx-auto grid md:grid-cols-2 w-full gap-2 md:gap-6 pt-6">
                                    <div>
                                        <Buttons
                                            btnname={'Start Your Training This Week'}
                                            text_color={'text-white'}
                                        />
                                    </div>
                                    <div>
                                        <Buttons
                                            btnname={'Download Course PDF'}
                                            text_color={'text-white'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CoursesCareer;
