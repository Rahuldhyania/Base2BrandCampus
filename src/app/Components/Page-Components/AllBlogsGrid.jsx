"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useMemo } from "react";
import { fetchBlogs } from "@/app/Data/Articlesdata";
import Buttons from "../UiUx/Buttons";

const AllBlogsGrid = ({ blog_title }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBlog, setShowBlog] = useState(12);
  const [tottalpage, setTotalpage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setcurrentCategory] = useState('');
  const [activeid, setsctiveid] = useState(1)
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetchBlogs(currentPage, 15, currentCategory);
        setTotalpage(res.totalPages)
        setBlogs(res?.blogs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [currentPage, currentCategory]);

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
  const BlogSkill = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <rect width="40" height="40" fill="none" />
          <path fill="#b46aff" d="m18 7l-1.41-1.41l-6.34 6.34l1.41 1.41zm4.24-1.41L11.66 16.17L7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41L6 19l1.41-1.41L1.83 12z" />
        </svg>
      ),
      title: "",
      id: 1
    },
    {
      icon: (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.332 3.33334H11.6654C9.82442 3.33334 8.33203 4.82573 8.33203 6.66668V33.3333C8.33203 35.1743 9.82442 36.6667 11.6654 36.6667H28.332C30.173 36.6667 31.6654 35.1743 31.6654 33.3333V6.66668C31.6654 4.82573 30.173 3.33334 28.332 3.33334Z" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 30H20.0167" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Digital Marketing",
      id: 2
    },
    {
      icon: (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.668 30L36.668 20L26.668 10" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.332 10L3.33203 20L13.332 30" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Web Development",
      id: 3
    },
    {
      icon: (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8.33331C20.002 7.66669 19.8706 7.00641 19.6137 6.3913C19.3567 5.7762 18.9794 5.21868 18.5038 4.75155C18.0283 4.28441 17.4641 3.91709 16.8445 3.67119C16.2249 3.42529 15.5623 3.30577 14.8959 3.31966C14.2294 3.33355 13.5724 3.48057 12.9636 3.75208C12.3548 4.02359 11.8064 4.4141 11.3507 4.90065C10.895 5.38719 10.5412 5.95995 10.3101 6.58523C10.079 7.21051 9.9753 7.87568 10.005 8.54164C9.02538 8.79353 8.11588 9.26505 7.34543 9.92049C6.57498 10.5759 5.96377 11.3981 5.55812 12.3247C5.15246 13.2513 4.96298 14.2581 5.00402 15.2688C5.04507 16.2795 5.31557 17.2676 5.79504 18.1583C4.95201 18.8432 4.28909 19.7237 3.86394 20.7232C3.4388 21.7227 3.26431 22.811 3.35565 23.8933C3.44699 24.9756 3.8014 26.0192 4.38805 26.9333C4.9747 27.8475 5.77582 28.6044 6.72171 29.1383C6.6049 30.042 6.67461 30.9601 6.92652 31.8358C7.17843 32.7116 7.6072 33.5264 8.18635 34.2299C8.7655 34.9334 9.48273 35.5108 10.2937 35.9262C11.1048 36.3417 11.9923 36.5865 12.9017 36.6455C13.811 36.7045 14.7228 36.5765 15.5807 36.2693C16.4386 35.9621 17.2244 35.4824 17.8896 34.8596C18.5549 34.2368 19.0853 33.4842 19.4483 32.6484C19.8113 31.8126 19.9991 30.9112 20 30V8.33331Z" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 8.33331C19.9981 7.66669 20.1294 7.00641 20.3864 6.3913C20.6433 5.7762 21.0207 5.21868 21.4962 4.75155C21.9718 4.28441 22.536 3.91709 23.1556 3.67119C23.7752 3.42529 24.4377 3.30577 25.1042 3.31966C25.7707 3.33355 26.4276 3.48057 27.0365 3.75208C27.6453 4.02359 28.1937 4.4141 28.6494 4.90065C29.105 5.38719 29.4588 5.95995 29.6899 6.58523C29.921 7.21051 30.0248 7.87568 29.995 8.54164C30.9747 8.79353 31.8842 9.26505 32.6546 9.92049C33.4251 10.5759 34.0363 11.3981 34.442 12.3247C34.8476 13.2513 35.0371 14.2581 34.996 15.2688C34.955 16.2795 34.6845 17.2676 34.205 18.1583C35.0481 18.8432 35.711 19.7237 36.1361 20.7232C36.5613 21.7227 36.7358 22.811 36.6444 23.8933C36.5531 24.9756 36.1987 26.0192 35.612 26.9333C35.0254 27.8475 34.2242 28.6044 33.2784 29.1383C33.3952 30.042 33.3255 30.9601 33.0735 31.8358C32.8216 32.7116 32.3929 33.5264 31.8137 34.2299C31.2346 34.9334 30.5173 35.5108 29.7063 35.9262C28.8953 36.3417 28.0077 36.5865 27.0984 36.6455C26.1891 36.7045 25.2773 36.5765 24.4194 36.2693C23.5615 35.9621 22.7756 35.4824 22.1104 34.8596C21.4452 34.2368 20.9147 33.4842 20.5517 32.6484C20.1888 31.8126 20.001 30.9112 20 30V8.33331Z" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 21.6667C23.6007 21.1744 22.3789 20.2783 21.4889 19.0917C20.5989 17.905 20.0808 16.4811 20 15C19.9192 16.4811 19.4011 17.905 18.5111 19.0917C17.6211 20.2783 16.3993 21.1744 15 21.6667" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M29.332 10.8333C29.7354 10.1343 29.9636 9.34802 29.997 8.54166" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.0039 8.54166C10.0369 9.34788 10.2645 10.1341 10.6672 10.8333" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.79688 18.16C6.10177 17.9117 6.42805 17.6908 6.77187 17.5" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33.2305 17.5C33.5743 17.6908 33.9006 17.9117 34.2055 18.16" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.001 30C8.85237 30.0006 7.7231 29.7043 6.72266 29.14" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M33.2783 29.14C32.2779 29.7043 31.1486 30.0006 30 30" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "AI & Tech",
      id: 4
    },
    {
      icon: (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.5013 27.5C5.0013 29.6 4.16797 35.8334 4.16797 35.8334C4.16797 35.8334 10.4013 35 12.5013 32.5C13.6846 31.1 13.668 28.95 12.3513 27.65C11.7035 27.0317 10.8501 26.6744 9.95501 26.6468C9.0599 26.6191 8.1861 26.9229 7.5013 27.5Z" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 25L15 20C15.8869 17.699 17.0037 15.4934 18.3333 13.4167C20.2753 10.3116 22.9794 7.75508 26.1883 5.99015C29.3973 4.22522 33.0044 3.31061 36.6667 3.33333C36.6667 7.86666 35.3667 15.8333 26.6667 21.6667C24.5615 22.9979 22.3281 24.1146 20 25Z" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.0013 20H6.66797C6.66797 20 7.58464 14.95 10.0013 13.3334C12.7013 11.5334 18.3346 13.3334 18.3346 13.3334" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 25V33.3333C20 33.3333 25.05 32.4167 26.6667 30C28.4667 27.3 26.6667 21.6667 26.6667 21.6667" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Uncategorized",
      id: 5
    },
    {
      icon: (
        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.6654 11.6667L22.4987 25.8333L14.1654 17.5L3.33203 28.3333" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26.668 11.6667H36.668V21.6667" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Career Growth",
      id: 6
    },
  ];
  const handelloadmore = () => {
    setShowBlog(showBlog + 6)
  }
  const getPages = () => {
    const total = tottalpage;
    const pages = [];

    if (total <= 4) {
      for (let i = 1; i <= total; i++) pages.push(i);
      return pages;
    }

    let start = currentPage;

    if (start > total - 3) {
      start = total - 3;
    }

    if (currentPage === 1) {
      return [1, 2, "...", total - 1, total];
    }

    pages.push(start, start + 1, "...", total - 1, total);

    return pages;
  };
  const displayBlogs = blogs.length > 0 ? blogs : gridBlogs;

  return (
    <div className="main-bg pt-[58px] px-0 sm:px-[0px] md:px-10 lg:px-[100px] mt-6">
      <div className="cus_container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[16px]">
          {BlogSkill.map((item, index) => {
            const isactive = item.id === activeid
            return (
              <div
                key={index}
                className={`bg-white ${isactive ? "bg-primary" : 'bg-white'} transition-all duration-300 ease-in-out cursor-pointer p-6 rounded-[14px] shadow-sm hover:shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] flex flex-col items-center gap-4`}
                onClick={() => {
                  setcurrentCategory(item.title)
                  setsctiveid(item.id)
                }}
              >
                <div className={isactive ? "icon-active" : "icon"}>
                  {item.icon}
                </div>
                <h3 className={`text-center ${isactive ? 'text-white' : 'text-[#0A0A0A]'} font-regular text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px] lg:text-[18px] lg:leading-[22px]`}>
                  {item.title === "" ? "All"  : item.title === 'Uncategorized' ? 'Freelancing' : item.title }
                </h3>

              </div>
            )
          })}
        </div>
      </div>

      <div className="cus_container pt-6 relative" >
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
          <div id="allblog">
            <div className=" grid_blogs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[30px]">
              {displayBlogs.slice(0, showBlog).map((blog, index) => {
                const blogImage = blog.imageUrl || blog.image || "";
                const blogTitle = blog.heading || blog.title || "";
                const blogCategory = blog.pageDescription || blog.course || "Blog";
                const readingTime = blog.description
                  ? calculateReadingTime(blog.description)
                  : blog.duration || "5 min read";
                const blogSlug = blog.slugUrl || blog.id;

                return (
                  <Link
                    href={`/blog/${blogSlug}`}
                    key={blog.id || index}
                    className="cursor-pointer group transition-all duration-300 ease-in-out bg-white rounded-xl overflow-hidden shadow-[0px_-2px_19px_0px_#6346FA33] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)]"
                  >
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
                    </div>

                    <div className="py-6 px-6">
                      <h2
                        className="text-black hover:text-(--primary) text-base lg:text-lg xl:text-xl 2xl:text-[22px] line-clamp-2"
                      >
                        {blogTitle}
                      </h2>
                      <p className="text-base text-black line-clamp-2 pt-2"
                        dangerouslySetInnerHTML={{ __html: blog.description }}
                      />
                      <div className="flex justify-between pt-4">
                        <p className="text-[#6A7282] text-[14px] leading-[20px] flex items-center gap-[4px]">
                          {durationSvg} {readingTime}
                        </p>
                        <div
                          className="flex items-center text-xl text-primary"
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
                              stroke="var(--primary)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.3125 4.29761L16.3293 10.3144L10.3125 16.3311"
                              stroke="var(--primary)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>


            <div className="flex gap-3 w-fit m-auto py-4 px-18 rounded-full border-[3px] border-primary bg-white mt-6" >
              <div className="flex gap-2 items-center">
                {/* Previous */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="px-3 py-1 border rounded disabled:opacity-40"
                >
                  Prev
                </button>

                {/* Pages */}
                {getPages().map((page, index) =>
                  page === "..." ? (
                    <span key={index} className="px-2">...</span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentPage(page)
                        document.getElementById("allblog").focus().scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`px-3 py-1 border rounded ${currentPage === page ? "bg-black text-white" : ""
                        }`}
                    >
                      {page}
                    </button>
                  )
                )}

                {/* Next */}
                <button
                  disabled={currentPage === blogs.totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="px-3 py-1 border rounded disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
            {/* {
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
            } */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogsGrid;
