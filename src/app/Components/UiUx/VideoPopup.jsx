"use client";
import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function VideoPopup() {
  const [open, setOpen] = useState(false);
  const [unmuted, setUnmuted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  useEffect(() => {
    const openPopup = () => {
      setOpen((prev) => (prev ? prev : true));
    };

    window.addEventListener("openVideoPopup", openPopup);
    return () => window.removeEventListener("openVideoPopup", openPopup);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!open) return null;

  const videoSrc = unmuted
    ? "https://www.youtube.com/embed/fq1XnfhG7r4?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1"
    : "https://www.youtube.com/embed/fq1XnfhG7r4?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&playsinline=1";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
      <div
        ref={modalRef}
        className="relative bg-[#0b0b0b] text-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden pt-5"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-20 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="relative w-full h-[25vh] md:h-[50vh] bg-black px-5">
          <iframe
            key={unmuted} 
            width="100%"
            height="100%"
            src={videoSrc}
            frameBorder="0"
            allow="autoplay"
            className="w-full h-full"
          />

          <button
            onClick={() => setUnmuted(true)}
            className="absolute bottom-4 right-8 bg-black/70 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-black transition"
          >
            {unmuted ? <FaVolumeUp /> : <FaVolumeMute />}
            {unmuted ? "Sound On" : "Tap to hear sound"}
          </button>
        </div>

        <div className="px-4 md:px-10 md:pt-5 pb-5 space-y-3">
          <h2 className="text-lg md:text-xl font-semibold">
            💼 Turn Your Time Into <span className="text-blue-400">Dollar Skills</span>
          </h2>

          <p className="text-sm text-gray-300">
            The logistics industry in the US is growing fast — trained dispatchers are in demand.
          </p>

          <p className="text-sm text-gray-300">
            Learn real dispatch workflows, rate negotiation & live market understanding.
          </p>

          <div className="text-xs text-gray-400">
            📍 Offline in Mohali <br />
            🌐 Online across India
          </div>

          <p className="text-sm text-gray-200">
            This skill can change your career direction.
          </p>

          <a
            href="tel:+919872487850"
            className="block text-center bg-blue-600 text-white text-sm px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            📞 Call Now to Reserve Your Seat
          </a>
        </div>
      </div>
    </div>
  );
}
