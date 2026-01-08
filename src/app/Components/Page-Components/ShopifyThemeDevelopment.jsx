import React from "react";
import Journeywithb2b2 from "./Journeywithb2b2";
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import BecomeStudent from "../Courses/BecomeStudent";
import AboutCourse from "../Courses/AboutCourse";
import python_leftbanner from "../../../../public/images/python_leftbanner.webp";
import python_rightbanner from "../../../../public/images/python_rightbanner.webp";
import python_leftposter from "../../../../public/images/python_leftposter.webp";
import CourseSyllabus from "../Courses/CourseSyllabus";
import CourseDetail from "../Courses/CourseDetail";
import CareerOpportunities from "../Courses/CareerOpportunities";
import Youtubevideo from "./Youtubevideo";
import teacher from '../../../../public/images/SrSaddam.png'
const faq_data = [
  {
    q: "Is this course good for beginners?",
    a: "Yes! If you’re new to Shopify or coding, we teach step-by-step from basics to advanced in a beginner-friendly way."
  },
  {
    q: "Will I learn practical Shopify theme skills?",
    a: "Absolutely. You will work on real theme sections, settings, layouts, and store-like projects—exactly what clients and agencies need."
  },
  {
    q: "How will this course help my career?",
    a: "This course helps you become job-ready for Shopify theme roles, freelancing, and eCommerce development opportunities with a strong portfolio."
  },
  {
    q: "Do you provide placement support?",
    a: "Yes. We support with resume building, portfolio, interview prep, mock interviews, and job opportunities through our network."
  },
  {
    q: "Who are the trainers?",
    a: "You learn from experienced Shopify developers who guide you with real project practices and clear explanations."
  },
  {
    q: "What makes your teaching style unique?",
    a: "We teach with live demos, real store examples, and build sections step-by-step so you learn exactly how Shopify themes work."
  },
  {
    q: "Is the course affordable for students?",
    a: "Yes. We keep fees student-friendly while delivering high-quality practical training and career support."
  },
  {
    q: "How do you help in interviews?",
    a: `We train you with:\n• Mock interviews\n• Confidence-building sessions\n• Communication tips\n• Shopify theme interview questions`
  },
  {
    q: "What do students like the most?",
    a: `Students love our:\n• Practical theme building\n• Friendly mentors\n• Real section development\n• Portfolio projects\n• Personal attention\n• Easy explanations\n• Lifetime guidance\n• Strong career focus`
  },
  {
    q: "How can I join the course?",
    a: "Simple! Contact us → counseling call → choose batch → start building Shopify themes."
  }
];

const ShopifyThemeDevelopment = () => {
  const Syllabus_data = [
    {
      title: "Module 1 - Shopify Theme Basics & Setup",
      points: [
        "How Shopify themes work (storefront structure)",
        "Theme files: layout, templates, sections, snippets, assets",
        "Dawn theme overview + theme editor workflow",
        "Roadmap, portfolio path & career opportunities"
      ]
    },
    {
      title: "Module 2 - HTML/CSS Basics for Storefront UI",
      points: [
        "Responsive layouts and page structure",
        "Flexbox/Grid basics for modern UI",
        "Typography, spacing and components",
        "UI practice with real storefront sections"
      ]
    },
    {
      title: "Module 3 - JavaScript Basics for Theme Interactions",
      points: [
        "DOM, events and interactive UI",
        "Sliders, tabs, accordions (basic patterns)",
        "Form validations and UX improvements",
        "Debugging common frontend issues"
      ]
    },
    {
      title: "Module 4 - Liquid Fundamentals (Core of Shopify Themes)",
      points: [
        "Liquid syntax, objects, filters and logic",
        "Sections, blocks and schema settings",
        "Rendering dynamic data from products/collections",
        "Best practices for clean Liquid code"
      ]
    },
    {
      title: "Module 5 - Theme Sections & Customization",
      points: [
        "Build reusable sections (hero, features, testimonials)",
        "Dynamic controls: colors, typography, spacing, layout",
        "Blocks, presets and conditional rendering",
        "Creating production-ready section architecture"
      ]
    },
    {
      title: "Module 6 - Shopify Data: Metafields & Dynamic Sources",
      points: [
        "Metafields basics and real use-cases",
        "Connecting metafields to theme sections",
        "Product page customization with dynamic content",
        "Collections, tags and storefront logic"
      ]
    },
    {
      title: "Module 7 - Templates: JSON Templates & Theme Structure",
      points: [
        "Online Store 2.0 JSON templates",
        "Creating custom templates (product, collection, page)",
        "Theme settings, global styles, header/footer control",
        "Theme editor experience improvements"
      ]
    },
    {
      title: "Module 8 - Performance, SEO & Best Practices",
      points: [
        "Speed optimization: images, lazy load, scripts",
        "SEO-friendly structure (headings, schema basics, UX)",
        "Accessibility and mobile optimization",
        "Theme quality checklist & theme audit basics"
      ]
    },
    {
      title: "Module 9 - Real Projects, Deployment & Career Prep",
      points: [
        "Build complete theme sections and pages end-to-end",
        "Shopify CLI intro + theme deployment basics",
        "Portfolio + GitHub setup + client-ready delivery",
        "Freelancing/job guidance and interview preparation"
      ]
    }
  ];

  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "High Demand in eCommerce",
      subtitle:
        "Shopify themes power real online stores—brands need custom sections, UI upgrades, and fast storefront experiences."
    },
    {
      icon: "/images/usertea.webp",
      title: "Freelance & Remote Friendly",
      subtitle:
        "Theme development projects are global. Work with agencies, brands, and Shopify merchants from anywhere."
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Skill",
      subtitle:
        "Earn ₹30,000–₹1,20,000/month with theme jobs, freelancing gigs, and long-term Shopify store clients."
    },
    {
      icon: "/images/digree.webp",
      title: "Beginner-Friendly Learning",
      subtitle:
        "Start from basics and learn Liquid, sections, templates, and real theme workflows with hands-on practice."
    }
  ];

  const items = [
    {
      icon: "/images/45days.webp",
      title: "3 Months",
      subtitle: "Intensive Training"
    },
    {
      icon: "/images/handmoney.webp",
      title: "100%",
      subtitle: "Career Support"
    },
    {
      icon: "/images/globeicon.webp",
      title: "Global Work",
      subtitle: "Remote / Freelance"
    },
    {
      icon: "/images/money.webp",
      title: "INR / USD",
      subtitle: "Earning Potential"
    }
  ];

  const program_data = [
    { text: "Shopify Theme Structure & Dawn Basics", icon: "/images/greencheck.webp" },
    { text: "HTML/CSS for Responsive Storefront UI", icon: "/images/greencheck.webp" },
    { text: "JavaScript for Theme Interactions", icon: "/images/greencheck.webp" },
    { text: "Liquid Fundamentals (Core Concepts)", icon: "/images/greencheck.webp" },
    { text: "Sections, Blocks & Schema Controls", icon: "/images/greencheck.webp" },
    { text: "Metafields & Dynamic Content Setup", icon: "/images/greencheck.webp" },
    { text: "OS 2.0 JSON Templates & Theme Settings", icon: "/images/greencheck.webp" },
    { text: "Performance + SEO Best Practices", icon: "/images/greencheck.webp" },
    { text: "Real Projects + Portfolio Building", icon: "/images/greencheck.webp" }
  ];

  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Designers who want Shopify skills", icon: "/images/greencheck.webp" },
    { text: "Web developers & IT beginners", icon: "/images/greencheck.webp" },
    { text: "Anyone interested in Shopify theme development", icon: "/images/greencheck.webp" }
  ];

  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Expert Shopify Theme Trainers",
      description:
        "Learn from professionals who build real Shopify storefronts and high-converting themes for brands and agencies."
    },
    {
      id: 2,
      number: 2,
      title: "Live Theme Building Sessions",
      description:
        "Practice Liquid, sections, schema controls, templates, and UI improvements with live guidance and demos."
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Mentorship",
      description:
        "Personal mentoring to improve code quality, storefront UX, and real theme development problem-solving."
    },
    {
      id: 4,
      number: 4,
      title: "Career & Client Preparation",
      description:
        "Get support for interviews, freelancing proposals, theme task handling, and client communication workflows."
    },
    {
      id: 5,
      number: 5,
      title: "Portfolio & GitHub Support",
      description:
        "Build and showcase theme sections, custom templates, and storefront projects in a professional portfolio."
    },
    {
      id: 6,
      number: 6,
      title: "Live Project Experience",
      description:
        "Work on real theme tasks like homepage sections, product page improvements, and performance-focused fixes."
    }
  ];

  const course_detail = [
    "Course Duration: 3 Months",
    "Training Mode: Offline (Mohali) | Online (India)",
    "Eligibility: 12th pass, basic English & computer skills",
    "Certification: Yes (Shopify Theme Development – B2B Campus)"
  ];

  const careeropportunitie = [
    {
      id: 1,
      title: "Shopify Theme Developer",
      description:
        "Build a career as a Shopify Theme Developer by creating custom sections, templates, and storefront UI improvements using Liquid, OS 2.0, and best practices."
    },
    {
      id: 2,
      title: "Remote Shopify Frontend Developer",
      description:
        "Work remotely with agencies and global merchants to maintain and improve Shopify storefronts, optimize UX, and deliver custom theme features."
    },
    {
      id: 3,
      title: "Shopify Storefront UI/UX Implementer",
      description:
        "Specialize in storefront UI by building responsive layouts, interactive components, and conversion-focused sections that improve shopping experience."
    },
    {
      id: 4,
      title: "Freelance Shopify Theme Specialist",
      description:
        "Start freelancing with Shopify theme projects like homepage revamps, product page customization, speed optimization, and theme setup for merchants."
    }
  ];

  return (
    <div>
      <CoursesBanner
        highlightText={"Become a Shopify Theme Developer"}
        titleEnd={"in 3 Months"}
        description={"Liquid • OS 2.0 Sections • Metafields • Real Storefront Projects"}
        leftposter={python_leftbanner}
        rightposter={python_rightbanner}
      />

      <CoursesCareer
        items={items}
        left_banner={teacher}
        featuresMain={featuresMain}
        title={'Why Shopify Theme Development is the <br/> <span class="text-primary">Next Big Career</span>'}
        description={"Work with Shopify agencies, eCommerce brands, D2C stores & global merchants."}
        max_width={'md:max-w-[80%]'}
      />

      <CourseProgram
        program_data={program_data}
        title={'<span class="text-primary">3 Months Intensive </span> <br/> Shopify Theme Development Program'}
      />

      <AboutCourse
        title={"About the Shopify Theme Development Course & Global Career Opportunities"}
        description1={`The Shopify Theme Development Course & Certification program helps learners master Shopify storefront development using HTML, CSS, JavaScript, Liquid, and Online Store 2.0 (OS 2.0) architecture.`}
        description2={`This hands-on training covers theme structure, sections & schema controls, JSON templates, metafields, and real storefront customization—making students job-ready even with no prior Shopify experience.`}
        description3={`With Shopify powering millions of online stores, skilled theme developers are in demand across agencies, startups, and global brands—offering remote, freelance, and high-growth career opportunities.`}
      />

      <CourseDetail course_detail={course_detail} />

      <CareerOpportunities
        careeropportunitie={careeropportunitie}
        lowerdata={true}
        lower_title1="Learn at B2B Campus, Mohali"
        lower_description1={
          "Located in Mohali, Punjab, B2B Campus offers hands-on Shopify Theme Development training with expert mentors, real projects, and industry-focused learning for global eCommerce careers."
        }
        lower_title2={"Enroll with B2B Campus Today"}
        lower_description2={"Take the first step toward a high-growth Shopify Theme Development career."}
      />
      <Youtubevideo current_tab={'Development'} />
      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />

      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>

      <CourseSyllabus
        title={'Shopify Theme Development <br/> <span class="text-primary">Syllabus</span>'}
        Syllabus_data={Syllabus_data}
      />

      <BecomeStudent
        title={'Shopify Theme Development Course & Certification To <span class="text-primary">Build Storefront Skills</span>'}
        description={`Learn Shopify theme development from basics to advanced with Liquid, OS 2.0 sections, JSON templates, metafields, and real storefront projects. Build a strong portfolio and become job-ready for Shopify theme developer roles or freelancing opportunities.`}
        right_image={python_leftposter}
      />

      <Journeywithb2b2 />
    </div>
  );
};

export default ShopifyThemeDevelopment;
