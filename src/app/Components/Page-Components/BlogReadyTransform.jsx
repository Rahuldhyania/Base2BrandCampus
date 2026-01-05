import Link from 'next/link'
import React from 'react'

const BlogReadyTransform = ({ title, description, explore_btn, learing_btn }) => {
    return (
        <div className='cus_container'>
            <div className="bg-[#E4DFFF] mt-14 lg:mt-[58px] mb-16 lg:mb-[74px] p-6 sm:p-8 md:p-12 lg:p-[58px] rounded-2xl sm:rounded-3xl lg:rounded-[50.96px]">
                {/* Heading */}
                <h2
                    className="text-center text-[#6346FA] font-semibold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[37px] leading-[28px] sm:leading-[34px] md:leading-[40px] lg:leading-[44.44px] pb-3 sm:pb-4 lg:pb-[20px]">
                    {title}
                </h2>

                {/* Description */}
                <p
                    className="text-center text-black text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] max-w-[900px] mx-auto">
                    {description}
                </p>

                {/* Buttons */}
                <div className="group button_wraper flex flex-col sm:flex-row justify-center items-center gap-[18px] sm:gap-[18px] mt-6 sm:mt-8">
                    {/* Primary Button */}
                    <Link href="/courses" title="Explore All Courses" className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] flex items-center justify-center w-full sm:w-auto bg-[#6346FA] hover:bg-[#000] hover:text-[#fff] transition-all duration-300 ease-in-out text-white font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-normal px-6 py-3 rounded-[16.27px]">
                        {explore_btn}
                    </Link>

                    {/* Secondary Button */}
                    <Link href="/contact-us" title="Start Learning Today" className="shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] flex items-center justify-center w-full sm:w-auto bg-white transition-all duration-300 ease-in-out hover:bg-[#6346FA] hover:text-[#fff] text-[#151314]  font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-normal px-6 py-3 rounded-[16.27px]">
                        {learing_btn}
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default BlogReadyTransform
