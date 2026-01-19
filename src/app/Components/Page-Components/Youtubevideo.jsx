"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Title from "../UiUx/Title";
import EnrollModal from "../UiUx/EnrollModal";
import youtube from "../../../../public/images/youtube.webp";
import Image from "next/image";
import { allVideoCourses } from "@/app/Data/VideoData";
import { hasEnrollmentToken } from "@/lib/enrollment";

export const Coursesbtn = [
  { id: 1, btn: "All Courses" },
  { id: 2, btn: "Marketing & Bussiness" },
  { id: 3, btn: "Development" },
  { id: 4, btn: "Graphics" },
  { id: 5, btn: "Truck Dispatching" },
];
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
export default function Youtubevideo({ current_tab }) {
  const [activeTab, setActiveTab] = useState(current_tab ? current_tab : 'All Courses');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);
  const iframeRefs = useRef({});
  
  /* ===== LOGIN STATE ===== */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingVideoId, setPendingVideoId] = useState(null);

  /* ===== CHECK LOGIN STATUS ===== */
  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(hasEnrollmentToken());
    };

    checkLoginStatus();

    // Listen for storage changes (login/logout in other tabs)
    window.addEventListener("storage", checkLoginStatus);

    // Periodic check for login status changes
    const interval = setInterval(checkLoginStatus, 1000);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      clearInterval(interval);
    };
  }, []);

  /* ===== STOP ALL VIDEOS ===== */
  const stopAllVideos = useCallback(() => {
    Object.values(iframeRefs.current).forEach((iframe) => {
      try {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          "*"
        );
        iframe.src = "about:blank";
      } catch { }
    });
    iframeRefs.current = {};
  }, []);

  /* ===== VIDEO CLICK ===== */
  const handleVideoClick = (id) => {
    // If user is not logged in, show login modal
    if (!isLoggedIn) {
      setPendingVideoId(id);
      setShowLoginModal(true);
      return;
    }

    if (playingVideo === id) {
      stopAllVideos();
      setPlayingVideo(null);
      return;
    }
    stopAllVideos();
    setPlayingVideo(id);
  };

  /* ===== LOGIN SUCCESS CALLBACK ===== */
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLoginModal(false);
    
    // Play the pending video after successful login
    if (pendingVideoId) {
      stopAllVideos();
      setPlayingVideo(pendingVideoId);
      setPendingVideoId(null);
    }
  };

  /* ===== CLOSE LOGIN MODAL ===== */
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    setPendingVideoId(null);
  };

  /* ===== TAB CHANGE ===== */
  const handleTabClick = (tab) => {
    stopAllVideos();
    setPlayingVideo(null);
    setActiveTab(tab);
    setVisibleCount(8);
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
              className={`px-6 py-3 rounded-xl ${activeTab === tab.btn
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
            onClick={() => setVisibleCount((p) => p + 8)}
            className="px-6 py-3 bg-[#6346FA] text-white rounded-xl"
          >
            Load More
          </button>
        </div>
      )}

      {/* ===== LOGIN MODAL ===== */}
      <EnrollModal
        isOpen={showLoginModal}
        onClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}
