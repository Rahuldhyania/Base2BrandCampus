"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import B2BCAMPUSLOGO from "../../../../public/images/B2B CAMPUS LOGO-02 1.png";
import Buttons from "./Buttons";
import { motion } from "framer-motion";
import arrowdown from "../../../../public/icons/arrowdown.svg";
import menuarrow from "../../../../public/icons/menuarrow.svg";

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

export default function Header() {
    const [open, setOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("AllCourses");
    const pathname = usePathname();

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        { name: "Placement", path: "/placement" },
        { name: "Our Story", path: "/our-story" },
        { name: "Contact Us", path: "/contact-us" },
    ];


    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (megaOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "0px";
        }
    }, [megaOpen]);


    return (
        <nav className="relative z-50">
            <div className="flex justify-between xl:justify-around items-center flex-wrap gap-4 relative py-5 px-5 bg-white">

                <Link href="/">
                    <Image src={B2BCAMPUSLOGO} width={1000} height={500} alt="B2BCampus Logo" className="w-[150px] md:w-[211px]" />
                </Link>

                <div className="hidden xl:block">
                    <ul className="flex items-center gap-10 text-[21px] font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                {item.name === "Courses" ? (
                                    <div
                                        className="cursor-pointer px-1 text-gray-700 hover:text-purple-500 transition-colors"
                                        onClick={() => setMegaOpen(!megaOpen)}
                                    >
                                        <span className="inline-flex items-center">
                                            {item.name}
                                            <Image
                                                src={arrowdown}
                                                width={20}
                                                height={20}
                                                alt="arrowdown"
                                                className={`ml-1 transition-transform duration-300 ${megaOpen ? "rotate-180" : "rotate-0"}`}
                                            />
                                        </span>
                                    </div>
                                ) : (
                                    <Link href={item.path}>
                                        <span className={`relative px-1 cursor-pointer ${pathname === item.path ? "text-purple-600" : "text-gray-700"} hover:text-purple-500`}>
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

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex">
                        <Buttons btnname="Enroll Now" text_color="text-white" />
                    </div>

                    <div className="xl:hidden cursor-pointer" onClick={() => setOpen(!open)}>
                        <div className="space-y-1">
                            <span className="block w-6 h-[3px] bg-gray-700 transition-all" style={{ rotate: open ? "45deg" : "0deg", translateY: open ? "8px" : "0px" }} />
                            <span className={`block w-6 h-[3px] bg-gray-700 transition-all ${open ? "opacity-0" : "opacity-100"}`} />
                            <span className="block w-6 h-[3px] bg-gray-700 transition-all" style={{ rotate: open ? "-45deg" : "0deg", translateY: open ? "-8px" : "0px" }} />
                        </div>
                    </div>
                </div>

                <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden transition-all duration-500 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col gap-4 text-[18px] px-4 py-4">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <span className={`flex py-2 px-2 ${pathname === item.path ? "text-purple-600 font-semibold" : "text-gray-700"}`}
                                    onClick={() => {
                                        if (item.name === "Courses") {
                                            setMegaOpen(true);
                                            setOpen(false);
                                        } else {
                                            setOpen(false);
                                        }
                                    }}>
                                    {item.name}
                                    {
                                        item.name == "Courses" ?
                                            <Image
                                                src={arrowdown}
                                                width={20}
                                                height={20}
                                                alt="arrowdown"
                                                className={`ml-1 transition-transform duration-300 ${megaOpen ? "rotate-180" : "rotate-0"}`}
                                            />
                                            :
                                            null
                                    }
                                </span>
                            </li>
                        ))}
                        <Buttons btnname="Enroll Now" text_color="text-white" />
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

                    <div className=" max-h-[80vh] fixed top-[60px] md:top-[86px] left-1/2 -translate-x-1/2 bg-white border border-[#D9D4FF] shadow-[0_4px_20px_rgba(93,56,222,0.15)] rounded-xl p-4 z-50 flex flex-col md:flex-row w-[95%] max-w-[1282px] gap-4 overflow-hidden">
                        <div className="absolute top-2 right-2 z-50">
                            <button
                                onClick={() => setMegaOpen(false)}
                                className="text-gray-700 text-2xl font-bold"
                            >
                                ×
                            </button>
                        </div>

                        <div className="md:w-1/4 w-full md:border-r md:pb-12 pr-4 ">
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
                            </div>

                            <ul className="overflow-y-auto max-h-[50vh] md:max-h-none">
                                {categories.map((cat) => (
                                    <li
                                        key={cat.key}
                                        onClick={() => setActiveCategory(cat.key)}
                                        className={`px-4 py-2 cursor-pointer rounded-md text-sm flex justify-between mb-1
                            ${activeCategory === cat.key
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
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {coursesData[activeCategory]?.map((course, index) => (
                                    <Link key={index} href={course.path}>
                                        <motion.div
                                            initial={{ opacity: 0, }}
                                            animate={{ opacity: 1, }}
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





        </nav>
    );
}