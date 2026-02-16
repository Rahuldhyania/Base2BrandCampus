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
import truckdispatchgirl from "../../../../public/images/webdev_leftbanner.webp";
import whitetruck from "../../../../public/images/whitetruck.webp";
import boylike from "../../../../public/images/boylike.webp";
import turckleft from "../../../../public/images/turckleft.webp";
import Youtubevideo from './Youtubevideo';
import CourseExtracontent from '../Courses/CourseExtracontent';
import VideoPopupCompo from './VideoPopupCompo';
const faq_data = [
  {
    q: "What does the truck dispatcher course cover for students interested in Canadian logistics?",
    a: "The course teaches load management, driver coordination, route planning, dispatch software, compliance, and real-world Canadian freight operations."
  },
  {
    q: "Does the course provide practical training during truck dispatching classes for Canada-focused learners?",
    a: "Yes, students practice with live Canadian load boards, dispatch workflows, and real-time operations for hands-on learning."
  },
  {
    q: "Does the course offer placement support after completion for Canadian logistics careers?",
    a: "Yes, career guidance, freelancing opportunities, and placement assistance with top Canadian freight companies are provided."
  },
  {
    q: "Who teaches the truck dispatcher course for Canada-focused students?",
    a: "Experienced trainers with hands-on Canadian freight and logistics industry knowledge conduct all sessions and mentorship."
  },
  {
    q: "Does the course cover the Canadian freight market and load boards?",
    a: "Yes, it includes Canadian freight market practices, popular load boards, rate negotiation, and route planning strategies."
  },
  {
    q: "How long is the truck dispatcher course for Canada-focused learners?",
    a: "The course duration is designed to give practical training and theoretical knowledge over several weeks."
  },
  {
    q: "Do students need prior logistics experience to join the truck dispatcher course?",
    a: "No experience is required; anyone with strong communication skills and willingness to learn can join."
  },
  {
    q: "What study materials are provided in the truck dispatcher course for Canada?",
    a: "Students receive guides, templates, software demos, real load board examples, and workflow documentation for practice."
  },
  {
    q: "Can students shift between online and offline classes during the course?",
    a: "Yes, the course offers flexible learning, allowing seamless transition between interactive online and offline classroom sessions."
  },
  {
    q: "How can students enrol in the truck dispatcher course for Canada?",
    a: "Interested learners can register online, via phone, or through official course inquiry forms provided by the institute."
  }
];



const TruckDispatcherCanada = () => {
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
            title: "Truck Dispatcher Opportunities in Canada",
            subtitle:
                "Start your career in a high-growth role within Canada’s expanding logistics and transportation industry."
        },
        {
            icon: "/images/usertea.webp",
            title: "Remote Dispatch Executive from India",
            subtitle:
                "Handle Canadian freight operations remotely from anywhere in India while coordinating with trucking companies across Canada."
        },
        {
            icon: "/images/moneyhigh.webp",
            title: "Freelance Truck Dispatcher Potential",
            subtitle:
                "Earn ₹40,000–₹1,50,000+ per month based on your expertise, client base, and workload."
        },
        {
            icon: "/images/digree.webp",
            title: "No Degree Required",
            subtitle:
                "This career is open to all — clear communication skills and professional dispatch training are all you need to begin."
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
            text: "Truck dispatch fundamentals focused on the Canadian logistics market",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Working with drivers, brokers, and freight companies across Canada",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Load boards (Canadian-focused boards with live demos)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Rate negotiation and route planning within Canada",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Time zones, compliance requirements, and dispatch documentation (Canada)",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Billing, invoicing, and issue resolution for Canadian freight operations",
            icon: "/images/greencheck.webp"
        },
        {
            text: "How to start your own truck dispatch business in Canada",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Real-world dispatch workflows and daily operations",
            icon: "/images/greencheck.webp"
        },
        {
            text: "Career growth and work-from-home setup guidance",
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
                "A reputed institute delivering professional dispatch and logistics education aligned with Canadian industry standards."
        },
        {
            id: 2,
            number: 2,
            title: "Trainers with real truck dispatch industry experience",
            description:
                "Learn from experts with hands-on experience in Canadian freight operations and practical dispatch management."
        },
        {
            id: 3,
            number: 3,
            title: "Canada-focused market-oriented curriculum",
            description:
                "Curriculum designed to match real-world logistics and dispatch requirements of the Canadian market, as covered in the Truck Dispatcher Course Canada."
        },
        {
            id: 4,
            number: 4,
            title: "Live load boards & dispatch workflow training",
            description:
                "Build practical skills using real load boards and complete dispatch workflows taught through the Truck Dispatcher Course Canada."
        },
        {
            id: 5,
            number: 5,
            title: "Offline classroom + online live sessions",
            description:
                "Flexible learning formats with interactive classroom training and live online sessions."
        },
        {
            id: 6,
            number: 6,
            title: "Job, freelancing & agency-setup guidance",
            description:
                "Receive career assistance, freelancing insights, and step-by-step support to start your own dispatch agency in Canada."
        }
    ];
    
    return (
        <div>
            <CoursesBanner
                highlightText={'Become a Certified Truck Dispatcher'}
                titleEnd={'in 45 Days'}
                description={"Master Canada Logistics • Work-from-Home • Earn in INR or USD"}
                leftposter={truckdispatchgirl}
                rightposter={whitetruck}
                showVideoPopupOnSubmit={true}
            />
            <CoursesCareer
                items={items}
                left_banner={boylike}
                featuresMain={featuresMain}
                title={'Why Truck Dispatching is the  <br/> <span class="text-primary"> Next Big Career</span>'}
                description={"The logistics industry in Canada is rapidly expanding and skilled truck dispatchers are in high demand nationwide."}
            />
            <CourseProgram
                program_data={program_data}
                title={'<span class="text-primary">45-Day Intensive </span> <br/> Dispatching Program'}
            />
            <AboutCourse
                title={'About Truck Dispatching Course (Canada)'}
                description1={`The Truck Dispatcher Course Canada is a practical, industry-focused training program designed to prepare you for a rewarding career in Canada’s transportation and logistics sector. The course emphasizes hands-on learning to help you understand real dispatch operations from day one.`}
                description2={`This truck dispatcher course Canada covers core skills such as load booking, driver coordination, route planning, compliance basics, and effective use of dispatch software. It is ideal for beginners looking to enter dispatching as well as entrepreneurs planning to start their own dispatch service in the Canadian market.`}
                description3={`Whether your goal is to build an independent dispatch business or secure a role with a logistics company, this training equips you with strong fundamentals, real-world insights, and the confidence needed for long-term success in Canada’s freight industry.`}
            />
            <Youtubevideo current_tab={'Truck Dispatching'} />
            <CourseExtracontent />
            <CourseCareerSupport />
            <WhyChoose featuresNumbered={featuresNumbered} />
            <VideoPopupCompo />
            <div className="main-bg">
                <CanJoin conjoin_data={conjoin_data} />
                {/* <CanadaUSA /> */}
            </div>

            <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
            <BecomeStudent
                title={'From Training to Truck Dispatching  <sapn class="text-primary"> Success in Canada </span>'}
                description={`Build a profitable, efficient, and high-demand dispatching career with hands-on, real-world training. Learn to manage loads, coordinate with drivers, and handle Canadian logistics like a pro. This course equips you with the in-demand skills needed to start your own dispatching business or secure a role with leading freight companies across Canada.`}
                right_image={turckleft}
            />
            <FaqSection faq_data={faq_data} description={'Clear answers, so you feel confident before joining.'} />
            <Journeywithb2b2 />
        </div>
    );
};

export default TruckDispatcherCanada;


