"use client";

import React, { useState } from "react";
import ServicesSection from "./ServiceCard";

import GraphicIcon from "../../../../public/images/icon1.webp";
import TruckIcon from "../../../../public/images/icon3.webp";
import icon4 from "../../../../public/images/icon4.webp";
import VideoIcon from "../../../../public/images/icon2.webp";
import DevIcon from "../../../../public/images/icon5.webp";
import icon6 from "../../../../public/images/icon6.webp";
import icon7 from "../../../../public/images/icon7.webp";
import icon8 from "../../../../public/images/icon8.webp";
import icon9 from "../../../../public/images/icon9.webp";
import icon10 from "../../../../public/images/icon10.webp";
import icon11 from "../../../../public/images/icon11.webp";
import icon12 from "../../../../public/images/icon12.webp";
import devops from "../../../../public/icons/devops.svg";
import cyber from "../../../../public/icons/cyber.svg";
import arrowicon from "../../../../public/images/arrowicon.webp";
import MarketingIcon from "../../../../public/images/MarketingIcon.webp";

import arrow1 from "../../../../public/images/arrow1.webp";
import arrows2 from "../../../../public/images/arrows2.webp";
import arrows3 from "../../../../public/images/arrows3.webp";
import arrows4 from "../../../../public/images/arrows4.webp";
import arrows5 from "../../../../public/images/arrows5.webp";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Buttons from "../UiUx/Buttons";

export const Coursesbtn = [
  { id: 1, btn: "All Courses" },
  { id: 2, btn: "Logistics" },
  { id: 5, btn: "Marketing & Bussiness" },
  { id: 4, btn: "Graphics" },
  { id: 3, btn: "Development" }
];

const allCourses = [
  {
    id: 6,
    title: "Freight Broker",
    des: "B2B Campus – Where Freight Broker Careers Begin and Global Logistics Professionals Are Built.",
    category: "Logistics",
    icon: icon4,
    color: "#60A5FA",
    buttonText: "Learn more",
    page_link: "/freight-broker",
    img: arrows2
  },
  {
    id: 2,
    title: "Truck Dispatch",
    des: "B2B Campus – Learn Truck Dispatch Once, Work Globally Forever.",
    category: "Logistics",
    icon: TruckIcon,
    color: "#60A5FA",
    buttonText: "Learn more",
    page_link: "/truck-dispatching",
    img: arrows2
  },
  {
    id: 1,
    title: "Graphic Design",
    des: "B2B Campus – Learn Graphic Design and Create Visuals That Make Brands Stand Out.",
    category: "Graphics",
    icon: GraphicIcon,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/graphic-design-course",
    img: arrowicon
  },
  {
    id: 4,
    title: "AI Course",
    des: "B2B Campus – Learn Artificial Intelligence Today, Lead Tomorrow’s Technology.",
    category: "Development",
    icon: icon12,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/ai-course",
    img: arrows4
  },
  {
    id: 14,
    title: "Cyber Security",
    des: "B2B Campus – Learn Cyber Security Today, Protect the Digital World Tomorrow.",
    category: "Development",
    icon: cyber,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/ai-course",
    img: arrows4
  },
  {
    id: 15,
    title: "DevOps Engineer",
    des: "B2B Campus – Learn DevOps Today, Automate and Deploy Tomorrow.",
    category: "Development",
    icon: devops,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/ai-course",
    img: arrows4
  },
  {
    id: 3,
    title: "Internet of Things (IOT)",
    des: "B2B Campus – Learn IoT and Build Smart, Connected, and Automated Solutions.",
    category: "Development",
    icon: icon11,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/iot",
    img: arrows4
  },
  {
    id: 8,
    title: "Web Development",
    des: "B2B Campus – Learn Web Development and Build High-Performance Modern Websites.",
    category: "Development",
    icon: DevIcon,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/web-development-course",
    img: arrows4
  },
  {
    id: 7,
    title: "Full Stack Development",
    des: "B2B Campus – Learn Full Stack Development and Build End-to-End Digital Products.",
    category: "Development",
    icon: icon7,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/full-stack-development",
    img: arrows4
  },
  {
    id: 11,
    title: "Wordpress",
    des: "B2B Campus – Learn WordPress and Build Professional Websites with Ease.",
    category: "Development",
    icon: icon9,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/wordpress-training-course",
    img: arrows4
  },
  {
    id: 10,
    title: "Web Designing",
    des: "B2B Campus – Learn Web Designing and Craft User-Friendly, Creative Interfaces.",
    category: "Development",
    icon: icon8,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/web-designing-course",
    img: arrows4
  },
  {
    id: 5,
    title: "Video Editing",
    des: "B2B Campus – Learn Video Editing and Create Impactful Visual Stories.",
    category: "Graphics",
    icon: VideoIcon,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/video-editing",
    img: arrow1
  },
  {
    id: 12,
    title: "Digital Marketing",
    des: "B2B Campus – Learn Digital Marketing and Grow Brands in the Online World.",
    category: "Marketing & Bussiness",
    icon: icon10,
    color: "#0A9DFF",
    buttonText: "Learn more",
    page_link: "/digital-marketing-course",
    img: arrows5
  }
];



export default function PopularCourses({ clickscroll }) {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);
  const [mobileVisibleCount, setMobileVisibleCount] = useState(5);

  const handleTabClick = tab => {
    setActiveTab(tab);
    if (tab === "All Courses") {
      setFilteredCourses(allCourses);
    } else {
      setFilteredCourses(allCourses.filter(c => c.category === tab));
    }
    setMobileVisibleCount(5);
  };

  const handleLoadMore = () => {
    setMobileVisibleCount(prev => prev + 5);
  };

  const mobileCoursesToShow = filteredCourses.slice(0, mobileVisibleCount);

  return (
    <div className="main-bg py-9">
      <div className="relative py-3">
        <img
          src={titlewhitebg.src}
          alt="bubble-bg"
          className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[530px] sm:w-60 pointer-events-none select-none opacity-90"
        />
        <div className="relative z-10 text-center">
          <Title
            title={'<span class="text-primary">Popular </span> Courses'}
            text_color={"text-secondary"}
          />
        </div>
      </div>

      {/* Desktop Tabs */}
      <div className=" hidden md:flex flex-wrap justify-center gap-3  m-auto">
        <div className="bg-[#CEC5FF] gap-3 p-4 grid grid-cols-5 rounded-2xl">
          {Coursesbtn.map(item =>
            <button
              key={item.id}
              onClick={() => handleTabClick(item.btn)}
              className={`px-6 py-3 rounded-xl text-[16px] transition-all duration-300 ease-in-out ${activeTab ===
              item.btn
                ? "bg-[#6346FA] text-white"
                : "bg-[#E4DFFF] hover:bg-[#6346FA] hover:text-white"}`}
            >
              {item.btn}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Tabs */}
      <div className="px-3">
        <div className="lg:w-[55%] m-auto flex md:hidden flex-wrap justify-start md:justify-center gap-3 bg-[#CEC5FF] p-4 rounded-2xl">
          {Coursesbtn.map(item =>
            <button
              key={item.id}
              onClick={() => handleTabClick(item.btn)}
              className={`px-6 py-3 rounded-xl text-[16px] transition-all duration-300 ease-in-out ${activeTab ===
              item.btn
                ? "bg-[#6346FA] text-white"
                : "bg-[#E4DFFF] hover:bg-[#6346FA] hover:text-white"}`}
            >
              {item.btn}
            </button>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="lg:block hidden">
        <ServicesSection courses={filteredCourses} clickscroll={clickscroll} />
      </div>

      {/* Mobile Cards with Load More */}
      <div className="md:hidden">
        <ServicesSection courses={filteredCourses} clickscroll={clickscroll} />
        <div
          className="buttons text-[25px] flex justify-center m-auto mt-[2%]"
          onClick={clickscroll}
        >
          <Buttons btnname="Enquire Now" text_color={"text-white"} />
        </div>
      </div>
    </div>
  );
}
