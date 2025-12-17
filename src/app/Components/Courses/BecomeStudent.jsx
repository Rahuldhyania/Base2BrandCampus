import Image from 'next/image';
import React from 'react';
import Buttons from '../UiUx/Buttons';
import Title from '../UiUx/Title';
const BecomeStudent = ({title,description,right_image}) => {
    return (
        <div>
            <section className="cus_container py-16">
                <div className=" grid  grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div className="text-white">
                       <div className='text-center md:text-start'>
                         <Title
                            title={title}
                            text_color={'text-secondary md:text-start'}
                        />

                       </div>
                        <p className="text-base md:text-xl lg:text-2xl text-black mt-6 leading-relaxe text-center md:text-start">
                           {description}
                        </p>

                        <div className='pt-6 flex justify-center md:justify-start'>
                            <Buttons
                                btnname={'Apply for Counselling →'}
                                text_color={'text-white'}
                            />
                        </div>
                    </div>
                    <div className="relative flex justify-center md:justify-end">
                        <div className="overflow-hidden  w-[90%] md:w-full">
                            <Image
                                src={right_image}
                                width={1000}
                                height={500}
                                alt="Truck Dispatching Training"
                                className="w-auto max-h-[600px] object-cover m-auto"
                            />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default BecomeStudent
