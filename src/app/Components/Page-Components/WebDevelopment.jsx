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
import webdev_leftbanner from "../../../../public/images/webdev_leftbanner.webp";
import webdev_rightbanner from "../../../../public/images/webdev_rightbanner.webp";
import webdev_leftposter from "../../../../public/images/webdev_leftposter.webp"
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
const WebDevelopment = () => {
    const Syllabus_data = [
        {
            title: "Module 1: HTML (Hyper Text Markup Language)",
            points: [
                "Introduction to HTML & Web Structure",
                "HTML Tags, Elements & Attributes",
                "Lists, Links, Images & Tables",
                "Forms & Form Validation Basics",
                "Semantic HTML5 Tags",
                "Embedding Media (Audio, Video, iFrames)",
                "Project: Create a Multi-page Website"
            ],
        },

        {
            title: "Module 2: CSS (Cascading Style Sheets)",
            points: [
                "CSS Selectors, Properties & Values",
                "Inline, Internal & External CSS",
                "Box Model, Margin, Padding, Borders",
                "Flexbox & Grid Layouts",
                "Positioning & Responsive Design",
                "Animations & Transitions",
                "Project: Responsive Landing Page"
            ],
        },

        {
            title: "Module 3: JavaScript",
            points: [
                "JavaScript Basics (Variables, Data Types)",
                "Functions, Loops & Conditions",
                "DOM Manipulation",
                "Events & Event Listeners",
                "JSON & Local Storage",
                "API Fetching Basics",
                "Project: Interactive Web App"
            ],
        },

        {
            title: "Module 4: Bootstrap",
            points: [
                "Bootstrap Grid System",
                "Responsive Layouts & Utility Classes",
                "Navbar, Modals, Carousel, Cards",
                "Forms & Buttons Styling",
                "Icons & Components",
                "Building a Full Responsive Template",
                "Project: Company Website UI"
            ],
        },

        {
            title: "Module 5: jQuery",
            points: [
                "jQuery Basics & Selectors",
                "jQuery Events & Effects",
                "DOM Manipulation with jQuery",
                "Form Validation",
                "AJAX Requests",
                "jQuery Plugins",
                "Project: Dynamic Web Features"
            ],
        },

        {
            title: "Module 6: WordPress",
            points: [
                "Introduction to CMS & WordPress",
                "Installing Themes & Plugins",
                "Customizing WordPress Websites",
                "Creating Pages, Posts & Menus",
                "SEO Plugins (Yoast/RankMath)",
                "Website Security & Optimization",
                "Project: Full Business Website"
            ],
        },

        {
            title: "Module 7: Hosting & Deployment",
            points: [
                "Domain & Hosting Setup",
                "cPanel Overview",
                "File Upload via FTP",
                "DNS Configuration",
                "Deploying Websites Live",
                "Website Backup & Migration"
            ],
        },

        {
            title: "Module 8: Bonus Skills",
            points: [
                "Basic UI/UX Principles",
                "Figma for Web Layouts",
                "Speed Optimization",
                "SEO Fundamentals",
                "Conversion-Focused Design",
                "Portfolio Website Creation"
            ],
        },

        {
            title: "Module 9: Final Projects",
            points: [
                "E-commerce Website",
                "Business Website",
                "Blog Website",
                "Admin Dashboard (JS Based)",
                "Portfolio Website"
            ],
        },

        {
            title: "Module 10: Internship & Certification",
            points: [
                "8 Weeks Industrial Training",
                "Work on Real Client Projects",
                "Resume + Interview Preparation",
                "Professional Certification Provided"
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Huge Demand in the Market",
            subtitle:
                "Companies need websites, landing pages, dashboards and web apps.",
        },
        {
            icon: "/images/usertea.webp",
            title: "Work-from-Home Friendly",
            subtitle:
                "Build products for clients worldwide while working remotely.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Career Options",
            subtitle:
                "Earn ₹20,000–₹1,00,000+/month through jobs, freelance work and projects.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Tech Degree Needed",
            subtitle:
                "We start from basics and train you step-by-step to become job-ready.",
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
        { text: "Responsive Web Design", icon: "/images/greencheck.webp" },
        { text: "HTML, CSS, JavaScript Essentials", icon: "/images/greencheck.webp" },
        { text: "Web Hosting & Deployment", icon: "/images/greencheck.webp" },

        { text: "UI Styling & Layout Systems", icon: "/images/greencheck.webp" },
        { text: "DOM Manipulation & Interactivity", icon: "/images/greencheck.webp" },
        { text: "Contact Forms & Basic Integrations", icon: "/images/greencheck.webp" },

        { text: "Bootstrap / Tailwind CSS", icon: "/images/greencheck.webp" },
        { text: "Basic React.js Introduction", icon: "/images/greencheck.webp" },
        { text: "SEO-Friendly Website Structure", icon: "/images/greencheck.webp" }
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Beginners in coding", icon: "/images/greencheck.webp" },
        { text: "Freelancers", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting a developer career", icon: "/images/greencheck.webp" },

    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert Web Development Trainers",
            description:
                "Learn from developers with real experience working on websites & tech companies.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Project-Based Training",
            description:
                "Build real websites, landing pages, and performance-optimized layouts.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Technical Mentorship",
            description:
                "Get personalized code guidance, design improvement, and project support.",
        },
        {
            id: 4,
            number: 4,
            title: "Soft Skills + Communication Boost",
            description:
                "Learn how to present work, handle feedback & communicate professionally with clients.",
        },
        {
            id: 5,
            number: 5,
            title: "Portfolio & GitHub Setup Support",
            description:
                "Graduate with a strong online presence and real deployed websites.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description:
                "Start working on real development tasks immediately after the course.",
        },
    ];

    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Professional Web Developer'}
                titleEnd={'in 3 Months'}
                description={"Master Frontend Development • Responsive Websites • Live Projects • Portfolio Building"}
                leftposter={webdev_leftbanner}
                rightposter={webdev_rightbanner}
            />
            <CoursesCareer
                items={items}
                left_banner={webdev_leftposter}
                featuresMain={featuresMain}
                title={'Why Web Development is the <br/> <span class="text-primary">Next Big Career</s  pan>'}
                description={"Build websites for brands, companies, creators & international clients"}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">3 Months Intensive </span> <br/>Web Development Program'}
            />
            <AboutCourse
                title={'About Web Development Course'}
                description1={`
                  Our Web Development Course is designed to provide comprehensive training in the field of web development. Whether you are a beginner or have some prior knowledge, this course offers a structured learning path to enhance your skills and knowledge.`}
                description2={`
                    You will delve into HTML and CSS, learning to create visually appealing and responsive websites. The course also covers JavaScript, enabling you to add interactivity and dynamic functionality to your web pages.`}
                description3={`
                    Additionally, you will explore server-side programming languages like PHP or Python, allowing you to build robust and data-driven websites. Join our Web Development Course and embark on an exciting journey to become a proficient web developer.            
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Web Development Course <br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            {/* <BecomeStudent /> */}
            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default WebDevelopment;

