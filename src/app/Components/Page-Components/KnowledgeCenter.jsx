"use client";
import React, { useState, useMemo, useEffect } from "react";
import Globaltitle from "../UiUx/Globaltitle";
import Image from "next/image";
import { PopularTags } from "./PopularTags";
import ArticleCard from "../UiUx/ArticleCard";
import { articlesdata, fetchKnowledgeCenter, fetchCategories } from "@/app/Data/Articlesdata";
import Link from "next/link";

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

// Icon mapping for categories
const getCategoryIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('freelancing') || name.includes('career')) return "/icons/bag.svg";
    if (name.includes('marketing') || name.includes('digital')) return "/icons/popularblack.svg";
    if (name.includes('programming') || name.includes('coding') || name.includes('web development')) return "/icons/webdev.svg";
    if (name.includes('design') || name.includes('graphic') || name.includes('ui/ux')) return "/icons/graphic.svg";
    if (name.includes('business')) return "/icons/business.svg";
    if (name.includes('people') || name.includes('guide')) return "/icons/people2.svg";
    // Default icon
    return "/icons/webdev.svg";
};

// Static fallback categories
const staticKnowledgeCategories = [
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

export const TrandingTopics = ({ data }) => {
    const [trendingTopics, setTrendingTopics] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTrendingTopics = async () => {
            try {
                setLoading(true);
                // Fetch trending type articles (type="trading" for trending/popular)
                const res = await fetchKnowledgeCenter(1, 10, "trading");
                const topics = res?.knowledgeCenters || [];
                // Extract only titles/headings from trending articles
                const titles = topics.map(item => {
                    const title = item.heading || item.article_title || '';
                    return title;
                }).filter(title => title);

                // Use API data if available, otherwise fallback to static data
                setTrendingTopics(titles.length > 0 ? titles : trandingtopics);
            } catch (error) {
                console.error("Error fetching trending topics:", error);
                setTrendingTopics(trandingtopics);
            } finally {
                setLoading(false);
            }
        };

        loadTrendingTopics();
    }, []);

    return (
        <div className="bg-white rounded-2xl py-6 px-6">
            <h5 className="text-2xl text-secondary flex items-center gap-3">
                <Image src="/icons/popularblack.svg" alt="" width={24} height={24} />
                Trending Topics
            </h5>

            {loading ? (
                <div className="pt-3 text-center text-gray-500">Loading...</div>
            ) : (
                <ul className="pt-3 grid gap-y-3 ps-4">
                    {data.slice(0, 4).map((item, i) => (
                        <Link
                            key={i}
                            href={`/knowledge-center/${item.slugUrl}`}
                        >
                            <li className="text-lg list-disc hover:text-(--primary) hover:underline">
                                {item.heading}
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

/* -------------------- MAIN COMPONENT -------------------- */

const KnowledgeCenter = () => {
    const [search, setSearch] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [activeTag, setActiveTag] = useState(1);
    const [activeTab, setActiveTab] = useState(null);
    const [topdropdownopen, setTopdropdownOpen] = useState(false);
    const [selecteddropdown, setSelecteddropdown] = useState(topdropdown[0]);
    const [knowledgeCenterData, setKnowledgeCenterData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTags, setSelectedTags] = useState([]);
    const [knowledgeCategories, setKnowledgeCategories] = useState(staticKnowledgeCategories);
    const [categoriesPage, setCategoriesPage] = useState(1);
    const [categoriesTotalPages, setCategoriesTotalPages] = useState(1);
    const [loadingMoreCategories, setLoadingMoreCategories] = useState(false);

    /* --------- MAP ACTIVE TAG TO API TYPE --------- */

    const getTypeFromActiveTag = (tagId) => {
        switch (tagId) {
            case 1: // Latest
                return "latest";
            case 2: // Popular
                return "trading";
            case 3: // All Articles
                return null; // No type parameter
            default:
                return null;
        }
    };

    /* --------- FETCH CATEGORIES --------- */

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await fetchCategories(1, 6);
                const categories = res?.categories || [];
                setCategoriesTotalPages(res?.totalPages || 1);

                // Map API categories to display format
                // Handle pipe-separated names - take the first one
                const mappedCategories = categories.map((cat) => {
                    // Extract first category name if pipe-separated
                    const categoryName = cat.name.split('|')[0].split('>')[0].trim();
                    return {
                        id: cat.id,
                        title: categoryName,
                        articles: 0, // Will be calculated from knowledgeCenterData
                        icon: getCategoryIcon(categoryName)
                    };
                });

                setKnowledgeCategories(mappedCategories.length > 0 ? mappedCategories : staticKnowledgeCategories);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setKnowledgeCategories(staticKnowledgeCategories);
            }
        };

        loadCategories();
    }, []);

    /* --------- LOAD MORE CATEGORIES --------- */

    const loadMoreCategories = async () => {
        if (categoriesPage >= categoriesTotalPages || loadingMoreCategories) return;

        try {
            setLoadingMoreCategories(true);
            const nextPage = categoriesPage + 1;
            const res = await fetchCategories(nextPage, 6);
            const newCategories = res?.categories || [];

            // Map new categories
            const mappedNewCategories = newCategories.map((cat) => {
                const categoryName = cat.name.split('|')[0].split('>')[0].trim();
                return {
                    id: cat.id,
                    title: categoryName,
                    articles: 0,
                    icon: getCategoryIcon(categoryName)
                };
            });

            // Append new categories to existing ones
            setKnowledgeCategories(prev => [...prev, ...mappedNewCategories]);
            setCategoriesPage(nextPage);
        } catch (error) {
            console.error("Error loading more categories:", error);
        } finally {
            setLoadingMoreCategories(false);
        }
    };

    /* --------- CALCULATE ARTICLE COUNT PER CATEGORY --------- */

    const categoriesWithCounts = useMemo(() => {
        return knowledgeCategories.map(cat => {
            // Count articles in this category from knowledgeCenterData
            const count = knowledgeCenterData.filter(item => {
                const itemCategory = item.category?.name || '';
                return itemCategory.toLowerCase().includes(cat.title.toLowerCase()) ||
                    cat.title.toLowerCase().includes(itemCategory.toLowerCase());
            }).length;

            return {
                ...cat,
                articles: count > 0 ? count : cat.articles
            };
        });
    }, [knowledgeCategories, knowledgeCenterData]);

    /* --------- FETCH KNOWLEDGE CENTER DATA --------- */
    console.log("categoriesWithCounts",categoriesWithCounts);
    
    useEffect(() => {
        const loadKnowledgeCenter = async () => {
            try {
                setLoading(true);
                const type = getTypeFromActiveTag(activeTag);
                const res = await fetchKnowledgeCenter(1, 10, type);
                setKnowledgeCenterData(res?.knowledgeCenters || []);
            } catch (error) {
                console.error("Error fetching knowledge center:", error);
                setKnowledgeCenterData([]);
            } finally {
                setLoading(false);
            }
        };

        loadKnowledgeCenter();
    }, [activeTag]);

    /* --------- DERIVED VALUES (NO STATE) --------- */

    const activeTagname =
        toptagfilter.find(tag => tag.id === activeTag)?.tag_name || "";

    const activeTabname =
        knowledgeCategories.find(cat => cat.id === activeTab)?.title || "";

    /* --------- EXTRACT TAGS FROM DATA --------- */

    const allTags = useMemo(() => {
        const tagSet = new Set();
        const dataToExtract = knowledgeCenterData.length > 0 ? knowledgeCenterData : articlesdata;

        dataToExtract.forEach(item => {
            const tag = item.tags || item.article_toptag || '';
            if (tag) {
                // Handle comma-separated tags
                if (typeof tag === 'string' && tag.includes(',')) {
                    tag.split(',').forEach(t => {
                        const trimmed = t.trim();
                        if (trimmed) tagSet.add(trimmed);
                    });
                } else if (typeof tag === 'string') {
                    tagSet.add(tag.trim());
                }
            }
        });

        return Array.from(tagSet);
    }, [knowledgeCenterData]);

    /* --------- FILTERED ARTICLES --------- */

    const filteredArticles = useMemo(() => {
        const searchText = search.toLowerCase();
        const tabText = activeTabname.toLowerCase();

        // Use API data if available, otherwise fallback to static data
        const dataToFilter = knowledgeCenterData.length > 0 ? knowledgeCenterData : articlesdata;

        return dataToFilter.filter(item => {
            // Handle API data structure
            const title = item.heading || item.article_title || '';
            const category = item.category?.name || item.article_des_tag || '';
            const tag = item.tags || item.article_toptag || '';

            const matchSearch =
                title.toLowerCase().includes(searchText) ||
                category.toLowerCase().includes(searchText) ||
                tag.toLowerCase().includes(searchText);

            const matchTab =
                !tabText || tag.toLowerCase().includes(tabText) || category.toLowerCase().includes(tabText);

            // Filter by selected tags
            const matchTags = selectedTags.length === 0 || selectedTags.some(selectedTag => {
                if (typeof tag === 'string' && tag.includes(',')) {
                    return tag.split(',').some(t => t.trim().toLowerCase() === selectedTag.toLowerCase());
                }
                return tag.toLowerCase().includes(selectedTag.toLowerCase());
            });

            return matchSearch && matchTab && matchTags;
        });
    }, [search, activeTabname, knowledgeCenterData, selectedTags]);

    /* -------------------- JSX -------------------- */

    return (
        <div className="main-bg">
            {/* Banner */}
            <div
                className="banner_section bg-cover bg-center"
                style={{ backgroundImage: "url(/images/knowledgecenterbg.webp)" }}
            >
                <div className="cus_container py-12 md:py-16">
                    <Globaltitle
                        highlightText="Knowledge Center"
                        description="Your hub for courses, career insights, and industry knowledge"
                    />
                </div>
            </div>

            {/* Top Bar */}
            <div className="bg-primary py-6 sticky top-0 z-40">
                <div className="cus_container flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* Top Tags */}
                    <div className="flex gap-2 md:gap-4">
                        {toptagfilter.map(tag => {
                            const isActive = activeTag === tag.id;
                            return (
                                <div
                                    key={tag.id}
                                    onClick={() => setActiveTag(tag.id)}
                                    className={`flex items-center gap-2 px-4 py-1.5 md:py-3 rounded-2xl cursor-pointer ${isActive ? "bg-white" : "bg-[#4129BA]"
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
                    <div className="w-full md:w-[40%] bg-white rounded-2xl flex items-center gap-3 px-5 py-3">
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
                    <div className="relative hidden md:block">
                        <div
                            onClick={() => setTopdropdownOpen(!topdropdownopen)}
                            className="bg-white px-5 py-2 rounded-xl cursor-pointer"
                        >
                            {selecteddropdown}
                        </div>

                        {topdropdownopen && (
                            <div className="absolute mt-2 bg-white rounded-xl shadow w-max">
                                {topdropdown.map(item => (
                                    <div
                                        key={item}
                                        onClick={() => {
                                            setSelecteddropdown(item);
                                            setTopdropdownOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-primary hover:text-(--primary) cursor-pointer"
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
            <div className="cus_container">
                <div className="max-w-7xl mx-auto py-6 md:py-12 grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-10">

                    {/* Left */}
                    <div>
                        {!isSearchActive && (
                            <>
                                <div className="grid grid-cols-2 md:grid-cols-3  gap-6">
                                    {categoriesWithCounts.map(cat => {
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

                                {/* Load More Button */}
                                {categoriesPage < categoriesTotalPages && (
                                    <div className="flex justify-center mt-6">
                                        <button
                                            onClick={loadMoreCategories}
                                            disabled={loadingMoreCategories}
                                            className="bg-primary text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#4129BA] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {loadingMoreCategories ? "Loading..." : "Load More Categories"}
                                        </button>
                                    </div>
                                )}
                            </>
                        )}

                        <div className="pt-6 md:pt-12 space-y-8">
                            {loading ? (
                                <div className="text-center py-12">
                                    <p className="text-lg text-gray-600">Loading articles...</p>
                                </div>
                            ) : filteredArticles.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-lg text-gray-600">No articles found.</p>
                                </div>
                            ) : (
                                filteredArticles.map(article => (
                                    <ArticleCard
                                        key={article.id}
                                        id={article.id}
                                        poster_image={article.article_poster}
                                        imageUrl={article.imageUrl}
                                        isfeatured={article.isfeatured}
                                        features={article.features}
                                        article_tag={article.article_toptag}
                                        tags={article.tags}
                                        article_des_tag={article.article_des_tag}
                                        category={article.category}
                                        article_title={article.article_title}
                                        heading={article.heading}
                                        article_carddescription={article.article_carddescription}
                                        shortDescription={article.shortDescription}
                                        description={article.description}
                                        publish_date={article.publish_date}
                                        createdAt={article.createdAt}
                                        reading_time={article.reading_time}
                                        slugUrl={article.slugUrl}
                                    />
                                ))
                            )}
                        </div>

                    </div>

                    {/* Right */}
                    <div className="space-y-6 hidden md:block">
                        <TrandingTopics data={filteredArticles} />
                        <div className="sticky top-[120px]">
                            <PopularTags tags={allTags} onTagChange={setSelectedTags} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeCenter;
