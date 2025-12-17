'use client'
import React, { useRef, useEffect, useState } from "react";
import Professionalskill from "./Professionalskill";
import Banner from "../UiUx/Banner";
import PopularCourses from "./PopularCourses";
import Teachcareer from "./Teachcareer";
import CampusProgram from "./CampusProgram";
import TopCompanys from "./TopCompanys";
import FeaturedIn from "./FeaturedIn";
import Journeywithb2b2 from "./Journeywithb2b2";
import TestimonialsSlider from "./TestimonialsSlider";
import TrainingSection from "./TrainingSection";
import FaqSection from "./FaqSection";
import WhyChooseSection from "./WhyChooseSection";
import Whatstudentget from "./Whatstudentget";
import Youtubevideo from "./Youtubevideo";
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
const Homewrap = () => {
  const enrolRef = useRef(null);
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth, "innerWidth");
  }, []);

  const scrollToEnrolment = () => {
    enrolRef.current?.scrollIntoView({
      behavior: "smooth",
      top: width < 768 ? 700 : 0,
    });
  };

  return (
    <div>
      <div className="" ref={enrolRef}>
        <Banner />
      </div>
      <div className="main-bg">
        <WhyChooseSection />
      </div>
      <PopularCourses clickscroll={scrollToEnrolment} />
      <Youtubevideo />
      <TrainingSection clickscroll={scrollToEnrolment} />
      <Professionalskill clickscroll={scrollToEnrolment} />
      <Whatstudentget />
      <div className="main-bg">
        <Teachcareer clickscroll={scrollToEnrolment} />
        <CampusProgram clickscroll={scrollToEnrolment} />
      </div>
      <TestimonialsSlider />
      <TopCompanys clickscroll={scrollToEnrolment} />
      <FeaturedIn clickscroll={scrollToEnrolment} />
      <FaqSection faq_data={faq_data} />
      <Journeywithb2b2 />
    </div>
  );
};

export default Homewrap;
