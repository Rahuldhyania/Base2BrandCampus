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
const faq_data = [
  {
    q: "What does the B2B Campus truck dispatching course cover for students in Mohali?",
    a: "The course covers load management, freight coordination, communication skills, carrier relations, software training, and complete practical dispatching knowledge through flexible online and offline classes in Mohali."
  },
  {
    q: "How long is the truck dispatching course at B2B Campus in Mohali?",
    a: "The program duration varies from two to three months, offering flexible schedules for students. Both online and offline classes are available to support beginners and working professionals effectively."
  },
  {
    q: "Does B2B Campus provide practical training during truck dispatching classes in Mohali?",
    a: "Yes, students receive hands-on practice with real load boards, dispatching tools, communication scenarios, and industry workflows in both online and offline modes for practical skill development."
  },
  {
    q: "Do students need prior logistics experience to join the truck dispatching course?",
    a: "No prior experience is required. Beginners can easily enrol as the B2B Campus course starts with fundamentals and gradually progresses to advanced dispatching concepts and real-work activities."
  },
  {
    q: "Does B2B Campus offer placement support after course completion in Mohali?",
    a: "Yes, B2B Campus provides placement assistance, interview guidance, resume preparation, and job referrals to help students secure truck dispatching or logistics roles successfully after training."
  },
  {
    q: "What study materials are provided in the truck dispatching course at B2B Campus?",
    a: "Students receive notes, dispatching templates, software training access, practice files, and recorded class sessions to support learning in both online and offline training modes."
  },
  {
    q: "Who teaches the truck dispatching course at B2B Campus in Mohali?",
    a: "Experienced industry professionals conduct training, offering real-world dispatching insights, updated market knowledge, and practical guidance to prepare students for professional dispatching careers."
  },
  {
    q: "Can students shift between online and offline classes during the course?",
    a: "Yes, B2B Campus allows flexible switching between online and offline batches, enabling students to continue learning conveniently based on schedule changes or personal requirements."
  },
  {
    q: "Does the truck dispatching course cover the US freight market and load boards?",
    a: "Yes, the curriculum includes US trucking basics, load board usage, carrier coordination, freight rates, and dispatching responsibilities for a strong international dispatching career foundation."
  },
  {
    q: "How can students enrol in the B2B Campus truck dispatching course in Mohali?",
    a: "Students can register online or visit the Mohali campus. Basic details, identification documents, and chosen batch mode are required for completing the admission process smoothly."
  }
];

const TruckDispatcher = () => {
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
      title: "Truck Dispatcher Opportunities in US & Canada",
      subtitle:
        "Kickstart your career with high demand roles in the US & Canada logistics industry."
    },
    {
      icon: "/images/usertea.webp",
      title: "Remote Dispatch Executive from India",
      subtitle:
        "Work from anywhere in India managing shipments and coordinating with international trucking companies."
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "Freelance Truck Dispatcher Potential",
      subtitle:
        "Earn ₹40,000–₹1,50,000+ per month depending on skills and workload."
    },
    {
      icon: "/images/digree.webp",
      title: "No Degree Required",
      subtitle:
        "Anyone can start — strong communication skills and proper training are enough."
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
    { text: "Truck dispatch fundamentals (US & Canada market)", icon: "/images/greencheck.webp" },
    { text: "Working with drivers, brokers & freight companies", icon: "/images/greencheck.webp" },
    { text: "Load boards (DAT, Truckstop – demo training)", icon: "/images/greencheck.webp" },
    { text: "Rate negotiation & route planning", icon: "/images/greencheck.webp" },
    { text: "Time zones, compliance & dispatch documentation", icon: "/images/greencheck.webp" },
    { text: "Billing, invoicing & problem handling", icon: "/images/greencheck.webp" },
    { text: "How to start your own truck dispatch business", icon: "/images/greencheck.webp" },
    { text: "Real-world dispatch workflow & operations", icon: "/images/greencheck.webp" },
    { text: "Career growth & work-from-home setup guidance", icon: "/images/greencheck.webp" }
  ];
  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Housewives (WFH jobs)", icon: "/images/greencheck.webp" },
    { text: "BPO/Call center workers", icon: "/images/greencheck.webp" },
    { text: "Anyone wanting international income", icon: "/images/greencheck.webp" },

  ];
  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Trusted logistics & IT training institute in Mohali",
      description: "Recognized institute offering professional truck dispatch and logistics training."
    },
    {
      id: 2,
      number: 2,
      title: "Trainers with real truck dispatch industry experience",
      description: "Learn from mentors who have hands-on experience in US & Canada freight operations."
    },
    {
      id: 3,
      number: 3,
      title: "US & Canada market-oriented curriculum",
      description: "Curriculum designed to meet real-world logistics and dispatch requirements of US & Canada markets."
    },
    {
      id: 4,
      number: 4,
      title: "Live load boards & dispatch workflow training",
      description: "Gain practical skills with real load boards and end-to-end dispatch workflow practice."
    },
    {
      id: 5,
      number: 5,
      title: "Offline classroom + Online live sessions",
      description: "Flexible learning options with interactive offline and live online sessions."
    },
    {
      id: 6,
      number: 6,
      title: "Job, freelancing & agency-setup guidance",
      description: "Get career support, freelancing tips, and guidance to start your own dispatch agency."
    }
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={'Become a Certified Truck Dispatcher'}
        titleEnd={'in 45 Days'}
        description={"Master US & Canada Logistics • Work-from-Home • Earn in INR or USD"}
        leftposter={truckdispatchgirl}
        rightposter={whitetruck}
      />
      <CoursesCareer
        items={items}
        left_banner={boylike}
        featuresMain={featuresMain}
        title={'Why Truck Dispatching is the  <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Logistics industry in USA & Canada is booming — dispatchers are in massive demand."}
      />
      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">45-Day Intensive </span> <br/> Dispatching Program'}
      />
      <AboutCourse
        title={'About Truck Dispatching Course'}
        description1={`
        The <span class="font-semibold text-black">Truck Dispatching Class </span> is a hands-on training program that prepares you for a successful career in logistics and transportation.`}
        description2={`
           This <span class="font-semibold text-black">truck dispatcher course</span> covers essential skills like <span class="text-[#6346FA] font-medium"> {" "}load booking, driver coordination, route planning, and dispatch software usage </span>. Perfect for aspiring dispatchers or entrepreneurs, the dispatching class offers real-world knowledge and industry insights.`}
        description3={`
           Whether you’re launching a dispatch service or joining a logistics company,this <span class="font-semibold text-black">truck dispatching class </span>
           helps you build a solid foundation for long-term success in the freight industry.
          `}
      />
      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />
      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
        <CanadaUSA />
      </div>
      <CourseSyllabus title={'Truck Dispatching Course<br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
      <BecomeStudent
        title={'From Training to Truck <sapn class="text-primary"> Dispatching Success </span>'}
        description={`Build a Profitable, Efficient, and High-Demand Dispatching Career with Real-World Training. Learn how to manage loads, communicate with drivers, and handle logistics like a pro. This course equips you with in-demand skills to launch a successful dispatching business or work with top freight companies.`}
        right_image={turckleft}
      />
      <FaqSection faq_data={faq_data} />
      <Journeywithb2b2 />
    </div>
  );
};

export default TruckDispatcher;
