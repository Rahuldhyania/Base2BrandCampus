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
import iot_leftbanner from "../../../../public/images/iot_leftbanner.webp";
import iot_rightbanner from "../../../../public/images/iot_rightbanner.webp";
import iot_leftposter from "../../../../public/images/iot_leftposter.webp"
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
const InternetOfThings = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction to IoT",
            points: [
                "What is Internet of Things (IoT)?",
                "IoT applications in real life & industry",
                "Career scope in IoT & embedded systems",
                "Course overview & learning roadmap",
            ],
        },
        {
            title: "Module 2 - Basics of Electronics & Embedded Systems",
            points: [
                "Basic electronics concepts",
                "Understanding sensors & actuators",
                "Microcontrollers vs microprocessors",
                "Introduction to embedded systems",
            ],
        },
        {
            title: "Module 3 - Arduino & ESP32 Programming",
            points: [
                "Arduino board overview",
                "ESP32 features & use cases",
                "Digital & analog I/O programming",
                "Interfacing sensors with Arduino & ESP32",
            ],
        },
        {
            title: "Module 4 - Programming for IoT (C / Python)",
            points: [
                "C/C++ basics for embedded systems",
                "Python basics for IoT applications",
                "Reading sensor data",
                "Controlling devices using code",
            ],
        },
        {
            title: "Module 5 - Circuit Design & Prototyping",
            points: [
                "Circuit design fundamentals",
                "Breadboard & component usage",
                "Power supply basics",
                "Hardware debugging techniques",
            ],
        },
        {
            title: "Module 6 - Data Logging & Cloud Integration",
            points: [
                "Sending data to cloud platforms",
                "Data logging techniques",
                "Dashboards & visualization",
                "Basic IoT cloud architecture",
            ],
        },
        {
            title: "Module 7 - Automation & Industrial IoT",
            points: [
                "Automation & control systems",
                "Industrial IoT concepts",
                "Smart factory & smart systems overview",
                "Real-world industry use cases",
            ],
        },
        {
            title: "Module 8 - Smart Home & Real-Time Projects",
            points: [
                "Smart home automation projects",
                "Real-time IoT applications",
                "Device communication basics",
                "Project planning & execution",
            ],
        },
        {
            title: "Module 9 - Portfolio, GitHub & Internship",
            points: [
                "Building real IoT projects",
                "Portfolio & GitHub project support",
                "Project documentation & presentation",
                "Guaranteed internship & career guidance",
            ],
        },
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "High Demand Across Tech",
            subtitle:
                "IoT is used in IT, manufacturing, automation, robotics, healthcare & smart devices.",
        },
        {
            icon: "/images/usertea.webp",
            title: "WFH / Hybrid Opportunities",
            subtitle:
                "Design, test & deploy IoT solutions from anywhere.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Growth Options",
            subtitle:
                "Earn ₹25,000–₹1,20,000/month with development & embedded systems jobs.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Electronics Background Needed",
            subtitle:
                "We teach from basics – sensors, coding, circuits & cloud.",
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
        { text: "Arduino & ESP32 Programming", icon: "/images/greencheck.webp" },
        { text: "Basics of IoT & Embedded Systems", icon: "/images/greencheck.webp" },
        { text: "Smart Home Projects", icon: "/images/greencheck.webp" },

        { text: "Python / C Basics for IoT", icon: "/images/greencheck.webp" },
        { text: "Data Logging & Dashboards", icon: "/images/greencheck.webp" },
        { text: "Industrial IoT Concepts", icon: "/images/greencheck.webp" },

        { text: "Circuit Design & Prototyping", icon: "/images/greencheck.webp" },
        { text: "Automation & Control Systems", icon: "/images/greencheck.webp" },
        { text: "Real IoT Projects & Portfolio Building", icon: "/images/greencheck.webp" },
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Beginners in tech", icon: "/images/greencheck.webp" },
        { text: "Business owners", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting future-ready tech skills", icon: "/images/greencheck.webp" },
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Expert IoT Developers as Mentors",
            description:
                "Learn from engineers who’ve built real IoT systems & industrial solutions.",
        },
        {
            id: 2,
            number: 2,
            title: "Live Hardware Projects",
            description:
                "Work with sensors, microcontrollers & cloud tools in real time.",
        },
        {
            id: 3,
            number: 3,
            title: "1:1 Technical Mentorship",
            description:
                "Personal guidance for coding, circuits & debugging.",
        },
        {
            id: 4,
            number: 4,
            title: "Industry-Level Problem Solving",
            description:
                "Learn how IoT works in real companies and smart systems.",
        },
        {
            id: 5,
            number: 5,
            title: "Portfolio & GitHub Support",
            description:
                "Graduate with deployable IoT projects and cloud dashboards.",
        },
        {
            id: 6,
            number: 6,
            title: "Guaranteed Internship",
            description:
                "Get hands-on experience working on real IoT assignments.",
        },
    ];

    return (
        <div>
            <CoursesBanner
                highlightText={'Become an IoT Engineer'}
                titleEnd={'in 3 Months'}
                description={"Master Sensors • Microcontrollers • Automation • Cloud Integration • Live Projects"}
                leftposter={iot_leftbanner}
                rightposter={iot_rightbanner}
                max_width={'max-w-[70%]'}
            />
            <CoursesCareer
                items={items}
                left_banner={iot_leftposter}
                featuresMain={featuresMain}
                title={'Why IoT is the <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Build smart devices, automation systems, and connected solutions used by companies worldwide."}
                max_width={'max-w-[80%]'}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">3 Months Intensive </span> <br/> Internet of Things (IoT) Program'}
            />
            <AboutCourse
                title={'About the IoT Course & Global Career Opportunities'}
                description1={`
                  The IoT Course & Certification program equips learners with the knowledge to connect devices, collect data, and automate real-world systems using sensors, microcontrollers, and cloud platforms.`}
                description2={`
                  This hands-on course covers essential IoT technologies, enabling students to build practical projects and understand how connected systems operate in homes, industries, and smart cities.`}
                description3={`
                  With rapid digital transformation, the demand for IoT professionals is rising globally across automation, healthcare, manufacturing, and IT sectors, creating strong career opportunities.
          `}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus title={'Internet of Things (IoT) <br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'IoT Courses & Certifications To  ​<sapn class="text-primary"> Learn Smart Technologies </span>'}
                description={`Learn how devices connect, communicate, and automate using sensors, microcontrollers, and cloud platforms. Build hands-on experience with real IoT applications and step into the future of intelligent systems.`}
                right_image={iot_leftposter}
            />
            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default InternetOfThings;



