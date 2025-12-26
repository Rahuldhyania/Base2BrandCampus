import Image from "next/image";
import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Buttons from "../UiUx/Buttons";
const CerticateIndus = ({ scrollclick }) => {
    return (
        <div className="main-bg">
            <div className="cus_container py-12 md:p-16">
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
                                title={
                                    '<span class="text-primary"> Get Certified by </span>  B2B Campus'
                                }
                                text_color={"text-secondary"}
                            />
                        </div>
                    </div>
                    <Description
                        description={
                            "Receive a certified Industrial Training credential from B2B Campus."
                        }
                        text_color={"text-black relative z-10"}
                    />
                </div>
                <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_4fr_2fr] gap-4">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 bg-primary py-3 px-4 rounded-2xl">
                            <Image
                                src={'/icons/whitetick.svg'}
                                alt=""
                                width={1000}
                                height={500}
                                className="max-w-5"
                            />
                            <span className="text-white text-base md:text-xl">
                                Verified by industry partners
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-primary py-3 px-4 rounded-2xl mt-4">
                            <Image
                                src={'/icons/whitetick.svg'}
                                alt=""
                                width={1000}
                                height={500}
                                className="max-w-5"
                            />
                            <span className="text-white text-base md:text-xl">
                                Verified by industry partners
                            </span>
                        </div>
                    </div>

                    <div>
                        <Image
                            src={'/images/certificate.png'}
                            alt=""
                            width={1000}
                            height={500}
                            className=""
                        />

                        <div className="flex justify-center pt-6 w-fit m-auto " onClick={scrollclick}>
                            <Buttons
                                btnname={'Join Now'}
                                text_color={'text-white'}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-2 bg-primary py-3 px-4 rounded-2xl">
                            <Image
                                src={'/icons/whitetick.svg'}
                                alt=""
                                width={1000}
                                height={500}
                                className="max-w-5"
                            />
                            <span className="text-white text-base md:text-xl">
                                Verified by industry partners
                            </span>
                        </div>
                        <div className="flex items-center gap-2 bg-primary py-3 px-4 rounded-2xl mt-4">
                            <Image
                                src={'/icons/whitetick.svg'}
                                alt=""
                                width={1000}
                                height={500}
                                className="max-w-5"
                            />
                            <span className="text-white text-base md:text-xl">
                                Verified by industry partners
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CerticateIndus;
