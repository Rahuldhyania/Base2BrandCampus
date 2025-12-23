import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import Image from "next/image";
import Link from "next/link";

const courseData = [
  {
    id: 1,
    icon: "/icons/graphic.svg",
    image: "/images/domianposter1.webp",
    title: "Graphic Designing",
    duration: "3-6 Months",
    description: "Photoshop • Illustrator <br/> • Figma • Logo & Branding",
    pagelink: "/graphic-design-course"
  },
  {
    id: 2,
    icon: "/icons/video.svg",
    image: "/images/domianposter2.webp",
    title: "Video Editing",
    duration: "3-6 Months",
    description: "Reels • YouTube Editing <br/> • Transitions • Color Grading",
    pagelink: "/video-editing"
  },
  {
    id: 3,
    icon: "/icons/fullstack.svg",
    image: "/images/domianposter3.webp",
    title: "Full Stack Development",
    duration: "3-6 Months",
    description: "Frontend • Backend • APIs <br/> • Databases • Live Projects",
    pagelink: "/full-stack-development"
  },
  {
    id: 4,
    icon: "/icons/webdev.svg",
    image: "/images/domianposter4.webp",
    title: "Web Development",
    duration: "3-6 Months",
    description: "HTML • CSS • JavaScript <br/> • Responsive Websites",
    pagelink: "/web-development-course"
  },
  {
    id: 5,
    icon: "/icons/python.svg",
    image: "/images/domianposter5.webp",
    title: "Python / Java",
    duration: "3-6 Months",
    description: "Logic Building • OOP <br/> • Programs • Real Applications",
    pagelink: "/python-java-course"
  },
  {
    id: 6,
    icon: "/icons/webdes.svg",
    image: "/images/domianposter6.webp",
    title: "Web Designing",
    duration: "3-6 Months",
    description: "UI/UX • Figma <br/> • Responsive Layouts • Landing Pages",
    pagelink: "/web-designing-course"
  },
  {
    id: 7,
    icon: "/icons/iot.svg",
    image: "/images/domianposter7.webp",
    title: "Internet of Things (IoT)",
    duration: "3-6 Months",
    description: "Sensors • Arduino • ESP32 <br/> • Automation • IoT Projects",
    pagelink: "/iot"
  },
  {
    id: 8,
    icon: "/icons/ai.svg",
    image: "/images/domianposter8.webp",
    title: "AI Course",
    duration: "3-6 Months",
    description: "AI Basics • Machine Learning <br/> • Data Handling • Projects",
    pagelink: "/ai-course"
  },
  {
    id: 9,
    icon: "/icons/wordpress.svg",
    image: "/images/domianposter9.webp",
    title: "WordPress",
    duration: "3-6 Months",
    description: "Themes • Plugins <br/> • Dynamic Websites • Hosting",
    pagelink: "/wordpress-training-course"
  },
  {
    id: 10,
    icon: "/icons/digital.svg",
    image: "/images/domianposter10.webp",
    title: "Digital Marketing",
    duration: "3-6 Months",
    description: "SEO • SMO • Google Ads <br/> • Analytics • Live Campaigns",
    pagelink: "/digital-marketing-course"
  }
];


const TrainingDomains = () => {
    return (
        <div>
            <div className="cus_container py-12 md:py-16">
                <div className="text-center">
                    <div className="relative">
                        <Image
                            src={smallbublebg.src}
                            alt="bubble-bg"
                            width={1000}
                            height={500}
                            className="absolute hidden md:block -bottom-8 left-1/2 -translate-x-1/2 w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                        />
                        <Title
                            title={
                                'Training Domains <span class="text-secondary"> Offered </span>'
                            }
                            text_color={"text-primary relative z-10"}
                        />
                    </div>

                    <div className="pt-3 relative z-10">
                        <Description
                            description={"Choose from our industry-leading training programs"}
                            text_color={"text-secondary"}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-primary">
                <div className="py-12 md:py-16 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 cus_container gap-y-8">
                    {courseData.map((data, index) =>
                        <div className="max-w-[90%] m-auto bg-white rounded-3xl" key={index}>
                            <div className="relative">
                                <Image
                                    src={data.image}
                                    alt=""
                                    width={1000}
                                    height={500}
                                    className="rounded-t-3xl"
                                />
                                <div className="absolute top-4 left-2 w-[58px] h-[58px] flex justify-center items-center bg-[#FAF5FF] rounded-2xl">
                                    <Image
                                        src={data.icon}
                                        alt=""
                                        width={1000}
                                        height={500}
                                        className="max-w-[29px]"
                                    />
                                </div>
                            </div>

                            <div className="py-3 ps-5">
                                <h5 className="text-[22px] font-bold">
                                    {data.title}
                                </h5>
                                <p className="flex items-center gap-2 py-2">
                                    <Image
                                        src="/icons/clock.svg"
                                        width={1000}
                                        height={500}
                                        className="w-5"
                                    />
                                    <span className="text-[#4A5565] text-base">
                                        {data.duration}
                                    </span>
                                </p>
                                <p
                                    className="text-[17px]"
                                    dangerouslySetInnerHTML={{ __html: data.description }}
                                />
                                <div className="pt-2 ">
                                    <Link
                                     href={data.pagelink}>
                                    <span className="text-primary text-lg cursor-pointer">
                                        Learn More...
                                    </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrainingDomains;
