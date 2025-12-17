import React from 'react'
import Title from '../UiUx/Title'
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import smbg from "../../../../public/images/smbg.webp"
import mobilegrp from "../../../../public/images/mobilegrp.webp";
import Description from '../UiUx/Description';
import Buttons from '../UiUx/Buttons';
import Image from 'next/image';
import Contactfrom from './Contactfrom';
import Contactfromfooter from './Contactfromfooter';

const Journeywithb2b2 = () => {
    return (
        <div className='md:py-12 pb-0 px-[3%]' >
            <div className="relative">

                {/* Background Image */}
                <img
                    src={smbg.src}
                    alt="background-bubble"
                    className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[860px]  sm:w-60 pointer-events-none select-none opacity-90"
                />

                {/* Title (unchanged) */}
                <div className="relative z-10 text-center">
                    <Title
                        title={'Begin Your Skill Journey With   <span class="text-primary"> <br />B2B Campus  </span>'}
                        text_color={'text-secondary'}
                    />
                </div>
            </div>

            <div className="description">
                <Description
                    description={'Build confidence, gain real experience, and move closer to your goals'}
                    text_color={'text-secondary'}
                />
            </div>
            <div className="">
                <div className=" relative mobil-grp pb-12">
                    <Image
                        src={mobilegrp}
                        width={1000}
                        height={500}
                        className="hidden lg:block w-full max-w-[1386px] m-auto h-auto object-cover"
                        alt="group img"
                    />

                    <section className=" w-full flex justify-center px-4 relative lg:absolute top-[48%] left-1/2 -translate-x-1/2 translate-y-0">
                        <div className="max-w-2xl w-full text-center sm:text-left">
                            {/* Header */}
                            <h2 className="text-[28px] sm:text-[47px] font-semibold text-[#6346FA] mb-2">
                                Let&apos;s connect constellations
                            </h2>

                            {/* Form */}
                            <Contactfromfooter/>

                            {/* Submit Button */}
                           
                        </div>
                    </section>

                </div>




                {/* <div className=" mobil-grp">
                    <Image
                        src={mobilegrp}
                        width={1000}
                        height={500}
                        className='w-full max-w-[1386px] m-auto'
                        alt='group img ' />
                </div>

                <section className=" absolute bottom-[45px] w-full flex justify-center py-16 px-4">
                    <div className="max-w-2xl w-full text-center">

                  
                        <h2 className="text-[47px] text-start font-semibold text-[#6346FA]">
                            Let’s connect constellations
                        </h2>
                        <p className="text-gray-600 mb-10 text-start text-[20.21px]">
                            Let’s align our constellations! Reach out and let the magic of
                            collaboration illuminate our skies.
                        </p>

               
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First name"
                                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 col-span-1 sm:col-span-1"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </form>

                
                        <div className="buttons text-[25px] flex justify-center m-auto mt-[2%]">
                            <Buttons btnname='Send it to the Moon' text_color={'text-white'} />
                        </div>
                    </div>
                </section>
                 */}

            </div>
        </div>
    )
}

export default Journeywithb2b2
