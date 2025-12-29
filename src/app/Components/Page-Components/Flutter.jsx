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

const Flutter = () => {

  const Syllabus_data = [
    {
      title: "Module 1 - Introduction to Flutter & Dart",
      points: [
        "What is Flutter and why it is used",
        "Flutter vs Native development",
        "Installing Flutter SDK & setup",
        "Introduction to Dart programming language"
      ],
    },
    {
      title: "Module 2 - Dart Programming Fundamentals",
      points: [
        "Variables, data types & functions",
        "Control statements & loops",
        "OOP concepts in Dart",
        "Async programming basics"
      ],
    },
    {
      title: "Module 3 - Flutter Widgets & UI Design",
      points: [
        "Stateless & Stateful widgets",
        "Layouts, rows, columns & containers",
        "Material UI & Cupertino widgets",
        "Responsive mobile UI design"
      ],
    },
    {
      title: "Module 4 - Navigation & State Management",
      points: [
        "Navigation & routing",
        "Forms & user input handling",
        "State management concepts",
        "Provider / basic state patterns"
      ],
    },
    {
      title: "Module 5 - APIs & Backend Integration",
      points: [
        "REST APIs & JSON handling",
        "HTTP requests & API integration",
        "Authentication basics",
        "Connecting Flutter apps to backend services"
      ],
    },
    {
      title: "Module 6 - Database & Firebase Integration",
      points: [
        "Firebase setup & configuration",
        "Firestore & real-time database",
        "User authentication with Firebase",
        "Cloud storage & notifications"
      ],
    },
    {
      title: "Module 7 - Advanced Flutter Concepts",
      points: [
        "Custom widgets & animations",
        "App performance optimization",
        "Error handling & debugging",
        "App architecture best practices"
      ],
    },
    {
      title: "Module 8 - Deployment & Publishing",
      points: [
        "Build Android & iOS apps",
        "Play Store & App Store guidelines",
        "App testing & release process",
        "Versioning & maintenance"
      ],
    },
    {
      title: "Module 9 - Real Projects & Career Preparation",
      points: [
        "End-to-end Flutter app projects",
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
        "Flutter developers are in demand for Android, iOS, and cross-platform app development.",
    },
    {
      icon: "/images/usertea.webp",
      title: "Remote & Freelance Friendly",
      subtitle:
        "Work with startups, agencies, and global clients from anywhere in the world.",
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Career",
      subtitle:
        "Earn ₹4 LPA–₹15 LPA+ or freelance globally with Flutter skills.",
    },
    {
      icon: "/images/digree.webp",
      title: "Beginner-Friendly Course",
      subtitle:
        "No prior app development experience needed. We teach from absolute basics.",
    },
  ];

  const items = [
    { icon: "/images/45days.webp", title: "6 Months", subtitle: "Intensive Training" },
    { icon: "/images/handmoney.webp", title: "100%", subtitle: "Career Support" },
    { icon: "/images/globeicon.webp", title: "Global Jobs", subtitle: "Remote / Onsite" },
    { icon: "/images/money.webp", title: "INR / USD", subtitle: "Earning Potential" },
  ];

  const program_data = [
    { text: "Dart Programming Language", icon: "/images/greencheck.webp" },
    { text: "Flutter UI & Widgets", icon: "/images/greencheck.webp" },
    { text: "State Management & Navigation", icon: "/images/greencheck.webp" },
    { text: "REST APIs & Backend Integration", icon: "/images/greencheck.webp" },
    { text: "Firebase & Database Handling", icon: "/images/greencheck.webp" },
    { text: "Animations & Performance", icon: "/images/greencheck.webp" },
    { text: "Android & iOS App Build", icon: "/images/greencheck.webp" },
    { text: "Play Store & App Store Deployment", icon: "/images/greencheck.webp" },
    { text: "Live Projects & Portfolio", icon: "/images/greencheck.webp" }
  ];

  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "IT beginners", icon: "/images/greencheck.webp" },
    { text: "Web developers", icon: "/images/greencheck.webp" },
    { text: "Anyone interested in mobile app development", icon: "/images/greencheck.webp" },
  ];

  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Expert Flutter Trainers",
      description:
        "Learn from experienced mobile app developers working on real Flutter applications."
    },
    {
      id: 2,
      number: 2,
      title: "Live App Development",
      description:
        "Build real Android & iOS apps during live coding sessions."
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Mentorship",
      description:
        "Get personal guidance, code reviews, and doubt-solving support."
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
        "Showcase Flutter apps with professional documentation and repositories."
    },
    {
      id: 6,
      number: 6,
      title: "Internship & Live Projects",
      description:
        "Gain real-world experience through practical app development projects."
    },
  ];

  const course_detail = [
    "Course Duration: 6 Months",
    "Training Mode: Offline (Mohali) | Online (India)",
    "Eligibility: 12th pass, basic English & computer skills",
    "Certification: Yes (Flutter Development – B2B Campus)"
  ];

  const careeropportunitie = [
    {
      id: 1,
      title: "Flutter App Developer",
      description:
        "Work as a Flutter Developer building high-performance Android and iOS applications."
    },
    {
      id: 2,
      title: "Mobile Application Developer",
      description:
        "Develop cross-platform mobile apps for startups, enterprises, and agencies."
    },
    {
      id: 3,
      title: "Remote Flutter Developer",
      description:
        "Work remotely with international clients and software companies."
    },
    {
      id: 4,
      title: "Freelance Mobile App Developer",
      description:
        "Start freelancing and build mobile apps for global clients."
    }
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={'Become a Flutter Developer'}
        titleEnd={'in 6 Months'}
        description={"Build Android & iOS Apps • Dart • Firebase • APIs • Real Projects"}
        leftposter={fullstack_leftbanner}
        rightposter={fullstack_rightbanner}
      />

      <CoursesCareer
        items={items}
        left_banner={fullstack_leftposter}
        featuresMain={featuresMain}
        title={'Why Flutter Development is the <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Work with startups, tech companies & global mobile app clients"}
      />

      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">6 Months Intensive </span> <br/> Flutter Development Program'}
      />

      <AboutCourse
        title={'About Flutter Development Course & Career Opportunities'}
        description1={`The Flutter Development Course is designed to help learners build cross-platform mobile applications using Google’s Flutter framework and Dart programming language.`}
        description2={`This hands-on training covers UI development, state management, API integration, Firebase, and real-world mobile app projects to make students job-ready.`}
        description3={`Flutter developers are highly demanded globally across startups, enterprises, and app-based companies with excellent remote and freelance opportunities.`}
      />

      <CourseDetail course_detail={course_detail} />

      <CareerOpportunities
        careeropportunitie={careeropportunitie}
        lowerdata={true}
        lower_title1="Learn at B2B Campus, Mohali"
        lower_description1="B2B Campus provides practical Flutter training with expert mentors, real projects, and career-focused guidance."
        lower_title2="Enroll with B2B Campus Today"
        lower_description2="Start your journey toward a high-growth Flutter development career."
      />

      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />

      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>

      <CourseSyllabus
        title={'Flutter Development <br/> <span class="text-primary">Syllabus</span>'}
        Syllabus_data={Syllabus_data}
      />

      <BecomeStudent
        title={'Build Your Career as a <span class="text-primary">Flutter App Developer</span>'}
        description={`Learn to build powerful mobile applications with Flutter and Dart. Create real apps, build a strong portfolio, and unlock high-paying opportunities in the global mobile app industry.`}
        right_image={fullstack_leftposter}
      />

      <Journeywithb2b2 />
    </div>
  );
};

export default Flutter;
