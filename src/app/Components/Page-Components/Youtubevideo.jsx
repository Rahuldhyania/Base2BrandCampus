"use client";

import React, { useState, useRef, useCallback } from "react";
import Title from "../UiUx/Title";
import EnrollModal from "../UiUx/EnrollModal";
import youtube from "../../../../public/images/youtube.webp";
import Image from "next/image";

/* ================= TABS ================= */
export const Coursesbtn = [
  { id: 1, btn: "All Courses" },
  { id: 2, btn: "Marketing & Bussiness" },
  { id: 3, btn: "Development" },
  { id: 4, btn: "Graphics" },
  { id: 5, btn: "Truck Dispatching" },
];

/* ================= VIDEOS ================= */
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
    
    //     {
    //     id: 18,
    //     title: "Marketing & Bussiness",
    //     des: "Boost your website traffic",
    //     category: "Marketing & Bussiness",
    //     videoLink: "https://www.youtube.com/watch?v=HJwRUpkgY3Q",
    // },
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

/* ================= HELPERS ================= */
const getYoutubeId = (url) => {
  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const getYoutubeEmbed = (url) => {
  const id = getYoutubeId(url);
  return `https://www.youtube.com/embed/${id}?autoplay=1&controls=1&rel=0`;
};

const getYoutubeThumbnail = (url) => {
  const id = getYoutubeId(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

/* ================= COMPONENT ================= */
export default function Youtubevideo() {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [playingVideo, setPlayingVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const iframeRefs = useRef({});

  /* ===== STOP ALL VIDEOS ===== */
  const stopAllVideos = useCallback(() => {
    Object.values(iframeRefs.current).forEach((iframe) => {
      try {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          "*"
        );
        iframe.src = "about:blank";
      } catch {}
    });
    iframeRefs.current = {};
  }, []);

  /* ===== VIDEO CLICK ===== */
  const handleVideoClick = (id) => {
    if (playingVideo === id) {
      stopAllVideos();
      setPlayingVideo(null);
      return;
    }
    stopAllVideos();
    setPlayingVideo(id);
  };

  /* ===== TAB CHANGE ===== */
  const handleTabClick = (tab) => {
    stopAllVideos();
    setPlayingVideo(null);
    setActiveTab(tab);
    setVisibleCount(6);
  };

  const filteredCourses =
    activeTab === "All Courses"
      ? allVideoCourses
      : allVideoCourses.filter((v) => v.category === activeTab);

  return (
    <div className="main-bg py-10">
      {/* ===== TITLE ===== */}
      <div className="text-center">
        <Title
          title='<span class="text-primary">Voices of Success:</span> Student Testimonials'
          text_color="text-secondary"
        />
      </div>

      {/* ===== TABS ===== */}
      <div className="flex justify-center mt-6">
        <div className="flex flex-wrap gap-3 bg-[#CEC5FF] p-4 rounded-2xl">
          {Coursesbtn.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.btn)}
              className={`px-6 py-3 rounded-xl ${
                activeTab === tab.btn
                  ? "bg-[#6346FA] text-white"
                  : "bg-[#E4DFFF]"
              }`}
            >
              {tab.btn}
            </button>
          ))}
        </div>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 pt-12 px-[4%] max-w-[1500px] mx-auto">
        {filteredCourses.slice(0, visibleCount).map((course) => (
          <div
            key={course.id}
            className="relative bg-white rounded-xl shadow cursor-pointer overflow-hidden"
            onClick={() => handleVideoClick(course.id)}
          >
            {/* PLAY ICON */}
            {playingVideo !== course.id && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image src={youtube} alt="play" width={80} height={80} />
              </div>
            )}

            {/* VIDEO / THUMB */}
            {playingVideo === course.id ? (
              <iframe
                ref={(el) => (iframeRefs.current[course.id] = el)}
                src={getYoutubeEmbed(course.videoLink)}
                className="w-full h-[260px]"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={getYoutubeThumbnail(course.videoLink)}
                alt={course.title}
                className="w-full h-[260px] object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* ===== LOAD MORE ===== */}
      {visibleCount < filteredCourses.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleCount((p) => p + 6)}
            className="px-6 py-3 bg-[#6346FA] text-white rounded-xl"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
