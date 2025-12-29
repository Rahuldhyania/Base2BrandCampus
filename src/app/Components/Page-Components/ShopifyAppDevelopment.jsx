import React from "react";
import FaqSection from "./FaqSection";
import Journeywithb2b2 from "./Journeywithb2b2";
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import python_leftbanner from "../../../../public/images/python_leftbanner.webp";
import python_rightbanner from "../../../../public/images/python_rightbanner.webp";
import python_leftposter from "../../../../public/images/python_leftposter.webp";
import CourseSyllabus from "../Courses/CourseSyllabus";
import CourseDetail from "../Courses/CourseDetail";
import CareerOpportunities from "../Courses/CareerOpportunities";
const faq_data = [
    {
        q: "Is this course good for beginners?",
        a:
            "Yes! Even if you have zero experience, we teach from basics to advanced in a simple and friendly way."
    },
    {
        q: "Will I really learn practical skills?",
        a:
            "Definitely. You will learn 100% practical skills, real projects, assignments, and hands-on sessions — exactly what companies want."
    },
    {
        q: "How will this course help my career?",
        a:
            "This course is designed to make you job-ready, build real skills, and help you create a stable, successful future."
    },
    {
        q: "Do you provide placement support?",
        a:
            "Yes. We help with resume making, interview preparation, mock interviews, and job opportunities through our network."
    },
    {
        q: "Who are the teachers?",
        a:
            "You will learn from experienced and reliable trainers who explain everything clearly and support you throughout the journey."
    },
    {
        q: "What makes your teaching style unique?",
        a:
            "We use a smart, modern, student-friendly teaching method with easy examples, practical demos, and step-by-step explanation."
    },
    {
        q: "Is the course affordable for students?",
        a:
            "Yes. We provide high-quality training at student-friendly fees, with the best value in the market."
    },
    {
        q: "How do you help in interviews?",
        a: `We train you with:\n• Mock interviews\n• Confidence-building sessions\n• Communication tips\n• Company-level interview questions`
    },
    {
        q: "What do current students like the most?",
        a: `Students love our:\n• Trendy, modern learning environment\n• Friendly teachers\n• Practical approach\n• Real project experience\n• Motivating atmosphere\n• Personal attention\n• Easy explanations\n• Lifetime guidance\n• Strong career focus`
    },
    {
        q: "How can I join the course?",
        a:
            "Simple! Just contact us → Attend a quick counseling session → Choose batch → Start learning."
    }
];
const ShopifyAppDevelopment = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction to Shopify & App Ecosystem",
            points: [
                "What is Shopify and how the ecosystem works",
                "Shopify stores, themes vs apps (clear difference)",
                "Types of Shopify apps (Custom, Private, Public)",
                "Career roadmap & opportunities in Shopify app development"
            ]
        },
        {
            title: "Module 2 - JavaScript Basics & Logic Building",
            points: [
                "JavaScript fundamentals for app development",
                "Variables, data types, functions, and conditions",
                "Loops, arrays, objects, and logic building",
                "Problem-solving practice for real app scenarios"
            ]
        },
        {
            title: "Module 3 - Node.js & Backend Fundamentals",
            points: [
                "Introduction to Node.js and Express.js",
                "Setting up backend server & routes",
                "Understanding request/response cycle",
                "Building basic backend APIs for apps"
            ]
        },
        {
            title: "Module 4 - Shopify Admin APIs (REST & GraphQL)",
            points: [
                "Shopify Admin REST API overview",
                "GraphQL Admin API basics",
                "Working with Products, Orders, Customers, Inventory",
                "API authentication, scopes & rate limits"
            ]
        },
        {
            title: "Module 5 - OAuth Authentication & App Security",
            points: [
                "OAuth flow in Shopify apps",
                "Access tokens & permissions",
                "Securing APIs and app data",
                "Best practices for Shopify app security"
            ]
        },
        {
            title: "Module 6 - Webhooks & Event Automation",
            points: [
                "What are webhooks and why they are important",
                "Shopify webhook events (orders, products, customers)",
                "Webhook verification & security",
                "Building automation using real store events"
            ]
        },
        {
            title: "Module 7 - React Basics for Shopify Apps",
            points: [
                "React fundamentals for app dashboards",
                "Components, props, state & hooks",
                "Building simple admin UI screens",
                "Connecting frontend with backend APIs"
            ]
        },
        {
            title: "Module 8 - Shopify App Bridge & Polaris UI",
            points: [
                "Introduction to Shopify App Bridge",
                "Navigation, authentication & embedded apps",
                "Using Shopify Polaris components",
                "Creating professional Shopify-style app UI"
            ]
        },
        {
            title: "Module 9 - Deployment, Projects & Career Prep",
            points: [
                "Deploying Shopify apps (basic hosting concepts)",
                "Testing apps on real Shopify stores",
                "Capstone Shopify App project",
                "Portfolio, GitHub setup & freelancing/job guidance"
            ]
        }
    ];

    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "High Demand in eCommerce Industry",
            subtitle:
                "Shopify apps are widely used for automation, integrations, analytics, and custom store features."
        },
        {
            icon: "/images/usertea.webp",
            title: "Remote & Freelance Friendly",
            subtitle:
                "Build, manage, and scale Shopify apps from anywhere for global clients and agencies."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Career Options",
            subtitle:
                "Earn ₹40,000–₹1,50,000/month as a Shopify App Developer with jobs and freelancing."
        },
        {
            icon: "/images/digree.webp",
            title: "Beginner-Friendly Course",
            subtitle:
                "No prior Shopify experience required. Learn APIs, logic, real app workflows from scratch."
        }
    ];
    const items = [
        {
            icon: "/images/45days.webp",
            title: "3 Months",
            subtitle: "Practical Training "
        },
        {
            icon: "/images/handmoney.webp",
            title: "100%",
            subtitle: "Placement Support"
        },
        {
            icon: "/images/globeicon.webp",
            title: "Global Work",
            subtitle: "Work-from-Home or Abroad "
        },
        {
            icon: "/images/money.webp",
            title: "INR / USD",
            subtitle: "Flexible Earning Options"
        }
    ];
    const program_data = [
        {
            text: "Shopify Fundamentals for Developers",
            icon: "/images/greencheck.webp"
        },
        {
            text: "JavaScript Basics & Logic Building",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Node.js & Express Backend Setup",
            icon: "/images/greencheck.webp"
        },

        {
            text: "Shopify REST & GraphQL Admin APIs",
            icon: "/images/greencheck.webp"
        },
        {
            text: "OAuth Authentication & App Security",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Webhooks & Real Store Automation",
            icon: "/images/greencheck.webp"
        },

        { text: "React Basics for App Dashboard", icon: "/images/greencheck.webp" },
        {
            text: "Shopify App Bridge & Polaris UI",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Real-Time Projects & Assignments",
            icon: "/images/greencheck.webp"
        }
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Engineering & IT students", icon: "/images/greencheck.webp" },
        { text: "Web developers & IT beginners", icon: "/images/greencheck.webp" },
        {
            text: "Anyone interested in Shopify app development",
            icon: "/images/greencheck.webp"
        }
    ];

    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert Shopify App Trainers",
            description:
                "Learn from professionals building real Shopify apps, integrations, and SaaS products used by live stores."
        },
        {
            id: 2,
            number: 2,
            title: "Live App Development Sessions",
            description:
                "Practice Shopify APIs, webhooks, backend logic, and app workflows with live coding guidance."
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Mentorship",
            description:
                "Personalized mentoring to improve app architecture, code quality, and real-world problem-solving skills."
        },
        {
            id: 4,
            number: 4,
            title: "Career & Interview Preparation",
            description:
                "Get guidance for technical interviews, Shopify app projects, freelancing proposals, and client communication."
        },
        {
            id: 5,
            number: 5,
            title: "Portfolio & GitHub Support",
            description:
                "Build and showcase Shopify app projects, integrations, and automation workflows professionally."
        },
        {
            id: 6,
            number: 6,
            title: "Internship & Live Project Experience",
            description:
                "Gain real-world experience by working on Shopify app features and real merchant use-cases."
        }
    ];
    const course_detail = [
        "Course Duration: 3 Months",
        "Training Mode: Offline (Mohali) | Online (India)",
        "Eligibility: 12th pass, basic English & computer skills",
        "Certification: Yes (Shopify App Development – B2B Campus)"
    ];
    const careeropportunitie = [
        {
            id: 1,
            title: "Shopify App Developer",
            description:
                "Build a career as a Shopify App Developer by creating custom apps, integrations, and automation solutions for Shopify stores. Work with Shopify Admin APIs, webhooks, and modern app architectures used by global brands."
        },
        {
            id: 2,
            title: "Remote Shopify App Developer",
            description:
                "Work remotely as a Shopify App Developer from India and collaborate with international agencies, SaaS companies, and merchants. Manage app development, updates, and integrations while working from home."
        },
        {
            id: 3,
            title: "Shopify Backend / Integration Developer",
            description:
                "Start your career as a Shopify Backend or Integration Developer by building API-driven solutions, syncing third-party tools, and handling complex eCommerce workflows for Shopify stores."
        },
        {
            id: 4,
            title: "Launch Your Own Shopify SaaS App",
            description:
                "Learn how to design, build, and launch your own Shopify SaaS app. From idea validation and app development to deployment and scaling—get complete guidance to create recurring revenue products."
        }
    ];

    return (
        <div>
            <CoursesBanner
                highlightText={"Become a Shopify App Developer"}
                titleEnd={"in 3 Months"}
                description={
                    "Build Private & Public Apps • REST/GraphQL • Billing • Deployment"
                }
                leftposter={python_leftbanner}
                rightposter={python_rightbanner}
            />

            <CoursesCareer
                items={items}
                left_banner={python_leftposter}
                featuresMain={featuresMain}
                title={
                    'Why Shopify App Development is the <br/> <span class="text-primary">Next Big Career</span>'
                }
                description={
                    "Work with Shopify agencies, SaaS startups, eCommerce brands & global merchants."
                }
            />
            <CourseProgram
                program_data={program_data}
                title={
                    '<span class="text-primary">3 Months Intensive </span> <br/> Shopify App Development Program'
                }
            />

            <AboutCourse
                title={
                    "About the Shopify App Development Course & Global Career Opportunities"
                }
                description1={`The Shopify App Development Course & Certification program helps learners build strong fundamentals in Shopify’s ecosystem and master app development using modern technologies like JavaScript, Node.js, React, and Shopify APIs.`}
                description2={`This hands-on training covers Shopify app architecture, REST & GraphQL Admin APIs, OAuth authentication, webhooks, backend logic, and real-time app development—making students job-ready even with no prior Shopify experience.`}
                description3={`With Shopify powering millions of eCommerce stores worldwide, skilled Shopify app developers are in high demand across agencies, SaaS companies, startups, and global brands—offering remote, freelance, and high-growth career opportunities.`}
            />

            <CourseDetail course_detail={course_detail} />
            <CareerOpportunities
                careeropportunitie={careeropportunitie}
                lowerdata={true}
                lower_title1="Learn at B2B Campus, Mohali"
                lower_description1={
                    "Located in Mohali, Punjab, B2B Campus offers hands-on Shopify App Development training with expert mentors, real projects, and industry-focused learning for global eCommerce careers."
                }
                lower_title2={"Enroll with B2B Campus Today"}
                lower_description2={
                    "Take the first step toward a high-growth Shopify App Development career."
                }
            />

            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus
                title={
                    'Shopify App Development <br/> <span class="text-primary">Syllabus</span>'
                }
                Syllabus_data={Syllabus_data}
            />

            <BecomeStudent
                title={
                    'Shopify App Development Course & Certification To <span class="text-primary">Build eCommerce Skills</span>'
                }
                description={`Learn Shopify app development from basics to advanced by working with JavaScript, Node.js, React, Shopify REST & GraphQL APIs, webhooks, and real-time app projects. Build a strong portfolio with hands-on practice and become job-ready for Shopify app developer roles, freelancing, or SaaS opportunities.`}
                right_image={python_leftposter}
            />


            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default ShopifyAppDevelopment;
