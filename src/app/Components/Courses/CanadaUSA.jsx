import Image from 'next/image';
import React from 'react';
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import girlwithbook from "../../../../public/images/girlwithbook.webp"
const CanadaUSA = () => {
    return (
        <div>
            <section className='cus_container pb-16'>
                <div className="relative flex justify-center items-center">
                    <Image
                        src={smallbublebg.src}
                        width={1000}
                        height={500}
                        alt="bg-shape"
                        className="absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-60 opacity-100 pointer-events-none select-none"
                    />

                    <div className="relative z-10 text-center">
                        <Title
                            title={'From India to Earning in <br/> <span class="text-primary">Canada/USA </span>'}
                            text_color={'text-secondary'}
                        />
                        <Description
                            description={'“This course changed my life.” – Verified Student'}
                            text_color={'text-secondary'}
                        />
                    </div>
                </div>
                <div className='pt-6 md:pt-12'>
                    <div className="w-full max-w-6xl m-auto bg-[#ffffff] rounded-[53px]     flex flex-col md:flex-row items-center shadow-md">
                        <div className=" flex justify-center">
                            <div className="relative">
                                <Image
                                    src={girlwithbook}
                                    width={1000}
                                    height={500}
                                    alt="Student"
                                    className="w-auto max-h-[515px] object-cover rounded-4xl md:rounded-none"
                                />
                            </div>
                        </div>

                        <div className="md:w-3/4">
                          <div className='ps-3 pe-3 md:ps-[10%] md:pe-[3%] py-8'>
                             <div>
                                <p className='text-xl lg:text-2xl'>
                                    <span className='text-2xl lg:text-[34px] text-primary'>Meet Anjali,</span> one of our successful students who started with zero experience and transformed her career through our Truck Dispatching Course.
                                </p>
                            </div>
                            <p className="font-medium text-gray-800 mb-4 py-3 text-lg">
                                In just a few weeks, she was confidently:
                            </p>

                            <div className="bg-[#DCD6FF] p-5 rounded-2xl shadow-sm space-y-3 w-fit">
                                <p className='text-lg"'>☎️ Handling real dispatch calls</p>
                                <p className='text-lg"'>📦 Managing loads with top brokers</p>
                                <p className='text-lg"'>💵 Earning in USD</p>
                                <p className='text-lg"'>🧑‍💻 Working remotely for Canada/USA clients</p>
                                <p className='text-lg"'>🚀 Building a stable, high-income international career</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CanadaUSA
