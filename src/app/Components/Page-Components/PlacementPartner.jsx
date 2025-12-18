import Image from 'next/image'
import React from 'react'
import Title from '../UiUx/Title'
import smallbublebg from "../../../../public/images/smallbublebg.webp"
import { partnercompany } from '@/app/Data/CoursesData'
import Description from '../UiUx/Description'
const PlacementPartner = () => {
    return (
        <div>
            <div className=" pt-12 md:pt-16">
                <div className='cus_container pb-12'>
                    <div className="relative pb-4">
                        <Image
                            src={smallbublebg.src}
                            alt="bubble-bg"
                            width={1000}
                            height={500}
                            className="absolute  hidden md:block  bottom-0 left-1/2  -translate-x-1/2  w-[480px] md:w-[700px] h-20 sm:w-60 pointer-events-none select-none opacity-90"
                        />

                        <div className="relative z-10 text-center">
                            <Title
                                title={'<span class="text-primary">Our Placement</span>  Partner Companies'}
                                text_color={'text-secondary'}
                            />
                        </div>
                    </div>
                    <div>
                        <Description
                            description={'Connecting our students with top employers.'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>

                <div className='bg-primary'>
                    <div className='py-12 md:py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-y-8 gap-x-6 cus_container'>
                        {
                            partnercompany.map((data, index) => (
                                <div className='bg-white py-6 2xl:py-8 rounded-2xl' key={index}>
                                    <Image
                                        src={data}
                                        alt=''
                                        width={1000}
                                        height={500}
                                        className='max-w-[70%] 2xl:max-w-[80%] m-auto object-contain max-h-[47px]'
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlacementPartner
