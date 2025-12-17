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
import fullstack_leftbanner from "../../../../public/images/fullstack_leftbanner.webp";
import fullstack_rightbanner from "../../../../public/images/fullstack_rightbanner.webp";
import fullstack_leftposter from "../../../../public/images/fullstack_leftposter.webp"
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
const Fullstackdevelopment = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction",
            points: [
                "What is dispatch business?",
                "Required skills",
                "Course overview",

            ],
        },
        {
            title: "Module 2 - Parties Involved",
            points: ["Role of a dispatcher", "Benefits of dispatcher services", "Owner operations and small fleet owner"],
        },
        {
            title: "Module 3 - Clients",
            points: ["Setting up with your client – contact", "Requesting documents from your client", "Download – sample carrier profile form.", "Download –  Sample of documents you will be requesting.", "Verbal agreement – Scope of booking decision "],
        },
        {
            title: "Module 4 - Equipment and Freight",
            points: ["Types of Trucks", "Trailer types", "Weight", "Commodity"],
        },
        {
            title: "Section 5 - Logistics",
            points: ["Pick-up and delivery times and their importance", "Extra Stops (Multiple deliveries)"],
        },
        {
            title: "Section 6 - Finding Freight",
            points: ["Load boards –  electronic marketplace", "DAT", "Internet Truck Stop", "Private 3PL boards", "Posting trucks"],
        },
        {
            title: "Module 7 - Booking Your First Load",
            points: ["Getting the right information", "Acceptable rates and negotiation", "Negotiantion tips", "Checking broker’s credit", "Getting set up with broker"],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Massive Job Demand",
            subtitle:
                "Full stack developers are in high demand across every industry.",
        },
        {
            icon: "/images/usertea.webp",
            title: "Work-from-Home Friendly",
            subtitle:
                "Build and deploy apps remotely for clients around the world.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Career",
            subtitle:
                "Earn ₹5 LPA to ₹20 LPA+ with strong growth and freelance options.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Tech Degree Needed",
            subtitle:
                "You just need dedication — we train you from zero to job-ready.",
        },
    ];
    const items = [
        {
            icon: "/images/45days.webp",
            title: "45 Days",
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
        { text: "HTML, CSS, JavaScript", icon: "/images/greencheck.webp" },
        { text: "UI Components, Responsive Design", icon: "/images/greencheck.webp" },
        { text: "MongoDB / MySQL Databases", icon: "/images/greencheck.webp" },

        { text: "React.js / Next.js", icon: "/images/greencheck.webp" },
        { text: "Node.js & Express.js", icon: "/images/greencheck.webp" },
        { text: "Deployment on Cloud Platforms", icon: "/images/greencheck.webp" },

        { text: "Git & GitHub Version Control", icon: "/images/greencheck.webp" },
        { text: "REST APIs & Authentication", icon: "/images/greencheck.webp" },
        { text: "Debugging, Testing & Optimization", icon: "/images/greencheck.webp" }
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "IT beginners", icon: "/images/greencheck.webp" },
        { text: "Freelancers", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting a high-paying tech career", icon: "/images/greencheck.webp" },
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert Full Stack Mentors",
            description:
                "Learn directly from experienced developers working in top tech companies & startups.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Coding Training",
            description:
                "Build real applications, solve real problems, and understand industry workflows.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Technical Mentorship",
            description:
                "Get personalized code reviews, structured guidance, and continuous improvement.",
        },
        {
            id: 4,
            number: 4,
            title: "Soft Skills + Communication Boost",
            description:
                "Improve communication for interviews, client meetings, teamwork, and presentations.",
        },
        {
            id: 5,
            number: 5,
            title: "Portfolio & GitHub Setup Support",
            description:
                "Graduate with a strong portfolio showcasing real, deployable development projects.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description:
                "Gain hands-on experience by working on real development assignments after training.",
        },
    ];
    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Full Stack Developer'}
                titleEnd={'in 6 Months'}
                description={"Master Frontend • Backend • Databases • APIs • Deployment • Real Projects"}
                leftposter={fullstack_leftbanner}
                rightposter={fullstack_rightbanner}
            />
            <CoursesCareer
                items={items}
                left_banner={fullstack_leftposter}
                featuresMain={featuresMain}
                title={'Why Full Stack Development is the <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Work directly with US logistics companies, carriers, brokers & shippers"}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">6 Months Intensive </span> <br/> Full Stack Development Program'}
            />
            <AboutCourse
                title={'About Full Stack Development Course'}
                description1={`
                  The Full Stack Development Course is a practical and industry-focused program designed to equip learners with the essential skills needed to build modern web applications. It covers both frontend and backend development to help students become job-ready full stack developers.`}
                description2={`
                   Through this hands-on course, participants learn how to create responsive interfaces, build secure backend APIs, work with databases, and deploy real-world applications. The program also includes training in debugging, version control, and development best practices.`}
                description3={`
                   Learners of this course gain access to high-demand tech opportunities across startups and global companies. With full stack skills, students can confidently pursue roles such as Frontend Developer, Backend Developer, or Full Stack Developer..
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            {/* <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} /> */}
            <BecomeStudent
                title={'Launch Your Career as a Skilled ​<sapn class="text-primary"> Full Stack Developer with Expert Training </span>'}
                description={`Build a successful, high-growth tech career with step-by-step guidance from experienced software engineers. Learn to develop responsive front-end interfaces, build powerful back-end systems, manage databases, and deploy real-world applications—unlocking top-paying opportunities in the global IT industry.`}
                right_image={fullstack_leftposter}
            />
            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default Fullstackdevelopment;


