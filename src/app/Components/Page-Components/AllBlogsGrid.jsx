"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { fetchBlogs } from "@/app/Data/Articlesdata";
import Buttons from "../UiUx/Buttons";

const AllBlogsGrid = ({ blog_title }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBlog, setShowBlog] = useState(6)
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetchBlogs(1, 21);
        setBlogs(res?.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  // Calculate reading time from description
  const calculateReadingTime = (description) => {
    if (!description) return "5 min read";
    const text = description.replace(/<[^>]*>/g, "");
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    return `${readingTime} min read`;
  };

  const durationSvg = (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 4V8L10.6667 9.33333"
        stroke="#6A7282"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const gridBlogs = [
    {
      image: "/images/digital-blog.webp",
      title: "Master Digital Marketing in 2024: Complete Roadmap",
      course: "Digital Marketing",
      duration_svg: (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V8L10.6667 9.33333"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      duration: "8 min read",
      article_btn: "Read Article",
    },
    {
      image: "/images/web-devlopment.webp",
      title: "From Zero to Full-Stack Developer: Your Journey Starts Here",
      course: "Web Development",
      duration_svg: (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V8L10.6667 9.33333"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      duration: "8 min read",
      article_btn: "Read Article",
    },
    {
      image: "/images/ai-tech.webp",
      title: "AI Revolution: Skills You Need to Stay Relevant",
      course: "AI & Tech",
      duration_svg: (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V8L10.6667 9.33333"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      duration: "8 min read",
      article_btn: "Read Article",
    },
    {
      image: "/images/freelancing.webp",
      title: "Freelancing 101: Build Your Dream Remote Career",
      course: "Freelancing",
      duration_svg: (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V8L10.6667 9.33333"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      duration: "8 min read",
      article_btn: "Read Article",
    },
    {
      image: "/images/career-growth.webp",
      title: "10 Career Strategies for Rapid Growth in Tech",
      course: "Career Growth",
      duration_svg: (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V8L10.6667 9.33333"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      duration: "8 min read",
      article_btn: "Read Article",
    },
    {
      image: "/images/become-career.webp",
      title: "Online Learning: Transform Your Career in 6 Months",
      course: "Online Growth",
      duration_svg: (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.9987 14.6666C11.6806 14.6666 14.6654 11.6818 14.6654 7.99992C14.6654 4.31802 11.6806 1.33325 7.9987 1.33325C4.3168 1.33325 1.33203 4.31802 1.33203 7.99992C1.33203 11.6818 4.3168 14.6666 7.9987 14.6666Z"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 4V8L10.6667 9.33333"
            stroke="#6A7282"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      duration: "8 min read",
      article_btn: "Read Article",
    },
  ];
  const handelloadmore = () => {
    setShowBlog(showBlog + 3)
  }
  // Use API data if available, otherwise fallback to static data
  const displayBlogs = blogs.length > 0 ? blogs : gridBlogs;

  return (
    <div className="main_blog pt-[58px] px-0 sm:px-[0px] md:px-10 lg:px-[100px]">
      <div className="cus_container">
        <h2 className="text-[#0A0A0A] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[36px] pb-[28px]">
          {blog_title}
        </h2>
        {loading ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">Loading blogs...</p>
          </div>
        ) : displayBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No blogs found.</p>
          </div>
        ) : (
          <div>
            <div className=" grid_blogs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[30px]">
              {displayBlogs.slice(0, showBlog).map((blog, index) => {
                const blogImage = blog.imageUrl || blog.image || "";
                const blogTitle = blog.heading || blog.title || "";
                const blogCategory = blog.pageDescription || blog.course || "Blog";
                const readingTime = blog.description
                  ? calculateReadingTime(blog.description)
                  : blog.duration || "5 min read";
                const blogSlug = blog.slugUrl || blog.id;
                console.log(displayBlogs, "displayBlogs")
                console.log(blogCategory, "blogCategory")

                return (
                  <Link
                    href={`/blog/${blogSlug}`}
                    key={blog.id || index}
                    className="cursor-pointer group transition-all duration-300 ease-in-out bg-white rounded-xl overflow-hidden shadow-[0px_-2px_19px_0px_#6346FA33] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]"
                  >
                    {/* Image */}
                    <div className="h-[215px] bg-gray-200 relative">
                      {blogImage && (
                        <Image
                          src={blogImage}
                          alt={blogTitle}
                          fill
                          className="object-cover"
                          placeholder="empty"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      )}

                      <div
                        className="
                                                transition-all duration-300 ease-in-out
                                                hidden gap-[4px]
                                                absolute
                                                bottom-[19px] left-[19px]      
                                                sm:bottom-[14px] sm:left-[14px]
                                                lg:bottom-[18px] lg:left-[18px]
                                                group-hover:flex items-center justify-center
                                                text-[#fff] font-regular
                                                text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px]
                                                hover:underline
                                                transition-all"
                      >
                        Read Article
                        <svg
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.29688 10.3145H16.3304"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10.3125 4.29761L16.3293 10.3144L10.3125 16.3311"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="py-[40px] px-[25px]">
                      {/* Meta */}
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3">
                        <span
                          className="
                                                    text-[#6346FA] group-hover:text-[#fff]
                                                    bg-[#E4E0FC99] group-hover:bg-[#000]
                                                    font-medium
                                                    text-[10px] sm:text-[11px] md:text-[12px]
                                                    leading-[14px] sm:leading-[15px] md:leading-[16px]
                                                    px-2 sm:px-[6px] md:px-[8px]
                                                    py-[3px] sm:py-[4px] md:py-[5px]
                                                    transition-all duration-300 ease-in-out
                                                    rounded-md sm:rounded-lg md:rounded-[8px]
                                                    whitespace-nowrap"
                        >
                          {blogCategory}
                        </span>
                      </div>

                      <h2
                        className="
                                                text-[#0A0A0A] group-hover:text-[#6346FA]
                                                font-medium
                                                text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]
                                                leading-[22px] md:leading-[24px] lg:leading-[34px] xl:leading-[34px]
                                                mb-3 md:mb-4
                                                line-clamp-2"
                      >
                        {blogTitle}
                      </h2>

                      <p className="text-[#6A7282] text-[14px] leading-[20px] flex items-center gap-[4px]">
                        {durationSvg} {readingTime}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
            {

              showBlog < displayBlogs.length && (
                <div className="pt-6">
                  <div className="w-fit m-auto " onClick={handelloadmore}>
                    <Buttons
                      btnname={'Load More'}
                      text_color={'text-white'}
                    />
                  </div>
                </div>
              )

            }
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogsGrid;
