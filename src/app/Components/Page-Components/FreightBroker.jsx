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
import freightbroker_leftbanner from "../../../../public/images/freightbroker_leftbanner.webp";
import freightbroker_rightbanner from "../../../../public/images/freightbroker_rightbanner.webp";
import freight_leftposter from "../../../../public/images/freight_leftposter.webp"
import CourseDetail from '../Courses/CourseDetail';
import CareerOpportunities from '../Courses/CareerOpportunities';
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
const FreightBroker = () => {
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
            title: "Massive Demand in the US Market",
            subtitle:
                "Thousands of openings as the logistics sector grows across USA & Canada.",
        },
        {
            icon: "/images/usertea.webp",
            title: "Work-from-Home Opportunities",
            subtitle:
                "Support brokers from anywhere in India with remote work flexibility.",
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Potential",
            subtitle:
                "Earn ₹30,000–₹1,00,000/month or up to $2,500 with international clients.",
        },
        {
            icon: "/images/digree.webp",
            title: "No Degree Required",
            subtitle:
                "Strong communication skills + professional training are enough to start.",
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
        { text: "Freight broker fundamentals & US/Canada market overview", icon: "/images/greencheck.webp" },
        { text: "Shipper & carrier sourcing strategies", icon: "/images/greencheck.webp" },
        { text: "Load boards, freight lanes & pricing optimization", icon: "/images/greencheck.webp" },
        { text: "Rate negotiation techniques & confirmations", icon: "/images/greencheck.webp" },
        { text: "Contracts, compliance & risk management", icon: "/images/greencheck.webp" },
        { text: "Client acquisition & starting your freight brokerage business", icon: "/images/greencheck.webp" },
        { text: "Broker–Shipper–Carrier workflow & documentation", icon: "/images/greencheck.webp" },
        { text: "KPIs, daily operations & performance tracking", icon: "/images/greencheck.webp" },
        { text: "Real-world load booking & carrier management", icon: "/images/greencheck.webp" }
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Housewifes (WFH roles)", icon: "/images/greencheck.webp" },
        { text: "BPO/Call center workers", icon: "/images/greencheck.webp" },
        { text: "Anyone wanting a high-income creative career", icon: "/images/greencheck.webp" },
    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Trusted Training Institute in Mohali, Punjab",
            description:
                "Recognized institute offering quality freight broker training."
        },
        {
            id: 2,
            number: 2,
            title: "Industry-Experienced Freight & Logistics Mentors",
            description:
                "Learn from mentors with real US & Canada brokerage experience."
        },
        {
            id: 3,
            number: 3,
            title: "US & Canada Market–Focused Curriculum",
            description:
                "Curriculum tailored for US & Canada freight brokerage."
        },
        {
            id: 4,
            number: 4,
            title: "Live Load Board & Negotiation Training",
            description:
                "Hands-on training with real load boards and client negotiations."
        },
        {
            id: 5,
            number: 5,
            title: "Offline Classroom + Online Live Classes",
            description:
                "Flexible learning with offline and live online sessions."
        },
        {
            id: 6,
            number: 6,
            title: "Career Guidance, Freelancing & Business Support",
            description:
                "Expert support for career, freelancing, and business growth."
        }
    ];
    const course_detail = [
        'Course Duration: 30–45 Days',
        'Training Mode: Offline (Mohali) | Online (India)',
        'Eligibility: 12th pass, basic English & computer skills',
        'Certification: Yes (B2B Campus)'
    ];
    const careeropportunitie = [
        {
            id: 1,
            title: "Freight Broker (US & Canada Market)",
            description:
                "Build a successful career as a Freight Broker handling US & Canada logistics operations. Learn end-to-end freight brokerage processes, carrier management, rate negotiation, and real-time shipment coordination for international markets."
        },
        {
            id: 2,
            title: "Remote Freight Broker from India",
            description:
                "Work as a Remote Freight Broker from India and manage international shipments digitally. Get trained to work with US & Canadian clients, use industry-standard brokerage tools, and earn in global markets while working from home."
        },
        {
            id: 3,
            title: "Logistics Coordinator / Brokerage Executive",
            description:
                "Start your career as a Logistics Coordinator or Brokerage Executive by managing loads, tracking shipments, communicating with carriers, and ensuring smooth freight operations across domestic and international routes."
        },
        {
            id: 4,
            title: "Start Your Own Freight Brokerage Business",
            description:
                "Learn how to launch and grow your own Freight Brokerage Business. From legal setup and compliance to client acquisition, carrier onboarding, and profit scaling — get complete guidance to become an independent freight broker."
        }
    ];
    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Certified Freight Broker'}
                titleEnd={'in 45 Days'}
                description={"Master US Logistics • Broker Operations • Carrier Management • High-Income Skills"}
                leftposter={freightbroker_leftbanner}
                rightposter={freightbroker_rightbanner}
            />
            <CoursesCareer
                items={items}
                left_banner={freight_leftposter}
                featuresMain={featuresMain}
                title={'Why Freight Broker is the <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Work directly with US logistics companies, carriers, brokers & shippers"}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">45 Days Intensive </span> <br/> Freight Broker Program'}
            />
            <AboutCourse
                title={'Freight Broker Course by B2B Campus Mohali, Punjab (India)'}
                description1={`
                  Build a Global Career in US & Canada Freight Brokerage with B2B Campus.`}
                description2={`
                   B2B Campus, Mohali offers a professionally designed Freight Broker Course for students, working professionals, and entrepreneurs who want to build a successful career in the US & Canada logistics and freight brokerage industry. Our program focuses on real-world brokerage operations, not just theory, making you industry-ready from day one.`}
                description3={`
                   With expert trainers, practical tools, and live market exposure, B2B Campus prepares you to work confidently with shippers, carriers, and dispatchers, negotiate profitable freight rates, and manage complete brokerage operations.
            `}
            />
            <CourseDetail
                course_detail={course_detail}
            />
            <CareerOpportunities
                careeropportunitie={careeropportunitie}
                lowerdata={true}
                lower_title1='Learn at B2B Campus, Mohali'
                lower_description1={'Located in Mohali, Punjab, B2B Campus provides an ideal learning environment with hands-on training, personalized mentoring, and industry exposure for global logistics careers.'}
                lower_title2={'Enroll with B2B Campus Today'}
                lower_description2={'Take the first step toward a high-growth logistics career.'}
            />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
            </div>
            {/* <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} /> */}
            <BecomeStudent
                title={'Launch Your Career as a Certified ​<sapn class="text-primary">Freight Broker with Expert Training </span>'}
                description={`Build a Successful, Profitable Freight Brokerage Business with Expert Guidance. Learn to connect shippers and carriers, manage logistics efficiently, and unlock high-income opportunities in the growing transportation industry.`}
                right_image={freight_leftposter}
            />
            {/* <FaqSection faq_data={faq_data} /> */}
            <Journeywithb2b2 />
        </div>
    );
};

export default FreightBroker;

