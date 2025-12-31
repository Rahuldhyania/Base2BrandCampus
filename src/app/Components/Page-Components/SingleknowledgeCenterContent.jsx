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
          <div className="pt-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 ">
            <div className="pt-16">
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
                  <div className="mt-6">
                    {imageUrls.length === 1 ? (
                      <div className="flex justify-start">
                        <div className="rounded-[16px] overflow-hidden w-full ">
                          <Image
                            src={imageUrls[0]}
                            alt={heading}
                            width={3000}
                            height={600}
                            className="w-full object-cover "
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
          </div>
          <div>
            <div className="space-y-6 lg:sticky lg:top-0 self-start pt-12 md:pt-16 md:max-w-[85%] m-auto">
              {/* CTA CARD */}
              <div className="bg-white rounded-2xl p-[25px] sm:p-6">
                <h4 class="font-regular text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[17px] mb-[6px] sm:mb-[7px] md:mb-[9px] lg:mb-[10px] xl:mb-[12px]">
                  Start Your Learning Journey
                </h4>

                <p className="text-sm text-gray-600 mb-4">
                  Get expert guidance and hands-on training to launch your career in digital marketing.
                </p>

                <div className="space-y-3">
                  <button className="w-full flex justify-center items-center gap-[9px] cursor-pointer bg-[#6346FA] hover:bg-[#4129BA] transition duration-300 ease-in-out text-white py-2.5 rounded-lg text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1266_3794)"><path d="M5.26536 13.3333C6.53775 13.986 8.00142 14.1628 9.39262 13.8318C10.7838 13.5009 12.0111 12.6839 12.8532 11.5281C13.6953 10.3723 14.097 8.9538 13.9858 7.5281C13.8745 6.1024 13.2578 4.7633 12.2466 3.75212C11.2354 2.74093 9.89629 2.12416 8.47059 2.01293C7.04489 1.90171 5.62635 2.30335 4.47058 3.14549C3.31481 3.98762 2.49783 5.21486 2.16685 6.60607C1.83587 7.99727 2.01266 9.46094 2.66536 10.7333L1.33203 14.6667L5.26536 13.3333Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_1266_3794"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                    Talk to Career Expert
                  </button>

                  <button className="w-full group flex justify-center items-center gap-[9px] cursor-pointer border border-gray-300 hover:bg-[#6346FA] hover:text-[#fff] transition duration-300 ease-in-out py-2.5 rounded-lg text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black group-hover:text-white transition"><g clipPath="url(#clip0_1266_3798)"><path d="M8 4.66669V14" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1.9987 12C1.82189 12 1.65232 11.9298 1.52729 11.8047C1.40227 11.6797 1.33203 11.5101 1.33203 11.3333V2.66667C1.33203 2.48986 1.40227 2.32029 1.52729 2.19526C1.65232 2.07024 1.82189 2 1.9987 2H5.33203C6.03927 2 6.71755 2.28095 7.21765 2.78105C7.71775 3.28115 7.9987 3.95942 7.9987 4.66667C7.9987 3.95942 8.27965 3.28115 8.77975 2.78105C9.27984 2.28095 9.95812 2 10.6654 2H13.9987C14.1755 2 14.3451 2.07024 14.4701 2.19526C14.5951 2.32029 14.6654 2.48986 14.6654 2.66667V11.3333C14.6654 11.5101 14.5951 11.6797 14.4701 11.8047C14.3451 11.9298 14.1755 12 13.9987 12H9.9987C9.46826 12 8.95956 12.2107 8.58448 12.5858C8.20941 12.9609 7.9987 13.4696 7.9987 14C7.9987 13.4696 7.78798 12.9609 7.41291 12.5858C7.03784 12.2107 6.52913 12 5.9987 12H1.9987Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_1266_3798"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                    View All Courses
                  </button>
                </div>
              </div>

              {/* IN THIS ARTICLE */}
              <div className="bg-white rounded-2xl py-[30px] px-[20px] sm:py-[34px] sm:px-[22px] md:py-[38px] md:px-[25px] lg:py-[42px] lg:px-[25px]">
                <h4 className="font-regular mb-4">In This Article</h4>

                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Introduction</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Why This Matters Now</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Getting Started</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Essential Tools</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Career Opportunities</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Conclusion</li>
                </ul>
              </div>

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
