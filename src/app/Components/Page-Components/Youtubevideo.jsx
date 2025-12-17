"use client";

import React, { useState } from "react";
import Title from "../UiUx/Title";
import youtube from '../../../../public/images/youtube.webp'
import Image from "next/image";

// Tabs
export const Coursesbtn = [
    { id: 1, btn: "All Courses" },
    { id: 4, btn: "Marketing & Bussiness" },
    { id: 2, btn: "Development" },
    { id: 3, btn: "Graphics" },
    { id: 5, btn: "Truck Dispatching" },
];

// All Videos
const allVideoCourses = [
    {
        id: 1,
        title: "React Tutorial",
        des: "Learn React step by step",
        category: "Development",
        videoLink: "https://www.youtube.com/watch?v=CP7Woi6SJKw",
    },
    {
        id: 2,
        title: "React Tutorial",
        des: "Learn React step by step",
        category: "Development",
        videoLink: "https://www.youtube.com/watch?v=mw7czS0khFc",
    },
    {
        id: 3,
        title: "UI/UX Design",
        des: "Create stunning interfaces",
        category: "Graphics",
        videoLink: "https://www.youtube.com/watch?v=TQvAz9DAoHs",
    },
    {
        id: 4,
        title: "Digital Marketing",
        des: "Grow your brand online",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=59K-fxaiOas&t=11s",
    },
    {
        id: 5,
        title: "Advanced JavaScript",
        des: "Master JS with real projects",
        category: "Development",
        videoLink: "https://www.youtube.com/watch?v=1HJNSGhKCcs&t=15s",
    },
    {
        id: 6,
        title: "Graphic Motion Design",
        des: "Animate your designs",
        category: "Graphics",
        videoLink: "https://www.youtube.com/watch?v=LuqZqP4nUqg",
    },
    {
        id: 7,
        title: "Next.js Tutorial",
        des: "Build React apps with Next.js",
        category: "Development",
        videoLink: "https://www.youtube.com/watch?v=57g_PY-bAvI&t=11s",
    },
    {
        id: 8,
        title: "Photoshop Basics",
        des: "Edit images like a pro",
        category: "Graphics",
        videoLink: "https://www.youtube.com/watch?v=ivJwUXjcEt0",
    },
    {
        id: 9,
        title: "SEO Marketing",
        des: "Boost your website traffic",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=WT5Egh-WPdg&t=1s",
    },

    {
        id: 10,
        title: "Truck Dispatching",
        des: "Boost your website traffic",
        category: "Truck Dispatching",
        videoLink: "https://www.youtube.com/watch?v=yVaIRbl-Bm8",
    },
    {
        id: 11,
        title: "Truck Dispatching",
        des: "Boost your website traffic",
        category: "Truck Dispatching",
        videoLink: "https://www.youtube.com/watch?v=QYWr2y0o6RU",
    },
    {
        id: 12,
        title: "Truck Dispatching",
        des: "Boost your website traffic",
        category: "Truck Dispatching",
        videoLink: "https://www.youtube.com/watch?v=NjL6LuZ1T-k",
    },
        {
        id: 13,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=53GuCL_Y5hg",
    },
    {
        id: 14,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=HJwRUpkgY3Q",
    },
//   sdfsad
        {
        id: 15,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Graphics",
        videoLink: "https://www.youtube.com/watch?v=G1Fr_3xvMF8",
    },
    
        {
        id: 16,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=LPJxf7yq8Ao",
    },
    
        {
        id: 17,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=f6Ma7Jsdiic",
    },
    
        {
        id: 18,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Marketing & Bussiness",
        videoLink: "https://www.youtube.com/watch?v=HJwRUpkgY3Q",
    },
        {
        id: 19,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Graphics",
        videoLink: "https://www.youtube.com/watch?v=1G4yvwvHyRU",
    },
        {
        id: 20,
        title: "Marketing & Bussiness",
        des: "Boost your website traffic",
        category: "Truck Dispatching",
        videoLink: "https://www.youtube.com/watch?v=9_Z_SavZPNM",
    },
    
];

// Helper Functions
const getYoutubeId = (url) => {
    const regex =
        /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

const getYoutubeEmbed = (url) => {
    const id = getYoutubeId(url);
    return id
        ? `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0`
        : null;
};

const getYoutubeThumbnail = (url) => {
    const id = getYoutubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

export default function Youtubevideo() {
    const [activeTab, setActiveTab] = useState("All Courses");
    const [filteredCourses, setFilteredCourses] = useState(allVideoCourses);
    const [playingVideo, setPlayingVideo] = useState(null);
    const [mobileVisibleCount, setMobileVisibleCount] = useState(5);
    const [deskVisibleCount, setdeskVisibleCount] = useState(8);

    // Tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setFilteredCourses(
            tab === "All Courses"
                ? allVideoCourses
                : allVideoCourses.filter((c) => c.category === tab)
        );
        setPlayingVideo(null);
        setMobileVisibleCount(5);
        setdeskVisibleCount(8)
    };

    // Play Video
    const handleVideoClick = (id) => {
        setPlayingVideo((prev) => (prev === id ? null : id));
    };

    const handleLoadMore = () => {
        setMobileVisibleCount((prev) => prev + 5);
        setdeskVisibleCount((pre) => pre + 4)
    };

    const mobileCoursesToShow = filteredCourses.slice(0, mobileVisibleCount);
    const deskCoursesToShow = filteredCourses.slice(0, deskVisibleCount);

    return (
        <div className="main-bg py-9">
            {/* Title */}
            <div className="relative py-3 text-center">
                <Title
                    title={
                        '<span class="text-primary">Voices of Success:</span> Student Testimonials'
                    }
                    text_color={"text-secondary"}
                />
            </div>

            {/* Tabs */}
            <div className="flex justify-center px-2">
                <div className="m-auto flex flex-wrap justify-start md:justify-center gap-3 bg-[#CEC5FF] p-4 rounded-2xl">
                    {Coursesbtn.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.btn)}
                            className={`px-6 py-3 rounded-xl text-[16px] transition-all duration-300 ${activeTab === item.btn
                                ? "bg-[#6346FA] text-white"
                                : "bg-[#E4DFFF] hover:bg-[#6346FA] hover:text-white"
                                }`}
                        >
                            {item.btn}
                        </button>
                    ))}
                </div>
            </div>


            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-12 px-[3.5%] max-w-[1660px] m-auto">
                {deskCoursesToShow.map((course) => (
                    <div
                        key={course.id}
                        className="relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                        onClick={() => handleVideoClick(course.id)}
                    >
                        {/* YouTube Icon */}
                        {playingVideo !== course.id && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <Image
                                    src={youtube}
                                    alt="Play"
                                    width={90}
                                    height={90}
                                    className="opacity-90 z-20"
                                />
                            </div>
                        )}

                        {/* Video Player */}
                        {playingVideo === course.id ? (
                            <iframe
                                width="100%"
                                height="350"
                                src={getYoutubeEmbed(course.videoLink)}
                                title={course.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="relative z-0"
                            ></iframe>
                        ) : (
                            <img
                                src={getYoutubeThumbnail(course.videoLink)}
                                alt={course.title}
                                className="w-full h-[350px] object-cover"
                            />
                        )}
                    </div>
                ))}
                {mobileVisibleCount < filteredCourses.length && (
                    <div className="flex justify-center mt-4 col-span-full">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 rounded-xl bg-[#6346FA] text-white text-[16px] hover:bg-[#4a2fd1]"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            {/* Mobile Grid */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 md:pb-12 px-[3.5%]">
                {mobileCoursesToShow.map((course) => (
                    <div
                        key={course.id}
                        className="relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                        onClick={() => handleVideoClick(course.id)}
                    >
                        {/* YouTube Icon */}
                        {playingVideo !== course.id && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <Image
                                    src={youtube}
                                    alt="Play"
                                    width={70}
                                    height={70}
                                    className="opacity-90"
                                />
                            </div>
                        )}

                        {playingVideo === course.id ? (
                            <iframe
                                width="100%"
                                height="250"
                                src={getYoutubeEmbed(course.videoLink)}
                                title={course.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="relative z-0"
                            ></iframe>
                        ) : (
                            <img
                                src={getYoutubeThumbnail(course.videoLink)}
                                alt={course.title}
                                className="w-full h-[250px] object-cover"
                            />
                        )}
                    </div>
                ))}

                {mobileVisibleCount < filteredCourses.length && (
                    <div className="flex justify-center mt-4 col-span-full">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 rounded-xl bg-[#6346FA] text-white text-[16px] hover:bg-[#4a2fd1]"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
