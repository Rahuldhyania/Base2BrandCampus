import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import digital_leftbanner from "../../../../public/images/digital_leftbanner.webp";
import digital_rightbanner from "../../../../public/images/digital_rightbanner.webp";
import digital_leftposter from "../../../../public/images/digital_leftposter.webp"
import CourseSyllabus from '../Courses/CourseSyllabus';
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
const DigitalMarketing = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction to Digital Marketing",
            points: [
                "What is Digital Marketing?",
                "Traditional vs Digital Marketing",
                "Career scope & opportunities",
                "Overview of the course",
            ],
        },
        {
            title: "Module 2 - Marketing Fundamentals",
            points: [
                "Understanding audience & buyer personas",
                "Marketing funnel & customer journey",
                "Branding basics",
            ],
        },
        {
            title: "Module 3 - Website & Landing Pages",
            points: [
                "How websites work",
                "Landing page structure",
                "Conversion-focused design basics",
                "Website optimization fundamentals",
            ],
        },
        {
            title: "Module 4 - Search Engine Optimization (SEO)",
            points: [
                "What is SEO?",
                "Keyword research basics",
                "On-page SEO",
                "Off-page SEO",
                "Technical SEO fundamentals",
            ],
        },
        {
            title: "Module 5 - Social Media Marketing",
            points: [
                "Facebook, Instagram & LinkedIn marketing",
                "Content strategy & planning",
                "Growing organic reach",
                "Social media tools overview",
            ],
        },
        {
            title: "Module 6 - Paid Advertising (Ads)",
            points: [
                "Google Ads overview (Search, Display, YouTube)",
                "Meta Ads (Facebook & Instagram)",
                "Campaign setup & structure",
                "Ad creatives & targeting basics",
            ],
        },
        {
            title: "Module 7 - Content & Email Marketing",
            points: [
                "Content writing & copywriting basics",
                "Blogs & SEO content",
                "Email marketing fundamentals",
                "Automation & lead nurturing",
            ],
        },
        {
            title: "Module 8 - Analytics, Freelancing & Career",
            points: [
                "Google Analytics & tracking basics",
                "Reading reports & KPIs",
                "Freelancing platforms overview",
                "Portfolio & internship guidance",
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Massive Demand in Industries",
            subtitle:
                "All businesses rely on online marketing for growth.",
        },
        {
            icon: "/images/usertea.webp",
            title: "Work-from-Home Friendly",
            subtitle:
                "Manage campaigns remotely for clients across the world.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Growth Options",
            subtitle:
                "Earn ₹20,000–₹1,20,000/month through jobs, freelance & projects.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Special Background Needed",
            subtitle:
                "Creative thinking + proper training = career-ready.",
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
            subtitle: "Work-from-Home or Abroad ",
        },
        {
            icon: "/images/money.webp",
            title: "INR / USD",
            subtitle: "Flexible Earning Options",
        },
    ];
    const program_data = [
        { text: "Social Media Marketing", icon: "/images/greencheck.webp" },
        { text: "Google Ads (Search, Display, YouTube)", icon: "/images/greencheck.webp" },
        { text: "Website & Landing Page Optimization", icon: "/images/greencheck.webp" },

        { text: "Blogging & SEO Setup", icon: "/images/greencheck.webp" },
        { text: "SEO – On-Page, Off-Page & Technical", icon: "/images/greencheck.webp" },
        { text: "Meta Ads Setup & Optimization", icon: "/images/greencheck.webp" },

        { text: "Social Media Content Strategy", icon: "/images/greencheck.webp" },
        { text: "Content Writing & Copywriting Basics", icon: "/images/greencheck.webp" },
        { text: "Email Marketing & Automation Basics", icon: "/images/greencheck.webp" },
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Beginners in tech", icon: "/images/greencheck.webp" },
        { text: "Business owners", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting a high-income digital career", icon: "/images/greencheck.webp" },
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert Digital Marketing Mentors",
            description:
                "Learn from marketers who manage campaigns for brands & agencies.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Campaign Training",
            description:
                "Run real ads, optimize content, and work on practical marketing tasks.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Strategy Mentorship",
            description:
                "Get personalized guidance for campaign planning & execution.",
        },
        {
            id: 4,
            number: 4,
            title: "Client Handling Skills",
            description:
                "Learn how to present results, pitch clients, and handle monthly reports.",
        },
        {
            id: 5,
            number: 5,
            title: "Portfolio & Case Study Support",
            description:
                "Build strong real-world case studies to impress employers or clients.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description:
                "Work on real marketing projects immediately after training.",
        },
    ];



    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Certified Digital Marketer'}
                titleEnd={'in 3 Months'}
                description={"Master Social Media • Google Ads • SEO • Content Strategy • Real Campaigns"}
                leftposter={digital_leftbanner}
                rightposter={digital_rightbanner}
                max_width={'max-w-[400px]'}
            />
            <CoursesCareer
                items={items}
                left_banner={digital_leftposter}
                featuresMain={featuresMain}
                title={'Why Digital Marketing is the <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Work with brands, agencies, influencers & international clients."}
                max_width={'md:max-w-[80%]'}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">3 Months Intensive </span> <br/> Digital Marketing Program'}
            />
            <AboutCourse
                title={'About Digital Marketing Course'}
                description1={`
                  Our Digital Marketing Course offers a transformative learning experience for aspiring marketers. Dive into the dynamic world of online advertising, SEO, social media marketing, and content strategy.`}
                description2={`
                   Learn from industry experts and gain practical skills to create effective campaigns, optimize website traffic, and maximize conversions. Through hands-on exercises and real-world case studies, you’ll develop a deep understanding of digital marketing tools and techniques.`}
                description3={`
                   Stay ahead of the curve with the latest industry trends and unlock exciting career opportunities. Join us on this educational journey and unleash your marketing potential today.
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Digital Marketing Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'Unlock Success Effortlessly with ​<sapn class="text-primary">Digital Marketing Course </span>'}
                description={`Build a Successful, Profitable Freight Brokerage Business with Expert Guidance. Learn to connect shippers and carriers, manage logistics efficiently, and unlock high-income opportunities in the growing transportation industry.`}
                right_image={digital_leftposter}
            />
            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default DigitalMarketing;


