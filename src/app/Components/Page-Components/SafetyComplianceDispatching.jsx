import React from 'react'
import FaqSection from './FaqSection'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import CanadaUSA from "../Courses/CanadaUSA";
import CourseSyllabus from "../Courses/CourseSyllabus";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import truckdispatchgirl from "../../../../public/images/truckdispatchgirl.webp";
import whitetruck from "../../../../public/images/whitetruck.webp";
import boylike from "../../../../public/images/boylike.webp";
import turckleft from "../../../../public/images/turckleft.webp";
import Youtubevideo from './Youtubevideo';
import CourseExtracontent from '../Courses/CourseExtracontent';
import VideoPopupCompo from './VideoPopupCompo';
const faq_data = [
    {
        q: "What does the B2B Campus safety & compliance course cover for students in Mohali?",
        a: "The course covers DOT rules, FMCSA regulations, safety documentation, carrier compliance, audit preparation, and complete practical compliance training through flexible online and offline classes in Mohali."
    },
    {
        q: "How long is the safety & compliance course at B2B Campus in Mohali?",
        a: "The program duration is around 45 days, offering flexible schedules for students. Both online and offline classes are available to support beginners and working professionals effectively."
    },
    {
        q: "Does B2B Campus provide practical training during compliance classes in Mohali?",
        a: "Yes, students receive hands-on practice with compliance tools, safety files, documentation processes, and real industry workflows in both online and offline modes for practical learning."
    },
    {
        q: "Do students need prior logistics experience to join the compliance course?",
        a: "No prior experience is required. Beginners can easily enrol as the B2B Campus course starts with fundamentals and gradually progresses to advanced compliance concepts and real-work scenarios."
    },
    {
        q: "Does B2B Campus offer placement support after course completion in Mohali?",
        a: "Yes, B2B Campus provides placement assistance, interview guidance, resume preparation, and job referrals to help students secure compliance or logistics roles successfully after training."
    },
    {
        q: "What study materials are provided in the safety & compliance course at B2B Campus?",
        a: "Students receive notes, compliance templates, software training access, practice files, and recorded class sessions to support learning in both online and offline training modes."
    },
    {
        q: "Who teaches the safety & compliance course at B2B Campus in Mohali?",
        a: "Experienced industry professionals conduct training, offering real-world compliance insights, updated regulatory knowledge, and practical guidance to prepare students for professional roles."
    },
    {
        q: "Can students shift between online and offline classes during the course?",
        a: "Yes, B2B Campus allows flexible switching between online and offline batches, enabling students to continue learning conveniently based on schedule changes or personal requirements."
    },
    {
        q: "Does the safety & compliance course cover US trucking regulations and standards?",
        a: "Yes, the curriculum includes US trucking laws, safety standards, compliance procedures, and documentation responsibilities for building a strong international compliance career foundation."
    },
    {
        q: "How can students enrol in the B2B Campus safety & compliance course in Mohali?",
        a: "Students can register online or visit the Mohali campus. Basic details, identification documents, and selected batch mode are required for completing the admission process smoothly."
    }
];
const SafetyComplianceDispatching = () => {
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
            title: "Compliance Career Opportunities in US & Canada",
            subtitle:
                "Start your career with high-demand compliance roles supporting US & Canada trucking companies."
        },
        {
            icon: "/images/usertea.webp",
            title: "Work Remotely as Compliance Executive",
            subtitle:
                "Manage safety documents, regulations, and carrier compliance from anywhere in India."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Compliance Specialist Potential",
            subtitle:
                "Earn ₹50,000–₹1,80,000+ monthly based on experience, clients, and workload."
        },
        {
            icon: "/images/digree.webp",
            title: "No Logistics Degree Needed",
            subtitle:
                "Start your career with training, compliance knowledge, and strong attention to detail."
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
            subtitle: "Work-from-Home or Abroad",
        },
        {
            icon: "/images/money.webp",
            title: "INR / USD",
            subtitle: "Flexible Salary Opportunities",
        },
    ];
    const program_data = [
        { text: "Safety & compliance fundamentals (US & Canada rules)", icon: "/images/greencheck.webp" },
        { text: "Working with carriers, drivers & compliance officers", icon: "/images/greencheck.webp" },
        { text: "Compliance tools & ELD systems – practical demo", icon: "/images/greencheck.webp" },
        { text: "Regulation understanding & violation prevention", icon: "/images/greencheck.webp" },
        { text: "DOT rules, FMCSA laws & safety documentation", icon: "/images/greencheck.webp" },
        { text: "Audits, reports & issue resolution handling", icon: "/images/greencheck.webp" },
        { text: "How to start your own compliance support service", icon: "/images/greencheck.webp" },
        { text: "Real-world compliance workflow & procedures", icon: "/images/greencheck.webp" },
        { text: "Career growth & remote compliance job guidance", icon: "/images/greencheck.webp" }
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Operations & admin staff", icon: "/images/greencheck.webp" },
        { text: "BPO/Call center workers", icon: "/images/greencheck.webp" },
        { text: "Anyone interested in compliance", icon: "/images/greencheck.webp" },
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Trusted safety & compliance training institute in Mohali",
            description:
                "Recognized institute offering practical trucking safety and compliance certification training."
        },
        {
            id: 2,
            number: 2,
            title: "Trainers with real compliance & carrier experience",
            description:
                "Learn from mentors with hands-on experience in DOT, FMCSA, and carrier compliance operations."
        },
        {
            id: 3,
            number: 3,
            title: "US & Canada regulation-focused curriculum",
            description:
                "Curriculum designed to meet real-world safety standards, audits, and compliance requirements."
        },
        {
            id: 4,
            number: 4,
            title: "Live compliance tools & documentation training",
            description:
                "Practice with real checklists, safety files, logs, and end-to-end compliance workflow tasks."
        },
        {
            id: 5,
            number: 5,
            title: "Offline classroom + Online live sessions",
            description:
                "Flexible learning options with interactive offline training and live online compliance sessions."
        },
        {
            id: 6,
            number: 6,
            title: "Job, freelancing & compliance service guidance",
            description:
                "Get career support, freelancing tips, and guidance to start your own compliance support service."
        }
    ];

    return (
        <div>
            <CoursesBanner
                highlightText={'Truck Dispatch Safety & Compliance Certification'}
                titleEnd={'in 45 Days'}
                description={"Master US & Canada Logistics • Work-from-Home • Earn in INR or USD"}
                leftposter={truckdispatchgirl}
                rightposter={whitetruck}
            />
            <CoursesCareer
                items={items}
                left_banner={boylike}
                featuresMain={featuresMain}
                title={'Why Truck Dispatch Safety & Compliance is the  <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Logistics industry in USA & Canada is booming — dispatchers are in massive demand."}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">45-Day Intensive </span> <br/> Dispatching Program'}
            />
            <AboutCourse
                title={'About Safety & Compliance Course'}
                description1={`
    The <span class="font-semibold text-black">Safety & Compliance Training </span> is a practical learning program designed to prepare you for a successful career in trucking regulations, logistics compliance, and transportation operations.`}

                description2={`
    This <span class="font-semibold text-black">compliance certification course</span> covers essential skills like <span class="text-[#6346FA] font-medium">{" "}DOT rules, FMCSA regulations, safety documentation, and compliance software tools </span>. Ideal for aspiring compliance officers or logistics professionals, the training provides real-world knowledge and industry-level insights.`}

                description3={`
    Whether you want to work with carriers or start a compliance support service, this <span class="font-semibold text-black">safety & compliance course </span>
    helps you build a strong foundation for long-term success in the transportation industry.
  `}
            />
            <Youtubevideo current_tab={'Truck Dispatching'} />
            {/* <CourseExtracontent /> */}
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            {/* <VideoPopupCompo /> */}
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
                <CanadaUSA />
            </div>

            <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'From Training to Truck <span class="text-primary"> Compliance Success </span>'}
                description={`Build a professional, efficient, and high-demand compliance career with real-world training. Learn how to manage safety records, understand regulations, and handle compliance processes like a pro. This course equips you with in-demand skills to work with carriers, logistics firms, or start your own compliance support service.`}
                right_image={turckleft}
            />
            <FaqSection faq_data={faq_data} />
            <Journeywithb2b2 />
        </div>
    );
};

export default SafetyComplianceDispatching;

