"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogDetailsHead from '@/app/Components/Page-Components/BlogDetailsHead';
import FaqSection from '@/app/Components/Page-Components/FaqSection';
import Journeywithb2b2 from '@/app/Components/Page-Components/Journeywithb2b2';
import SingleDetailBlogContent from '@/app/Components/Page-Components/SingleDetailBlogContent';
import { fetchBlogBySlug } from '@/app/Data/Articlesdata';



const BlogDetail = () => {
    const params = useParams();
    const slug = params?.slug;
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const loadBlog = async () => {
            if (!slug) return;

            try {
                setLoading(true);
                setError(null);
                const res = await fetchBlogBySlug(slug);
                setBlog(res?.blog || null);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog");
            } finally {
                setLoading(false);
            }
        };

        loadBlog();
    }, [slug]);

    const faq_data = [
        {
            q: "What is Industrial Training?",
            a: "Industrial Training is a practical, job-oriented training program where students learn real industry tools, workflows, and skills through hands-on practice and live projects."
        },
        {
            q: "Is this Industrial Training suitable for beginners?",
            a: "Yes. This program is designed for beginners as well as intermediate learners. We start from fundamentals and gradually move to advanced, industry-level concepts."
        },
        {
            q: "What domains are covered in Industrial Training?",
            a: "We offer multiple training domains including Graphic Designing, Video Editing, Web Development, Full Stack Development, Python/Java, Web Designing, IoT, AI, WordPress, and Digital Marketing."
        },
        {
            q: "Will I get hands-on practical experience?",
            a: "Absolutely. The training focuses on 100% practical learning with real tools, assignments, case studies, and live industry projects."
        },
        {
            q: "Do you provide live projects and real client work?",
            a: "Yes. Students work on live projects and real-world scenarios that help them understand actual industry requirements."
        },
        {
            q: "How does this training help in career growth?",
            a: "Industrial Training helps you become job-ready by building practical skills, improving confidence, creating a strong portfolio, and preparing you for real interviews."
        },
        {
            q: "Will I receive a certificate after completion?",
            a: "Yes. After successfully completing the training, you will receive an industry-recognized certification."
        },
        {
            q: "Do you provide placement or career support?",
            a: "Yes. We offer career guidance, resume building, interview preparation, mock interviews, and placement assistance through our industry network."
        },
        {
            q: "Who will be my trainers?",
            a: "You will be trained by experienced industry professionals who follow modern teaching methods and provide continuous mentoring."
        },
        {
            q: "What makes your Industrial Training program different?",
            a: "Our program stands out due to practical-first learning, real projects, industry-standard tools, personal mentoring, and strong focus on portfolio and career readiness."
        },
        {
            q: "How long is the Industrial Training duration?",
            a: "The duration typically ranges from 3 to 6 months, depending on the selected domain and learning pace."
        },
        {
            q: "How can I enroll in the Industrial Training program?",
            a: "You can enroll by contacting us, attending a counseling session, selecting your preferred domain and batch, and starting your training journey."
        }
    ];

    if (loading) {
        return (
            <div>
                <div className='h-[110px] w-full skeleton'>

                </div>
                <div className="cus_container pb-[40px] sm:pb-[40px] md:pb-[48px] lg:pb-[60px] xl:pb-[70px]">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 pt-16">
                        <div className="lg:col-span-2 ">
                            <div className="w-[90%] max-w-[1001px] m-auto h-[2000px] rounded-2xl skeleton"></div>
                        </div>
                        <div>
                            <div className="w-[90%] me-auto h-[2000px] rounded-2xl skeleton"></div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-lg text-red-600">{error || "Blog not found"}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <head>
                <title>{blog.pageTitle}</title>
                <meta name="description" content={blog.pageDescription} />
            </head>
            <BlogDetailsHead backbtn="Back to Blogs" share_btn="Share" backUrl="/blogs" />
            <SingleDetailBlogContent blog={blog} />
            <FaqSection faq_data={faq_data} />
            <Journeywithb2b2 PlacedStudent={false} />
        </div>
    );
};

export default BlogDetail;


