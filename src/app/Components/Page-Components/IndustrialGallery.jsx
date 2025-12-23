import Image from 'next/image'
import React from 'react'

const gallarydata = [
    {
        title : 'Interactive Classes',
        image :'/images/IndustrialGallery1.webp'
    },
        {
        title : 'Modern Labs',
        image :'/images/IndustrialGallery2.webp'
    },
        {
        title : 'Team Projects',
        image :'/images/IndustrialGallery3.webp'
    },
        {
        title : 'Expert Mentors',
        image :'/images/IndustrialGallery4.webp'
    }
];
const items = [
    {
        icon: "/images/45days.webp",
        title: "3 Months",
        subtitle: "Practical Training ",
    },
    {
        icon: "/images/handmoney.webp",
        title: "100%",
        subtitle: "Placement Support",
    },
    {
        icon: "/images/globeicon.webp",
        title: "Global Work",
        subtitle: "Freelance or Full-Time",
    },
    {
        icon: "/images/money.webp",
        title: "INR / USD",
        subtitle: "Earning Opportunitiess",
    },
];
const IndustrialGallery = () => {
    return (
        <div className="cus_container py-12 md:py-16">
            <div className=" px-6 py-3 border-none rounded-[50px] bg-[#FFFFFF] grid grid-cols-2 lg:grid-cols-4 gap-2">
                {items.map((item, index) =>
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center justify-center group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-float p-1.5 rounded-[19px] gap-6 cursor-pointer"
                    >
                        <div className="wrap-div flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-center sm:text-left">
                            <div className="bg-[#DDD7FF] flex justify-center items-center rounded-[50px] p-2  transition-all duration-300 hover:scale-110">
                                <Image
                                    src={item.icon}
                                    alt="icon"
                                    width={1000}
                                    height={500}
                                    className="w-8 h-8 md:w-[45px] md:h-[45px] object-contain p-2"
                                />
                            </div>

                            <div>
                                <h3 className="text-[#6346FA] text-[22px]  md:text-[30px] lg:text-[31px] transition-all duration-300 group-hover:text-purple-600">
                                    {item.title}
                                </h3>
                                <p className="text-[14px] md:text-[15px] lg:text-[18px] transition-all duration-300 group-hover:text-gray-700">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    gallarydata.map((item, index) => (
                        <div className='relative' key={index}>
                            <Image
                                src={item.image}
                                alt=''
                                width={1000}
                                height={500}
                                className=''
                            />
                            <span className='text-xl 2xl:text-2xl text-white absolute w-full bottom-5 left-3'>
                                {item.title}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default IndustrialGallery
