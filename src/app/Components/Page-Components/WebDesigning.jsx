import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import CourseSyllabus from "../Courses/CourseSyllabus";
import AboutCourse from "../Courses/AboutCourse";
import graphic_left from "../../../../public/images/graphic_left.webp";
import graphic_right from "../../../../public/images/graphic_right.webp";
import graphic_left_banner from "../../../../public/images/graphic_left_banner.webp"
import BecomeStudent from '../Courses/BecomeStudent';
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
const WebDesigning = () => {
    const Syllabus_data = [
        {
            title: "Module 1: Web Design Foundations",
            points: [
                "Understanding Web & UI/UX Basics",
                "How Websites Work – Domains, Hosting, Browsers",
                "Design Principles: Layout, Spacing, Colors, Typography",
                "Wireframing Basics (Low-Fidelity Designs)",
                "Tools Overview: Figma, Photoshop, Canva",
            ],
        },

        {
            title: "Module 2: HTML for Web Designing",
            points: [
                "HTML Structure & Best Practices",
                "Working with Text, Images, Links & Lists",
                "Creating Forms & Buttons",
                "Semantic HTML for Better SEO",
                "Project: Basic Website Layout (Header–Footer–Sections)",
            ],
        },

        {
            title: "Module 3: CSS – Styling & Layouts",
            points: [
                "Selectors, Colors, Fonts, Backgrounds",
                "Flexbox & Grid for Modern Layouts",
                "Spacing Systems (Margin, Padding, Alignment)",
                "Responsive Design for Mobile, Tablet & Desktop",
                "Animations, Hover Effects & UI Interactions",
                "Project: Fully Designed Landing Page",
            ],
        },

        {
            title: "Module 4: Figma for UI Designing",
            points: [
                "Artboards, Frames & Layout Grids",
                "Typography & Color System Setup",
                "Auto Layout for Components",
                "Designing Web UI Sections (Hero, Cards, Forms, CTA)",
                "Design a Complete Website in Figma",
                "Project: Modern Homepage UI",
            ],
        },

        {
            title: "Module 5: Bootstrap + Tailwind CSS",
            points: [
                "Bootstrap Grid & Components",
                "Building Responsive Templates",
                "Intro to Tailwind CSS Utility Classes",
                "Creating Modern UI Sections with Tailwind",
                "Project: Multi-section Business Website",
            ],
        },

        {
            title: "Module 6: Basic Interactivity with JavaScript",
            points: [
                "Making Websites Interactive",
                "Sliders, FAQ Toggle, Form Validation",
                "Popups, Mobile Menu & Small UI Features",
                "Using JS Plugins (Swiper, AOS, GSAP basics)",
                "Project: Interactive Website Features",
            ],
        },

        {
            title: "Module 7: WordPress for Designers",
            points: [
                "Installing WordPress & Themes",
                "Using Elementor/Divi for No-Code Web Design",
                "Creating Pages, Menus, Blog Layouts",
                "Speed & SEO Optimization Techniques",
                "Project: Complete Business Website",
            ],
        },

        {
            title: "Module 8: Design Portfolio Development",
            points: [
                "Behance / Dribbble Portfolio Setup",
                "Case Study Writing for UI Projects",
                "Creating a Personal Portfolio Website",
                "Branding Yourself as a Designer",
                "Project: 4–6 Portfolio-Ready UI Designs",
            ],
        },

        {
            title: "Module 9: Advanced UI/UX Skills",
            points: [
                "User Research & Personas",
                "Component Library & Design Systems",
                "Visual Consistency Rules",
                "Accessibility & Color Contrast Standards",
                "Project: Full Website Redesign Case Study",
            ],
        },

        {
            title: "Module 10: Internship + Industry Preparation",
            points: [
                "Work on Live Website Design Projects",
                "Client Communication & Presentation Skills",
                "Interview & Portfolio Review Sessions",
                "Professional Certification",
                "Guaranteed Internship Support",
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Massive Demand Industries",
            subtitle:
                "Every brand needs visually appealing website layouts & landing pages.",
        },
        {
            icon: "/images/usertea.webp",
            title: "Work-from-Home Friendly",
            subtitle:
                "Design interfaces from anywhere for global clients.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Career Options",
            subtitle:
                "Earn ₹20,000–₹90,000/month through jobs & freelance work.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Coding Required",
            subtitle:
                "We focus on design tools, layouts, and user experience. Basic coding optional.",
        },
    ];

    const items = [
        {
            icon: "/images/45days.webp",
            title: "3 Months",
            subtitle: "Practical Training ",
        },
        {
            icon: "/images/handmoney.webp",
            title: "100%",
            subtitle: "Placement Support",
        },
        {
            icon: "/images/globeicon.webp",
            title: "Global Work",
            subtitle: "Freelance or Full-Time",
        },
        {
            icon: "/images/money.webp",
            title: "INR / USD",
            subtitle: "Earning Opportunitiess",
        },
    ];
    const program_data = [
        { text: "Website Layout & Structure", icon: "/images/greencheck.webp" },
        { text: "Figma / Adobe XD for Design", icon: "/images/greencheck.webp" },
        { text: "Wireframing & Prototyping", icon: "/images/greencheck.webp" },

        { text: "UI/UX Fundamentals", icon: "/images/greencheck.webp" },
        { text: "Responsive Web Design Principles", icon: "/images/greencheck.webp" },
        { text: "Basic HTML/CSS for Designers", icon: "/images/greencheck.webp" },

        { text: "Typography & Color Theory", icon: "/images/greencheck.webp" },
        { text: "Landing Page & Homepage Design", icon: "/images/greencheck.webp" },
        { text: "Design Systems & Components", icon: "/images/greencheck.webp" }
    ];

    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Creative learners", icon: "/images/greencheck.webp" },
        { text: "Freelancers", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting a design career", icon: "/images/greencheck.webp" },

    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert Web Design Mentors",
            description:
                "Learn from industry designers who build websites for brands & agencies.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Design Projects",
            description:
                "Design real landing pages, UI layouts, and modern website sections.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Creative Mentorship",
            description:
                "Get personalized guidance on improving your concepts & visual skills.",
        },
        {
            id: 4,
            number: 4,
            title: "Communication & Interview Boost",
            description:
                "Learn how to present designs professionally and manage client feedback.",
        },
        {
            id: 5,
            number: 5,
            title: "Behance/Dribbble Support",
            description:
                "Build a professional design portfolio with real UI samples.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description:
                "Gain hands-on experience working on live design tasks.",
        },
    ];


    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Professional Web Designer'}
                titleEnd={'in 3 Months'}
                description={"Master UI Layouts • Creative Web Styling • Responsive Design • Live Projects"}
                leftposter={graphic_left}
                rightposter={graphic_right}
            />
            <CoursesCareer
                items={items}
                left_banner={graphic_left_banner}
                featuresMain={featuresMain}
                title={'Why Web Designing is the  <br/> <span class="text-primary">Next Big Career</s  pan>'}
                description={"Design beautiful, responsive websites for brands, creators & companies."}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">3 Months Intensive </span> <br/>Web Designing  Program'}
            />
            <AboutCourse
                title={'About Web Designing Course'}
                description1={`
                 Our Web Designing Course is a comprehensive program designed to equip individuals with the skills and knowledge necessary to create visually stunning and user-friendly websites.`}
                description2={`
                    From the fundamentals of HTML and CSS to advanced topics like responsive design and UX/UI principles, our course covers it all. With expert instructors, hands-on training, and flexible learning options, students gain practical experience and build a strong portfolio of web design projects.`}
                description3={`
                    Stay ahead of the curve with our cutting-edge curriculum that reflects the latest industry trends and technologies. Join our course today and unlock your potential as a skilled web designer.            
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Web Designing Course <br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'Unleash your creativity and master the art of  ​<sapn class="text-primary"> UI/UX and web designing </span>'}
                description={`Our comprehensive Web Design Training Course is designed to equip you with the skills and knowledge needed to create stunning and user-friendly websites`}
                right_image={graphic_left_banner}
            />
            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default WebDesigning;

