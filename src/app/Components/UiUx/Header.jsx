"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.png";
import Buttons from "./Buttons";
import EnrollModal from "./EnrollModal";
import { motion } from "framer-motion";
import arrowdown from "../../../../public/icons/arrowdown.svg";
import menuarrow from "../../../../public/icons/menuarrow.svg";
import { hasEnrollmentToken, removeEnrollmentToken } from "@/lib/enrollment";

import Footerfacebook from "../../../../public/images/Footerfacebook.webp";
import linkedin from "../../../../public/images/linkedin.webp";
import insta from "../../../../public/images/insta.webp";
import pinterest from "../../../../public/icons/pinterest.svg";
import snapchat from "../../../../public/icons/snapchat.svg";
import youtube from "../../../../public/icons/youtube.svg";
const categories = [
  { name: "All Courses", key: "AllCourses" },
  { name: "Development", key: "Development" },
  { name: "Logistics", key: "Logistics" },
  { name: "Graphics", key: "Graphics" },
  { name: "Marketing & Business", key: "MarketingBusiness" },
];
const coursesData = {
  AllCourses: [
    { name: "Freight Broker", path: "/freight-broker" },
    { name: "Truck Dispatch", path: "/truck-dispatching" },
    { name: "Digital Marketing", path: "/digital-marketing-course" },
    { name: "AI Course", path: "/ai-course" },
    { name: "Cyber Security", path: "/cyber-security-course" },
    { name: "DevOps Engineer", path: "/devops-course" },
    { name: "Web Development", path: "/web-development-course" },
    { name: "Graphic Design", path: "/graphic-design-course" },
    { name: "Internet of Things (IoT)", path: "/iot" },
    { name: "Full Stack Development", path: "/full-stack-development" },
    { name: "Wordpress", path: "/wordpress-training-course" },
    { name: "Web Designing", path: "/web-designing-course" },
    { name: "Video Editing", path: "/video-editing" },
    { name: "Python & Java ", path: "/python-java-course" },
    { name: "Shopify App Dev", path: "/shopify-app-development-course" },
    { name: "Shopify Theme Dev", path: "/shopify-theme-development-course" },
    { name: "Flutter", path: "/flutter" },
    { name: "React Js", path: "/react-js-course" },
    { name: "React Native", path: "/react-native" },
  ],
  Development: [
    { name: "Cyber Security", path: "/cyber-security-course" },
    { name: "AI Course", path: "/ai-course" },
    { name: "DevOps Engineer", path: "/devops-course" },
    { name: "Internet of Things (IoT)", path: "/iot" },
    { name: "Web Development", path: "/web-development-course" },
    { name: "Full Stack Development", path: "/full-stack-development" },
    { name: "Wordpress", path: "/wordpress-training-course" },
    { name: "Web Designing", path: "/web-designing-course" },
    { name: "Python & Java ", path: "/python-java-course" },
    { name: "Shopify App Dev", path: "/shopify-app-development-course" },
    { name: "Shopify Theme Dev", path: "/shopify-theme-development-course" },
    { name: "Flutter", path: "/flutter" },
    { name: "React Js", path: "/react-js-course" },
    { name: "React Native", path: "/react-native" },
  ],
  Logistics: [
    { name: "Truck Dispatch", path: "/truck-dispatching" },
    { name: "Freight Broker", path: "/freight-broker" },
  ],
  Graphics: [
    { name: "Graphic Design", path: "/graphic-design-course" },
    { name: "Video Editing", path: "/video-editing" },
  ],
  MarketingBusiness: [
    { name: "Digital Marketing", path: "/digital-marketing-course" },
  ],
};
const socialLinks = [
  { icon: Footerfacebook, url: "https://www.facebook.com/CampusB2B" },
  { icon: insta, url: "https://www.instagram.com/b2bcampus/?hl=en" },
  { icon: linkedin, url: "https://www.linkedin.com/company/b2b-campus/" },
  {
    icon: youtube,
    url: "https://www.youtube.com/channel/UCs1sxcuHQ7GWgB9gMyRXwXQ/featured",
  },
  { icon: snapchat, url: "https://www.snapchat.com/@b2bcampus" },
  { icon: pinterest, url: "https://in.pinterest.com/b2bcampus/" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("AllCourses");
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(hasEnrollmentToken());
    };

    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);

    const interval = setInterval(checkLoginStatus, 1000);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    const stopAllVideos = () => {
      const iframes = document.querySelectorAll(
        'iframe[src*="youtube.com"], iframe[src*="youtu.be"]',
      );
      iframes.forEach((iframe) => {
        try {
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage(
              '{"event":"command","func":"stopVideo","args":""}',
              "*",
            );
            iframe.contentWindow.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              "*",
            );
            iframe.contentWindow.postMessage(
              '{"event":"command","func":"setVolume","args":[0]}',
              "*",
            );
          }
          iframe.src = "about:blank";
          if (iframe.parentNode) {
            iframe.parentNode.removeChild(iframe);
          }
        } catch (e) {}
      });
      const mediaElements = document.querySelectorAll("video, audio");
      mediaElements.forEach((media) => {
        try {
          media.pause();
          media.currentTime = 0;
          media.volume = 0;
        } catch (e) {}
      });
    };

    stopAllVideos();

    removeEnrollmentToken();
    setIsLoggedIn(false);

    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Courses", path: "/courses" },
    {
      name: "Blogs",
      path: "/blogs",
      dropdown: [
        { name: "Knowledge Center", path: "/knowledge-center" },
        { name: "Career", path: "/career" },
      ],
    },

    {
      name: "Industrial Training",
      path: "/industrial-training",
      dropdown: [
        { name: "Placement", path: "/placement" },
        { name: "Press Releases", path: "/press-releases" },
      ],
    },

    { name: "Contact Us", path: "/contact-us" },
  ];

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (megaOpen || enrollModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }
  }, [megaOpen, enrollModalOpen]);
  const languages = {
    en: "English",
    hi: "Hindi",
    bn: "Bengali",
    te: "Telugu",
    ta: "Tamil",
    mr: "Marathi",
    gu: "Gujarati",
    kn: "Kannada",
    ml: "Malayalam",
    pa: "Punjabi",
    ur: "Urdu",
  };

  const changeLanguage = (lang) => {
    if (typeof window === "undefined") return;

    const interval = setInterval(() => {
      const select = document.querySelector("select.goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        clearInterval(interval);
      }
    }, 100);
  };
  return (
    <nav className="relative z-50">
      <div className="flex justify-between xl:justify-around items-center flex-wrap gap-2 2xl:gap-4 relative py-5 px-5 bg-white border-[0.5px] border-[#00000021]">
        <Link href="/">
          <Image
            src={B2BCAMPUSLOGO}
            width={1000}
            height={500}
            alt="B2BCampus Logo"
            className="w-[150px] md:w-[211px]"
          />
        </Link>

        <div className="hidden xl:block">
          <ul className="flex items-center gap-6 2xl:gap-10 text-[21px] font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                {item.name === "Courses" ? (
                  <div className="cursor-pointer px-1 text-gray-700 hover:text-purple-500 transition-colors">
                    <span className="inline-flex items-center">
                      <Link href={"/courses"}>{item.name}</Link>
                      <Image
                        onClick={() => setMegaOpen(!megaOpen)}
                        src={arrowdown}
                        width={20}
                        height={20}
                        alt="arrowdown"
                        className={`ml-1 transition-transform duration-300 ${
                          megaOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </span>
                  </div>
                ) : item.name === "Industrial Training" ||
                  item.name === "Blogs" ? (
                  <div className="flex items-center gap-1">
                    <Link href={item.path}>
                      <span
                        className={`relative text-lg 2xl:text-xl px-1 cursor-pointer ${
                          pathname === item.path
                            ? "text-purple-600"
                            : "text-gray-700"
                        } hover:text-purple-500`}
                      >
                        {item.name}
                      </span>
                    </Link>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name,
                        );
                      }}
                    >
                      <Image
                        src={arrowdown}
                        width={16}
                        height={16}
                        alt="arrow"
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <ul
                        className={`absolute top-full left-0 mt-3 pb-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-50 transform transition-all duration-300 ease-out origin-top opacity-100 scale-100 translate-y-0"}`}
                      >
                        {item.dropdown.map((data, index) => (
                          <li key={index}>
                            <Link
                              href={data.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-5 pt-3 text-[16px] text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                            >
                              {data.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.path}>
                    <span
                      className={`relative text-lg 2xl:text-xl px-1 cursor-pointer ${
                        pathname === item.path
                          ? "text-purple-600"
                          : "text-gray-700"
                      } hover:text-purple-500`}
                    >
                      {item.name}
                      {pathname === item.path && (
                        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 rounded" />
                      )}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <select
            className="notranslate"
            translate="no"
            defaultValue="en"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            {Object.entries(languages).map(([code, name]) => (
              <option
                key={code}
                value={code}
                className="notranslate"
                translate="no"
              >
                {name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="hidden md:flex items-center gap-3">
                {/* User Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#6346FA] to-[#732dec] text-white font-semibold text-lg cursor-pointer hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#5D38DE] border border-gray-300 rounded-xl hover:border-[#5D38DE] transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex">
                {/* <Link
                  href={'contact-us'}
                > */}
                <Buttons
                  btnname="Enroll Now"
                  text_color="text-white"
                  onClick={() => setEnrollModalOpen(true)}
                />
                {/* </Link> */}
              </div>
            )}

            <div
              className="xl:hidden cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="space-y-1">
                <span
                  className="block w-6 h-[3px] bg-gray-700 transition-all"
                  style={{
                    rotate: open ? "45deg" : "0deg",
                    translateY: open ? "8px" : "0px",
                  }}
                />
                <span
                  className={`block w-6 h-[3px] bg-gray-700 transition-all ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className="block w-6 h-[3px] bg-gray-700 transition-all"
                  style={{
                    rotate: open ? "-45deg" : "0deg",
                    translateY: open ? "-8px" : "0px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-500 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-[18px] px-4 py-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.name === "Courses" ? (
                  <div
                    className="cursor-pointer px-2 py-2 text-gray-700 flex items-center justify-between"
                    onClick={() => setOpen(false)}
                  >
                    <Link href={"/courses"}>
                      <span>{item.name}</span>
                    </Link>
                    <Image
                      onClick={() => {
                        setMegaOpen(!megaOpen);
                      }}
                      src={arrowdown}
                      width={18}
                      height={18}
                      alt="arrowdown"
                      className={`transition-transform duration-300 ${
                        megaOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                ) : item.dropdown ? (
                  /* 🔥 BLOGS / INDUSTRIAL TRAINING MOBILE DROPDOWN */
                  <div>
                    <div className="flex items-center justify-between px-2 py-2">
                      {/* TEXT → PAGE OPEN */}
                      <Link
                        href={item.path}
                        onClick={() => {
                          setOpen(false);
                          setActiveDropdown(null);
                        }}
                        className={`${
                          pathname === item.path
                            ? "text-purple-600 font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {item.name}
                      </Link>

                      {/* ARROW → DROPDOWN */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveDropdown(
                            activeDropdown === item.name ? null : item.name,
                          );
                        }}
                      >
                        <Image
                          src={arrowdown}
                          width={18}
                          height={18}
                          alt="arrow"
                          className={`transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* SUB MENU */}
                    <div
                      className={`ml-4 overflow-hidden transition-all duration-300 ease-out ${
                        activeDropdown === item.name
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.dropdown.map((sub, i) => (
                        <Link
                          key={i}
                          href={sub.path}
                          onClick={() => {
                            setOpen(false);
                            setActiveDropdown(null);
                          }}
                          className="block py-2 text-gray-600 hover:text-purple-600"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* NORMAL MOBILE LINK */
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`block px-2 py-2 ${
                      pathname === item.path
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}

            {isLoggedIn ? (
              <div className="flex flex-col gap-3 px-2">
                <div className="flex items-center gap-3 py-2">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#6346FA] to-[#732dec] text-white font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Logged In</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#5D38DE] border border-gray-300 rounded-xl hover:border-[#5D38DE] transition-colors text-left"
                >
                  Logout
                </button>
              </div>
            ) : (
              // <Link
              //   href={'contact-us'}
              // >
              <Buttons
                btnname="Enroll Now"
                text_color="text-white"
                onClick={() => {
                  setOpen(false);
                  setEnrollModalOpen(true);
                }}
              />
              // </Link>
            )}
            <div className="pt-4">
              <div className="flex gap-2">
                {socialLinks.map((item, i) => (
                  <Link href={item.url} key={i} target="_blank">
                    <div className="p-3 sm:p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center transition-transform duration-300 hover:scale-110">
                      <Image src={item.icon} width={16} height={16} alt="" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-4">
              <div className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 md:w-12 md:h-12 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#6346fa"
                    d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22"
                  />
                </svg>

                <p className="text-base md:text-2xl leading-snug flex items-center gap-2">
                  <span className="font-medium">Phone:</span>
                  <a
                    href="tel:+919878300209"
                    className="ml-0 md:ml-3 hover:text-[var(--primary)] block md:inline"
                  >
                    +91 98783-00209
                  </a>
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/* MEGA MENU */}
      {megaOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setMegaOpen(false)}
          />

          <div className="max-h-[80vh] fixed top-[60px] md:top-[86px] left-1/2 -translate-x-1/2 bg-white border border-[#D9D4FF] shadow-[0_4px_20px_rgba(93,56,222,0.15)] rounded-xl p-4 z-50 flex flex-col md:flex-row w-[95%] max-w-[1282px] gap-4 overflow-hidden">
            <div className="absolute top-2 right-2 z-50">
              <button
                onClick={() => setMegaOpen(false)}
                className="text-gray-700 text-2xl font-bold hover:text-purple-600 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <Image
                src={B2BCAMPUSLOGO}
                width={1000}
                height={500}
                alt="B2BCampus Logo"
                className="w-10 md:w-[100px] md:h-[25px] hidden md:block"
              />
              <h2 className="text-xl text-[#5D38DE] font-semibold underline">
                Categories
              </h2>

              <ul className="overflow-y-auto max-h-[50vh] md:max-h-none">
                {categories.map((cat) => (
                  <li
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-4 py-2 cursor-pointer rounded-md text-sm flex justify-between mb-1
                            ${
                              activeCategory === cat.key
                                ? "bg-[#E4DFFF] text-[#5D38DE]"
                                : "hover:bg-gray-100"
                            }`}
                  >
                    {cat.name} <span>›</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-3/4 w-full py-3 md:px-6 overflow-y-auto h-full">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:max-h-[344px]">
                {coursesData[activeCategory]?.map((course, index) => (
                  <Link
                    key={index}
                    href={course.path}
                    onClick={() => setOpen(!open)}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.11 }}
                      className="bg-[#E4DFFF] rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl px-2 py-5"
                      onClick={() => setMegaOpen(!megaOpen)}
                    >
                      <div className="p-2">
                        <p className="text-[#5D38DE] font-semibold text-[14px] 2xl:base">
                          {course.name}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enroll Modal */}
      <EnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
      />
    </nav>
  );
}
