"use client";
import React, { useState } from "react";
import Globaltitle from "../UiUx/Globaltitle";
import Image from "next/image";
import { PopularTags } from "./PopularTags";
import ArticleCard from "../UiUx/ArticleCard";
import { articlesdata } from "@/app/Data/Articlesdata";
const toptagfilter = [
    {
        id: 1,
        icon_default: "/icons/clockwhite.svg",
        icon_select: "/icons/clockblack.svg",
        tag_name: "Latest"
    },
    {
        id: 2,
        icon_default: "/icons/popularwhite.svg",
        icon_select: "/icons/popularblack.svg",
        tag_name: "Popular"
    },
    {
        id: 3,
        icon_default: "/icons/allwhite.svg",
        icon_select: "/icons/allblack.svg",
        tag_name: "All Articles"
    }
];
const topdropdown = [
    "All Topics",
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "AI & Machine Learning",
    "Career Growth"
];
const knowledgeCategories = [
    {
        id: 1,
        title: "Freelancing",
        articles: 15,
        icon: "/icons/bag.svg"
    },
    {
        id: 2,
        title: "Digital Marketing",
        articles: 23,
        icon: "/icons/popularblack.svg"
    },
    {
        id: 3,
        title: "Programming",
        articles: 31,
        icon: "/icons/webdev.svg"
    },
    {
        id: 4,
        title: "Career Guides",
        articles: 18,
        icon: "/icons/people2.svg"
    },
    {
        id: 5,
        title: "Business",
        articles: 12,
        icon: "/icons/business.svg"
    },
    {
        id: 6,
        title: "Design",
        articles: 19,
        icon: "/icons/graphic.svg"
    }
];
const trandingtopics = [
    "AI and Machine Learning",
    "Remote Work Best Practices",
    "Web3 and Blockchain",
    "No-Code Development",
    "Personal Branding"
];

export const TrandingTopics = () => {
    return (
        <div className="bg-white rounded-2xl  py-6 px-6">
            <h5 className="text-2xl text-secondary flex items-center gap-3">
                <Image
                    src={"/icons/popularblack.svg"}
                    alt=""
                    width={1000}
                    height={500}
                    className="max-w-6"
                />
                Trending Topics
            </h5>
            <div className="pt-3 grid gap-y-3 ps-4">
                {trandingtopics.map((data, index) =>
                    <li className="text-lg list-disc marker:text-(--primary)" key={index}>
                        {data}
                    </li>
                )}
            </div>
        </div>
    );
};

const KnowledgeCenter = () => {
    const [search, setSearch] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [activeTag, setActiveTag] = useState(1);
    const [activeTab, setActiveTab] = useState(0);
    const [activeTabname, setActiveTabname] = useState('');
    const [activeTagname, setActiveTagname] = useState("Latest");
    const [topdropdownopen, setTopdropdownOpen] = useState(false);
    const [selecteddropdown, setSelecteddropdown] = useState(topdropdown[0]);
    console.log(selecteddropdown, "activeTabname", activeTabname);

    const filteredArticles = articlesdata.filter(item => {
        const searchText = search.toLowerCase();
        const tabText = activeTabname.toLowerCase();

        const matchSearch =
            item.article_title.toLowerCase().includes(searchText) ||
            item.article_des_tag.toLowerCase().includes(searchText) ||
            item.article_toptag.toLowerCase().includes(searchText);

        const matchTab =
            tabText === '' ||
            item.article_toptag.toLowerCase().includes(tabText);

        return matchSearch && matchTab;
    });

    return (
        <div className="">
            <div>
                <div
                    className="banner_section bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `url(/images/knowledgecenterbg.webp)` }}
                >
                    <div className="cus_container">
                        <div className="py-16">
                            <Globaltitle
                                titleStart={""}
                                highlightText={"Knowledge Center"}
                                description={
                                    "Your hub for courses, career insights, and industry knowledge"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-6 sticky top-0 z-999">
                <div className="cus_container flex items-center justify-between">
                    <div className="flex gap-8">
                        {toptagfilter.map(data => {
                            const isActive = activeTag === data.id;
                            activeTag === data.id ? setActiveTagname(data.tag_name) : '';
                            return (
                                <div
                                    key={data.id}
                                    onClick={() => {
                                        setActiveTag(data.id);
                                        setActiveTagname(data.tag_name);
                                    }}
                                    className={`flex items-center gap-2 py-3 px-4 rounded-2xl cursor-pointer transition-all ${isActive
                                        ? "bg-white"
                                        : "bg-[#4129BA]"}`}
                                >
                                    <Image
                                        src={isActive ? data.icon_select : data.icon_default}
                                        alt={data.tag_name}
                                        width={20}
                                        height={20}
                                    />

                                    <p
                                        className={`text-base font-medium ${isActive
                                            ? "text-black"
                                            : "text-white"}`}
                                    >
                                        {data.tag_name}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="w-[40%]">
                        <div className="flex gap-3 w-full m-auto bg-white  border-[#6346FA94] border-2 rounded-2xl py-3 px-5">
                            <div>
                                <Image
                                    src={"/icons/lence.svg"}
                                    alt=""
                                    width={1000}
                                    height={500}
                                    className="max-w-6"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Search articles, topics, or keywords..."
                                className="text-lg placeholder:text-[#0A0A0A80] border-none outline-none w-[80%] text-primary"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                onFocus={() => (setIsSearchActive(true), setActiveTabname(''))}
                                onBlur={() => {
                                    if (!search || search === '') setIsSearchActive(false);
                                }}
                            />
                        </div>
                    </div>
                    <div className="relative w-fit">
                        <div
                            onClick={() => setTopdropdownOpen(!topdropdownopen)}
                            className="flex items-center gap-2 bg-white text-primary px-5 py-2 rounded-xl text-base font-medium cursor-pointer select-none"
                        >
                            <span>
                                {selecteddropdown}
                            </span>
                            <span
                                className={`inline-block w-2 h-2 border-r-2 border-b-2 border-primary transition-transform duration-200 ${topdropdownopen
                                    ? "-rotate-135"
                                    : "rotate-45"}`}
                            />
                        </div>

                        {topdropdownopen &&
                            <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg overflow-hidden z-50">
                                {topdropdown.map((item, index) =>
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setSelecteddropdown(item);
                                            setTopdropdownOpen(false);
                                        }}
                                        className={`px-4 py-2 text-sm cursor-pointer transition ${selecteddropdown ===
                                            item
                                            ? "bg-primary text-white"
                                            : "text-ternary hover:bg-primary "}`}
                                    >
                                        {item}
                                    </div>
                                )}
                            </div>}
                    </div>
                </div>
            </div>

            <div className="main-bg relative">
                <div className="max-w-7xl m-auto py-12">
                    {isSearchActive ? <h4 className="m-0 pb-3 text-2xl">Result {search !== '' ? filteredArticles.length : 0}</h4> : <h4 className="m-0 pb-3 text-2xl">Browse by Topic</h4>}
                    <div className="grid grid-cols-[4fr_2fr] gap-10">
                        <div>
                            {
                                !isSearchActive ?
                                    <div className="grid grid-cols-3 gap-6">
                                        {knowledgeCategories.map((data, index) => {
                                            const ActiveTab = activeTab == data.id;
                                            activeTab === data.id ? setActiveTabname(data.title) : '';
                                            return (
                                                <div
                                                    className={`${ActiveTab
                                                        ? "bg-primary"
                                                        : "bg-white"} p-7 rounded-xl cursor-pointer`}
                                                    key={index}
                                                    onClick={() => {
                                                        setActiveTab(data.id);
                                                        setActiveTabname(data.title);
                                                    }}

                                                >
                                                    <div className="w-12 h-12 flex justify-center items-center bg-[#E4E0FC] rounded-lg">
                                                        <Image
                                                            src={data.icon}
                                                            alt=""
                                                            width={1000}
                                                            height={500}
                                                            className="max-w-6"
                                                        />
                                                    </div>
                                                    <div className="pt-3">
                                                        <p
                                                            className={`${ActiveTab
                                                                ? "text-white"
                                                                : "text-secondary "} text-lg`}
                                                        >
                                                            {data.title}
                                                        </p>
                                                        <p
                                                            className={`${ActiveTab
                                                                ? "text-white"
                                                                : "text-[#6A7282]"}`}
                                                        >
                                                            {data.articles} articles
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    :
                                    ''
                            }


                            <div className={`${isSearchActive ? 'pt-2' : 'pt-12'} space-y-8`}>
                                {filteredArticles.map(data =>
                                    <ArticleCard
                                        key={data.id}
                                        id={data.id}
                                        poster_image={data.article_poster}
                                        isfeatured={data.isfeatured}
                                        article_tag={data.article_toptag}
                                        article_des_tag={data.article_des_tag}
                                        article_title={data.article_title}
                                        article_carddescription={data.article_carddescription}
                                        publish_date={data.publish_date}
                                        reading_time={data.reading_time}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="sticky top-[120px] space-y-6">
                                <TrandingTopics />
                                <PopularTags />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeCenter;
