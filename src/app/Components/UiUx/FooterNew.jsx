"use client";
import Link from "next/link";
import React, { useState } from "react";
import footerlogo from "../../../../public/images/footerlogo.png";
import Image from "next/image";

import Footerfacebook from "../../../../public/images/Footerfacebook.webp";
import linkedin from "../../../../public/images/linkedin.webp";
import insta from "../../../../public/images/insta.webp";
import pinterest from "../../../../public/icons/pinterest.svg";
import snapchat from "../../../../public/icons/snapchat.svg";
import youtube from "../../../../public/icons/youtube.svg";
import { Newletterfrom } from "../Page-Components/Newletterfrom";
import PressReleases, {
  TopPressReleases
} from "../Page-Components/PressReleases";
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
        id: 16,
        page_name: "Safety & Compliance (Truck Dispatching)",
        page_links: "/truck-dispatch-safety-compliance-course"
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
      },
      {
        id: 14,
        page_name: "Shopify App Dev",
        page_links: "/shopify-app-development-course"
      },
      {
        id: 15,
        page_name: "Shopify Theme Dev",
        page_links: "/shopify-theme-development-course"
      },
      {
        id: 16,
        page_name: "React Native",
        page_links: "/react-native"
      },
      {
        id: 17,
        page_name: "React Js",
        page_links: "/react-js-course"
      }
    ]
  },

  {
    title: "Useful Links",
    links: [
      {
        id: 19,
        page_name: "Six months industrial training in Chandigarh",
        page_links: "/six-months-industrial-training-in-chandigarh"
      },
      {
        id: 20,
        page_name: "Six weeks industrial training in Chandigarh",
        page_links: "/six-weeks-industrial-training-in-chandigarh"
      },
      {
        id: 21,
        page_name: "Industrial training in Chandigarh",
        page_links: "/industrial-training-in-chandigarh"
      },
      {
        id: 22,
        page_name: "6 months industrial training in Chandigarh",
        page_links: false
      },
      {
        id: 23,
        page_name: "6 weeks industrial training in Chandigarh",
        page_links: false
      },
      {
        id: 24,
        page_name: "Best industrial training in Chandigarh",
        page_links: "/best-industrial-training-in-chandigarh"
      },
      {
        id: 25,
        page_name: "Best industrial training in Mohali",
        page_links: "/best-industrial-training-in-mohali"
      },
      {
        id: 26,
        page_name: "Six months industrial training in Mohali",
        page_links: false
      },
      {
        id: 27,
        page_name: "Six weeks industrial training in Mohali",
        page_links: "/six-months-industrial-training-in-mohali"
      },

      {
        id: 28,
        page_name: "Summer Training in Chandigarh",
        page_links: false
      },
      {
        id: 29,
        page_name: "Training companies in Chandigarh",
        page_links: false
      },
      {
        id: 30,
        page_name: "Free industrial training in Chandigarh",
        page_links: false
      },
      {
        id: 31,
        page_name: "Free six months industrial training in Chandigarh",
        page_links:
          "free-six-months-industrial-training-in-chandigarh-for-btech-mca-and-diploma-students"
      },
      {
        id: 32,
        page_name: "Best six months industrial training in Chandigarh",
        page_links: false
      },
      {
        id: 33,
        page_name: "Best six weeks industrial training in Chandigarh",
        page_links: "best-six-weeks-industrial-training-in-chandigarh"
      },
      {
        id: 34,
        page_name: "Live projects based industrial training in Chandigarh",
        page_links: false
      },
      {
        id: 35,
        page_name: "Skill based Learning training companies in Chandigarh",
        page_links: "skill-based-learning-training-companies-chandigarh"
      },
      {
        id: 36,
        page_name:
          "Training Companies in Chandigarh in Skill Development and Employability",
        page_links:
          "training-companies-chandigarh-skill-development-employability"
      },
      {
        id: 37,
        page_name: "Truck Dispatching Course in Canada",
        page_links: "truck-dispatching-canada"
      },
      {
        id: 38,
        page_name: "Truck Dispatching Course in USA",
        page_links: "truck-dispatching-usa"
      },
      {
        id: 39,
        page_name: "Web Designing Complete Guide For Beginners",
        page_links: "web-designing-complete-guide-for-beginners"
      },
      {
        id: 40,
        page_name: "Six Months Industrial Training In Chandigarh",
        page_links: "6-months-industrial-training-in-chandigarh"
      },
      {
        id: 41,
        page_name:
          "Best Six Weeks Industrial Training In Chandigarh For Students",
        page_links:
          "best-6-weeks-industrial-training-in-chandigarh-for-students"
      },
      {
        id: 42,
        page_name: "Best Industrial Training In Chandigarh For Students",
        page_links: "best-industrial-training-in-chandigarh-for-students"
      },
      {
        id: 43,
        page_name:
          "Six Weeks Industrial Training In Chandigarh For Job Readiness",
        page_links:
          "six-weeks-industrial-training-in-chandigarh-for-job-readiness"
      },
      {
        id: 44,
        page_name:
          "Best Summer Training In Chandigarh For Engineering Students",
        page_links:
          "best-summer-training-in-chandigarh-for-engineering-students"
      },
      {
        id: 45,
        page_name: "Top IT Certification Courses In Chandigarh",
        page_links: "top-it-certification-courses-in-chandigarh"
      }
    ]
  }
];
const socialLinks = [
  { icon: Footerfacebook, url: "https://www.facebook.com/CampusB2B" },
  { icon: insta, url: "https://www.instagram.com/b2bcampus/?hl=en" },
  { icon: linkedin, url: "https://www.linkedin.com/company/b2b-campus/" },
  {
    icon: youtube,
    url: "https://www.youtube.com/channel/UCs1sxcuHQ7GWgB9gMyRXwXQ/featured"
  },
  { icon: snapchat, url: "https://www.snapchat.com/@b2bcampus" },
  { icon: pinterest, url: "https://in.pinterest.com/b2bcampus/" }
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
    <div>
      <div className="main-bg">
        <TopPressReleases />
      </div>
      <div className="bg-primary">
        <div className=" pt-16">
          <div className="flex flex-col md:flex-row gap-y-6 md:items-center justify-between pb-8 max-w-[1780px] m-auto px-[3%]">
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
              {/* <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-0 pt-4">
                {socialLinks.map((item, i) =>
                  <Link href={item.url} key={i} target="_blank">
                    <div className="p-3 sm:p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center transition-transform duration-300 hover:scale-110">
                      <Image src={item.icon} width={20} height={20} alt="" />
                    </div>
                  </Link>
                )}
              </div> */}
            </div>
            <div>
              <Newletterfrom />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] max-w-[1780px] m-auto px-[3%] pb-3">
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
                      href={data.page_links}
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
                {footerData[1].links.map((data, index) => {
                  if (data.page_links === false) {
                    return null;
                  }
                  return (
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
                        href={data.page_links ? data.page_links : "/"}
                        className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                      >
                        {data.page_name}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="grid md:hidden grid-cols-1 md:grid-cols-2 pb-4">
                {footerData[1].links
                  .slice(0, showitem[1])
                  .map((data, index) => {
                    if (data.page_links === false) {
                      return null;
                    }
                    return (
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
                          href={data.page_links ? data.page_links : "/"}
                          className="text-white text-lg 2xl:text-xl hover:underline transition-all duration-500"
                        >
                          {data.page_name}
                        </Link>
                      </div>
                    );
                  })}
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
          <div className="bg-[#4924c9] pb-16  border-t-2 border-t-white">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-6 mt-6 border-b-2 border-b-white/20 gap-x-4 gap-y-5 max-w-[1780px] m-auto px-[3%]">
              <div className="">
                <h4 className="text-xl xl:text-2xl 2xl:text-3xl text-white font-bold">
                  Follow Us
                </h4>
                <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-0 pt-4">
                  {socialLinks.map((item, i) =>
                    <Link
                      href={item.url}
                      key={i}
                      target="_blank"
                      className="p-3 sm:p-[11px] rounded-full bg-[#000000] flex justify-center items-center transition-transform duration-300 hover:scale-110"
                    >
                      <Image
                        src={item.icon}
                        width={20}
                        height={20}
                        alt="icons"
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div>
                <h4 className="text-white text-xl md:text-2xl">
                  Working Hours:
                </h4>

                <p className="text-white text-base md:text-lg font-normal pt-4">
                  Mon-Fri: 10 Am- 07 Pm
                  <br />
                  Sat-Sun: Holiday
                </p>
              </div>
              <div>
                <h4 className="text-white text-xl md:text-2xl">
                  India (B2bcampus)
                </h4>

                <div className="text-white text-base md:text-lg font-normal pt-4 hover:underline">
                  <a
                    href="https://www.google.com/maps/place/B2B+Campus/data=!4m2!3m1!1s0x0:0xb9ae31b247ff7455?sa=X&ved=1t:2428&ictx=111"
                    target="_blank"
                  >
                    F-209, Sector 74, Mohali, 160074
                  </a>
                  <br />
                  <div>
                    <a href="tel:+919872487850">INDIA +91 9872487850</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-white text-xl md:text-2xl">
                  Canada (B2bcampus)
                </h4>

                <div className="text-white text-base md:text-lg font-normal pt-4 hover:underline">
                  83 saddlebrook court , kitchener , NR2 0P6
                  <br />
                  <div>
                    <a href="tel:+15482554922">CANADA +1 (548) 255-4922</a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-6 flex flex-col justify-between items-center gap-4 lg:gap-6 max-w-[1780px] m-auto px-[3%]">
              <p className="text-base opacity-80 text-center sm:text-left text-white">
                © B2B Campus. All Rights Reserved {new Date().getFullYear()}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNew;
