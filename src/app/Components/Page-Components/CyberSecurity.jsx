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
import cybersecurity_leftbanner from "../../../../public/images/cybersecurity_leftbanner.webp";
import cybersecurity_rightbanner from "../../../../public/images/cybersecurity_rightbanner.webp";
import iot_leftposter from "../../../../public/images/iot_leftposter.webp";
import CourseSyllabus from "../Courses/CourseSyllabus";
import Professionalskill from "./Professionalskill";
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
const CyberSecurity = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction to Cyber Security",
            points: [
                "What is Cyber Security?",
                "Cyber threats, attacks & vulnerabilities",
                "Career scope in Cyber Security",
                "Course overview & learning roadmap"
            ]
        },
        {
            title: "Module 2 - Networking & Security Fundamentals",
            points: [
                "Basics of computer networks",
                "TCP/IP, OSI model & protocols",
                "Network devices & architecture",
                "Introduction to network security"
            ]
        },
        {
            title: "Module 3 - Linux, Windows & System Security",
            points: [
                "Linux fundamentals for security",
                "Windows security basics",
                "User, file & permission management",
                "System hardening concepts"
            ]
        },
        {
            title: "Module 4 - Ethical Hacking & Penetration Testing",
            points: [
                "Ethical hacking concepts",
                "Reconnaissance & scanning techniques",
                "Vulnerability assessment",
                "Introduction to penetration testing"
            ]
        },
        {
            title: "Module 5 - Malware, Threats & Incident Response",
            points: [
                "Types of malware & cyber attacks",
                "Threat analysis techniques",
                "Incident response process",
                "Basic digital forensics"
            ]
        },
        {
            title: "Module 6 - Firewalls, VPNs & Cryptography",
            points: [
                "Firewall concepts & configuration",
                "VPN technologies & use cases",
                "Encryption & cryptography basics",
                "Secure communication principles"
            ]
        },
        {
            title: "Module 7 - Web & Application Security",
            points: [
                "Web application architecture",
                "Common vulnerabilities (OWASP Top 10)",
                "Web security testing basics",
                "Securing web applications"
            ]
        },
        {
            title: "Module 8 - SOC, Cloud & Compliance",
            points: [
                "SOC operations & monitoring",
                "Cloud security fundamentals",
                "Security policies & compliance",
                "Risk management basics"
            ]
        },
        {
            title: "Module 9 - Real Projects, Portfolio & Internship",
            points: [
                "Hands-on cyber security projects",
                "Case studies & real-world scenarios",
                "Portfolio & GitHub support",
                "Internship & career guidance"
            ]
        }
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "High Demand Across Industries",
            subtitle:
                "Cyber Security professionals are required in IT, banking, healthcare, e-commerce & government sectors."
        },
        {
            icon: "/images/usertea.webp",
            title: "WFH / Global Opportunities",
            subtitle:
                "Work remotely as a Security Analyst, SOC Engineer or Ethical Hacker worldwide."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Career Growth",
            subtitle:
                "Earn ₹30,000–₹2,00,000/month in Cyber Security & Cloud Security roles."
        },
        {
            icon: "/images/digree.webp",
            title: "Beginner-Friendly Learning",
            subtitle:
                "Learn from basics – networking, Linux & essential security tools."
        }
    ];
    const items = [
        {
            icon: "/images/45days.webp",
            title: "2 Months",
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
            text: "Cyber Security Fundamentals & Network Security",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Ethical Hacking & Penetration Testing",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Malware, Virus & Threat Analysis",
            icon: "/images/greencheck.webp"
        },

        {
            text: "Firewalls, VPNs & Encryption Techniques",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Security Policies, Risk Management & Compliance",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Web Application Security & Vulnerability Testing",
            icon: "/images/greencheck.webp"
        },

        {
            text: "Security Tools & Incident Response",
            icon: "/images/greencheck.webp"
        },
        {
            text: "SOC Operations & Blue Team Basics",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Real-World Security Projects & Case Studies",
            icon: "/images/greencheck.webp"
        }
    ];
    const conjoin_data = [
        { text: "Students & Freshers", icon: "/images/greencheck.webp" },
        { text: "Career Switchers", icon: "/images/greencheck.webp" },
        { text: "Tech Beginners", icon: "/images/greencheck.webp" },
        { text: "IT Professionals", icon: "/images/greencheck.webp" },
        {
            text: "Anyone Seeking Cyber Skills",
            icon: "/images/greencheck.webp"
        }
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Trusted IT & Cyber Security Institute",
            description:
                "Recognized institute delivering quality cyber security training with industry trust."
        },
        {
            id: 2,
            number: 2,
            title: "Industry-Aligned Practical Curriculum",
            description:
                "Curriculum designed as per current cyber security tools, threats & standards."
        },
        {
            id: 3,
            number: 3,
            title: "Hands-On Labs & Simulations",
            description:
                "Practice real-world attacks, defenses and security simulations."
        },
        {
            id: 4,
            number: 4,
            title: "Expert Cyber Security Mentors",
            description:
                "Learn from professionals with real cyber security industry experience."
        },
        {
            id: 5,
            number: 5,
            title: "Offline + Online Live Training",
            description:
                "Flexible classroom and live online training options available."
        },
        {
            id: 6,
            number: 6,
            title: "Career & Placement Support",
            description:
                "Career guidance, placement assistance and freelancing support provided."
        }
    ];
    return (
        <div>
            <CoursesBanner
                highlightText={"Become an Cyber Security Expert "}
                titleEnd={"in 2 Months"}
                description={
                    "Protect Systems • Secure Networks • Hunt Threats • Defend Data • Real-World Security Projects"
                }
                leftposter={cybersecurity_leftbanner}
                rightposter={cybersecurity_rightbanner}
                max_width={"max-w-[70%]"}
            />
            <CoursesCareer
                items={items}
                left_banner={iot_leftposter}
                featuresMain={featuresMain}
                title={
                    'Why Cyber Security is the <br/> <span class="text-primary">Next Big Career</span>'
                }
                description={
                    "Our training helps you understand network security, penetration testing, malware <br/> analysis, and ethical hacking, preparing you for high-demand roles <br/> in the IT and cyber security industry."
                }
                max_width={"max-w-[80%]"}
            />
            <CourseProgram
                program_data={program_data}
                title={
                    '<span class="text-primary">2 Months Intensive </span> <br/> Cyber Security Program'
                }
            />
            <AboutCourse
                title={"About the Cyber Security Course & Global Career Opportunities"}
                description1={`The Cyber Security Course & Certification program equips learners with the skills to protect systems, networks, and data from cyber threats using industry-standard tools and techniques.`}
                description2={`This hands-on course covers core cyber security concepts, ethical hacking, network defense, and real-world attack simulations to build strong practical expertise.`}
                description3={`With rising cyber threats and digital transformation, the demand for Cyber Security professionals is growing globally across IT, banking, healthcare, government, and enterprise sectors, offering strong career opportunities.`}
            />

            <CourseCareerSupport />
            

            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            <CourseSyllabus
                title={
                    'Internet of Things (IoT) <br/> <span class="text-primary"> Syllabus</span>'
                }
                Syllabus_data={Syllabus_data}
            />
            <BecomeStudent
                title={
                    'Cyber Security Courses & Certifications To <span class="text-primary">Secure Digital Systems</span>'
                }
                description={`Learn how to protect networks, systems, and data from cyber threats using ethical hacking, security tools, and real-world simulations. Gain hands-on experience and build a future-ready career in Cyber Security.`}
                right_image={iot_leftposter}
            />

            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default CyberSecurity;
