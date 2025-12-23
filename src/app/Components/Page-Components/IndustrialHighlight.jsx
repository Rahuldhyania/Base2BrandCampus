import Image from 'next/image';
import React from 'react'
const highlightsData = [
    {
        id: 1,
        icon: "/icons/indhighlight1.svg",
        title: "Real Client Projects",
        description:
            "Work on actual client assignments under expert supervision",
    },
    {
        id: 2,
        icon: "/icons/indhighlight2.svg",
        title: "Industry Case Studies",
        description:
            "Solve real business problems from various industries",
    },
    {
        id: 3,
        icon: "/icons/indhighlight3.svg",
        title: "Portfolio Building",
        description:
            "Create a portfolio that impresses employers",
    },
];

const IndustrialHighlight = () => {
    return (
        <div className='bg-primary'>
            <div className="cus_container py-12 md:py-16">
                <div className='max-w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        highlightsData.map((data) => (
                            <div className='bg-[#4531AF] py-8 rounded-xl' key={data.id}>
                                <div className="max-w-[80%] m-auto space-y">
                                    <div className='w-[71px] h-[71px] flex items-center justify-center bg-[#5846B7] m-auto rounded-md'>
                                        <Image
                                            src={data.icon}
                                            alt=''
                                            width={1000}
                                            height={500}
                                            className='max-w-7.5'
                                        />
                                    </div>
                                    <p className='text-white text-[22px] font-bold text-center pt-3'>
                                        {data.title}
                                    </p>
                                    <p className='text-white text-lg text-center'>
                                        {data.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default IndustrialHighlight
