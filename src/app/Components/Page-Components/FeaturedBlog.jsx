"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from '@/app/Data/Articlesdata';
import Image from "next/image";

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

    const calculateReadingTime = (description) => {
        if (!description) return "5 min read";
        const text = description.replace(/<[^>]*>/g, '');
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);
        return `${readingTime} min read`;
    };

    const fallbackFeaturedBlogs = [
        {
            image: "/images/featured-blog.webp",
            courseName: "Digital Marketing",
            title: "Master Digital Marketing in 2024: Complete Roadmap",
            description: '<p><span style=\"background-color: transparent;\">Acquiring professional IT skills have become essential for students and working professionals who want to build successful careers in technology-driven fields. With the growing demand for skilled IT professionals, Mohali and Chandigarh have emerged as top education hubs offering advanced and industry-focused IT courses.</span></p>',
            duration: "8 min read",
        },
        {
            image: "/images/web-devlopment.webp",
            courseName: "Web Development",
            title: "From Zero to Full-Stack Developer: Your Journey St",
            description: `<p>Building a portfolio is one of the most crucial steps in shaping a successful IT career. Whether you're pursuing digital marketing, web development, designing, data science, or any other technical field, knowing how to create an IT portfolio early can dramatically increase your chances of landing internships, freelance projects, and full-time jobs.&nbsp;</p>`,
            duration: "8 min read",
        },
        {
            image: "/images/ai-tech.webp",
            courseName: "AI & Tech",
            title: "AI Revolution: Skills You Need to Stay Relevant",
            description: `<p>The logistics and transportation industry is the backbone of global trade. Every product you see in stores or use daily has gone through a long supply chain journey. At the center of this system are truck dispatchers, the professionals responsible for booking loads, coordinating with drivers, and ensuring smooth deliveries. With the rising demand for efficient logistics worldwide, the role of a dispatcher has become highly valued, making a <a href=\"https://campus.b2bcampus.com/truck-dispatching/\"><strong>truck dispatching course</strong></a> one of the smartest career choices today.</p>`,
            duration: "8 min read",
        },
    ];

    const featuredBlogs = blogs.length >= 3
        ? blogs.slice(0, 3).map(blog => ({
            image: blog.imageUrl || "/images/featured-blog.webp",
            courseName: blog.pageDescription || "Blog",
            title: blog.heading || "",
            description : blog.description || '',
            duration: calculateReadingTime(blog.description),
            slug: blog.slugUrl || blog.id
        }))
        : fallbackFeaturedBlogs;


    const DurationIcon = () => (
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1241_2003)">
                <path d="M7.9987 14.6667C11.6806 14.6667 14.6654 11.6819 14.6654 8.00004C14.6654 4.31814 11.6806 1.33337 7.9987 1.33337C4.3168 1.33337 1.33203 4.31814 1.33203 8.00004C1.33203 11.6819 4.3168 14.6667 7.9987 14.6667Z" stroke="#6A7282" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 4V8L10.6667 9.33333" stroke="#6A7282" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs><clipPath id="clip0_1241_2003"><rect width={16} height={16} fill="white" /></clipPath></defs>
        </svg>
    );


   console.log(featuredBlogs,'featuredBlogs');
   

    return (
        <div className="main-bg px-[0] sm:px-[16px] md:px-[40px] lg:px-[64px] xl:px-[100px]">
            <div className="cus_container">
                {/* featured block code start here */}
                <div className="main_grid_custom_blog pb-[40px] sm:pb-[50px] md:pb-[60px] lg:pb-[75px] pt-6 md:pt-12">
                    <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[24px] text-[#0A0A0A] font-semibold sm:font-normal leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[36px] mb-[21px] text-center sm:text-left">
                        {title}
                    </h2>
                    {loading ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="h-[700px] skeleton rounded-2xl"></div>
                            <div className="h-[700px] skeleton rounded-2xl"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* LEFT CARD */}
                            {featuredBlogs[0] && (
                                <Link
                                    href={featuredBlogs[0].slug ? `/blog/${featuredBlogs[0].slug}` : '#'}
                                    className="bg-white  group h-full cursor-pointer rounded-2xl overflow-hidden shadow-[0_7px_29px_rgba(100,100,111,0.2)] transition-all duration-300 hover:-translate-y-2">
                                    <img src={featuredBlogs[0].image} alt={featuredBlogs[0].title} className="w-full h-[260px] md:h-[320px] object-cover" />
                                    <div className="p-6">
                                        {/* <span className="inline-block transition-all duration-300 ease-in-out text-[#6346FA] group-hover:text-[#fff] bg-[#E4E0FC] group-hover:bg-[#000] text-sm px-3 py-1 rounded-lg mb-3">{featuredBlogs[0].courseName}</span> */}
                                        <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] mb-2">
                                            {featuredBlogs[0].title}
                                        </h3>
                                        <p
                                            className="text-base lg:text-lg line-clamp-8 pt-3"
                                            dangerouslySetInnerHTML={{ __html: featuredBlogs[0].description }}
                                        >
                                        </p>
                                        <p className="text-gray-500 text-[12px] pt-3 flex items-center gap-[5px] sm:text-[13px] md:text-[14px] lg:text-[14px]">
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
                                        <Image width={1000} height={500} src={blog.image} alt={blog.title} className="w-full h-[150px] object-cover" />
                                        <div className="p-5">
                                            {/* <span className="inline-block transition-all duration-300 ease-in-out text-[#6346FA] group-hover:text-[#fff] bg-[#E4E0FC] group-hover:bg-[#000] text-xs px-3 py-1 rounded-lg mb-2">{blog.courseName}</span> */}
                                            <h4 className="text-[18px] lg:text-[18px] 2xl:text-2xl font-normal  mb-1 group-hover:text-[#6346FA] py-[10px]">
                                                {blog.title}
                                            </h4>
                                            <p
                                                className="text-base lg:text-lg line-clamp-2"
                                                dangerouslySetInnerHTML={{ __html: blog.description }}
                                            >
                                            </p>
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
