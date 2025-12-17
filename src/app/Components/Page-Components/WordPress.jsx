import React from "react";
import FaqSection from "./FaqSection";
import Journeywithb2b2 from "./Journeywithb2b2";
import CoursesBanner from "../Courses/CoursesBanner";
import CoursesCareer from "../Courses/CoursesCareer";
import CourseProgram from "../Courses/CourseProgram";
import CourseCareerSupport from "../Courses/CourseCareerSupport";
import WhyChoose from "../Courses/WhyChoose";
import CanJoin from "../Courses/CanJoin";
import CourseSyllabus from "../Courses/CourseSyllabus";
import AboutCourse from "../Courses/AboutCourse";
import wordpress_leftbanner from "../../../../public/images/wordpress_leftbanner.webp";
import wordpress_rightbanner from "../../../../public/images/wordpress_rightbanner.webp";
import BecomeStudent from "../Courses/BecomeStudent";
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
const WordPress = () => {
  const Syllabus_data = [
    {
      title: "Module 1: Web Design Foundations",
      points: [
        "Understanding Web & UI/UX Basics",
        "How Websites Work – Domains, Hosting, Browsers",
        "Design Principles: Layout, Spacing, Colors, Typography",
        "Wireframing Basics (Low-Fidelity Designs)",
        "Tools Overview: Figma, Photoshop, Canva"
      ]
    },

    {
      title: "Module 2: HTML for Web Designing",
      points: [
        "HTML Structure & Best Practices",
        "Working with Text, Images, Links & Lists",
        "Creating Forms & Buttons",
        "Semantic HTML for Better SEO",
        "Project: Basic Website Layout (Header–Footer–Sections)"
      ]
    },

    {
      title: "Module 3: CSS – Styling & Layouts",
      points: [
        "Selectors, Colors, Fonts, Backgrounds",
        "Flexbox & Grid for Modern Layouts",
        "Spacing Systems (Margin, Padding, Alignment)",
        "Responsive Design for Mobile, Tablet & Desktop",
        "Animations, Hover Effects & UI Interactions",
        "Project: Fully Designed Landing Page"
      ]
    },

    {
      title: "Module 4: Figma for UI Designing",
      points: [
        "Artboards, Frames & Layout Grids",
        "Typography & Color System Setup",
        "Auto Layout for Components",
        "Designing Web UI Sections (Hero, Cards, Forms, CTA)",
        "Design a Complete Website in Figma",
        "Project: Modern Homepage UI"
      ]
    },

    {
      title: "Module 5: Bootstrap + Tailwind CSS",
      points: [
        "Bootstrap Grid & Components",
        "Building Responsive Templates",
        "Intro to Tailwind CSS Utility Classes",
        "Creating Modern UI Sections with Tailwind",
        "Project: Multi-section Business Website"
      ]
    },

    {
      title: "Module 6: Basic Interactivity with JavaScript",
      points: [
        "Making Websites Interactive",
        "Sliders, FAQ Toggle, Form Validation",
        "Popups, Mobile Menu & Small UI Features",
        "Using JS Plugins (Swiper, AOS, GSAP basics)",
        "Project: Interactive Website Features"
      ]
    },

    {
      title: "Module 7: WordPress for Designers",
      points: [
        "Installing WordPress & Themes",
        "Using Elementor/Divi for No-Code Web Design",
        "Creating Pages, Menus, Blog Layouts",
        "Speed & SEO Optimization Techniques",
        "Project: Complete Business Website"
      ]
    },

    {
      title: "Module 8: Design Portfolio Development",
      points: [
        "Behance / Dribbble Portfolio Setup",
        "Case Study Writing for UI Projects",
        "Creating a Personal Portfolio Website",
        "Branding Yourself as a Designer",
        "Project: 4–6 Portfolio-Ready UI Designs"
      ]
    },

    {
      title: "Module 9: Advanced UI/UX Skills",
      points: [
        "User Research & Personas",
        "Component Library & Design Systems",
        "Visual Consistency Rules",
        "Accessibility & Color Contrast Standards",
        "Project: Full Website Redesign Case Study"
      ]
    },

    {
      title: "Module 10: Internship + Industry Preparation",
      points: [
        "Work on Live Website Design Projects",
        "Client Communication & Presentation Skills",
        "Interview & Portfolio Review Sessions",
        "Professional Certification",
        "Guaranteed Internship Support"
      ]
    }
  ];
  const featuresMain = [
    {
      icon: "/images/globe2.webp",
      title: "Massive Demand Industries",
      subtitle:
        "Every business needs a website — WordPress is the #1 choice globally."
    },
    {
      icon: "/images/usertea.webp",
      title: "Work-from-Home Friendly",
      subtitle: "Make websites for clients worldwide from anywhere."
    },
    {
      icon: "/images/moneyhigh.webp",
      title: "High-Income Growth Options",
      subtitle: "Earn ₹20,000–₹1,00,000/month with projects & freelance work."
    },
    {
      icon: "/images/digree.webp",
      title: "No Coding Required",
      subtitle:
        "You can start without coding — we also teach basic customizations."
    }
  ];
  const items = [
    {
      icon: "/images/45days.webp",
      title: "45 Days",
      subtitle: "Practical Training "
    },
    {
      icon: "/images/handmoney.webp",
      title: "100%",
      subtitle: "Placement Support"
    },
    {
      icon: "/images/globeicon.webp",
      title: "Global Work",
      subtitle: "Freelance or Full-Time"
    },
    {
      icon: "/images/money.webp",
      title: "INR / USD",
      subtitle: "Earning Opportunitiess"
    }
  ];
  const program_data = [
    { text: "WordPress Installation & Setup", icon: "/images/greencheck.webp" },
    {
      text: "Themes, Plugins & Customization",
      icon: "/images/greencheck.webp"
    },
    { text: "Payment Gateway Integration", icon: "/images/greencheck.webp" },

    { text: "Blogging & SEO Setup", icon: "/images/greencheck.webp" },
    {
      text: "Elementor / Gutenberg Page Building",
      icon: "/images/greencheck.webp"
    },
    { text: "Hosting, Domain & Migration", icon: "/images/greencheck.webp" },

    { text: "WooCommerce Store Setup", icon: "/images/greencheck.webp" },
    {
      text: "Website Structure & Layout Design",
      icon: "/images/greencheck.webp"
    },
    {
      text: "Basic HTML/CSS for Custom Styling",
      icon: "/images/greencheck.webp"
    }
  ];

  const conjoin_data = [
    { text: "Students & freshers", icon: "/images/greencheck.webp" },
    { text: "Career switchers", icon: "/images/greencheck.webp" },
    { text: "Beginners in tech", icon: "/images/greencheck.webp" },
    { text: "Freelancers", icon: "/images/greencheck.webp" },
    { text: "Anyone wanting quick web income", icon: "/images/greencheck.webp" }
  ];
  const featuresNumbered = [
    {
      id: 1,
      number: 1,
      title: "Expert WordPress Mentors",
      description:
        "Learn from developers experienced in agency work & client projects."
    },
    {
      id: 2,
      number: 2,
      title: "Live Website Building",
      description: "Design and develop complete websites during training."
    },
    {
      id: 3,
      number: 3,
      title: "1:1 Mentorship",
      description: "Personal assistance for projects and website improvements."
    },
    {
      id: 4,
      number: 4,
      title: "Client Communication Boost",
      description:
        "Learn how to handle requirements, revisions & professional delivery."
    },
    {
      id: 5,
      number: 5,
      title: "Portfolio & Hosting Support",
      description: "Launch real websites and build a strong portfolio."
    },
    {
      id: 6,
      number: 6,
      title: "Guaranteed Internship",
      description: "Work on live client-style WordPress projects."
    }
  ];
  return (
    <div>
      <CoursesBanner
        highlightText={"Become a WordPress Developer"}
        titleEnd={"in 45 Days"}
        description={
          "Build Websites • E-Commerce Stores • Landing Pages • Client Projects"
        }
        leftposter={wordpress_leftbanner}
        rightposter={wordpress_rightbanner}
        max_width={'max-w-[400px] m-auto'}
      />
      <CoursesCareer
        items={items}
        left_banner={wordpress_rightbanner}
        featuresMain={featuresMain}
        title={
          'Why WordPress is the  <br/> <span class="text-primary">Next Big Career</s  pan>'
        }
        description={
          "Design & develop websites, blogs, e-commerce stores & business platforms."
        }
        max_width={'max-w-[350px]'}
      />
      <CourseProgram
        program_data={program_data}
        title={
          '<span class="text-primary">45 Days Practical </span> <br/>WordPress Development Program'
        }
      />
      <AboutCourse
        title={"About WordPress Training Course"}
        description1={`
                 Unlock the power of WordPress with our comprehensive training course. Designed for beginners and web enthusiasts, this course will take you from the basics of WordPress installation to advanced customization techniques. It provides a powerful set of libraries and tools for data analysis, manipulation, and visualization. Python’s popularity in the data science community makes it a valuable skill for anyone interested in this field.`}
        description2={`
                Learn from industry experts as they guide you through creating and managing content, customizing your website with themes and plugins, and optimizing for search engines. Gain hands-on experience by building your own website and get support from our dedicated team along the way. It provides a powerful set of libraries and tools for data analysis, manipulation, and visualization. Python’s popularity in the data science community makes it a valuable skill for anyone interested in this field.`}
        description3={`
                    Whether you’re a freelancer, business owner, or aspiring web developer, our WordPress Training Course is your ticket to creating stunning websites with ease. Enroll today and unleash your creativity!. It provides a powerful set of libraries and tools for data analysis, manipulation, and visualization. Python’s popularity in the data science community makes it a valuable skill for anyone interested in this field.           
          `}
      />
      <CourseCareerSupport />
      <WhyChoose featuresNumbered={featuresNumbered} />
      <div className="main-bg">
        <CanJoin conjoin_data={conjoin_data} />
      </div>
      <CourseSyllabus
        title={
          'Web Designing Course <br/> <span class="text-primary"> Syllabus</span>'
        }
        Syllabus_data={Syllabus_data}
      />
      <BecomeStudent
        title={
          'Learn to Create Stunning   ​<sapn class="text-primary"> Websites on WordPress </span>'
        }
        description={`Our WordPress Training Course is designed to equip you with the knowledge and skills needed to master the world’s most popular content management system`}
        right_image={wordpress_rightbanner}
      />
      {/* <FaqSection faq_data={faq_data} /> */}
      <Journeywithb2b2 />
    </div>
  );
};

export default WordPress;
