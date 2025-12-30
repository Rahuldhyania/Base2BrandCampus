"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from '@/app/Data/Articlesdata';

const FeaturedBlog = ({ title }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                setLoading(true);
                const res = await fetchBlogs(1, 3);
                setBlogs(res?.blogs || []);
            } catch (error) {
                console.error("Error fetching featured blogs:", error);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    // Calculate reading time
    const calculateReadingTime = (description) => {
        if (!description) return "5 min read";
        const text = description.replace(/<[^>]*>/g, '');
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);
        return `${readingTime} min read`;
    };
    const BlogSkill = [
        {
            icon: (
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.332 3.33334H11.6654C9.82442 3.33334 8.33203 4.82573 8.33203 6.66668V33.3333C8.33203 35.1743 9.82442 36.6667 11.6654 36.6667H28.332C30.173 36.6667 31.6654 35.1743 31.6654 33.3333V6.66668C31.6654 4.82573 30.173 3.33334 28.332 3.33334Z" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 30H20.0167" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Digital Marketing",
        },
        {
            icon: (
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.668 30L36.668 20L26.668 10" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.332 10L3.33203 20L13.332 30" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Web Development",
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
            title: "Freelancing",
        },
        {
            icon: (
                <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.6654 11.6667L22.4987 25.8333L14.1654 17.5L3.33203 28.3333" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.668 11.6667H36.668V21.6667" stroke="#6346FA" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Career Growth",
        },
    ];

    // Fallback featured blogs if API data not available
    const fallbackFeaturedBlogs = [
        {
            image: "/images/featured-blog.webp",
            courseName: "Digital Marketing",
            title: "Master Digital Marketing in 2024: Complete Roadmap",
            duration: "8 min read",
        },
        {
            image: "/images/web-devlopment.webp",
            courseName: "Web Development",
            title: "From Zero to Full-Stack Developer: Your Journey St",
            duration: "8 min read",
        },
        {
            image: "/images/ai-tech.webp",
            courseName: "AI & Tech",
            title: "AI Revolution: Skills You Need to Stay Relevant",
            duration: "8 min read",
        },
    ];

    // Use API data if available, otherwise fallback
    const featuredBlogs = blogs.length >= 3 
        ? blogs.slice(0, 3).map(blog => ({
            image: blog.imageUrl || "/images/featured-blog.webp",
            courseName: blog.pageDescription || "Blog",
            title: blog.heading || "",
            duration: calculateReadingTime(blog.description),
            slug: blog.slugUrl || blog.id
        }))
        : fallbackFeaturedBlogs;


    // assign blogs duration svg icon
    const DurationIcon = () => (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1241_2003)">
                <path d="M7.9987 14.6667C11.6806 14.6667 14.6654 11.6819 14.6654 8.00004C14.6654 4.31814 11.6806 1.33337 7.9987 1.33337C4.3168 1.33337 1.33203 4.31814 1.33203 8.00004C1.33203 11.6819 4.3168 14.6667 7.9987 14.6667Z" stroke="#6A7282" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 4V8L10.6667 9.33333" stroke="#6A7282" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs><clipPath id="clip0_1241_2003"><rect width={16} height={16} fill="white" /></clipPath></defs>
        </svg>
    );




    return (
        <div className="main-bg px-[0] sm:px-[16px] md:px-[40px] lg:px-[64px] xl:px-[100px]">
            <div className="cus_container">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px] py-[56px]">
                    {BlogSkill.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white transition-all duration-300 ease-in-out cursor-pointer p-6 rounded-[14px] shadow-sm hover:shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] flex flex-col items-center gap-4">
                            {item.icon}
                            <h3 className=" text-center text-[#0A0A0A] font-regular text-[14px] leading-[18px] sm:text-[15px] sm:leading-[19px] md:text-[16px] md:leading-[20px] lg:text-[18px] lg:leading-[22px]">
                                {item.title}
                            </h3>

                        </div>
                    ))}
                </div>

                {/* featured block code start here */}
                <div className="main_grid_custom_blog pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[75px]">
                    <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] text-[#0A0A0A] font-semibold sm:font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[36px] mb-[21px] text-center sm:text-left">
                        {title}
                    </h2>
                    {loading ? (
                        <div className="text-center py-12">
                            <p className="text-lg text-gray-600">Loading featured blogs...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* LEFT CARD */}
                            {featuredBlogs[0] && (
                                <Link 
                                    href={featuredBlogs[0].slug ? `/blog/${featuredBlogs[0].slug}` : '#'} 
                                    className="bg-white group cursor-pointer rounded-2xl overflow-hidden shadow-[0_7px_29px_rgba(100,100,111,0.2)] transition-all duration-300 hover:-translate-y-2">
                                    <img src={featuredBlogs[0].image} alt={featuredBlogs[0].title} className="w-full h-[260px] md:h-[320px] object-cover" />
                                    <div className="p-6">
                                        <span className="inline-block transition-all duration-300 ease-in-out text-[#6346FA] group-hover:text-[#fff] bg-[#E4E0FC] group-hover:bg-[#000] text-sm px-3 py-1 rounded-lg mb-3">{featuredBlogs[0].courseName}</span>
                                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] mb-2">
                                            {featuredBlogs[0].title}
                                        </h3>
                                        <p className="text-gray-500 text-[12px] flex items-center gap-[5px] sm:text-[13px] md:text-[14px] lg:text-[14px]">
                                            <DurationIcon />
                                            {featuredBlogs[0].duration}
                                        </p>
                                    </div>
                                </Link>
                            )}

                            {/* RIGHT COLUMN */}
                            <div className="flex flex-col gap-6">
                                {featuredBlogs.slice(1).map((blog, index) => (
                                    <Link 
                                        href={blog.slug ? `/blog/${blog.slug}` : '#'} 
                                        key={index} 
                                        className="bg-white group cursor-pointer rounded-2xl overflow-hidden shadow-[0_7px_29px_rgba(100,100,111,0.2)] transition-all duration-300 hover:-translate-y-2">
                                        <img src={blog.image} alt={blog.title} className="w-full h-[150px] object-cover" />
                                        <div className="p-5">
                                            <span className="inline-block transition-all duration-300 ease-in-out text-[#6346FA] group-hover:text-[#fff] bg-[#E4E0FC] group-hover:bg-[#000] text-xs px-3 py-1 rounded-lg mb-2">{blog.courseName}</span>
                                            <h4 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-normal leading-[18px] sm:leading-[20px] md:leading-[20px] lg:leading-[20px] mb-1 group-hover:text-[#6346FA] py-[10px]">
                                                {blog.title}
                                            </h4>
                                            <p className="text-gray-500 text-[12px] sm:text-[13px] md:text-[14px] flex items-center gap-[5px] lg:text-[14px]">
                                                <DurationIcon />
                                                {blog.duration}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    )}
                </div>



            </div>
        </div>
    );
};

export default FeaturedBlog;
