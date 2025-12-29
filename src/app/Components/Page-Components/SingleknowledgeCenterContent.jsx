import React from 'react'
import ReletedArticle from './ReletedArticle'
import SingleKnowledgeCareer from './SingleKnowledgeCareer'

const SingleknowledgeCenterContent = () => {
    const readBlogSvg = (
        <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.0013 18.3333C14.6037 18.3333 18.3346 14.6024 18.3346 9.99999C18.3346 5.39762 14.6037 1.66666 10.0013 1.66666C5.39893 1.66666 1.66797 5.39762 1.66797 9.99999C1.66797 14.6024 5.39893 18.3333 10.0013 18.3333Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 5V10L13.3333 11.6667" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

    // celender svg code
    const celenderSvg = (
        <svg className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M6.66797 1.66666V4.99999" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.332 1.66666V4.99999" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.5 8.33334H17.5" stroke="#4A5565" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

    return (
        <div>
            <div className='cus_container main-bg pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]'>
                <div className='px-[0] sm:px-[0] md:px-10 lg:px-[120px] xl:px-[180px] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px]'>
                    <div className="bg-[#F9FAFB80] rounded-[5px] md:rounded-[29px] py-[24px] px-[16px] sm:py-[32px] sm:px-[20px] md:py-[40px] md:px-[24px] lg:py-[44px] lg:px-[28px] xl:py-[48px] xl:px-[32px] ">
                        <div className='knowledge-center-tab mb-[16px]'>
                            <span className='text-[#6346FA] text-[14px] leading-[20px] font-regular bg-[#E4E0FC] py-[5px] px-[16px] rounded-full'>Freelancing</span>
                        </div>
                        <h1 className="text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-regular text-[#0A0A0A]">
                            Master Digital Marketing in <br className="hidden sm:block" />
                            2024: Complete Roadmap
                        </h1>
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                            <span className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] text-[#4A5565]">{readBlogSvg} 8 min read</span>
                            <span className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] text-[#4A5565]">
                                {celenderSvg} December 24, 2024
                            </span>
                        </div>

                        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 xl:mt-[56px] flex justify-start">
                            <div className="rounded-[16px] overflow-hidden w-full sm:w-full md:w-[90%] lg:w-[70%] xl:w-[75%]">
                                <img
                                    src="/images/knowlegde-center-banner.webp"
                                    alt="Blog"
                                    className="w-full object-cover h-[180px] sm:h-[240px] md:h-[300px] lg:h-[384px] xl:h-[384px]" />
                            </div>
                        </div>

                        {/* render single page content here */}
                        <div className='knowledge-center_signle_content pt-[40px]'>
                            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] text-[#111827] leading-[28px] sm:leading-[32px] md:leading-[38px] lg:leading-[42px] font-medium">Getting Started with Freelancing</h2>
                            <p className='text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] pt-[10px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[20px] pb-[40px] '>Freelancing offers incredible flexibility and opportunities, but getting started can feel overwhelming. This comprehensive guide will walk you through everything you need to know to launch your freelancing career successfully.</p>

                            <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#111827] leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] font-medium">
                                Getting Started with Freelancing
                            </h3>

                            <p className='text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] pt-[10px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[20px] pb-[40px] '>Freelancing offers incredible flexibility and opportunities, but getting started can feel overwhelming. This comprehensive guide will walk you through everything you need to know to launch your freelancing career successfully.</p>
                        </div>

                    </div>
                </div>
                <SingleKnowledgeCareer title="Was this article helpful?" yes_btn="Yes" no_btn="No" />
                <ReletedArticle title="Related Articles" />
            </div>
        </div >
    )
}

export default SingleknowledgeCenterContent
