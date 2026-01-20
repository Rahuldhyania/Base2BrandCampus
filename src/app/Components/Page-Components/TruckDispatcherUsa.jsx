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
import truckdispatchgirl from "../../../../public/images/digital_leftbanner.webp";
import whitetruck from "../../../../public/images/whitetruck.webp";
import boylike from "../../../../public/images/boylike.webp";
import turckleft from "../../../../public/images/turckleft.webp";
import Youtubevideo from './Youtubevideo';
import CourseExtracontent from '../Courses/CourseExtracontent';
const faq_data = [
  {
    q: "What does the Truck Dispatcher Course USA cover for students interested in U.S. logistics?",
    a: "The course teaches essential skills including load management, driver coordination, route planning, dispatch software, compliance, and real-world U.S. freight operations. Students gain practical knowledge tailored to the American trucking industry."
  },
  {
    q: "Does the course offer hands-on training for U.S.-focused truck dispatching?",
    a: "Yes, learners work with live U.S. load boards, practice full dispatch workflows, and handle real-time operations, ensuring they’re job-ready from day one."
  },
  {
    q: "Is career and placement support provided after completing the Truck Dispatcher Course USA?",
    a: "Absolutely. Students receive career guidance, freelancing tips, and placement assistance with top U.S. freight and logistics companies."
  },
  {
    q: "Who teaches the Truck Dispatcher Course USA?",
    a: "All sessions are led by experienced trainers with hands-on knowledge of U.S. freight operations, dispatch management, and industry best practices."
  },
  {
    q: "Does the course cover U.S. freight markets and load boards?",
    a: "Yes, it includes detailed training on U.S. freight market trends, popular load boards, rate negotiation, route optimization, and strategies to succeed in the American logistics sector."
  },
  {
    q: "How long is the Truck Dispatcher Course USA?",
    a: "The course is structured to provide a comprehensive mix of practical training and theoretical knowledge over several weeks, ensuring students gain real-world dispatching skills."
  },
  {
    q: "Do students need prior logistics experience to join the Truck Dispatcher Course USA?",
    a: "No prior experience is needed. Anyone with strong communication skills and a willingness to learn can enroll and succeed in U.S. truck dispatching."
  },
  {
    q: "What study materials are provided in the Truck Dispatcher Course USA?",
    a: "Students receive detailed guides, templates, software demonstrations, live U.S. load board examples, and workflow documentation to practice real dispatch operations."
  },
  {
    q: "Can students switch between online and offline classes during the course?",
    a: "Yes, the course offers flexible learning options, allowing seamless transitions between interactive online sessions and in-person classroom training."
  },
  {
    q: "How can students enroll in the Truck Dispatcher Course USA?",
    a: "Interested learners can register easily online, via phone, or through the official inquiry forms provided by the institute."
  }
];


const TruckDispatcherUsa = () => {
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
            title: "Truck Dispatcher Opportunities in the USA",
            subtitle:
                "Build your career in a high-demand role within the fast-growing U.S. logistics and transportation industry."
        },
        {
            icon: "/images/usertea.webp",
            title: "Remote Dispatch Executive from India",
            subtitle:
                "Manage U.S. freight operations remotely from anywhere in India while coordinating with trucking companies across the United States."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "Freelance Truck Dispatcher Potential",
            subtitle:
                "Earn ₹40,000–₹1,50,000+ per month depending on your skills, client network, and volume of dispatch work."
        },
        {
            icon: "/images/digree.webp",
            title: "No Degree Required",
            subtitle:
                "Open to everyone — strong communication skills and professional truck dispatch training are all you need to get started."
        }
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
        {
            text: "Truck dispatching fundamentals focused on the U.S. logistics market",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Working with drivers, brokers, and freight companies across the United States",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Load boards (U.S.-focused platforms with live demos)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Rate negotiation and route planning within the USA",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Time zones, compliance requirements, and dispatch documentation (U.S.)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Billing, invoicing, and issue resolution for U.S. freight operations",
            icon: "/images/greencheck.webp"
        },
        {
            text: "How to start your own truck dispatch business in the United States",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Real-world dispatch workflows and day-to-day operations",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Career growth strategies and work-from-home setup guidance",
            icon: "/images/greencheck.webp"
        }
    ];
    const conjoin_data = [
        { text: "Students & freshers", icon: "/images/greencheck.webp" },
        { text: "Career switchers", icon: "/images/greencheck.webp" },
        { text: "Stay-at-home professionals (WFH roles)", icon: "/images/greencheck.webp" },
        { text: "BPO / Call center professionals", icon: "/images/greencheck.webp" },
        { text: "Anyone seeking international income opportunities", icon: "/images/greencheck.webp" },

    ];
    const featuresNumbered = [
        {
            id: 1,
            number: 1,
            title: "Trusted logistics & IT training institute in Mohali",
            description:
                "A well-established institute delivering professional dispatch and logistics education aligned with U.S. industry requirements and standards."
        },
        {
            id: 2,
            number: 2,
            title: "Trainers with real truck dispatch industry experience",
            description:
                "Learn from professionals with hands-on experience in U.S. freight operations and practical dispatch management."
        },
        {
            id: 3,
            number: 3,
            title: "USA-focused, market-driven curriculum",
            description:
                "A curriculum designed to meet real-world logistics and dispatch demands of the U.S. market, as covered in the Truck Dispatcher Course USA."
        },
        {
            id: 4,
            number: 4,
            title: "Live load boards & real dispatch workflow training",
            description:
                "Develop practical skills using active load boards and complete dispatch workflows taught through the Truck Dispatcher Course USA."
        },
        {
            id: 5,
            number: 5,
            title: "Offline classroom + online live sessions",
            description:
                "Flexible learning options with interactive in-person classes and instructor-led live online sessions."
        },
        {
            id: 6,
            number: 6,
            title: "Job, freelancing & agency-setup guidance",
            description:
                "Get career support, freelancing strategies, and step-by-step assistance to start your own dispatch agency in the U.S. after completing the Truck Dispatcher Course USA."
        }
    ];


    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Certified Truck Dispatcher'}
                titleEnd={'in 45 Days'}
                description={"Master USA Logistics • Work-from-Home • Earn in INR or USD"}
                leftposter={truckdispatchgirl}
                rightposter={whitetruck}
            />
            <CoursesCareer
                items={items}
                left_banner={boylike}
                featuresMain={featuresMain}
                title={'Why Truck Dispatching is the  <br/> <span class="text-primary"> Next Big Career in the USA</span>'}
                description={"The logistics and transportation industry in the United States is growing at a rapid pace, creating strong demand for skilled truck dispatchers across the country."}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">45-Day Intensive </span> <br/> Truck Dispatching Program'}
            />
            <AboutCourse
                title={'About Truck Dispatching Course (USA)'}
                description1={`The Truck Dispatcher Course USA is a practical, industry-driven training program designed to prepare you for a successful career in the United States transportation and logistics industry. This course focuses on hands-on learning, allowing you to understand real-world dispatch operations from the very beginning.`}
                description2={`This Truck dispatcher course USA covers essential skills such as load booking, driver coordination, route planning, basic compliance requirements, and the effective use of dispatch software commonly used in the U.S. freight market. It is well suited for beginners entering the dispatching field, as well as aspiring entrepreneurs planning to launch their own dispatch services in the U.S.`}
                description3={`Whether you aim to build an independent dispatch business or secure a position with a trucking or logistics company, the Truck dispatcher course USA provides strong fundamentals, practical insights, and the confidence needed for long-term success in the U.S. freight and transportation industry.`}
            />
            <Youtubevideo current_tab={'Truck Dispatching'} />
            {/* <CourseExtracontent /> */}
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
                <CanadaUSA />
            </div>

            <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'From Training to Truck Dispatching  <sapn class="text-primary"> Success in the USA </span>'}
                description={`Launch a profitable and in-demand career in truck dispatching with practical, real-world training. Learn to manage freight loads, coordinate with drivers, and handle U.S. logistics operations like a professional. The Truck Dispatcher Course USA equips you with the essential skills to start your own dispatch business or secure a role with leading freight and trucking companies across the United States.`}
                right_image={turckleft}
            />
            <FaqSection faq_data={faq_data} description={'Get clear answers so you can confidently start your journey in U.S. truck dispatching.'} />
            <Journeywithb2b2 />
        </div>
    );
};

export default TruckDispatcherUsa;

