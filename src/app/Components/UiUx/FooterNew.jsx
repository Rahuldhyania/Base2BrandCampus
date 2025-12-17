"use client";
import Link from "next/link";
import React, { useState } from "react";
import footerlogo from "../../../../public/images/footerlogo.png";
import Image from "next/image";

import Footerfacebook from "../../../../public/images/Footerfacebook.webp";
import linkedin from "../../../../public/images/linkedin.webp";
import insta from "../../../../public/images/insta.webp";
import pinterest from "../../../../public/icons/pinterest.svg";
import twitter from "../../../../public/icons/twitter.svg";
import youtube from "../../../../public/icons/youtube.svg";
import { Newletterfrom } from "../Page-Components/Newletterfrom";
const footerData = [
  {
    title: "Industrial Training",
    links: [
      {
        id: 3,
        page_name: "Freight Broker",
        page_links: "/freight-broker"
      },
      {
        id: 2,
        page_name: "Truck Dispatch",
        page_links: "/truck-dispatching"
      },
      {
        id: 1,
        page_name: "Graphic Design",
        page_links: "/graphic-design-course"
      },
      {
        id: 5,
        page_name: "AI Course",
        page_links: "/ai-course"
      },
      {
        id: 14,
        page_name: "Devops Engineer",
        page_links: "/devops-course"
      },
      {
        id: 15,
        page_name: "Cyber Security",
        page_links: "/cyber-security-course"
      },
      {
        id: 4,
        page_name: "IOT",
        page_links: "/iot"
      },

      {
        id: 6,
        page_name: "Web Development",
        page_links: "/web-development-course"
      },
      {
        id: 7,
        page_name: "Full Stack Development",
        page_links: "/full-stack-development"
      },
      {
        id: 8,
        page_name: "Wordpress",
        page_links: "/wordpress-training-course"
      },
      // {
      //   id: 9,
      //   page_name: "Personality Development",
      //   page_links: "/personality-development"
      // },
      {
        id: 10,
        page_name: "Web Designing",
        page_links: "/web-designing-course"
      },
      {
        id: 11,
        page_name: "Video Editing",
        page_links: "/video-editing"
      },
      {
        id: 12,
        page_name: "Digital Marketing",
        page_links: "/digital-marketing-course"
      },
      {
        id: 13,
        page_name: "Python/Java Course",
        page_links: "/python-java-course"
      }
    ]
  },

  {
    title: "Useful Links",
    links: [
      {
        id: 19,
        page_name: "Six months industrial training in Chandigarh",
        page_links: "/six-months-industrial-training-chandigarh"
      },
      {
        id: 20,
        page_name: "Six weeks industrial training in Chandigarh",
        page_links: "/six-weeks-industrial-training-chandigarh"
      },
      {
        id: 21,
        page_name: "Industrial training in Chandigarh",
        page_links: "/industrial-training-chandigarh"
      },
      {
        id: 22,
        page_name: "6 months industrial training in Chandigarh",
        page_links: "/6-months-industrial-training-chandigarh"
      },
      {
        id: 23,
        page_name: "6 weeks industrial training in Chandigarh",
        page_links: "/6-weeks-industrial-training-chandigarh"
      },
      {
        id: 24,
        page_name: "Best industrial training in Chandigarh",
        page_links: "/best-industrial-training-chandigarh"
      },
      {
        id: 25,
        page_name: "Best industrial training in Mohali",
        page_links: "/best-industrial-training-mohali"
      },
      {
        id: 26,
        page_name: "Six months industrial training in Mohali",
        page_links: "/six-months-industrial-training-mohali"
      },
      {
        id: 27,
        page_name: "Six weeks industrial training in Mohali",
        page_links: "/six-weeks-industrial-training-mohali"
      },

      {
        id: 28,
        page_name: "Summer Training in Chandigarh",
        page_links: "/summer-training-chandigarh"
      },
      {
        id: 29,
        page_name: "Training companies in Chandigarh",
        page_links: "/training-companies-chandigarh"
      },
      {
        id: 30,
        page_name: "Free industrial training in Chandigarh",
        page_links: "/free-industrial-training-chandigarh"
      },
      {
        id: 31,
        page_name: "Free six months industrial training in Chandigarh",
        page_links: "/free-six-months-industrial-training-chandigarh"
      },
      {
        id: 32,
        page_name: "Best six months industrial training in Chandigarh",
        page_links: "/best-six-months-industrial-training-chandigarh"
      },
      {
        id: 33,
        page_name: "Best six weeks industrial training in Chandigarh",
        page_links: "/best-six-weeks-industrial-training-chandigarh"
      },
      {
        id: 34,
        page_name: "Live projects based industrial training in Chandigarh",
        page_links: "/live-projects-industrial-training-chandigarh"
      },
      {
        id: 35,
        page_name: "Best IT training companies in Chandigarh",
        page_links: "/best-it-training-companies-chandigarh"
      },
      {
        id: 36,
        page_name: "Top IT training companies in Chandigarh",
        page_links: "/top-it-training-companies-chandigarh"
      }
    ]
  }
];
const socialLinks = [
  { icon: Footerfacebook, url: "https://www.facebook.com/CampusB2B" },
  { icon: insta, url: "https://www.instagram.com/b2bcampus/?hl=en" },
  { icon: linkedin, url: "https://www.linkedin.com/company/b2b-campus/" },
  { icon: youtube, url: "https://www.youtube.com/channel/UCs1sxcuHQ7GWgB9gMyRXwXQ/featured" },
  { icon: twitter, url: "https://x.com/B2bCampus" },
  { icon: pinterest, url: "https://in.pinterest.com/b2bcampus/" },

];
const FooterNew = () => {
  const [showitem, setShowitem] = useState({
    0: 6,
    1: 6
  });
  const handelshow = index => {
    setShowitem(prev => ({
      ...prev,
      [index]:
        prev[index] >= footerData[index].links.length ? 6 : prev[index] + 6
    }));
  };

  return (
    <div className="bg-primary">
      <div className="max-w-[1780px] m-auto px-[3%] py-16">
        <div className="flex flex-col md:flex-row gap-y-6 md:items-center justify-between pb-8">
          <div>
            <Link href={"/"}>
              <Image
                src={footerlogo}
                alt="footerlogo"
                width={1000}
                height={500}
                className="max-w-[220px] m-auto md:m-0"
              />
            </Link>
            <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-0 pt-4">
            {socialLinks.map((item, i) =>
              <Link href={item.url} key={i} target="_blank">
                <div className="p-3 sm:p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center transition-transform duration-300 hover:scale-110">
                  <Image src={item.icon} width={20} height={20} alt="" />
                </div>
              </Link>
            )}
          </div>
          </div>
          <div>
            <Newletterfrom />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr]">
          <div>
            <h3 className="text-white text-3xl md:text-4xl pb-3">
              {footerData[0].title}
            </h3>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2">
              {footerData[0].links.map((data, index) =>
                <div className="flex items-center py-2" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={data.page_links}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
            </div>
            <div className="grid md:hidden grid-cols-1 md:grid-cols-2">
              {footerData[0].links.slice(0, showitem[0]).map((data, index) =>
                <div
                  className="flex items-start md:items-center py-2"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
              <span
                className="text-white underline"
                onClick={() => handelshow(0)}
              >
                {showitem[0] >= footerData[0].links.length
                  ? "See Less"
                  : "See More"}
              </span>
            </div>
          </div>
          <div className="pt-8 md:pt-0">
            <h3 className="text-white text-3xl md:text-4xl pb-3">
              {footerData[1].title}
            </h3>
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2">
              {footerData[1].links.map((data, index) =>
                <div className="flex items-center py-2" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
            </div>
            <div className="grid md:hidden grid-cols-1 md:grid-cols-2">
              {footerData[1].links.slice(0, showitem[1]).map((data, index) =>
                <div
                  className="flex items-start md:items-center py-2"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <rect width="24" height="24" fill="none" />
                    <path
                      fill="#fff"
                      d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"
                    />
                  </svg>
                  <Link
                    href={"/"}
                    className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                  >
                    {data.page_name}
                  </Link>
                </div>
              )}
              <span
                className="text-white underline"
                onClick={() => handelshow(1)}
              >
                {showitem[1] >= footerData[1].links.length
                  ? "See Less"
                  : "See More"}
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 flex flex-col justify-between items-center gap-4 lg:gap-6">
          <p className="text-base opacity-80 text-center sm:text-left text-white">
            © B2B Campus. All Rights Reserved 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
