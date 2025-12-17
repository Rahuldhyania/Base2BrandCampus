import Image from 'next/image'
import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Title from '../UiUx/Title'
import Description from '../UiUx/Description'
import Certificate from '../Page-Components/Certificate'
import Buttons from '../UiUx/Buttons'
import Youtubevideo from '../Page-Components/Youtubevideo'
const CourseCareerSupport = () => {
    return (
        <div>
            <Youtubevideo />
            <div className='main-bg pt-12 md:pt-16 md:pb-16'>
                <section className='cus_container py-section-y px-section-x sm:py-section-y-sm'>
                    <div className="relative  justify-center items-center">
                        <div className="relative">
                            <Image
                                src={titlewhitebg.src}
                                width={1000}
                                height={500}
                                alt="bg-shape"
                                className="absolute  hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[556px] sm:w-60 opacity-100 pointer-events-none select-none"
                            />
                            <Title
                                title={'Guaranteed Career Support  <br/> <span class="text-primary">Until You Get Placed</span>'}
                                text_color={'text-secondary relative z-10'}
                            />
                        </div>
                        <Description
                            description={'Work with top US logistics companies. '}
                            text_color={'text-secondary'}
                        />
                    </div>
                    <Certificate />
                    <div className="buttons text-[25px] flex justify-center m-auto sm:mb-0 pt-6 md:pt-0">
                        <Buttons btnname=' Secure Your Placement Now' text_color={'text-white'} />
                    </div>
                </section>
            </div>
        </div>

    )
}

export default CourseCareerSupport
