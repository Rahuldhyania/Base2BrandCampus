'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReletedArticle from "./ReletedArticle";
import SingleKnowledgeCareer from "./SingleKnowledgeCareer";
import Link from "next/link";
import Contactfrom from "./Contactfrom";
import EnrollModal from '../UiUx/EnrollModal'
import { hasEnrollmentToken } from '@/lib/enrollment'
const SingleknowledgeCenterContent = ({ knowledgeCenter }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);


  
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(hasEnrollmentToken());
    };

    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    const interval = setInterval(checkLoginStatus, 1000);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      clearInterval(interval);
    };
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };
  const readBlogSvg = (
    <svg
      className="w-3.5 h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]"
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

  if (!knowledgeCenter) {
    return null
  }

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
    <div className="main-bg ">
      <div className="cus_container pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]">
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

                <div className="knowledge-center_signle_content pt-[40px]">
                   <div
                      className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] space-y-3 knowledge-centermain"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                  {/* {isLoggedIn
                    ?
                    <div
                      className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] space-y-3 knowledge-centermain"
                      dangerouslySetInnerHTML={{ __html: description }}
                    />
                    :
                    <ContentWithBlur
                      description={description}
                      onLoginClick={() => setShowLoginModal(true)}
                    />} */}

                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-6 lg:sticky lg:top-0 self-start pt-12 md:pt-16 md:max-w-[90%] m-auto">
              {/* CTA CARD */}
              {/* <div className="bg-white rounded-2xl p-[25px] sm:p-6">
                <h4 className="font-regular text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[17px] mb-[6px] sm:mb-[7px] md:mb-[9px] lg:mb-[10px] xl:mb-[12px]">
                  Start Your Learning Journey
                </h4>

                <p className="text-sm text-gray-600 mb-4">
                  Get expert guidance and hands-on training to launch your career in digital marketing.
                </p>

                <div className="space-y-3">
                  <Link
                    href={'/contact-us'}
                  >
                    <button className="w-full flex justify-center items-center gap-[9px] cursor-pointer bg-[#6346FA] hover:bg-[#4129BA] transition duration-300 ease-in-out text-white py-2.5 rounded-lg text-sm font-medium">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1266_3794)"><path d="M5.26536 13.3333C6.53775 13.986 8.00142 14.1628 9.39262 13.8318C10.7838 13.5009 12.0111 12.6839 12.8532 11.5281C13.6953 10.3723 14.097 8.9538 13.9858 7.5281C13.8745 6.1024 13.2578 4.7633 12.2466 3.75212C11.2354 2.74093 9.89629 2.12416 8.47059 2.01293C7.04489 1.90171 5.62635 2.30335 4.47058 3.14549C3.31481 3.98762 2.49783 5.21486 2.16685 6.60607C1.83587 7.99727 2.01266 9.46094 2.66536 10.7333L1.33203 14.6667L5.26536 13.3333Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_1266_3794"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
                      Talk to Career Expert
                    </button>
                  </Link>
                </div>
              </div> */}

              {/* IN THIS ARTICLE */}
              {/* <div className="bg-white rounded-2xl py-[30px] px-[20px] sm:py-[34px] sm:px-[22px] md:py-[38px] md:px-[25px] lg:py-[42px] lg:px-[25px]">
                <h4 className="font-regular mb-4">In This Article</h4>

                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Introduction</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Why This Matters Now</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Getting Started</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Essential Tools</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Career Opportunities</li>
                  <li className="hover:text-[#6346FA] cursor-pointer transition">Conclusion</li>
                </ul>
              </div> */}
              <div>
                <Contactfrom singleColumn={true} description={false} showContact={true} />
              </div>
            </div>
          </div>
        </div>
        <SingleKnowledgeCareer
          title="Was this article helpful?"
          yes_btn="Yes"
          no_btn="No"
        />
        {/* <ReletedArticle title="Related Articles" /> */}
        <EnrollModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      </div>
    </div>
  );
};
const ContentWithBlur = ({ description, onLoginClick }) => {
  const [splitContent, setSplitContent] = useState({ visible: "", hidden: "" });
  const [hasHiddenContent, setHasHiddenContent] = useState(false);

  useEffect(
    () => {
      if (description && typeof window !== "undefined") {
        // Split content after ~200 words
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = description;
        const text = tempDiv.textContent || tempDiv.innerText;
        const totalWords = text.split(/\s+/).filter(w => w.length > 0).length;

        if (totalWords > 200) {
          // Simple approach: split HTML by finding a good break point
          const result = splitHtmlByWords(description, 200);
          setSplitContent(result);
          setHasHiddenContent(result.hidden.length > 0);
        } else {
          setSplitContent({ visible: description, hidden: "" });
          setHasHiddenContent(false);
        }
      }
    },
    [description]
  );

  const splitHtmlByWords = (html, wordLimit) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    let wordCount = 0;
    let splitIndex = 0;
    const children = Array.from(tempDiv.children);

    for (let i = 0; i < children.length; i++) {
      const childText = children[i].textContent || "";
      const childWords = childText.split(/\s+/).filter(w => w.length > 0)
        .length;
      wordCount += childWords;

      if (wordCount >= wordLimit) {
        splitIndex = i + 1;
        break;
      }
    }

    if (splitIndex === 0) {
      return { visible: html, hidden: "" };
    }

    const visibleChildren = children.slice(0, splitIndex);
    const hiddenChildren = children.slice(splitIndex);

    const visibleHtml = visibleChildren.map(c => c.outerHTML).join("");
    const hiddenHtml = hiddenChildren.map(c => c.outerHTML).join("");

    return { visible: visibleHtml, hidden: hiddenHtml };
  };

  return (
    <div className="relative">
      {/* Visible content */}
      <div
        className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] space-y-2"
        dangerouslySetInnerHTML={{ __html: splitContent.visible }}
      />

      {/* Blurred content with overlay */}
      {hasHiddenContent &&
        <div className="relative mt-4">
          {/* Blurred content */}
          <div
            className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] space-y-2 blur-[6px] select-none pointer-events-none"
            style={{
              filter: "blur(6px)",
              userSelect: "none",
              maxHeight: "400px",
              overflow: "hidden"
            }}
            dangerouslySetInnerHTML={{ __html: splitContent.hidden }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.95) 70%, white 100%)"
            }}
          />

          {/* Login prompt overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mx-4 text-center max-w-md border border-[#E4DFFF]">
              {/* Lock icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#6346FA] to-[#8B6DFF] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a2e] mb-2">
                Continue Reading
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Login to unlock the full article and access exclusive content
              </p>

              <button
                onClick={onLoginClick}
                className="w-full bg-gradient-to-r from-[#6346FA] to-[#8B6DFF] text-white py-3 px-6 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:from-[#5639E0] hover:to-[#7B5DF0]"
              >
                Login to Read Full Article
              </button>

              <p className="mt-4 text-xs text-gray-500">
                Free access with email verification
              </p>
            </div>
          </div>
        </div>}
    </div>
  );
};
export default SingleknowledgeCenterContent;
