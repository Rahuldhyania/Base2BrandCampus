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
import PlacedStudents from './PlacedStudent';

const Journeywithb2b2 = ({ PlacedStudent }) => {
    return (
        <div>
            {
                PlacedStudent === false ?
                    <div>

                    </div> :
                    <PlacedStudents showdata={1} rownumber={2} />
            }

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
                                <Contactfromfooter />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Journeywithb2b2
