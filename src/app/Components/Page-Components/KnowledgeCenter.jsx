
"use client";
import React, { useState, useMemo, useEffect, use } from "react";
import Globaltitle from "../UiUx/Globaltitle";
import Image from "next/image";
import { PopularTags } from "./PopularTags";
import ArticleCard from "../UiUx/ArticleCard";
import { articlesdata, fetchKnowledgeCenter, fetchCategories } from "@/app/Data/Articlesdata";
import { IoCodeOutline } from "react-icons/io5";
import Link from "next/link";
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

const getCategoryIcon = (categoryName) => {
    const name = categoryName.toLowerCase();
    if (name.includes('freelancing') || name.includes('career')) return "/icons/bag.svg";
    if (name.includes('marketing') || name.includes('digital')) return "/icons/popularblack.svg";
    if (name.includes('programming') || name.includes('coding') || name.includes('web development')) return "/icons/webdev.svg";
    if (name.includes('design') || name.includes('graphic') || name.includes('ui/ux')) return "/icons/graphic.svg";
    if (name.includes('business')) return "/icons/business.svg";
    if (name.includes('people') || name.includes('guide')) return "/icons/people2.svg";
    return "/icons/webdev.svg";
};
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
export const TrandingTopics = ({ data }) => {
    const [trendingTopics, setTrendingTopics] = useState([]);
    const [topics, setTopics] = useState([])
    const [loading, setLoading] = useState(true);
    const baseurl = process.env.NEXT_PUBLIC__API_URL
    useEffect(() => {
        const loadTrendingTopics = async () => {
            try {
                setLoading(true);
                const res = await fetchKnowledgeCenter(2, 10, null);
                const response = await fetch(`https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?isTrending=true`, { method: "GET" })
                const trandingarticels = await response.json();
                setTrendingTopics(trandingarticels?.knowledgeCenters)
                const topics = res?.knowledgeCenters || [];
                setTopics(topics)

                const myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer pms_nfwp49qiq");

                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };

                fetch("https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=3&limit=10", requestOptions)
                    .then((response) => response.text())
                    .then((result) => console.log("sdfasdfs"))
                    .catch((error) => console.error(error));


            } catch (error) {
                console.error("Error fetching trending topics:", error);
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
                    {trendingTopics.map((item, i) => (
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


const KnowledgeCenter = () => {
    const [search, setSearch] = useState("");
    const [pagedata, setpageData] = useState([])
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [activeTag, setActiveTag] = useState(1);
    const [activeTab, setActiveTab] = useState(null);
    const [topdropdownopen, setTopdropdownOpen] = useState(false);
    const [selecteddropdown, setSelecteddropdown] = useState(topdropdown[0]);
    const [categories, setCategories] = useState([]);
    const [knowledgeCenterData, setKnowledgeCenterData] = useState([]);
    const [knowledgeCenterAllData, setKnowledgeCenterAllData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTags, setSelectedTags] = useState([]);
    const [knowledgeCategories, setKnowledgeCategories] = useState([]);
    const [categoriesPage, setCategoriesPage] = useState(1);
    const [categoriesTotalPages, setCategoriesTotalPages] = useState(1);
    const [loadingMoreCategories, setLoadingMoreCategories] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentpagecategories, setcurrentpagecategories] = useState(null)
    const [paginationpage, setPaginationpage] = useState(0)

    const baseurl = process.env.NEXT_PUBLIC__API_URL
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


    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await fetchCategories(1, 26);

                const categoriesres = res?.categories || [];
                setCategories(categoriesres)
                setCategoriesTotalPages(res?.totalPages || 1);
                const mappedCategories = categories.map((cat) => {
                    const categoryName = cat.name.split('|')[0].split('>')[0].trim();
                    return {
                        id: cat.id,
                        title: categoryName,
                        articles: 0,
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

    const categoriesWithCounts = useMemo(() => {
        return knowledgeCategories.map(cat => {
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
    }, [knowledgeCategories]);

    useEffect(() => {
        const loadKnowledgeCenter = async () => {
            setLoading(true);

            try {
                let url = `https://backend.b2bcampus.com/api/B2Badmin/public/knowledge-center?page=${currentPage}&limit=10`;

                if (currentpagecategories) {
                    url += `&categoryName=${encodeURIComponent(currentpagecategories)}`;
                }

                const response = await fetch(url, {
                    cache: "no-store",
                    headers: {
                        "Cache-Control": "no-cache",
                        "Pragma": "no-cache",
                    },
                });

                const data = await response.json();

                setKnowledgeCenterData(data?.knowledgeCenters || []);
                setPaginationpage(data?.totalPages || 0);

            } catch (err) {
                console.error(err);
                setKnowledgeCenterData([]);
            } finally {
                setLoading(false);
            }
        };

        loadKnowledgeCenter();
    }, [currentPage, currentpagecategories]);


    /* --------- DERIVED VALUES (NO STATE) --------- */

    const activeTagname =
        toptagfilter.find(tag => tag.id === activeTag)?.tag_name || "";

    const activeTabname =
        categories.find(cat => cat.id === activeTab)?.title || "";

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
            const title = item.heading || item.article_title || '';
            const category = item.category?.name || item.article_des_tag || '';
            const tag = item.tags || item.article_toptag || '';
            const matchSearch =
                title.toLowerCase().includes(searchText) ||
                category.toLowerCase().includes(searchText) ||
                tag.toLowerCase().includes(searchText);

            const matchTab =
                !tabText || tag.toLowerCase().includes(tabText) || category.toLowerCase().includes(tabText);

            const matchTags = selectedTags.length === 0 || selectedTags.some(selectedTag => {
                if (typeof tag === 'string' && tag.includes(',')) {
                    return tag.split(',').some(t => t.trim().toLowerCase() === selectedTag.toLowerCase());
                }
                return tag.toLowerCase().includes(selectedTag.toLowerCase());
            });

            return matchSearch && matchTab && matchTags;
        });
    }, [search, activeTabname, knowledgeCenterData, selectedTags, pagedata]);


    const getPages = () => {
        const total = paginationpage;
        const pages = [];

        if (total <= 4) {
            for (let i = 1; i <= total; i++) pages.push(i);
            return pages;
        }

        let start = currentPage;

        if (start > total - 3) {
            start = total - 3;
        }

        if (currentPage === 1) {
            return [1, 2, "...", total - 1, total];
        }

        pages.push(start, start + 1, "...", total - 1, total);

        return pages;
    };

    return (
        <div className="main-bg">
            {/* Banner */}
            <div
                className="banner_section bg-cover bg-center bg-primary"
            // style={{ backgroundImage: "url(/images/knowledgecenterbg.webp)" }}
            >
                <div className="cus_container py-12 md:py-16">
                    <Globaltitle
                        highlightText="Knowledge Center"
                        description="Your hub for courses, career insights, and industry knowledge"
                    />
                </div>
            </div>

            {/* Top Bar */}
            <div className="bg-primary py-6 sticky top-0 z-40 mt-3">
                <div className="cus_container flex flex-col lg:flex-row justify-between items-center gap-6">

                    {/* Top Tags */}
                    <div className="flex gap-2 md:gap-4">
                        {toptagfilter.map(tag => {
                            const isActive = activeTag === tag.id;
                            return (
                                <div
                                    key={tag.id}
                                    onClick={() => {
                                        setActiveTag(tag.id);
                                        setCurrentPage(1);
                                    }}

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
                                {categoriesWithCounts.map(item => (
                                    <div
                                        key={item}
                                        onClick={() => {
                                            setSelecteddropdown(item.title);
                                            setTopdropdownOpen(false);
                                        }}
                                        className="px-4 py-2 hover:bg-primary hover:text-(--primary) cursor-pointer"
                                    >
                                        {item.title}
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
                                    {categories.map(cat => {
                                        if (cat?.knowledgeCenterCount <= 0) { return null; }
                                        const isActive = activeTab === cat.id;
                                        return (
                                            <div
                                                key={cat.id}
                                                onClick={() => {
                                                    setActiveTab(cat.id);
                                                    setcurrentpagecategories(cat.name);
                                                    setCurrentPage(1);
                                                }}
                                                className={`p-7 rounded-xl cursor-pointer ${isActive ? "bg-primary text-white" : "bg-white"
                                                    }`}
                                            >
                                                <IoCodeOutline fontSize={'40px'} color={isActive ? 'white' : 'var(--primary)'} />
                                                <p className="pt-1 text-lg line-clamp-2">{cat.name}</p>
                                                <p>{cat.knowledgeCenterCount} articles</p>
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
                        <div className="relative">
                            <div className="pt-6 md:pt-12 space-y-8">
                                {loading ? (
                                    <div className="text-center py-12">
                                        <p className="text-lg text-gray-600">Loading articles...</p>
                                    </div>
                                ) : filteredArticles?.length === 0 ? (
                                    <div className="text-center py-12">
                                        <p className="text-lg text-gray-600">No articles found.</p>
                                    </div>
                                ) : (
                                    filteredArticles?.map(article => (
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

                            {
                                loading ?
                                    null
                                    :
                                    <div className="flex gap-3 w-fit m-auto py-4 px-18 rounded-full border-[3px] border-primary sticky bottom-5 bg-white" >
                                        <div className="flex gap-2 items-center">
                                            <button
                                                disabled={currentPage === 1}
                                                onClick={() => setCurrentPage(currentPage - 1)}
                                                className="px-3  border rounded disabled:opacity-40"
                                            >
                                                Prev
                                            </button>

                                            {getPages().map((page, index) =>
                                                page === "..." ? (
                                                    <span key={index} className="px-2">...</span>
                                                ) : (
                                                    <button
                                                        key={index}
                                                        onClick={() => setCurrentPage(page)}
                                                        className={`flex text-base leading-[14px] border rounded ${currentPage === page ? "bg-black text-white px-3 py-2.5" : " p-2 "
                                                            }`}
                                                    >
                                                        {page}
                                                    </button>
                                                )
                                            )}

                                            {/* Next */}
                                            <button
                                                disabled={currentPage === pagedata.totalPages}
                                                onClick={() => setCurrentPage(currentPage + 1)}
                                                className="px-3 py-1 border rounded disabled:opacity-40"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                            }
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


