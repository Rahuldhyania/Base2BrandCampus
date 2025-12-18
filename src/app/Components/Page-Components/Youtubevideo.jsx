"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Title from "../UiUx/Title";
import EnrollModal from "../UiUx/EnrollModal";
import { hasEnrollmentToken } from "@/lib/enrollment";
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

const getYoutubeEmbed = (url, autoplay = true) => {
    const id = getYoutubeId(url);
    return id
        ? `https://www.youtube.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&controls=1&modestbranding=1&rel=0&showinfo=0&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`
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
    const [enrollModalOpen, setEnrollModalOpen] = useState(false);
    const [pendingVideoId, setPendingVideoId] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const videoIframeRefs = useRef({});
    const [iframeKey, setIframeKey] = useState(0); // Force remount of iframe

    // Stop video properly when it's closed - using useCallback for stable reference
    const stopVideo = useCallback((videoId) => {
        // Step 1: Send stop commands to all YouTube iframes
        const iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
        iframes.forEach(iframe => {
            try {
                if (iframe.contentWindow) {
                    // Send multiple stop commands with different methods
                    const stopCommands = [
                        '{"event":"command","func":"stopVideo","args":""}',
                        '{"event":"command","func":"pauseVideo","args":""}',
                        '{"event":"command","func":"seekTo","args":[0,true]}',
                        '{"event":"command","func":"setVolume","args":[0]}',
                    ];
                    
                    stopCommands.forEach((cmd, index) => {
                        setTimeout(() => {
                            try {
                                if (iframe.contentWindow) {
                                    iframe.contentWindow.postMessage(cmd, '*');
                                }
                            } catch (e) {
                                // Ignore
                            }
                        }, index * 50); // Stagger commands
                    });
                }
            } catch (e) {
                // Ignore
            }
        });
        
        // Step 2: Stop all HTML5 video/audio elements
        const mediaElements = document.querySelectorAll('video, audio');
        mediaElements.forEach(media => {
            try {
                media.pause();
                media.currentTime = 0;
                media.volume = 0;
            } catch (e) {
                // Ignore
            }
        });
        
        // Step 3: Wait a bit then clear src and remove from DOM
        setTimeout(() => {
            iframes.forEach(iframe => {
                try {
                    iframe.src = 'about:blank';
                    if (iframe.parentNode) {
                        iframe.parentNode.removeChild(iframe);
                    }
                } catch (e) {
                    // Ignore
                }
            });
            
            // Clear refs
            Object.keys(videoIframeRefs.current).forEach(key => {
                try {
                    const iframe = videoIframeRefs.current[key];
                    if (iframe) {
                        iframe.src = 'about:blank';
                    }
                } catch (e) {
                    // Ignore
                }
                delete videoIframeRefs.current[key];
            });
        }, 300); // Wait 300ms for commands to process
        
        // Force iframe remount by changing key
        setIframeKey(prev => prev + 1);
    }, []);

    // Check login status
    useEffect(() => {
        const checkLoginStatus = () => {
            const loggedIn = hasEnrollmentToken();
            const wasLoggedIn = isLoggedIn;
            
            // If user just logged out, stop all videos
            if (wasLoggedIn && !loggedIn) {
                // User logged out - stop all videos
                if (playingVideo !== null) {
                    stopVideo(playingVideo);
                    setPlayingVideo(null);
                }
                
                // Stop all YouTube iframes on page
                const iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
                iframes.forEach(iframe => {
                    try {
                        if (iframe.contentWindow) {
                            iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                            iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[0]}', '*');
                        }
                        iframe.src = 'about:blank';
                        if (iframe.parentNode) {
                            iframe.parentNode.removeChild(iframe);
                        }
                    } catch (e) {
                        // Ignore
                    }
                });
            }
            
            setIsLoggedIn(loggedIn);
        };

        checkLoginStatus();
        const interval = setInterval(checkLoginStatus, 1000);

        return () => clearInterval(interval);
    }, [isLoggedIn, playingVideo, stopVideo]);

    // Monitor and remove duplicate/orphaned iframes
    useEffect(() => {
        // Check for duplicate iframes periodically
        const checkForDuplicates = () => {
            const allIframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
            
            // If no video is playing, remove all iframes
            if (playingVideo === null) {
                allIframes.forEach(iframe => {
                    try {
                        if (iframe.contentWindow) {
                            iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                            iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[0]}', '*');
                        }
                        iframe.src = 'about:blank';
                        if (iframe.parentNode) {
                            iframe.parentNode.removeChild(iframe);
                        }
                    } catch (e) {
                        // Ignore
                    }
                });
                return;
            }
            
            // If video is playing, ensure only ONE iframe exists for that video
            if (playingVideo !== null && allIframes.length > 1) {
                const currentVideo = filteredCourses.find(c => c.id === playingVideo);
                const currentVideoId = currentVideo ? getYoutubeId(currentVideo.videoLink) : null;
                
                let keepFirst = true;
                allIframes.forEach((iframe, index) => {
                    try {
                        const iframeVideoId = getYoutubeId(iframe.src);
                        // Keep only the first iframe that matches current video, remove all others
                        if (keepFirst && iframeVideoId === currentVideoId) {
                            keepFirst = false;
                        } else {
                            // This is a duplicate - remove it
                            if (iframe.contentWindow) {
                                iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                                iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                                iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[0]}', '*');
                            }
                            iframe.src = 'about:blank';
                            if (iframe.parentNode) {
                                iframe.parentNode.removeChild(iframe);
                            }
                        }
                    } catch (e) {
                        // Ignore
                    }
                });
            }
            
            // Stop all HTML5 media when video is null
            if (playingVideo === null) {
                const mediaElements = document.querySelectorAll('video, audio');
                mediaElements.forEach(media => {
                    try {
                        media.pause();
                        media.currentTime = 0;
                        media.volume = 0;
                    } catch (e) {
                        // Ignore
                    }
                });
            }
        };
        
        // Run immediately and then check periodically
        checkForDuplicates();
        const interval = setInterval(checkForDuplicates, 500); // Check every 500ms
        
        return () => clearInterval(interval);
    }, [playingVideo, filteredCourses]);

    // Stop all videos when component unmounts
    useEffect(() => {
        return () => {
            // Cleanup all videos
            const iframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
            iframes.forEach(iframe => {
                try {
                    if (iframe.contentWindow) {
                        iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                    }
                    iframe.src = 'about:blank';
                    if (iframe.parentNode) {
                        iframe.parentNode.removeChild(iframe);
                    }
                } catch (e) {
                    // Ignore
                }
            });
        };
    }, []);

    // Handle successful login
    const handleLoginSuccess = () => {
        // Update login status
        setIsLoggedIn(true);
        // Play pending video - cleanup first
        if (pendingVideoId !== null) {
            cleanupAllIframes();
            setTimeout(() => {
                setPlayingVideo(pendingVideoId);
                setPendingVideoId(null);
            }, 100);
        }
    };

    // Tabs
    const handleTabClick = (tab) => {
        // Stop currently playing video before switching tabs
        if (playingVideo !== null) {
            stopVideo(playingVideo);
        }
        
        setActiveTab(tab);
        setFilteredCourses(
            tab === "All Courses"
                ? allVideoCourses
                : allVideoCourses.filter((c) => c.category === tab)
        );
        // Stop any playing video when switching tabs
        setPlayingVideo(null);
        setMobileVisibleCount(5);
        setdeskVisibleCount(8)
    };

    // Clean up ALL YouTube iframes before playing new video - using useCallback
    const cleanupAllIframes = useCallback(() => {
        // Find and remove ALL YouTube iframes from DOM immediately
        const allIframes = document.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
        allIframes.forEach(iframe => {
            try {
                // Send stop commands immediately
                if (iframe.contentWindow) {
                    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
                    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                    iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[0]}', '*');
                }
                // Remove from DOM immediately - don't wait
                iframe.src = 'about:blank';
                if (iframe.parentNode) {
                    iframe.parentNode.removeChild(iframe);
                }
            } catch (e) {
                // Ignore errors
            }
        });
        
        // Clear all refs
        Object.keys(videoIframeRefs.current).forEach(key => {
            delete videoIframeRefs.current[key];
        });
    }, []);

    // Play Video with Login Check
    const handleVideoClick = (id) => {
        // If clicking on an already playing video, stop it
        if (playingVideo === id) {
            // Immediately cleanup all iframes
            cleanupAllIframes();
            // Stop video and clear state
            stopVideo(id);
            setPlayingVideo(null);
            return;
        }

        // IMPORTANT: Clean up ALL existing iframes BEFORE playing new video
        cleanupAllIframes();
        
        // Check if user is logged in
        const loggedIn = hasEnrollmentToken();
        
        if (!loggedIn) {
            // Store the video ID to play after login
            setPendingVideoId(id);
            // Open login modal
            setEnrollModalOpen(true);
        } else {
            // User is logged in, wait a bit then play video (ensures cleanup is done)
            setTimeout(() => {
                // Double check - cleanup again before playing
                cleanupAllIframes();
                setPlayingVideo(id);
            }, 100);
        }
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

                        {/* Video Player - Completely unmount when not playing */}
                        {playingVideo === course.id ? (
                            <div 
                                data-playing="true" 
                                key={`player-${course.id}-${iframeKey}`}
                                className="w-full h-[350px]"
                            >
                                <iframe
                                    ref={(el) => {
                                        if (el) {
                                            videoIframeRefs.current[`video-${course.id}`] = el;
                                        } else {
                                            delete videoIframeRefs.current[`video-${course.id}`];
                                        }
                                    }}
                                    key={`desktop-video-${course.id}-${iframeKey}`}
                                    width="100%"
                                    height="350"
                                    src={getYoutubeEmbed(course.videoLink, true)}
                                    title={course.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="relative z-0"
                                    style={{ display: 'block' }}
                                ></iframe>
                            </div>
                        ) : (
                            <img
                                key={`thumbnail-${course.id}`}
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
                            <div 
                                data-playing="true" 
                                key={`mobile-player-${course.id}-${iframeKey}`}
                                className="w-full h-[250px]"
                            >
                                <iframe
                                    ref={(el) => {
                                        if (el) {
                                            videoIframeRefs.current[`video-${course.id}`] = el;
                                        } else {
                                            delete videoIframeRefs.current[`video-${course.id}`];
                                        }
                                    }}
                                    key={`mobile-video-${course.id}-${iframeKey}`}
                                    width="100%"
                                    height="250"
                                    src={getYoutubeEmbed(course.videoLink, true)}
                                    title={course.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="relative z-0"
                                    style={{ display: 'block' }}
                                ></iframe>
                            </div>
                        ) : (
                            <img
                                key={`mobile-thumbnail-${course.id}`}
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

            {/* Enroll Modal */}
            <EnrollModal 
                isOpen={enrollModalOpen} 
                onClose={() => {
                    setEnrollModalOpen(false);
                    setPendingVideoId(null);
                }}
                onLoginSuccess={handleLoginSuccess}
            />
        </div>
    );
}
