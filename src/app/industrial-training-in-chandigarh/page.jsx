import React from "react";
import CoursesBanner from "../Components/Courses/CoursesBanner";
import WhyChooseSection from "../Components/Page-Components/WhyChooseSection";
import Youtubevideo from "../Components/Page-Components/Youtubevideo";
import TrainingSection from "../Components/Page-Components/TrainingSection";
import Whatstudentget from "../Components/Page-Components/Whatstudentget";
import Teachcareer from "../Components/Page-Components/Teachcareer";
import PlacedStudent from "../Components/Page-Components/PlacedStudent";
import FaqSection from "../Components/Page-Components/FaqSection";
import TopCompanys from "../Components/Page-Components/TopCompanys";
import CampusProgram from "../Components/Page-Components/CampusProgram";
import TrainingDomains from "../Components/Page-Components/TrainingDomains";

const features = [
  {
    title: "Industry-Oriented Practical Training",
    description:
      "B2B Campus combines theoretical knowledge with hands-on projects, live simulations, and case studies to build job-ready skills.",
    img: "/images/trainerImg.webp",
    variant: "A"
  },
  {
    title: "Comprehensive Course Portfolio",
    description:
      "The institute offers digital marketing, web development, graphic design, data science, cybersecurity, AI, and truck dispatching courses.",
    img: "/images/training.webp",
    variant: "B"
  },
  {
    title: "Flexible Learning Options",
    description:
      "Students enjoy online and self-paced learning with mentorship, making it ideal for students, professionals, homemakers, and entrepreneurs.",
    img: "/images/support.webp",
    variant: "C"
  },
  {
    title: "Expert Instructors and Career Support",
    description:
      "Knowledgeable trainers provide guidance, industry-standard tools, and practical skills, preparing learners for high-paying jobs and freelancing.",
    img: "/images/success.webp",
    variant: "D"
  }
];

const featuresaboutus = [
  {
    title: "100% Practical Training",
    dis:
      "Work on live tools, technologies, and environments used by real companies."
  },
  {
    title: "Beginner-Friendly Curriculum",
    dis:
      "Start from basics and grow step-by-step, even with no prior technical background."
  },
  {
    title: "Live Project Experience",
    dis: "Gain real project exposure to build confidence and job-ready skills."
  },
  {
    title: "Daily Tasks & Weekly Assessments",
    dis:
      "Structured learning with continuous evaluation to track progress and improvement."
  },
  {
    title: "Soft Skills & Interview Preparation",
    dis: "Enhance communication, professionalism, and workplace readiness."
  },
  {
    title: "Resume Building & Mock Interviews",
    dis:
      "Create a strong resume and practice interviews aligned with industry hiring standards."
  }
];

const items = [
  { icon: "📘", text: "Complete Course Material & Notes" },
  { icon: "💼", text: "Real Company-Level Projects" },
  { icon: "🎯", text: "Job-Ready Skills Training" },
  { icon: "❓", text: "1:1 Doubt Support" },
  { icon: "📝", text: "Resume & LinkedIn Optimization" },
  { icon: "🎤", text: "Mock Interviews" },
  { icon: "📞", text: "Placement Calls & Job References" },
  { icon: "🎓", text: "Career Guidance for Life" }
];

const statsdata = [
  {
    icon: "/images/arrowup.webp",
    title: "789+",
    subtitle: "Students Successfully Placed"
  },
  {
    icon: "/images/bag.webp",
    title: "62+",
    subtitle: "Hiring Partner Companies"
  },
  {
    icon: "/images/mail.webp",
    title: "100%",
    subtitle: "Industry-Oriented Learning Model"
  }
];
const faq_data = [
  {
    q: "What courses are offered at your industrial training institute in Chandigarh?",
    a: "Our industrial training institute in Chandigarh provides 6 months industrial training in Chandigarh with practical sessions, covering multiple domains to support long-term career growth."
  },
  {
    q: "Who can enroll for 6 months industrial training in Chandigarh?",
    a: "Anyone seeking quality industrial training in Chandigarh can join our industrial training institute in Chandigarh for 6 months industrial training with industry-relevant skills."
  },
  {
    q: "Does your industrial training institute in Chandigarh provide placement support?",
    a: "Yes, our industrial training institute in Chandigarh ensures the best 6 months industrial training in Chandigarh with placement assistance after successful course completion."
  },
  {
    q: "What is the duration of industrial training in Chandigarh at your institute?",
    a: "We offer 6 months industrial training in Chandigarh at our industrial training institute in Chandigarh, focusing on hands-on practical experience and professional skill development."
  },
  {
    q: "Is the 6 months industrial training in Chandigarh suitable for freshers?",
    a: "Absolutely. Our industrial training institute in Chandigarh offers 6 months industrial training in Chandigarh tailored for freshers, making it one of the best industrial training programs in Chandigarh."
  },
  {
    q: "Do you provide real-time projects during industrial training in Chandigarh?",
    a: "Yes, our industrial training institute in Chandigarh includes live and real-time projects as part of the 6 months industrial training in Chandigarh for practical exposure."
  },
  {
    q: "What makes your industrial training institute in Chandigarh different?",
    a: "Our industrial training institute in Chandigarh stands out by offering 6 months industrial training in Chandigarh with practical exposure, expert mentors, and career-focused learning."
  },
  {
    q: "Can working professionals join the 6 months industrial training in Chandigarh?",
    a: "Yes, our industrial training institute in Chandigarh provides flexible 6 months industrial training in Chandigarh programs suitable for working professionals."
  },
  {
    q: "Are certifications provided after completing industrial training in Chandigarh?",
    a: "Yes, our industrial training institute in Chandigarh provides certifications after completing the 6 months industrial training in Chandigarh program."
  },
  {
    q: "How do I enroll for 6 months industrial training in Chandigarh?",
    a: "You can contact our industrial training institute in Chandigarh to enroll in 6 months industrial training in Chandigarh and begin your journey toward the best industrial training in Chandigarh."
  }
];


export const metadata = {
  title: 'Industrial Training Institute in Chandigarh | B2B Campus',
  description:
    'Join B2B Campus for industrial training in Chandigarh with practical learning and expert trainers. Enroll now to start your career journey today ahead now fast.'
};

const page = () => {
  return (
    <div>
      <CoursesBanner
        highlightText={"Your Investment, Our Training"}
        titleEnd={"Industrial Training in Mohali "}
        description={
          "Skill-focused courses • Hands-on practical training • Complete placement support"
        }
        leftposter={"/images/fullstack_leftbanner.webp"}
        rightposter={"/images/fullstack_rightbanner.webp"}
      />

      <WhyChooseSection
        title={'<span class="text-primary">Why Choose  </span>B2B Campus?'}
        features_p={features}
      />
      <TrainingDomains />
      <TrainingSection
        title_upper={"About Our Industrial Training "}
        title_lower={"In Chandigarh"}
        description={
          "Industry-Ready Training Programs Designed for Real Careers"
        }
        features_p={featuresaboutus}
        show_discription={true}
      />
      <CampusProgram />
      <Youtubevideo />
      <Whatstudentget
        title={
          '<span class="text-primary"> What Students Receive with Industrial  </span> <br/>  Training in Mohali '
        }
        items_p={items}
      />
      <div className="py-6 md:py-12">
        <Teachcareer
          placementData={statsdata}
          // scratchCards_cus={scratchCards_cus}
          title={
            'No theory, 100% practical <br/> <span class="text-primary"> Industrial training </span>'
          }
        />
      </div>
      <div className="py-6 md:py-12">
        <PlacedStudent showdata={1} />
      </div>
      <TopCompanys />
      <FaqSection faq_data={faq_data} />
    </div>
  );
};

export default page;
