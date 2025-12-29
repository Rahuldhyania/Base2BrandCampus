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

const ReactNative = () => {

  const Syllabus_data = [
    {
      title: "Module 1 - Introduction to React Native & Mobile Apps",
      points: [
        "What is React Native and how it works",
        "React Native vs Native Android/iOS",
        "Mobile app architecture overview",
        "Environment setup (Node, Expo / CLI)"
      ],
    },
    {
      title: "Module 2 - JavaScript Fundamentals for React Native",
      points: [
        "JavaScript basics & ES6+ concepts",
        "Functions, arrays, objects",
        "Async/await and promises",
        "JS logic for mobile apps"
      ],
    },
    {
      title: "Module 3 - React Native Components & UI",
      points: [
        "Core components (View, Text, Image, ScrollView)",
        "Flexbox layout for mobile UI",
        "Styling & responsive design",
        "Building reusable UI components"
      ],
    },
    {
      title: "Module 4 - Navigation & State Management",
      points: [
        "Stack & tab navigation",
        "Handling screens and routes",
        "State management basics",
        "Forms and user input handling"
      ],
    },
    {
      title: "Module 5 - API Integration & Backend Connectivity",
      points: [
        "REST APIs & JSON data",
        "Fetching data with axios/fetch",
        "Authentication flow basics",
        "Handling loading & error states"
      ],
    },
    {
      title: "Module 6 - Firebase & Device Features",
      points: [
        "Firebase setup & authentication",
        "Firestore / database basics",
        "Push notifications overview",
        "Accessing device features (camera, storage)"
      ],
    },
    {
      title: "Module 7 - App Optimization & Debugging",
      points: [
        "Debugging React Native apps",
        "Performance optimization basics",
        "Handling crashes & errors",
        "Best practices for production apps"
      ],
    },
    {
      title: "Module 8 - App Build & Deployment",
      points: [
        "Building Android & iOS apps",
        "APK / AAB build process",
        "Play Store & App Store overview",
        "Versioning & release management"
      ],
    },
    {
      title: "Module 9 - Projects & Career Preparation",
      points: [
        "Real-world React Native app project",
        "Portfolio & GitHub setup",
        "Interview preparation & mock interviews",
        "Freelancing & job guidance"
      ],
    }
  ];

  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "High Demand Mobile Skill",
      subtitle:
        "React Native is widely used to build fast Android & iOS apps using one codebase.",
    },
    {
      icon: "/images/usertea.webp",
      title: "Remote & Freelance Friendly",
      subtitle:
        "Work with startups and global clients on mobile app projects from anywhere.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Career",
      subtitle:
        "Earn ₹3 LPA–₹10 LPA+ or freelance globally as a React Native Developer.",
    },
    {
      icon: "/images/digree.webp",
      title: "Beginner-Friendly Course",
      subtitle:
        "No prior mobile app experience required. We teach from basics step-by-step.",
    },
  ];

  const items = [
    { icon: "/images/45days.webp", title: "3 Months", subtitle: "Practical Training" },
    { icon: "/images/handmoney.webp", title: "100%", subtitle: "Career Support" },
    { icon: "/images/globeicon.webp", title: "Global Work", subtitle: "Remote / Onsite" },
    { icon: "/images/money.webp", title: "INR / USD", subtitle: "Earning Potential" },
  ];

  const program_data = [
    { text: "JavaScript (ES6+) for Mobile Apps", icon: "/images/greencheck.webp" },
    { text: "React Native Core Components", icon: "/images/greencheck.webp" },
    { text: "Navigation & Screen Management", icon: "/images/greencheck.webp" },

    { text: "API Integration & Authentication", icon: "/images/greencheck.webp" },
    { text: "Firebase & Database Basics", icon: "/images/greencheck.webp" },
    { text: "Device Features Integration", icon: "/images/greencheck.webp" },

    { text: "App Debugging & Optimization", icon: "/images/greencheck.webp" },
    { text: "Android & iOS App Build", icon: "/images/greencheck.webp" },
    { text: "Live Projects & Portfolio", icon: "/images/greencheck.webp" }
  ];

  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Web developers", icon: "/images/greencheck.webp" },
    { text: "IT beginners", icon: "/images/greencheck.webp" },
    { text: "Anyone interested in mobile app development", icon: "/images/greencheck.webp" },
  ];

  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Expert React Native Trainers",
      description:
        "Learn from experienced mobile developers building real Android & iOS applications."
    },
    {
      id: 2,
      number: 2,
      title: "Live App Development Sessions",
      description:
        "Build real mobile apps step-by-step with live coding and guidance."
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Mentorship",
      description:
        "Get personal mentorship, code reviews, and doubt-clearing support."
    },
    {
      id: 4,
      number: 4,
      title: "Interview & Communication Training",
      description:
        "Prepare for technical interviews, HR rounds, and client discussions."
    },
    {
      id: 5,
      number: 5,
      title: "Portfolio & GitHub Support",
      description:
        "Showcase React Native apps with proper documentation and live demos."
    },
    {
      id: 6,
      number: 6,
      title: "Live Projects Experience",
      description:
        "Work on real-world mobile app projects to gain industry experience."
    },
  ];

  const course_detail = [
    "Course Duration: 3 Months",
    "Training Mode: Offline (Mohali) | Online (India)",
    "Eligibility: 12th pass, basic English & computer skills",
    "Certification: Yes (React Native Development – B2B Campus)"
  ];

  const careeropportunitie = [
    {
      id: 1,
      title: "React Native App Developer",
      description:
        "Build Android and iOS apps using React Native for startups and companies."
    },
    {
      id: 2,
      title: "Mobile Application Developer",
      description:
        "Develop cross-platform mobile apps with modern UI and backend integration."
    },
    {
      id: 3,
      title: "Remote React Native Developer",
      description:
        "Work remotely with global teams on mobile application projects."
    },
    {
      id: 4,
      title: "Freelance Mobile App Developer",
      description:
        "Start freelancing and deliver React Native apps for international clients."
    }
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={'Become a React Native Developer'}
        titleEnd={'in 3 Months'}
        description={"Android & iOS Apps • JavaScript • APIs • Firebase • Real Projects"}
        leftposter={fullstack_leftbanner}
        rightposter={fullstack_rightbanner}
      />

      <CoursesCareer
        items={items}
        left_banner={fullstack_leftposter}
        featuresMain={featuresMain}
        title={'Why React Native Development is the <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Work with startups, product companies & global mobile app clients"}
      />

      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">3 Months Intensive </span> <br/> React Native Development Program'}
      />

      <AboutCourse
        title={'About React Native Course & Career Opportunities'}
        description1={`The React Native Development Course helps learners build high-quality Android and iOS apps using a single JavaScript codebase.`}
        description2={`This hands-on training covers UI development, navigation, API integration, Firebase, and real-world mobile app projects to make students job-ready.`}
        description3={`React Native developers are in high demand across startups, IT companies, and product-based organizations with strong remote and freelance opportunities.`}
      />

      <CourseDetail course_detail={course_detail} />

      <CareerOpportunities
        careeropportunitie={careeropportunitie}
        lowerdata={true}
        lower_title1="Learn at B2B Campus, Mohali"
        lower_description1="B2B Campus provides practical React Native training with expert mentors and real mobile app projects."
        lower_title2="Enroll with B2B Campus Today"
        lower_description2="Start your journey toward a high-growth React Native development career."
      />

      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />

      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>

      <CourseSyllabus
        title={'React Native Development <br/> <span class="text-primary">Syllabus</span>'}
        Syllabus_data={Syllabus_data}
      />

      <BecomeStudent
        title={'Build Your Career as a <span class="text-primary">React Native Developer</span>'}
        description={`Learn to build real Android and iOS apps with React Native. Create a strong mobile app portfolio and unlock high-growth opportunities in the global tech industry.`}
        right_image={fullstack_leftposter}
      />

      <Journeywithb2b2 />
    </div>
  );
};

export default ReactNative;
