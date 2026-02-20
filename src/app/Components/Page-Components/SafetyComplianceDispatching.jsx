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
    q: "What is the Safety & Compliance course about?",
    a: "It trains you to manage DOT regulations, FMCSA compliance, ELD logs, audits, and trucking safety documentation for US & Canada carriers."
  },
  {
    q: "Who can join this course?",
    a: "Anyone with basic computer knowledge and good communication skills can enroll. No specific degree is required."
  },
  {
    q: "Is prior dispatch experience required?",
    a: "No, the course starts from fundamentals and gradually covers advanced compliance and safety operations."
  },
  {
    q: "What is the course duration?",
    a: "The program is a 45-day intensive training with practical, real-world compliance workflow sessions."
  },
  {
    q: "Will I learn about ELD and HOS rules?",
    a: "Yes, detailed training on ELD monitoring and Hours of Service (HOS) management is included."
  },
  {
    q: "Are DOT and FMCSA regulations covered?",
    a: "Yes, the curriculum is fully focused on US & Canada DOT and FMCSA compliance requirements."
  },
  {
    q: "Can I work from home after this course?",
    a: "Yes, many safety & compliance roles allow remote work with international trucking companies."
  },
  {
    q: "What job roles can I apply for?",
    a: "You can apply for Safety Executive, Compliance Officer, DQF Coordinator, or CSA Score Specialist roles."
  },
  {
    q: "Is there practical training included?",
    a: "Yes, the course includes hands-on documentation, audit preparation, and compliance workflow practice."
  },
  {
    q: "Can I start my own compliance service business?",
    a: "Yes, the training also guides you on setting up your own safety & compliance service agency."
  }
];
const SafetyComplianceDispatching = () => {
   const Syllabus_data = [
  {
    title: "Module 1 - Compliance Foundations",
    points: [
      "Introduction to Safety & Compliance",
      "FMCSA Overview",
      "Safety Rating System",
      "BASIC Score (CSA)",
      "Dispatcher Legal Boundaries",
    ],
  },
  {
    title: "Module 2 - Driver Compliance",
    points: [
      "CDL & Driver Qualification File",
      "Hours of Service (HOS) Deep Dive",
      "ELD Compliance",
      "Drug & Alcohol Clearinghouse",
      "Medical & Driver Fitness",
    ],
  },
  {
    title: "Module 3 - Vehicle & Equipment Compliance",
    points: [
      "Vehicle Inspection",
      "Preventive Maintenance",
      "Weight & Cargo Securement",
      "Reefer & Hazmat Safety Basics",
      "Roadside Inspections",
    ],
  },
  {
    title: "Module 4 - Insurance & Documentation",
    points: [
      "Insurance Types",
      "COI & Broker Pack Compliance",
      "Accident Reporting",
      "Safety Audit Preparation",
      "Record Keeping",
    ],
  },
  {
    title: "Module 5 - Risk Management & Dispatcher Protection",
    points: [
      "Double Brokering Prevention",
      "Fraud & Load Scam Safety",
      "Detention, Layover & Legal Claims",
      "Dispatcher Contract Protection",
      "Communication for Safety",
    ],
  },
  {
    title: "Module 6 - Practical Safety Dispatch Training",
    points: [
      "HOS Planning Exercises",
      "Compliance-based Load Planning",
      "Safety Violation Case Studies",
      "Audit Simulation",
      "Accident Response Role Play",
      "Insurance Claim Practice",
    ],
  },
  {
    title: "Module 7 - Advanced Compliance & Final Assessment",
    points: [
      "Safety Score Improvement Strategy",
      "Working with Safety Managers",
      "Carrier Onboarding Compliance Checklist",
      "Multi-truck Fleet Compliance Monitoring",
      "Real Dispatch Violation Case Studies",
      "Final Assessment & Certification",
    ],
  },
];
    const featuresMain = [
        {
            icon: "/images/globe2.webp",
            title: "Safety & Compliance Career Opportunities in US & Canada",
            subtitle:
                "Build a high-demand career ensuring trucking companies meet DOT and FMCSA regulations while managing audits, documentation, and safety standards."
        },
        {
            icon: "/images/usertea.webp",
            title: "Remote Compliance Executive from India",
            subtitle:
                "Work from anywhere in India handling ELD monitoring, driver logs, safety reports, and regulatory documentation for international trucking companies."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "High-Income Compliance Specialist Potential",
            subtitle:
                "Earn ₹40,000–₹1,80,000+ per month depending on expertise in safety audits, risk management, and compliance coordination."
        },
        {
            icon: "/images/digree.webp",
            title: "No Degree Required",
            subtitle:
                "Anyone can start, strong attention to detail, communication skills, and professional compliance training are enough to launch your career."
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
        { text: " Trucking safety fundamentals (US & Canada regulations overview)", icon: "/images/greencheck.webp" },
        { text: "DOT & FMCSA compliance requirements step-by-step", icon: "/images/greencheck.webp" },
        { text: "ELD monitoring & Hours of Service (HOS) management", icon: "/images/greencheck.webp" },
        { text: "Driver qualification files (DQF) & documentation handling", icon: "/images/greencheck.webp" },
        { text: "IFTA basics, permits & safety audit preparation", icon: "/images/greencheck.webp" },
        { text: "Accident reporting, risk management & violation handling", icon: "/images/greencheck.webp" },
        { text: "Safety score management (CSA scores) & inspection readiness", icon: "/images/greencheck.webp" },
        { text: "Compliance documentation, record keeping & reporting systems", icon: "/images/greencheck.webp" },
        { text: "How to offer safety & compliance services to trucking companies", icon: "/images/greencheck.webp" }
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
    title: "Trusted logistics & compliance training institute in Mohali",
    description:
      "Recognized institute offering professional Safety & Compliance training for the US & Canada trucking industry."
  },
  {
    id: 2,
    number: 2,
    title: "Trainers with real industry experience",
    description:
      "Learn from mentors who have hands-on experience in DOT regulations, FMCSA compliance, audits, and fleet safety operations."
  },
  {
    id: 3,
    number: 3,
    title: "US & Canada regulation-focused curriculum",
    description:
      "Curriculum designed according to real-world safety standards, compliance requirements, and audit systems followed in US & Canada markets."
  },
  {
    id: 4,
    number: 4,
    title: "Practical documentation & audit workflow training",
    description:
      "Gain hands-on experience with ELD monitoring, HOS management, DQ files, CSA scores, and end-to-end compliance processes."
  },
  {
    id: 5,
    number: 5,
    title: "Offline classroom + Online live sessions",
    description:
      "Flexible learning options with interactive offline classes in Mohali and live online training sessions."
  },
  {
    id: 6,
    number: 6,
    title: "Job, freelancing & compliance agency setup guidance",
    description:
      "Get complete career support, remote job guidance, and step-by-step assistance to start your own safety & compliance service agency."
  }
];

    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Certified Safety & Compliance Specialist in Truck Dispatching'}
                titleEnd={'in 45 Days'}
                description={"Learn DOT Compliance • FMCSA Regulations • Safety Audits •"}
                leftposter={truckdispatchgirl}
                rightposter={whitetruck}
            />
            <CoursesCareer
                items={items}
                left_banner={boylike}
                featuresMain={featuresMain}
                title={'Why Safety & Compliance in Truck Dispatching is the <br/> <span class="text-primary">Next Big Career</span>'}
                description={"Transportation industry in the USA & Canada is strictly regulated, safety and compliance specialists are in massive demand."}
                course_brocher={false}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">45-Day Intensive </span> <br/> Safety & Compliance Program for Truck Dispatching'}
            />
            <AboutCourse
            title={'About Safety & Compliance Course for Truck Dispatching'}
            description1={`
    The <span class="font-semibold text-black">Safety & Compliance Course for Truck Dispatching</span> is a practical, industry-focused training program designed to prepare you for a high-demand role in the US and Canada trucking industry.
  `}
  description2={`
    This course equips you with the knowledge required to manage <span class="font-semibold text-black">safety regulations, compliance systems, and operational risk</span> in transportation businesses.
  `}
  description3={`
    This <span class="font-semibold text-black">compliance training</span> covers essential areas such as <span class="font-semibold text-black">DOT & FMCSA regulations</span>, <span class="font-semibold text-black">Hours of Service (HOS) rules</span>, <span class="font-semibold text-black">ELD monitoring</span>, <span class="font-semibold text-black">Driver Qualification Files (DQF)</span>, <span class="font-semibold text-black">safety audits</span>, <span class="font-semibold text-black">CSA score management</span>, and regulatory documentation. 
    It is ideal for individuals who want to work as <span class="font-semibold text-black">safety executives</span>, <span class="font-semibold text-black">compliance coordinators</span>, or <span class="font-semibold text-black">independent compliance consultants</span> for trucking companies.
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
                title={'From Training to Safety & <span class="text-primary"> Compliance Success </span>'}
                description={`Build a Stable, High-Demand Career in Trucking Safety & Compliance with practical, real-world training. Learn how to manage DOT regulations, monitor ELD logs, maintain driver qualification files, and handle safety documentation like a professional. This course equips you with in-demand compliance skills to work with US & Canada trucking companies or launch your own safety & compliance service business.`}
                right_image={turckleft}
            />
            <FaqSection faq_data={faq_data} />
            <Journeywithb2b2 />
        </div>
    );
};

export default SafetyComplianceDispatching;

