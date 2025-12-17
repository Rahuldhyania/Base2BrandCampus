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
const Devops = () => {
    const Syllabus_data = [
        {
            title: "Module 1 - Introduction to DevOps",
            points: [
                "What is DevOps and its importance",
                "DevOps lifecycle and principles",
                "DevOps tools overview",
                "Career scope in DevOps"
            ]
        },
        {
            title: "Module 2 - Linux & Version Control",
            points: [
                "Linux fundamentals for DevOps",
                "File & user management",
                "Introduction to Git and GitHub",
                "Version control best practices"
            ]
        },
        {
            title: "Module 3 - Continuous Integration (CI)",
            points: [
                "CI concepts and workflow",
                "Jenkins installation & setup",
                "Building pipelines for automation",
                "Integration with GitHub projects"
            ]
        },
        {
            title: "Module 4 - Containerization with Docker",
            points: [
                "Introduction to Docker",
                "Creating and managing Docker containers",
                "Docker images, volumes & networking",
                "Container best practices"
            ]
        },
        {
            title: "Module 5 - Configuration Management with Ansible",
            points: [
                "Ansible concepts & architecture",
                "Playbooks, tasks, and roles",
                "Automating server configuration",
                "Managing infrastructure efficiently"
            ]
        },
        {
            title: "Module 6 - Continuous Deployment (CD) & Kubernetes",
            points: [
                "Continuous Deployment concepts",
                "Kubernetes fundamentals",
                "Pods, services, deployments & scaling",
                "Deploying applications on Kubernetes cluster"
            ]
        },
        {
            title: "Module 7 - Cloud & DevOps Tools",
            points: [
                "Introduction to cloud platforms (AWS, Azure, GCP)",
                "Setting up cloud environments for DevOps",
                "Monitoring & logging tools (Prometheus, Grafana)",
                "Infrastructure as Code (IaC) concepts"
            ]
        },
        {
            title: "Module 8 - Monitoring, Security & Best Practices",
            points: [
                "Application & server monitoring",
                "DevSecOps concepts",
                "Security best practices in DevOps",
                "Optimizing DevOps workflows"
            ]
        },
        {
            title: "Module 9 - Real Projects, Portfolio & Internship",
            points: [
                "Hands-on DevOps projects",
                "Building CI/CD pipelines from scratch",
                "Portfolio & GitHub support",
                "Internship guidance and career support"
            ]
        }
    ];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "2–3 Months Job-Oriented Program",
            subtitle:
                "Fast-track DevOps course to get job-ready in 2–3 months."
        },
        {
            icon: "/images/usertea.webp",
            title: "Offline & Online Learning",
            subtitle:
                "Offline classes in Mohali or live online across India."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Demand DevOps Roles",
            subtitle:
                "Careers in DevOps, Cloud & SRE roles."
        },
        {
            icon: "/images/digree.webp",
            title: "Eligibility & Certification",
            subtitle:
                "Open for 12th pass & above with B2B Campus certification."
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
            text: "DevOps Fundamentals & Agile Practices",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Continuous Integration & Continuous Deployment (CI/CD)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Configuration Management (Ansible, Puppet, Chef)",
            icon: "/images/greencheck.webp"
        },

        {
            text: "Containerization & Orchestration (Docker, Kubernetes)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Cloud Deployment Basics (AWS, Azure, GCP)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Monitoring & Automation Tools (Jenkins, Prometheus)",
            icon: "/images/greencheck.webp"
        },

        {
            text: "Infrastructure as Code (IaC) Basics",
            icon: "/images/greencheck.webp"
        },
        {
            text: "DevOps Workflows & Best Practices",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Real-World DevOps Projects & Use Cases",
            icon: "/images/greencheck.webp"
        }
    ];
    const conjoin_data = [
        { text: "Students & Freshers", icon: "/images/greencheck.webp" },
        { text: "Career Switchers", icon: "/images/greencheck.webp" },
        { text: "Tech Beginners", icon: "/images/greencheck.webp" },
        { text: "IT Professionals", icon: "/images/greencheck.webp" },
        { text: "Anyone Looking to Build DevOps Skills", icon: "/images/greencheck.webp" }
    ];

    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Trusted IT Training Institute",
            description:
                "B2B Campus is a recognized IT training institute in Mohali, Punjab, delivering high-quality DevOps courses trusted by industry professionals."
        },
        {
            id: 2,
            number: 2,
            title: "Industry-Focused DevOps Curriculum",
            description:
                "Learn DevOps with a curriculum designed around current industry practices, tools, and real-world project scenarios."
        },
        {
            id: 3,
            number: 3,
            title: "Hands-On Labs & Real Projects",
            description:
                "Gain practical experience through hands-on labs, CI/CD pipelines, containerization, and live DevOps project simulations."
        },
        {
            id: 4,
            number: 4,
            title: "Expert DevOps Mentors",
            description:
                "Learn from mentors with extensive professional DevOps experience to guide your practical and career growth."
        },
        {
            id: 5,
            number: 5,
            title: "Flexible Training Options",
            description:
                "Attend DevOps training in our offline classrooms or via live online sessions for a flexible learning experience."
        },
        {
            id: 6,
            number: 6,
            title: "Career Guidance & Placement Support",
            description:
                "Get dedicated career advice, job placement assistance, and freelancing opportunities to kickstart your DevOps career."
        }
    ];

    return (
        <div>
            <CoursesBanner
                highlightText={"Become an Devops Engineer "}
                titleEnd={"in 3 Months"}
                description={
                    "Build Pipelines • Automate Deployments • Manage Cloud • CI/CD • Real-World DevOps Projects"
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
                    'Why Devops is the <br/> <span class="text-primary">Next Big Career</span>'
                }
                description={
                    "DevOps bridges development and operations, enabling faster releases, better stability, <br/> and high-demand roles across modern tech companies."
                }
                max_width={"max-w-[80%]"}
            />
            <CourseProgram
                program_data={program_data}
                title={
                    '<span class="text-primary">3 Months Intensive </span> <br/> DevOps Program'
                }
            />
            <AboutCourse
                title={"About the DevOps Course & Global Career Opportunities"}
                description1={`The DevOps Course & Certification program trains learners to streamline software development and IT operations by implementing continuous integration, continuous deployment (CI/CD), and automation practices using industry-standard tools.`}
                description2={`This hands-on course covers key DevOps concepts such as cloud computing, containerization, configuration management, monitoring, and infrastructure as code, providing practical experience with real-world projects.`}
                description3={`With businesses increasingly adopting Agile and DevOps practices, the demand for skilled DevOps professionals is rapidly growing worldwide across IT, cloud services, startups, and enterprise sectors, offering excellent career growth and high-paying job opportunities.`}
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
                    'DevOps Courses & Certifications To <span class="text-primary">Automate & Streamline IT Operations</span>'
                }
                description={`Learn how to implement continuous integration, continuous deployment (CI/CD), containerization, cloud automation, and infrastructure as code using industry-standard DevOps tools. Gain hands-on experience with real projects and build a high-demand career in DevOps.`}
                right_image={iot_leftposter}
            />


            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default Devops;
