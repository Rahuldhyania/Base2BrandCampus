import React from 'react'
import FaqSection from './FaqSection'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import ai_leftbanner from "../../../../public/images/ai_leftbanner.webp";
import ai_rightbanner from "../../../../public/images/ai_rightbanner.webp";
import ai_leftposter from "../../../../public/images/ai_leftposter.webp"
import CourseSyllabus from '../Courses/CourseSyllabus';
import Journeywithb2b2 from './Journeywithb2b2';
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
const AiCourse = () => {
  const Syllabus_data = [
    {
      title: "Module 1 - Introduction to AI & ML",
      points: [
        "What is AI and Machine Learning?",
        "Real-world AI use cases across industries",
        "AI career roles & opportunities",
        "Course overview & learning roadmap",
      ],
    },
    {
      title: "Module 2 - AI Tools Overview (ChatGPT, Gemini & Claude)",
      points: [
        "How AI tools work (basics)",
        "Using ChatGPT, Gemini & Claude effectively",
        "Best practices & limitations",
        "Work-ready AI workflows introduction",
      ],
    },
    {
      title: "Module 3 - Prompt Writing Basics",
      points: [
        "Prompt structure & frameworks",
        "Better outputs with context, roles & constraints",
        "Prompting for tasks (email, docs, research, planning)",
        "Prompt templates for daily work",
      ],
    },
    {
      title: "Module 4 - AI Content Creation",
      points: [
        "AI for content ideas & outlines",
        "Writing blogs, ads, captions & scripts with AI",
        "Brand tone, consistency & rewriting",
        "AI content QA + plagiarism/safety basics",
      ],
    },
    {
      title: "Module 5 - AI for Business & Marketing",
      points: [
        "AI for lead generation & customer support",
        "AI for marketing campaigns & strategy",
        "AI for sales scripts, proposals & reporting",
        "Using AI to improve productivity & decisions",
      ],
    },
    {
      title: "Module 6 - Automation Tools (Zapier, Make)",
      points: [
        "Automation fundamentals (triggers, actions, workflows)",
        "Zapier basics with real examples",
        "Make (Integromat) basics with real scenarios",
        "Building smart automations for business tasks",
      ],
    },
    {
      title: "Module 7 - Build AI Chatbots",
      points: [
        "Chatbot basics & use cases",
        "Creating chatbots for support/lead capture",
        "Connecting chatbots with forms/sheets/CRM",
        "Testing, improving & deploying chatbots",
      ],
    },
    {
      title: "Module 8 - ML Basics + Data Handling",
      points: [
        "ML basics (datasets, training, prediction concept)",
        "Data handling fundamentals (cleaning, formatting)",
        "Working with spreadsheets/CSV data",
        "Simple dashboards & reporting basics",
      ],
    },
    {
      title: "Module 9 - Portfolio, Case Studies & Internship",
      points: [
        "Build real AI + automation mini projects",
        "Portfolio & case study support",
        "Client communication & presentation skills",
        "Guaranteed internship & career guidance",
      ],
    },
  ];

  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "Rapidly Growing Global Demand",
      subtitle:
        "AI is used in IT, marketing, automation, healthcare, customer support & more.",
    },
    {
      icon: "/images/usertea.webp",
      title: "WFH / Hybrid Opportunities",
      subtitle:
        "AI tools and automation workflows allow fully remote work.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Growth Options",
      subtitle:
        "Earn ₹25,000–₹1,20,000/month through jobs, freelance & AI support roles.",
    },
    {
      icon: "/images/digree.webp",
      title: "No Coding Background Needed",
      subtitle:
        "Start with no-code AI tools; coding basics are included for growth.",
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
    { text: "Intro to AI & ML", icon: "/images/greencheck.webp" },
    { text: "Using ChatGPT, Gemini & Claude", icon: "/images/greencheck.webp" },
    { text: "AI for Business & Marketing", icon: "/images/greencheck.webp" },

    { text: "Prompt Writing Basics", icon: "/images/greencheck.webp" },
    { text: "Automation Tools (Zapier, Make)", icon: "/images/greencheck.webp" },
    { text: "ML Basics", icon: "/images/greencheck.webp" },

    { text: "AI Content Creation", icon: "/images/greencheck.webp" },
    { text: "Build AI Chatbots", icon: "/images/greencheck.webp" },
    { text: "Data Handling", icon: "/images/greencheck.webp" },
  ];

  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Business owners", icon: "/images/greencheck.webp" },
    { text: "Freelancers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Anyone wanting future-proof skills", icon: "/images/greencheck.webp" },
  ];
  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "AI Experts & Automation Mentors",
      description:
        "Learn from specialists who use AI in real company workflows and automation systems.",
    },
    {
      id: 2,
      number: 2,
      title: "Live AI Project Training",
      description:
        "Build chatbots, automation flows, and AI-powered tools hands-on.",
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Personal Mentorship",
      description:
        "Get guidance on prompts, AI projects, and smart workflow building.",
    },
    {
      id: 4,
      number: 4,
      title: "Communication & Client Skills Boost",
      description:
        "Learn to present AI solutions professionally and handle client needs.",
    },
    {
      id: 5,
      number: 5,
      title: "Portfolio & Case Study Support",
      description:
        "Graduate with practical AI projects and real-world case studies.",
    },
    {
      id: 6,
      number: 6,
      title: "Guaranteed Internship",
      description:
        "Work on real AI & automation tasks after course completion.",
    },
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={'Become an AI & ML Expert'}
        titleEnd={'in 3 Months'}
        description={"Master AI Tools • Prompt Engineering • Automation • ML Basics • Real Projects"}
        leftposter={ai_leftbanner}
        rightposter={ai_rightbanner}
      />
      <CoursesCareer
        items={items}
        left_banner={ai_leftposter}
        featuresMain={featuresMain}
        title={'Why AI is the <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Work with tech companies, startups, agencies & international clients."}
        max_width={'max-w-[75%]'}
      />
      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">3 Months Intensive </span> <br/> AI & Automation Program'}
      />
      <AboutCourse
        title={'About the AI Course & Global Career Opportunities'}
        description1={` The AI Course & Certification program is designed to help learners understand Artificial Intelligence concepts and apply AI tools to solve real-world business and automation problems.`}
        description2={`This hands-on course covers AI fundamentals, prompt engineering, AI tools like ChatGPT, automation workflows, chatbot building, and data handling—making learners job-ready without a coding background.`}
        description3={`With AI rapidly transforming industries worldwide, the demand for AI professionals is growing across IT, marketing, automation, healthcare, and customer support—creating strong global career opportunities.`}
      />

      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />
      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>
      <CourseSyllabus title={'Internet of Things (IoT) <br/> <span class="text-primary"> Syllabus</span>'} Syllabus_data={Syllabus_data} />
      <BecomeStudent
        title={'AI Courses & Certifications to  ​<sapn class="text-primary"> Build Future-Ready Skills </span>'}
        description={`Learn how Artificial Intelligence is transforming businesses through automation, smart decision-making, and AI-powered tools. Get hands-on experience with ChatGPT, Gemini, Claude, prompt engineering, AI automation, chatbots, and data handling to become job-ready—without a coding background.`}
        right_image={ai_leftposter}
      />
      {/* <FaqSection faq_data={faq_data} /> */}
      <Journeywithb2b2 PlacedStudent={true} />
    </div>
  );
};

export default AiCourse;



