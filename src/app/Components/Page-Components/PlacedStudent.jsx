import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Image from 'next/image';
import Title from '../UiUx/Title';

const studentplacedata = [
    {
        id: 1,
        student: [
            '/images/placestudent1.webp',
            '/images/placestudent2.webp',
            '/images/placestudent15.webp',
            '/images/placestudent4.webp',
        ]
    },
    {
        id: 2,
        student: [
            '/images/placestudent5.webp',
            '/images/placestudent6.webp',
            '/images/placestudent7.webp',
            '/images/placestudent8.webp',
        ]
    },
    {
        id: 3,
        student: [
            '/images/placestudent9.webp',
            '/images/placestudent10.webp',
            '/images/placestudent11.webp',
            '/images/placestudent12.webp',
        ]
    },
        {
        id: 4,
        student: [
            '/images/placestudent13.webp',
            '/images/placestudent14.webp',
            '/images/placestudent3.webp',
            '/images/placestudent16.webp',
        ]
    },
]
const PlacedStudent = ({showdata ,rownumber}) => {
    return (
        <div>
            <div className="">
                <div className='cus_container'>
                    <div className="relative">
                        <Image
                            src={titlewhitebg.src}
                            width={1000}
                            height={500}
                            alt="bubble-bg"
                            className="absolute hidden md:block -bottom-8 left-1/2 -translate-x-1/2 w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                        />

                        <div className="relative z-10 text-center">
                            <Title
                                title={'<span class="text-primary"> Our Placed Students Ready <br/>  </span> to Lead the Industry '}
                                text_color={'text-secondary'}
                            />
                        </div>
                    </div>
                </div>
                <div className='pt-12 md:pt-16'>
                    {
                        studentplacedata.slice(0,showdata ? showdata : studentplacedata.length ).map((data, index) => (
                            <div key={index} className={`${index %2 === 0 ? 'bg-primary' : 'bg-[#DDD6FF]'}`}>
                                <div className={`cus_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 md:py-16`}>
                                {
                                    data.student.map((items, i) => (
                                        <div key={i}>
                                            <Image
                                                src={items}
                                                alt='student'
                                                width={3000}
                                                height={500}
                                                className='max-w-[85%] 2xl:max-w-[95%] m-auto shadow-2xl'
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PlacedStudent
