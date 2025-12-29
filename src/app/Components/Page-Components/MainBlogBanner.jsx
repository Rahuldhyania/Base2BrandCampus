import React from 'react'
import Description from '../UiUx/Description'
import Title from '../UiUx/Title'
import Image from 'next/image'
import titlewhitebg from "../../../../public/images/main-blog_title_image.webp";
const MainBlogBanner = () => {
    const blogBannerImg = '/images/main-blog_banner.webp'
    return (
        <div
            className="bg-cover bg-center" style={{ backgroundImage: `url(${blogBannerImg})` }}>
            <div className="cus_container bg-gray-200 sm:bg-transparent">

                <div>
                    <div className="relative py-3">
                        {/* <Image src={titlewhitebg.src} alt="bubble-bg" width={1000} height={500} className="absolute hidden md:block top-[0px] h-[165px] left-1/2 -translate-x-1/2 w-[600px] md:w-[600px] sm:w-[241px] pointer-events-none select-none " /> */}
                        <div className="relative z-10 text-center pt-10 sm:pt-0">

                            <Title title={'<span class="text-primary"> Our Blog </span>'} text_color={'text-secondary'} />
                        </div>
                        <Description description={'Insights to Build Your Career'} text_color={'text-black relative z-10 pt-[0px] pb-[40px] sm:leading-[26px] md:pt-10 md:pb-14 lg:pt-[0px] lg:pb-[40px]'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlogBanner
