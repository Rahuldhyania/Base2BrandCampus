import React from 'react'

const articles = [
    {
        id: 1,
        image: "/images/knowlegde-center-banner.webp",
        category: "Career Guides",
        title: "Building Your Personal Brand: Career Growth Strategies",
        description:
            "Discover how to create and maintain a strong personal brand that opens doors and accelerates your career growth.",
    },
    {
        id: 2,
        image: "/images/knowlegde-center-banner.webp",
        category: "Career Guides",
        title: "Time Management Tips for Remote Workers",
        description:
            "Stay productive and maintain work-life balance while working from home with these proven strategies.",
    },
    {
        id: 3,
        image: "/images/knowlegde-center-banner.webp",
        category: "Career Guides",
        title: "Building Your Personal Brand: Career Growth Strategies",
        description:
            "Discover how to create and maintain a strong personal brand that opens doors and accelerates your career growth.",
    },
]

const RelatedArticle = ({ title }) => {

    // previous article svg
    const prevArticleSvg = (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

    // next svg icon 
    const nextArticleSvg = (
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <section className="w-full py-10">
            <div className="main_releted_blogs">

                {/* Heading */}
                <h2 className=" text-[18px] sm:text-[20px]md:text-[22px] lg:text-[24px] font-regular text-[#101828] mb-[16px] sm:mb-[20px] lg:mb-[24px]">
                    {title}
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((item) => (
                        <a href='/blog-detail' target='_blank' key={item.id} className="group cursor-pointer bg-white rounded-[12px] shadow-sm overflow-hidden transform transition-all duration-300 ">
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-[180px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-[16px]">
                                <span className="text-[12px] text-[#6346FA] font-regular">{item.category}</span>

                                <h3 className="transition-colors duration-300 group-hover:text-[#4526e0] text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] font-regular text-[#101828] leading-[24px] sm:leading-[26px] md:leading-[26px] lg:leading-[26px] mt-2">
                                    {item.title}
                                </h3>

                                <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] text-[#4A5565] mt-2 leading-[18px] sm:leading-[20px] md:leading-[20px] lg:leading-[20px]">
                                    {item.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Navigation */}
                <div className="flex justify-between items-center mt-8 text-[14px]">
                    <a href="#" className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] font-medium text-[#000] hover:text-[#6366F1] flex items-center gap-2 transition-colors duration-300">
                        {prevArticleSvg}Previous Article
                    </a>

                    <a href="#" className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] font-medium text-[#000] hover:text-[#6366F1] flex items-center gap-2 transition-colors duration-300">
                        Next Article {nextArticleSvg}
                    </a>
                </div>

            </div>
        </section>
    )
}

export default RelatedArticle
