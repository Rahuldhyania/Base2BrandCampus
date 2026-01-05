import Link from 'next/link'
import React from 'react'
import Buttons from '../UiUx/Buttons'

const SingleBlogCareer = ({ title, description, book_free }) => {

    return (
        <div className='main-buld_career  pt-[20px] sm:pt-[28px] md:pt-[32px] lg:pt-[36px] xl:pt-[41px]'>
            <div className="confused-career-blogs bg-cover bg-center bg-no-repeat  rounded-md sm:rounded-lg md:rounded-xl lg:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-[74px]"
                style={{ backgroundImage: "url('/images/blogs-confused-career.webp')" }}>
                {/* Title */}
                <h2 className="text-center text-[20px] sm:text-[38px] md:text-[35px] lg:text-[40px] font-medium text-white pb-[5px]">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-center text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-regular text-white pb-6 sm:pb-8 md:pb-10 lg:pb-[35px]">
                    {description}
                </p>

                {/* Button */}
               
               <div className='flex justify-center'>
                 <Link
                 href="/courses"
                    >
                    <Buttons
                        btnname={book_free}
                        text_color={'text-white'}
                    />
                </Link>
               </div>


            </div>
        </div>
    )
}

export default SingleBlogCareer
