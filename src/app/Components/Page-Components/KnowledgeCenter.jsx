"use client";
import React, { useState, useMemo } from "react";
import Globaltitle from "../UiUx/Globaltitle";
import Image from "next/image";
import { PopularTags } from "./PopularTags";
import ArticleCard from "../UiUx/ArticleCard";
import { articlesdata } from "@/app/Data/Articlesdata";

/* -------------------- STATIC DATA -------------------- */

const toptagfilter = [
    { id: 1, icon_default: "/icons/clockwhite.svg", icon_select: "/icons/clockblack.svg", tag_name: "Latest" },
    { id: 2, icon_default: "/icons/popularwhite.svg", icon_select: "/icons/popularblack.svg", tag_name: "Popular" },
    { id: 3, icon_default: "/icons/allwhite.svg", icon_select: "/icons/allblack.svg", tag_name: "All Articles" }
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
    { id: 1, title: "Freelancing", articles: 15, icon: "/icons/bag.svg" },
    { id: 2, title: "Digital Marketing", articles: 23, icon: "/icons/popularblack.svg" },
    { id: 3, title: "Programming", articles: 31, icon: "/icons/webdev.svg" },
    { id: 4, title: "Career Guides", articles: 18, icon: "/icons/people2.svg" },
    { id: 5, title: "Business", articles: 12, icon: "/icons/business.svg" },
    { id: 6, title: "Design", articles: 19, icon: "/icons/graphic.svg" }
];

const trandingtopics = [
    "AI and Machine Learning",
    "Remote Work Best Practices",
    "Web3 and Blockchain",
    "No-Code Development",
    "Personal Branding"
];

/* -------------------- SIDE COMPONENT -------------------- */

export const TrandingTopics = () => (
    <div className="bg-white rounded-2xl py-6 px-6">
        <h5 className="text-2xl text-secondary flex items-center gap-3">
            <Image src="/icons/popularblack.svg" alt="" width={24} height={24} />
            Trending Topics
        </h5>

        <ul className="pt-3 grid gap-y-3 ps-4">
            {trandingtopics.map((item, i) => (
                <li key={i} className="text-lg list-disc">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

/* -------------------- MAIN COMPONENT -------------------- */

const KnowledgeCenter = () => {
    const [search, setSearch] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [activeTag, setActiveTag] = useState(1);
    const [activeTab, setActiveTab] = useState(null);
    const [topdropdownopen, setTopdropdownOpen] = useState(false);
    const [selecteddropdown, setSelecteddropdown] = useState(topdropdown[0]);

    /* --------- DERIVED VALUES (NO STATE) --------- */

    const activeTagname =
        toptagfilter.find(tag => tag.id === activeTag)?.tag_name || "";

    const activeTabname =
        knowledgeCategories.find(cat => cat.id === activeTab)?.title || "";

    /* --------- FILTERED ARTICLES --------- */

    const filteredArticles = useMemo(() => {
        const searchText = search.toLowerCase();
        const tabText = activeTabname.toLowerCase();

        return articlesdata.filter(item => {
            const matchSearch =
                item.article_title.toLowerCase().includes(searchText) ||
                item.article_des_tag.toLowerCase().includes(searchText) ||
                item.article_toptag.toLowerCase().includes(searchText);

            const matchTab =
                !tabText || item.article_toptag.toLowerCase().includes(tabText);

            return matchSearch && matchTab;
        });
    }, [search, activeTabname]);

    /* -------------------- JSX -------------------- */

    return (
        <div className="main-bg">
            {/* Banner */}
            <div
                className="banner_section bg-cover bg-center"
                style={{ backgroundImage: "url(/images/knowledgecenterbg.webp)" }}
            >
                <div className="cus_container py-16">
                    <Globaltitle
                        highlightText="Knowledge Center"
                        description="Your hub for courses, career insights, and industry knowledge"
                    />
                </div>
            </div>

            {/* Top Bar */}
            <div className="bg-primary py-6 sticky top-0 z-50">
                <div className="cus_container flex justify-between items-center gap-6">

                    {/* Top Tags */}
                    <div className="flex gap-4">
                        {toptagfilter.map(tag => {
                            const isActive = activeTag === tag.id;
                            return (
                                <div
                                    key={tag.id}
                                    onClick={() => setActiveTag(tag.id)}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl cursor-pointer ${isActive ? "bg-white" : "bg-[#4129BA]"
                                        }`}
                                >
                                    <Image
                                        src={isActive ? tag.icon_select : tag.icon_default}
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                    <span className={isActive ? "text-black" : "text-white"}>
                                        {tag.tag_name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <div className="w-[40%] bg-white rounded-2xl flex items-center gap-3 px-5 py-3">
                        <Image src="/icons/lence.svg" alt="" width={20} height={20} />
                        <input
                            className="w-full outline-none"
                            placeholder="Search articles, topics, or keywords..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            onFocus={() => {
                                setIsSearchActive(true);
                                setActiveTab(null);
                            }}
                            onBlur={() => !search && setIsSearchActive(false)}
                        />
                    </div>

                    {/* Dropdown */}
                    <div className="relative">
                        <div
                            onClick={() => setTopdropdownOpen(!topdropdownopen)}
                            className="bg-white px-5 py-2 rounded-xl cursor-pointer"
                        >
                            {selecteddropdown}
                        </div>

                        {topdropdownopen && (
                            <div className="absolute mt-2 bg-white rounded-xl shadow w-full">
                                {topdropdown.map(item => (
                                    <div
                                        key={item}
                                        onClick={() => {
                                            setSelecteddropdown(item);
                                            setTopdropdownOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto py-12 grid grid-cols-[4fr_2fr] gap-10">

                {/* Left */}
                <div>
                    {!isSearchActive && (
                        <div className="grid grid-cols-3 gap-6">
                            {knowledgeCategories.map(cat => {
                                const isActive = activeTab === cat.id;
                                return (
                                    <div
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`p-7 rounded-xl cursor-pointer ${isActive ? "bg-primary text-white" : "bg-white"
                                            }`}
                                    >
                                        <Image src={cat.icon} alt="" width={40} height={40} />
                                        <p className="pt-3 text-lg">{cat.title}</p>
                                        <p>{cat.articles} articles</p>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <div className="pt-12 space-y-8">
                        {filteredArticles.map(article => (
                            <ArticleCard
                                key={article.id}
                                id={article.id}
                                poster_image={article.article_poster}
                                isfeatured={article.isfeatured}
                                article_tag={article.article_toptag}
                                article_des_tag={article.article_des_tag}
                                article_title={article.article_title}
                                article_carddescription={article.article_carddescription}
                                publish_date={article.publish_date}
                                reading_time={article.reading_time}
                            />
                        ))}
                    </div>

                </div>

                {/* Right */}
                <div className="space-y-6 sticky top-[120px]">
                    <TrandingTopics />
                    <PopularTags />
                </div>
            </div>
        </div>
    );
};

export default KnowledgeCenter;
