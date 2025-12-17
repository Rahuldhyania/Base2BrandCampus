import React from 'react'
import Title from '../UiUx/Title'
import Image from 'next/image'
import greencheck from "../../../../public/images/greencheck.webp"
const CourseDetail = ({ course_detail }) => {
    return (
        <div>
            <div className="cus_container pb-12">
                <div className='pb-6'>
                    <Title
                        title={'Course Details'}
                        text_color={'text-primary'}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto gap-y-4 gap-x-4">
                    {
                        course_detail.map((data, index) => (
                            <div className='text-xl pe-8 py-4 flex items-center gap-2 shadow rounded-2xl bg-[#F3E8FF] border-l-4 border-b-4 border-[#6346FA]' key={index}>
                                <Image
                                    src={greencheck}
                                    alt="check"
                                    width={1000}
                                    height={500}
                                    className="w-[42px] 2xl:w-[50px] h-[42px] 2xl:h-[50px] object-contain relative"
                                />
                                <div>
                                    {data}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseDetail
