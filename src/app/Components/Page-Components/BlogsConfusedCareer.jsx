import React from 'react'
import Description from '../UiUx/Description'
import Title from '../UiUx/Title'
import Image from 'next/image'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Link from 'next/link';
const BlogsConfusedCareer = ({ title, description, book_free }) => {
    const careerInsight = [
        {
            title: "Can Freshers Start Freelancing?",
            description: "Yes. With the right skills, tools, and guidance, freelancing is beginner-friendly.",
            read_more: "Read More"
        },
        {
            title: "Is Digital Marketing a Good Career in 2025?",
            description: "Yes—if you learn practical skills and work on real projects.",
            read_more: "Read More"
        },
        {
            title: "Which Tech Skills Are in Demand Right Now?",
            description: "Web development, AI tools, automation, and data skills lead the market.",
            read_more: "Read More"
        },
        {
            title: "How Long Does It Take to Get a Job After a Course?",
            description: "With hands-on training, many learners start applying within 3–6 months.",
            read_more: "Read More"
        }
    ]
    return (
        <div className='main-bg pt-[41px]'>
            <div className="cus_container">
                <div>
                    <div className="relative py-3">
                        <Image src={titlewhitebg.src} alt="bubble-bg" width={1000} height={500} className="absolute hidden md:block -bottom-[28px] h-[120px] left-1/2 -translate-x-1/2 w-[600px] md:w-[600px] sm:w-[241px] pointer-events-none select-none opacity-90" />
                        <div className="relative z-10 text-center md:pt-5">
                            <Title title={'Quick <span class="text-primary"> Career Insights </span>'} text_color={'text-secondary'} />
                        </div>
                    </div>
                    <Description description={'Fast answers to common career and skill questions'} text_color={'text-black relative z-10 pt-[0px] pb-10 sm:leading-[26px] md:pt-10 md:pb-14 lg:pt-[50px] lg:pb-[70px]'} />
                </div>

                <div className="grid quick_career_insight grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] pb-8 sm:pb-12 md:pb-16 lg:pb-[100px]">
                    {careerInsight.map((item, index) => (
                        <div key={index} className="bg-white hover:-translate-y-5 flex flex-col justify-between group cursor-pointer transition-all duration-300 ease-in-out p-6 rounded-[14px] transition-all duration-300 hover:shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
                            <h2 className="text-[#0A0A0A] group-hover:text-[#6346FA] leading-[28px] text-[18px] md:text-[20px] font-regular text-center mb-2 transition-all duration-300 ease-in-out">
                                {item.title}
                            </h2>

                            <p className="text-[#4A5565] text-[14px] text-center leading-[20px] mb-4">
                                {item.description}
                            </p>

                            <a href="javascript:void(0)" className="bg-[#6346FA] group-hover:bg-[#000] flex w-fit mx-auto rounded-[9px] text-[#fff] px-[20px] py-[10px] font-medium text-[15px] transition-all duration-300 ease-in-out">
                                {item.read_more}
                            </a>
                        </div>
                    ))}
                </div>


                <div className="confused-career-blogs bg-cover bg-center bg-no-repeat  rounded-md sm:rounded-lg md:rounded-xl lg:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-[74px]"
                    style={{ backgroundImage: "url('/images/blogs-confused-career.webp')" }}>
                    {/* Title */}
                    <h2 className="text-center text-[20px] sm:text-[38px] md:text-[35px] lg:text-[40px] font-medium text-white pb-[5px]">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-center text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-regular text-white pb-6 sm:pb-8 md:pb-10 lg:pb-[35px]">
                        {description}
                    </p>

                    {/* Button */}
                    <Link
                        href="/contact-us"
                        title={book_free}
                        className="
                            flex mx-auto w-fit
                            text-white
                            text-[14px] sm:text-[18px] md:text-[20px] lg:text-[20px]
                            rounded-[12px] sm:rounded-[14px] md:rounded-[16px]
                            py-[10px] sm:py-[12px] md:py-[14px]
                            px-[30px] sm:px-[35px] md:px-[47px]
                            bg-[#6346FA]
                            hover:bg-[#000]
                            transition-all duration-300 ease-in-out">
                        {book_free}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogsConfusedCareer
