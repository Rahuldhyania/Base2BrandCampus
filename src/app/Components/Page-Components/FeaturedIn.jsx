import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import scoopearth from "../../../../public/images/scoopearth.webp"
import Newsbrak from "../../../../public/images/Newsbrak.webp"
import publicist from "../../../../public/images/publicist.webp"
import timebussines from "../../../../public/images/timebussines.webp"
import Title from '../UiUx/Title'
import Image from 'next/image'
import Description from '../UiUx/Description'
import Link from 'next/link'
import Buttons from '../UiUx/Buttons'

const FeaturedIn = ({clickscroll}) => {
    return (
        <div className='main-bg py-12 md:py-16'>
            <div className="cus_container">
                <div className="relative">

                    <img
                        src={titlewhitebg.src}
                        alt="bubble-bg"
                        className="absolute hidden md:block top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[510px]  sm:w-60 pointer-events-none select-none opacity-90"
                    />

                    <div className="relative z-10 text-center">
                        <Title
                            title={'<span class="text-primary">Featured In</span>'}
                            text_color={'text-secondary'}
                        />

                    </div>
                </div>
                <div className="card-wrap grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center items-center py-6 md:py-10 gap-3 2xl:gap-5 gap-y-6 ">
                    <Link
                        href={'https://scoopearth.in/'}
                        target='_blank'
                    >
                        <div className=" transition-all duration-300 hover:-translate-y-5 card-img bg-white border-none rounded-4xl h-full">
                            <div className="text-card text-start text-[15px] p-[11px] h-full">
                                <div className="img mt-[22px] p-1.5 flex justify-center">
                                    <Image
                                        src={scoopearth}
                                        alt="Certificate"
                                        width={1000}
                                        height={500}
                                        className="max-w-[201px] w-full h-auto"
                                    />
                                </div>

                                <div className="text h-[65%] flex justify-center items-center bg-[#F3F0FF] mt-[22px] border-none rounded-[20px] p-2.5">
                                    <span className="text-black text-base 2xl:text-lg">
                                        Scoop Earth, a news Magzine has ranked number one to B2B Campus for providing the best graphic designing course in Chandigarh. This recognition highlights B2B Campus’s commitment to delivering unparalleled excellence in graphic designing education.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={'https://timebusinessnews.com/10-best-web-designing-course-in-chandigarh/'}
                        target='_blank'
                    >
                        <div className=" transition-all duration-300 hover:-translate-y-5 card-img bg-white border-none rounded-4xl h-full">
                            <div className="text-card text-start text-[15px] p-[11px] h-full">
                                <div className="img mt-[22px] sm:mt-[30px] p-1.5 flex justify-center">
                                    <Image
                                        src={timebussines}
                                        alt="Certificate"
                                        width={1000}
                                        height={500}
                                        className="max-w-[330px] w-full h-auto"
                                    />
                                </div>

                                <div className="text h-[65%] flex justify-center items-center bg-[#F3F0FF] mt-[22px] sm:mt-[30px] border-none rounded-[20px] p-2.5">
                                    <span className="text-black text-base 2xl:text-lg">
                                        With their exceptional curriculum and industry-relevant training, B2B Campus sets the benchmark for web designing education in Chandigarh, as acknowledged by Time Business News’s prestigious ranking.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={'https://www.newsbreak.com/new-york-city-ny'}
                        target='_blank'
                    >
                        <div className=" transition-all duration-300 hover:-translate-y-5 card-img bg-white border-none rounded-4xl h-full">
                            <div className="text-card text-start text-[15px] p-[11px] h-full">
                                <div className="img mt-[22px] p-1.5 flex justify-center">
                                    <Image
                                        src={Newsbrak}
                                        alt="Certificate"
                                        width={1000}
                                        height={500}
                                        className="max-w-[242px] w-full h-auto"
                                    />
                                </div>

                                <div className="text h-[65%] flex justify-center items-center bg-[#F3F0FF] mt-[18px] sm:mt-[18px] border-none rounded-[20px] p-2.5">
                                    <span className="text-black text-base 2xl:text-lg">
                                        B2B Campus secures the top spot for digital marketing courses in Chandigarh, according to leading news agency News Break. Their exceptional training is highlighted, focusing on delivering impactful and comprehensive education in the field.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href={'https://publicistpaper.com/12-best-digital-marketing-courses-in-mohali/'}
                        target='_blank'
                    >
                        <div className=" transition-all duration-300 hover:-translate-y-5 card-img bg-white border-none rounded-4xl h-full">
                            <div className="text-card text-start text-[15px] p-[11px] h-full">
                                <div className="img mt-[22px] p-1.5 flex justify-center">
                                    <Image
                                        src={publicist}
                                        alt="Certificate"
                                        width={1000}
                                        height={500}
                                        className="max-w-[150px] w-full h-auto"
                                    />
                                </div>

                                <div className="text h-[65%] flex justify-center items-center bg-[#F3F0FF] mt-[18px] sm:mt-[18px] border-none rounded-[20px] p-2.5">
                                    <span className="text-black text-base 2xl:text-lg">
                                        B2B Campus has been recognized as the leading institution for digital marketing courses in Mohali by Publicist News, demonstrating their expertise in delivering comprehensive and industry-focused training programs.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                 <div className="buttons text-[25px]  md:hidden flex justify-center m-auto mt-[2%]" onClick={clickscroll}>
                    <Buttons btnname='Enquire Now' text_color={'text-white'} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedIn
