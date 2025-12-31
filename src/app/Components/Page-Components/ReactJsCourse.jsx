import React from 'react'
import Journeywithb2b2 from './Journeywithb2b2'
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import fullstack_leftbanner from "../../../../public/images/fullstack_leftbanner.webp";
import fullstack_rightbanner from "../../../../public/images/fullstack_rightbanner.webp";
import fullstack_leftposter from "../../../../public/images/fullstack_leftposter.webp"
import CourseDetail from '../Courses/CourseDetail';
import CareerOpportunities from '../Courses/CareerOpportunities';
import CourseSyllabus from '../Courses/CourseSyllabus';
import Youtubevideo from './Youtubevideo';

const ReactJsCourse = () => {

  const Syllabus_data = [
    {
      title: "Module 1 - Introduction to Web Development & React",
      points: [
        "How modern websites work (SPA basics)",
        "React overview and real-world use cases",
        "Setting up VS Code, Node.js & npm",
        "React project setup with Vite/CRA (basics)"
      ],
    },
    {
      title: "Module 2 - JavaScript Fundamentals for React",
      points: [
        "Variables, functions, arrays, objects",
        "ES6+ (let/const, arrow functions, destructuring)",
        "Promises and async/await basics",
        "DOM basics and JS logic practice"
      ],
    },
    {
      title: "Module 3 - React Basics (Components & JSX)",
      points: [
        "JSX and component structure",
        "Props and reusable components",
        "State and events handling",
        "Rendering lists and conditional UI"
      ],
    },
    {
      title: "Module 4 - Hooks & State Management",
      points: [
        "useState, useEffect and lifecycle behavior",
        "Forms, validation and controlled components",
        "Context API basics (global state)",
        "Best practices for clean component logic"
      ],
    },
    {
      title: "Module 5 - Routing & API Integration",
      points: [
        "React Router (pages, navigation, params)",
        "REST API integration using fetch/axios",
        "Loading states, errors and pagination",
        "Auth basics (token flow overview)"
      ],
    },
    {
      title: "Module 6 - UI Styling & Responsive Design",
      points: [
        "CSS fundamentals for UI building",
        "Tailwind / Bootstrap basics (as needed)",
        "Responsive layouts and modern UI patterns",
        "Component-based styling best practices"
      ],
    },
    {
      title: "Module 7 - Advanced React Concepts",
      points: [
        "Performance basics (memo, lazy loading intro)",
        "Reusable UI components and patterns",
        "Working with tables, filters, search, modals",
        "Debugging and handling common React issues"
      ],
    },
    {
      title: "Module 8 - Projects, Testing & Deployment",
      points: [
        "Build production-ready React projects",
        "Git & GitHub workflow for teams",
        "Deploying on Vercel/Netlify",
        "Basic testing mindset and quality checks"
      ],
    },
    {
      title: "Module 9 - Career Prep & Portfolio",
      points: [
        "Portfolio projects and GitHub profile setup",
        "Resume + LinkedIn optimization for React roles",
        "Interview preparation and mock interviews",
        "Freelancing guidance and project handling tips"
      ],
    }
  ];

  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "High Demand Frontend Skill",
      subtitle:
        "React is widely used by startups and top companies for modern web applications.",
    },
    {
      icon: "/images/usertea.webp",
      title: "Remote & Freelance Friendly",
      subtitle:
        "Work with agencies and global clients by building responsive React websites and dashboards.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Career",
      subtitle:
        "Earn ₹3 LPA–₹12 LPA+ as a React Developer with strong growth opportunities.",
    },
    {
      icon: "/images/digree.webp",
      title: "Beginner-Friendly Course",
      subtitle:
        "No prior coding experience required. We teach step-by-step from basics to job-ready skills.",
    },
  ];

  const items = [
    { icon: "/images/45days.webp", title: "6 Months", subtitle: "Practical Training" },
    { icon: "/images/handmoney.webp", title: "100%", subtitle: "Career Support" },
    { icon: "/images/globeicon.webp", title: "Global Work", subtitle: "Remote / Onsite" },
    { icon: "/images/money.webp", title: "INR / USD", subtitle: "Earning Potential" },
  ];

  const program_data = [
    { text: "JavaScript (ES6+) for React", icon: "/images/greencheck.webp" },
    { text: "React Components & JSX", icon: "/images/greencheck.webp" },
    { text: "Hooks (useState, useEffect, etc.)", icon: "/images/greencheck.webp" },

    { text: "React Router & Page Navigation", icon: "/images/greencheck.webp" },
    { text: "API Integration (REST/JSON)", icon: "/images/greencheck.webp" },
    { text: "Forms, Validation & UI Patterns", icon: "/images/greencheck.webp" },

    { text: "Styling (CSS / Tailwind Basics)", icon: "/images/greencheck.webp" },
    { text: "Git & GitHub Version Control", icon: "/images/greencheck.webp" },
    { text: "Real Projects + Deployment", icon: "/images/greencheck.webp" }
  ];

  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "IT beginners", icon: "/images/greencheck.webp" },
    { text: "Designers moving to development", icon: "/images/greencheck.webp" },
    { text: "Anyone who wants to become a React Developer", icon: "/images/greencheck.webp" },
  ];

  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Expert React Trainers",
      description:
        "Learn from experienced frontend developers who build real-world React applications."
    },
    {
      id: 2,
      number: 2,
      title: "Live Project-Based Learning",
      description:
        "Practice React with live coding sessions, assignments, and production-style projects."
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Mentorship",
      description:
        "Get personal guidance, code reviews, and clear learning direction throughout the course."
    },
    {
      id: 4,
      number: 4,
      title: "Interview & Communication Training",
      description:
        "Prepare for HR + technical rounds with React interview questions and confidence sessions."
    },
    {
      id: 5,
      number: 5,
      title: "Portfolio & GitHub Support",
      description:
        "Build a strong portfolio of React projects and present them professionally on GitHub."
    },
    {
      id: 6,
      number: 6,
      title: "Internship & Live Projects",
      description:
        "Work on real tasks like dashboards, landing pages, and API-based apps to gain experience."
    },
  ];

  const course_detail = [
    "Course Duration: 6 Months",
    "Training Mode: Offline (Mohali) | Online (India)",
    "Eligibility: 12th pass, basic English & computer skills",
    "Certification: Yes (React JS Development – B2B Campus)"
  ];

  const careeropportunitie = [
    {
      id: 1,
      title: "React JS Developer",
      description:
        "Build a career as a React Developer creating modern websites, dashboards, and web applications."
    },
    {
      id: 2,
      title: "Frontend Web Developer",
      description:
        "Work as a frontend developer building responsive UI, components, and user-friendly interfaces."
    },
    {
      id: 3,
      title: "Remote React Developer",
      description:
        "Get remote opportunities with agencies and global teams by working on React-based projects."
    },
    {
      id: 4,
      title: "Freelance React Developer",
      description:
        "Start freelancing and deliver React websites, landing pages, and web apps for clients worldwide."
    }
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={'Become a React JS Developer'}
        titleEnd={'in 6 Months'}
        description={"JavaScript (ES6+) • React Hooks • APIs • Projects • Deployment"}
        leftposter={fullstack_leftbanner}
        rightposter={fullstack_rightbanner}
      />

      <CoursesCareer
        items={items}
        left_banner={fullstack_leftposter}
        featuresMain={featuresMain}
        title={'Why React JS Development is the <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Work with software companies, startups, agencies & global clients"}
      />

      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">6 Months Intensive </span> <br/> React JS Development Program'}
      />

      <AboutCourse
        title={'About React JS Course & Career Opportunities'}
        description1={`The React JS Development Course is designed to help learners build modern, fast, and scalable user interfaces using React—one of the most in-demand frontend technologies worldwide.`}
        description2={`This hands-on training covers JavaScript (ES6+), React components, hooks, routing, API integration, responsive UI building, and deployment with real projects to make students job-ready.`}
        description3={`React developers are in high demand across startups, IT companies, and digital agencies with strong opportunities for remote work, freelancing, and long-term career growth.`}
      />

      <CourseDetail course_detail={course_detail} />

      <CareerOpportunities
        careeropportunitie={careeropportunitie}
        lowerdata={true}
        lower_title1="Learn at B2B Campus, Mohali"
        lower_description1="B2B Campus provides practical React JS training with expert mentors, real projects, and career-focused guidance."
        lower_title2="Enroll with B2B Campus Today"
        lower_description2="Start your journey toward a high-growth React JS development career."
      />
      <Youtubevideo current_tab={'Development'} />
      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />

      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>

      <CourseSyllabus
        title={'React JS Development <br/> <span class="text-primary">Syllabus</span>'}
        Syllabus_data={Syllabus_data}
      />

      <BecomeStudent
        title={'Build Your Career as a <span class="text-primary">React JS Developer</span>'}
        description={`Learn to build modern React websites and web applications with practical projects. Create a strong portfolio, crack interviews, and unlock high-growth opportunities in the IT industry.`}
        right_image={fullstack_leftposter}
      />

      <Journeywithb2b2 />
    </div>
  );
};

export default ReactJsCourse;
