"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import SingleBlogCareer from "./SingleBlogCareer";
import Link from "next/link";
import Contactfrom from "./Contactfrom";
import EnrollModal from "../UiUx/EnrollModal";
import { hasEnrollmentToken } from "@/lib/enrollment";

const SingleDetailBlogContent = ({ blog }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    // Check login status
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

    // Talk to Career Expert svg
    const talkToCareer = (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1266_3794)">
                <path
                    d="M5.26536 13.3333C6.53775 13.986 8.00142 14.1628 9.39262 13.8318C10.7838 13.5009 12.0111 12.6839 12.8532 11.5281C13.6953 10.3723 14.097 8.9538 13.9858 7.5281C13.8745 6.1024 13.2578 4.7633 12.2466 3.75212C11.2354 2.74093 9.89629 2.12416 8.47059 2.01293C7.04489 1.90171 5.62635 2.30335 4.47058 3.14549C3.31481 3.98762 2.49783 5.21486 2.16685 6.60607C1.83587 7.99727 2.01266 9.46094 2.66536 10.7333L1.33203 14.6667L5.26536 13.3333Z"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1266_3794">
                    <rect width={16} height={16} fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    const viewAllCareer = (
        <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black group-hover:text-white transition"
        >
            <g clipPath="url(#clip0_1266_3798)">
                <path
                    d="M8 4.66669V14"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M1.9987 12C1.82189 12 1.65232 11.9298 1.52729 11.8047C1.40227 11.6797 1.33203 11.5101 1.33203 11.3333V2.66667C1.33203 2.48986 1.40227 2.32029 1.52729 2.19526C1.65232 2.07024 1.82189 2 1.9987 2H5.33203C6.03927 2 6.71755 2.28095 7.21765 2.78105C7.71775 3.28115 7.9987 3.95942 7.9987 4.66667C7.9987 3.95942 8.27965 3.28115 8.77975 2.78105C9.27984 2.28095 9.95812 2 10.6654 2H13.9987C14.1755 2 14.3451 2.07024 14.4701 2.19526C14.5951 2.32029 14.6654 2.48986 14.6654 2.66667V11.3333C14.6654 11.5101 14.5951 11.6797 14.4701 11.8047C14.3451 11.9298 14.1755 12 13.9987 12H9.9987C9.46826 12 8.95956 12.2107 8.58448 12.5858C8.20941 12.9609 7.9987 13.4696 7.9987 14C7.9987 13.4696 7.78798 12.9609 7.41291 12.5858C7.03784 12.2107 6.52913 12 5.9987 12H1.9987Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1266_3798">
                    <rect width={16} height={16} fill="white" />
                </clipPath>
            </defs>
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

    // Key Takeaways
    const keyTakeway = (
        <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16.6654 5L7.4987 14.1667L3.33203 10"
                stroke="#6346FA"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
    // takeaways  data
    const takeaways = [
        "Master the fundamentals before diving deep",
        "Practice with real-world projects",
        "Build a strong portfolio",
        "Network with industry professionals",
        "Stay updated with latest trends"
    ];

    const blogContents = [
        {
            title: "Essential Tools & Resources",
            text:
                "Success in digital marketing requires not just skills, but also the right tools and resources. Here are the essentials you need to get started and excel in your journey."
        },
        {
            title: "Career Opportunities",
            text:
                "The demand for skilled professionals in digital marketing continues to grow exponentially. Companies across industries are actively hiring, and the career prospects are excellent."
        }
    ];

    // If no blog data, show default/fallback content
    if (!blog) {
        return (
            <div className="main-bg">
                <div className="cus_container pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]">
                    <div className="px-2 sm:px-2">
                        <div className="py-8 sm:py-12">
                            <p className="text-center text-gray-600">Loading content...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Extract data from blog
    const heading = blog.heading || "";
    const description = blog.description || "";
    const imageUrl = blog.imageUrl || "/images/web-devlopment.webp";
    const createdAt = blog.createdAt
        ? new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        : "December 24, 2024";

    // Calculate reading time
    const wordCount = description.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200) || 8;

    return (
        <div className="main-bg">
            <div className="cus_container pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]">
                <div className="px-2 sm:px-2 ">
                    <div className=" py-8 sm:py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            <div className="lg:col-span-2 ">
                                <div className="pb-[24px]">
                                    <h1 className="text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-regular text-[#0A0A0A]">
                                        {heading}
                                    </h1>

                                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                                        <span className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] text-[#4A5565]">
                                            {readBlogSvg} {readingTime} min read
                                        </span>
                                        <span className="flex gap-[6px] sm:gap-[7px] md:gap-[8px] text-[12px] sm:text-[14px] md:text-[16px] leading-[16px] sm:leading-[20px] md:leading-[24px] text-[#4A5565]">
                                            {celenderSvg} {createdAt}
                                        </span>
                                    </div>
                                </div>

                                <div className="rounded-[16px] overflow-hidden shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] mb-[48px]">
                                    <Image
                                        src={imageUrl}
                                        alt={heading}
                                        width={1200}
                                        height={600}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className="bg-white rounded-2xl p-[32px] sm:p-6 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)]">
                                    <h3 className="text-lg font-regular mb-4">Key Takeaways</h3>
                                    <ul className="space-y-3 text-sm sm:text-base text-gray-600">
                                        {takeaways.map((item, index) =>
                                            <li key={index} className="flex gap-2 items-start">
                                                <span className="text-[#6346FA]">
                                                    {keyTakeway}
                                                </span>
                                                <span>
                                                    {item}
                                                </span>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="single_blog_man_content pt-[40px]">
                                     <div
                                            className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] space-y-2"
                                            dangerouslySetInnerHTML={{ __html: description }}
                                        />
                                    {/* {isLoggedIn
                                        ? 
                                        <div
                                            className="prose prose-lg max-w-none text-[#364153] text-[14px] leading-[22px] sm:text-[14px] sm:leading-[24px] md:text-[16px] md:leading-[24px] lg:text-[16px] lg:leading-[24px] space-y-2"
                                            dangerouslySetInnerHTML={{ __html: description }}
                                        />
                                        : 
                                        <ContentWithBlur
                                            description={description}
                                            onLoginClick={() => setShowLoginModal(true)}
                                        />} */}
                                </div>
                            </div>

                            <div className="space-y-6 lg:sticky lg:top-[50px] self-start">
                                <div>
                                    <Contactfrom singleColumn={true} description={false}  showContact={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SingleBlogCareer
                    title="Build a Career in Digital Marketing?"
                    description="Industry-Designed Courses for Job-Ready Skills"
                    book_free="Explore Related Course"
                />
            </div>

            {/* Login Modal */}
            <EnrollModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLoginSuccess={handleLoginSuccess}
            />
        </div>
    );
};

// Separate component to handle content splitting (needs to run in browser)
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

    // Function to split HTML content
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

export default SingleDetailBlogContent;
