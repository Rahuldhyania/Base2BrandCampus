import React from 'react';
import Page2Banner from '../Components/seo-pages/Page2Banner';
import ContactForm from '../Components/Page-Components/From';
import Page2TitleDisList from '../Components/seo-pages/Page2TitleDisList';
import Page2FinalThoughts from '../Components/seo-pages/Page2FinalThoughts';

const pageData = [
    {
        title: "1. Understanding What Web Designing Really Is",
        description1: "Web designing is not just about making a website look attractive. It involves planning layouts, choosing colors and typography, structuring content, and ensuring smooth user interaction. A good web design balances aesthetics with usability, ensuring visitors can easily navigate and find information. Learning web designing means understanding how users think, how they interact with digital interfaces, and how design decisions influence behavior."
    },
    {
        title: "2. Why Learning Web Designing Is Important Today",
        description1: "The demand for skilled web designers continues to grow as businesses shift online. From small startups to global enterprises, everyone needs a strong online presence. Learning web designing empowers individuals to create digital experiences that build trust and credibility. It also offers flexibility, allowing designers to work remotely, freelance, or collaborate with development teams across the world."
    },
    {
        title: "3. Getting Started with Web Designing Basics",
        description1: "Every web designer begins with understanding the basics. This includes learning how websites work, how browsers render content, and how users interact with pages. Foundational concepts such as layout structure, visual hierarchy, spacing, and alignment play a crucial role. Grasping these basics early helps learners build strong design instincts that improve with practice."
    },
    {
        title: "4. Learning HTML: The Structure of the Web",
        description1: "HTML is the backbone of web design. It defines the structure and content of a webpage, including headings, paragraphs, images, and links. Learning HTML helps beginners understand how web pages are organized and how content is displayed. It is simple to learn and provides instant results, making it an excellent starting point for anyone entering web designing."
    },
    {
        title: "5. Mastering CSS for Visual Design",
        description1: "CSS brings life to HTML by adding colors, fonts, layouts, and animations. Learning CSS allows designers to control the appearance of a website and ensure consistency across pages. Through CSS, designers learn how to create responsive layouts, manage spacing, and design visually engaging interfaces. A strong command of CSS is essential for creating professional-quality designs."
    },
    {
        title: "6. Understanding Responsive Web Design",
        description1: "Responsive web design ensures that websites look and function well on all devices, including desktops, tablets, and smartphones. Learning responsive design teaches designers how to adapt layouts based on screen size and user behavior. This skill is critical, as most users today browse the internet on mobile devices. A responsive website improves user experience and boosts engagement."
    },
    {
        title: "7. Introduction to Design Tools and Software",
        description1: "Modern web designing relies heavily on design tools that help visualize ideas before development begins. Learning how to use tools for wireframing and prototyping allows designers to plan layouts and user journeys efficiently. These tools help bridge the gap between creativity and execution, enabling designers to collaborate effectively with developers and clients."
    },
    {
        title: "8. Importance of User Experience in Web Designing",
        description1: "User experience is at the heart of successful web design. Learning web designing involves understanding how users interact with a website and what motivates them to take action. Designers must consider navigation flow, loading speed, readability, and accessibility. A well-designed user experience reduces frustration and increases conversions, making it a key focus area for learners.",
        description2: "B2B Campus offers a comprehensive Digital Marketing Course In Mohali designed to equip students with essential skills in SEO, social media marketing, content creation, and Google Ads. With experienced instructors and practical training, it’s an ideal choice for aspiring digital marketers."
    },
    {
        title: "9. Learning Typography and Color Theory",
        description1: "Typography and color choices significantly impact how a website feels and communicates. Learning web designing includes understanding font pairing, readability, contrast, and emotional influence of colors. Effective use of typography and color enhances brand identity and guides users through content naturally. These design principles help transform simple layouts into compelling digital experiences."
    },
    {
        title: "10. Exploring Basic JavaScript for Interactivity",
        description1: "While not mandatory at the beginning, learning basic JavaScript adds interactivity to web designs. JavaScript enables features such as form validation, animations, and dynamic content updates. For learners, understanding basic interactivity improves problem-solving skills and allows them to design more engaging and functional websites."
    },
    {
        title: "11. Practicing Through Real Projects",
        description1: "Practice is essential when learning web designing. Creating real projects such as personal websites, landing pages, or mock business sites helps reinforce concepts. Each project improves confidence and builds practical experience. Learning through hands-on work also helps designers identify strengths and areas for improvement over time."
    },
    {
        title: "12. Building a Strong Portfolio",
        description1: "A portfolio showcases a web designer’s skills, creativity, and problem-solving ability. Learning web designing includes understanding how to present work effectively. A good portfolio highlights design thinking, responsiveness, and attention to detail. It becomes a powerful tool for attracting clients, employers, or collaborators in the digital space."
    },
    {
        title: "13. Keeping Up with Web Design Trends",
        description1: "Web design trends evolve constantly, influenced by technology and user behavior. Learning web designing is an ongoing process that requires staying updated with modern layouts, design patterns, and best practices. Continuous learning helps designers remain competitive and deliver contemporary, relevant designs."
    },
    {
        title: "14. Career Opportunities After Learning Web Designing",
        description1: "Web designing offers diverse career paths, including freelance design, agency work, in-house roles, and entrepreneurship. Learning web designing equips individuals with a versatile skill set that can be applied across industries. With experience, designers can specialize in areas such as UI design, UX research, or front-end development."
    },
    {
        title: "15. Challenges and Growth in the Learning Process",
        description1: "Like any creative skill, learning web designing comes with challenges. Beginners may struggle with design consistency or technical concepts initially. However, patience, practice, and feedback help overcome these hurdles. Each challenge contributes to growth, making designers more confident and skilled over time."
    },

];

const finalthoughts = [
    'Learning web designing is a rewarding journey that combines creativity, technology, and problem-solving. It empowers individuals to shape digital experiences that matter. By mastering fundamentals, practicing consistently, and embracing continuous learning, anyone can become a skilled web designer. With dedication and curiosity, web designing can evolve from a skill into a fulfilling career.'
]
const page = () => {
    return (
        <div className="main-bg">
            <div className="cus_container relative">
                <div className="flex gap-2">
                    <div className="lg:w-[70%]">
                        <Page2Banner
                            title={"Learning Web Designing: A Complete Guide for Beginners"}
                            discription1={`Web designing is the art and science of creating visually appealing, user-friendly, and functional websites. In today’s digital-first world, websites act as the primary face of businesses, personal brands, and organizations. <br />
                            The Web Designing Course In Mohali at B2B Campus integrates the latest learning practices with experienced tutors. Students benefit from hands-on projects, industry-relevant curriculum updates, and personalized guidance to master current trends in web design.`}
                            discription2={'Learning web designing opens doors to creative expression, technical skills, and lucrative career opportunities. Whether you aim to build websites for clients, start freelancing, or design your own projects, web designing is a skill that blends creativity with logic.'}
                        />
                        {
                            pageData.map((data, index) => (
                                <Page2TitleDisList
                                    key={index}
                                    title={data.title}
                                    discription1={data.description1 || false}
                                    listData={data.listData || false}
                                    discription2={data.description2}
                                />
                            ))
                        }
                    </div>
                    <div className="w-[30%] py-6 md:py-12 sticky top-0 h-fit hidden lg:block">
                        <ContactForm />
                    </div>
                </div>
                <Page2FinalThoughts
                    title={'Conclusion'}
                    finalthoughts={finalthoughts}
                />
            </div>
        </div>
    )
}

export default page
