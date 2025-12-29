import React from 'react'

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
                <a
                    href="javascript:void(0);"
                    title={book_free}
                    className="
                            flex mx-auto w-fit
                            text-white
                            text-[14px] sm:text-[18px] md:text-[20px] lg:text-[20px]
                            rounded-[12px] sm:rounded-[14px] md:rounded-[16px]
                            py-[10px] sm:py-[12px] md:py-[14px]
                            px-[30px] sm:px-[35px] md:px-[47px]
                            bg-[#6346FA]
                            hover:bg-[#000]
                            transition-all duration-300 ease-in-out">
                    {book_free}
                </a>
            </div>
        </div>
    )
}

export default SingleBlogCareer
