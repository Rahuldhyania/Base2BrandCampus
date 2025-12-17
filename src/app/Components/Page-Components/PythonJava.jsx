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
import python_leftbanner from "../../../../public/images/python_leftbanner.webp";
import python_rightbanner from "../../../../public/images/python_rightbanner.webp";
import python_leftposter from "../../../../public/images/python_leftposter.webp"
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
const PythonJava = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction to Programming",
            points: [
                "What is programming and how it works?",
                "Python vs Java – where to use what",
                "Setting up IDE (VS Code / IntelliJ) & environment",
                "Course roadmap & career opportunities",
            ],
        },
        {
            title: "Module 2 - Programming Basics & Logic Building",
            points: [
                "Variables, data types & operators",
                "Conditional statements (if/else)",
                "Loops (for/while) and patterns",
                "Problem-solving & logic practice",
            ],
        },
        {
            title: "Module 3 - Functions & Modular Coding",
            points: [
                "Functions/methods and parameters",
                "Return values and reuse of code",
                "Modules/packages basics",
                "Writing clean and structured code",
            ],
        },
        {
            title: "Module 4 - Object-Oriented Programming (OOP)",
            points: [
                "Classes & objects",
                "Inheritance, polymorphism, encapsulation, abstraction",
                "OOP in Python and Java (difference + practice)",
                "Mini OOP-based projects",
            ],
        },
        {
            title: "Module 5 - File Handling & Exception Handling",
            points: [
                "Reading/writing files",
                "Working with data in files (TXT/CSV basics)",
                "Try/catch (exceptions) and error handling",
                "Debugging common runtime issues",
            ],
        },
        {
            title: "Module 6 - Collections / Libraries & Data Handling",
            points: [
                "Java Collections (List, Set, Map) basics",
                "Python libraries basics (built-in + useful ones)",
                "Sorting, searching, and data manipulation",
                "Basic algorithm practice",
            ],
        },
        {
            title: "Module 7 - Database Connectivity (MySQL)",
            points: [
                "Database fundamentals (tables, keys, relationships)",
                "SQL basics (CRUD operations)",
                "Connecting Python/Java with MySQL",
                "Running database-based programs",
            ],
        },
        {
            title: "Module 8 - APIs & Backend Basics",
            points: [
                "What is an API? JSON basics",
                "Creating basic APIs (intro level)",
                "Calling/consuming APIs in Python/Java",
                "Backend workflow fundamentals",
            ],
        },
        {
            title: "Module 9 - Debugging, Optimization & Projects",
            points: [
                "Debugging tools and best practices",
                "Code optimization techniques",
                "Real-time projects & assignments",
                "Portfolio + GitHub setup & internship guidance",
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Massive Demand Industries",
            subtitle:
                "Java is used in AI, automation, data, enterprise apps & banking systems.",
        },
        {
            icon: "/images/usertea.webp",
            title: "Work-from-Home Friendly",
            subtitle:
                "Build and debug applications from anywhere.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Career Options",
            subtitle:
                "Earn ₹25,000–₹1,00,000/month with strong career growth.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Coding Exp. needed",
            subtitle:
                "We teach from basics – logic, syntax, OOP, and real problem-solving.",
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
        { text: "Functions & Modular Coding", icon: "/images/greencheck.webp" },
        { text: "Programming Basics & Logic Building", icon: "/images/greencheck.webp" },
        { text: "Database Connectivity (MySQL)", icon: "/images/greencheck.webp" },

        { text: "File Handling & Exceptions", icon: "/images/greencheck.webp" },
        { text: "Object-Oriented Programming (OOP)", icon: "/images/greencheck.webp" },
        { text: "Debugging & Code Optimization", icon: "/images/greencheck.webp" },

        { text: "APIs & Backend Basics", icon: "/images/greencheck.webp" },
        { text: "Python Libraries / Java Collections", icon: "/images/greencheck.webp" },
        { text: "Real-Time Projects & Assignments", icon: "/images/greencheck.webp" },
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Engineering students", icon: "/images/greencheck.webp" },
        { text: "IT beginners", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting a programming career", icon: "/images/greencheck.webp" },
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert Python & Java Trainers",
            description:
                "Learn from developers working in top tech companies and real software projects.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Coding Sessions",
            description:
                "Practice logic building, OOP, algorithms & backend basics with live guidance.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Mentorship",
            description:
                "Personal support to improve code quality and problem-solving skills.",
        },
        {
            id: 4,
            number: 4,
            title: "Communication & Interview Boost",
            description:
                "Training for HR rounds, technical interviews & coding test preparation.",
        },
        {
            id: 5,
            number: 5,
            title: "Portfolio & GitHub Support",
            description:
                "Showcase your code, projects & practice work professionally.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description:
                "Gain real experience working on Python/Java-based assignments.",
        },
    ];

    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Python /Java Developer'}
                titleEnd={'in 45 Days'}
                description={"Master Programming Logic • OOP Concepts • Backend Basics • Real Projects"}
                leftposter={python_leftbanner}
                rightposter={python_rightbanner}
            />
            <CoursesCareer
                items={items}
                left_banner={python_leftposter}
                featuresMain={featuresMain}
                title={'Why Python/Java is the  <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Work with software companies, tech startups, automation teams & global clients."}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">45 Days Intensive </span> <br/> Python/Java Program'}
            />
            <AboutCourse
                title={'About the Python & Java Course & Global Career Opportunities'}
                description1={`The Python & Java Course & Certification program helps learners build strong programming fundamentals and master backend development concepts using two of the most in-demand programming languages worldwide.`}
                description2={`This hands-on training covers logic building, object-oriented programming (OOP), database connectivity, APIs, debugging, and real-time project development—making students job-ready even with no prior coding experience.`}
                description3={`With Python and Java widely used in software development, data, automation, web applications, and enterprise systems, skilled developers are in high demand globally across IT, startups, and multinational companies.`}
            />


            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Python/Java <br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'Python & Java Courses & Certifications To <span class="text-primary">Build Coding Skills</span>'}
                description={`Learn Python and Java from basics to advanced through logic building, OOP, database connectivity (MySQL), APIs, and real-time projects. Build a strong portfolio with hands-on practice and become job-ready for software development roles.`}
                right_image={python_leftposter}
            />

            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default PythonJava;



