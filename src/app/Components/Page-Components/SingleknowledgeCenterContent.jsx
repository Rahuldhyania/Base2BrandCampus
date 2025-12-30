import React from "react";
import Image from "next/image";
import ReletedArticle from "./ReletedArticle";
import SingleKnowledgeCareer from "./SingleKnowledgeCareer";

const SingleknowledgeCenterContent = ({ knowledgeCenter }) => {
  const readBlogSvg = (
    <svg
      className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0013 18.3333C14.6037 18.3333 18.3346 14.6024 18.3346 9.99999C18.3346 5.39762 14.6037 1.66666 10.0013 1.66666C5.39893 1.66666 1.66797 5.39762 1.66797 9.99999C1.66797 14.6024 5.39893 18.3333 10.0013 18.3333Z"
        stroke="#4A5565"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5V10L13.3333 11.6667"
        stroke="#4A5565"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // celender svg code
  const celenderSvg = (
    <svg
      className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66797 1.66666V4.99999"
        stroke="#4A5565"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.332 1.66666V4.99999"
        stroke="#4A5565"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z"
        stroke="#4A5565"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 8.33334H17.5"
        stroke="#4A5565"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // If no knowledgeCenter data, show default/fallback content
  if (!knowledgeCenter) {
    return (
      <div>
        <div className="cus_container main-bg pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]">
          <div className="px-[0] sm:px-[0] md:px-10 lg:px-[120px] xl:px-[180px] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px]">
            <div className="bg-[#F9FAFB80] rounded-[5px] md:rounded-[29px] py-[24px] px-[16px] sm:py-[32px] sm:px-[20px] md:py-[40px] md:px-[24px] lg:py-[44px] lg:px-[28px] xl:py-[48px] xl:px-[32px] ">
              <p className="text-center text-gray-600">Loading content...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Extract data from knowledgeCenter
  const heading = knowledgeCenter.heading || '';
  const categoryName = knowledgeCenter.category?.name || knowledgeCenter.tags || '';
  const description = knowledgeCenter.description || '';
  const createdAt = knowledgeCenter.createdAt 
    ? new Date(knowledgeCenter.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    : '';
  
  // Handle images - can be pipe-separated string
  const imageUrls = knowledgeCenter.imageUrl 
    ? (knowledgeCenter.imageUrl.includes('|') 
        ? knowledgeCenter.imageUrl.split('|').filter(url => url.trim())
        : [knowledgeCenter.imageUrl])
    : [];

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = description.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200) || 5;

  return (
    <div>
      <div className="cus_container main-bg pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]">
        <div className="px-[0] sm:px-[0] md:px-10 lg:px-[120px] xl:px-[180px] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[70px]">
          <div className="bg-[#F9FAFB80] rounded-[5px] md:rounded-[29px] py-[24px] px-[16px] sm:py-[32px] sm:px-[20px] md:py-[40px] md:px-[24px] lg:py-[44px] lg:px-[28px] xl:py-[48px] xl:px-[32px] ">
            {categoryName && (
              <div className="knowledge-center-tab mb-[16px]">
                <span className="text-[#6346FA] text-[14px] leading-[20px] font-regular bg-[#E4E0FC] py-[5px] px-[16px] rounded-full">
                  {categoryName}
                </span>
              </div>
            )}
            <h1 className="text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-regular text-[#0A0A0A]">
              {heading}
            </h1>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
              <span className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] text-[#4A5565]">
                {readBlogSvg} {readingTime} min read
              </span>
              {createdAt && (
                <span className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] text-[#4A5565]">
                  {celenderSvg} {createdAt}
                </span>
              )}
            </div>

            {/* Images Gallery */}
            {imageUrls.length > 0 && (
              <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 xl:mt-[56px]">
                {imageUrls.length === 1 ? (
                  <div className="flex justify-start">
                    <div className="rounded-[16px] overflow-hidden w-full sm:w-full md:w-[90%] lg:w-[70%] xl:w-[75%]">
                      <Image
                        src={imageUrls[0]}
                        alt={heading}
                        width={1200}
                        height={600}
                        className="w-full object-cover h-[180px] sm:h-[240px] md:h-[300px] lg:h-[384px] xl:h-[384px]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {imageUrls.map((url, index) => (
                      <div key={index} className="rounded-[16px] overflow-hidden">
                        <Image
                          src={url}
                          alt={`${heading} - Image ${index + 1}`}
                          width={600}
                          height={400}
                          className="w-full object-cover h-[200px] sm:h-[240px] md:h-[300px]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* render single page content here */}
            <div className="knowledge-center_signle_content pt-[40px]">
              <div 
                className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px]"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>
        </div>
        <SingleKnowledgeCareer
          title="Was this article helpful?"
          yes_btn="Yes"
          no_btn="No"
        />
        <ReletedArticle title="Related Articles" />
      </div>
    </div>
  );
};

export default SingleknowledgeCenterContent;
