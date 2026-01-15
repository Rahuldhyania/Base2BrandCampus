import React from "react";
import CoursesBanner from "../Components/Courses/CoursesBanner";
import WhyChooseSection from "../Components/Page-Components/WhyChooseSection";
import PopularCourses from "../Components/Page-Components/PopularCourses";
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
        title: "Industry-Centered Practical Learning",
        description: "B2B Campus delivers 6 weeks industrial training in chandigarh combining core concepts, live projects, simulations, and case studies for confidence.",
        img: '/images/trainerImg.webp',
        variant: "A",
    },
    {
        title: "Wide-Ranging Career-Focused Courses",
        description: "Recognized among leading industrial training companies in chandigarh, B2B Campus offers digital marketing, web development, graphic design, AI, cybersecurity programs.",
        img: '/images/training.webp',
        variant: "B",
    },
    {
        title: "Flexible & Learner-Friendly Training Models",
        description: "Our 6 weeks industrial training in chandigarh supports online, hybrid, self-paced learning with mentors for students, professionals, homemakers, entrepreneurs nationwide",
        img: '/images/support.webp',
        variant: "C",
    },
    {
        title: "Experienced Trainers & Placement Guidance",
        description: "As the best industrial training institute in chandigarh, trainers provide placements, ensuring success through 6 weeks industrial training in chandigarh.",
        img: '/images/success.webp',
        variant: "D",
    },

];
const featuresaboutus = [
    {
        title: "100% Practical Training",
        dis: "Hands-on learning using real tools, technologies, and professional working environments."
    },
    {
        title: "Beginner-Friendly Curriculum",
        dis: "Start from basics and progress confidently without any prior technical knowledge."
    },
    {
        title: "Live Project Experience",
        dis: "Work on real projects to build confidence and job-ready practical skills."
    },
    {
        title: "Daily Tasks & Weekly Assessments",
        dis: "Regular assignments and evaluations ensure consistent learning and measurable improvement."
    },
    {
        title: "Soft Skills & Interview Preparation",
        dis: "Improve communication, professionalism, and confidence for real workplace environments."
    },
    {
        title: "Resume Building & Mock Interviews",
        dis: "Create strong resumes and practice interviews matching current industry hiring standards."
    }
];

const items = [
    { icon: "📘", text: "Full Course Material & Notes" },
    { icon: "💼", text: "Real Company-Level Projects" },
    { icon: "🎯", text: "Job-ready Skills Training" },
    { icon: "❓", text: "1:1 Doubt Support" },
    { icon: "📝", text: "Resume + LinkedIn Optimization" },
    { icon: "🎤", text: "Mock Interviews" },
    { icon: "📞", text: "Placement Calls & Job References" },
    { icon: "🎓", text: "Career Guidance for Life" },
];
const statsdata = [
    {
        icon: "/images/arrowup.webp",
        title: "789+",
        subtitle: "Students Successfully Placed",
    },
    {
        icon: "/images/bag.webp",
        title: "62+",
        subtitle: "Hiring Partner Companies",
    },
    {
        icon: "/images/mail.webp",
        title: "100%",
        subtitle: "Industry-Oriented Learning Model",
    },
];
const faq_data = [
  {
    q: "What courses are offered at your industrial training institute in Chandigarh?",
    a: "Our industrial training institute in Chandigarh offers 6 months industrial training with practical sessions across multiple domains to support long-term career growth."
  },
  {
    q: "Who can enroll for 6 months industrial training in Chandigarh?",
    a: "Anyone looking for quality industrial training in Chandigarh—students, freshers, or career switchers—can enroll in our 6 months industrial training program."
  },
  {
    q: "Does your industrial training institute in Chandigarh provide placement support?",
    a: "Yes, we provide placement assistance after completing the 6 months industrial training in Chandigarh, including interview preparation and job guidance."
  },
  {
    q: "What is the duration of industrial training in Chandigarh at your institute?",
    a: "The duration of industrial training in Chandigarh at our institute is 6 months, focused on hands-on practical learning and professional skill development."
  },
  {
    q: "Is the 6 months industrial training in Chandigarh suitable for freshers?",
    a: "Absolutely. Our 6 months industrial training in Chandigarh is specially designed for freshers, starting from basics and moving to industry-level skills."
  },
  {
    q: "Do you provide real-time projects during industrial training in Chandigarh?",
    a: "Yes, our industrial training institute in Chandigarh includes live and real-time projects as part of the 6 months industrial training program."
  },
  {
    q: "What makes your industrial training institute in Chandigarh different?",
    a: "We stand out by offering practical exposure, expert mentors, real projects, and industry-focused learning, making us one of the best industrial training institutes in Chandigarh."
  },
  {
    q: "Can working professionals join the 6 months industrial training in Chandigarh?",
    a: "Yes, working professionals can join our 6 months industrial training in Chandigarh with flexible learning options."
  },
  {
    q: "Are certifications provided after completing industrial training in Chandigarh?",
    a: "Yes, after successfully completing the 6 months industrial training in Chandigarh, students receive a certification from our industrial training institute."
  },
  {
    q: "How do I enroll for 6 months industrial training in Chandigarh?",
    a: "You can enroll by contacting our industrial training institute in Chandigarh, attending a counseling session, selecting a batch, and starting your training."
  }
];

export const metadata = {
  title: 'Six Weeks Industrial Training in Chandigarh | B2B Campus',
  description:
    'Start six weeks industrial training in Chandigarh at B2B Campus & learn real-world skills through hands-on practice and expert guidance. Apply now to begin today.'
};

const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={"Six Weeks Industrial Training in Chandigarh"}
                titleEnd={"to Make You Job Ready"}
                description={
                    "Skill-driven courses • Project-based practical learning • Placement and career assistance"
                }
                leftposter={"/images/fullstack_leftbanner.webp"}
                rightposter={"/images/fullstack_rightbanner.webp"}
            />

            <WhyChooseSection
                title={'<span class="text-primary"> Why Choose </span> B2B Campus'}
                features_p={features}
            />
            <TrainingDomains />
            <TrainingSection
                title_upper={'About Our 6 Weeks Industrial'}
                title_lower={'Training in Chandigarh'}
                description={'Industry-Ready Training Programs Built for Real Career Success'}
                features_p={featuresaboutus}
                show_discription={true}
            />
            <CampusProgram />
            <Youtubevideo />
            <Whatstudentget
                title={'<span class="text-primary"> What Students Receive with  </span> Industrial Training'}

                items_p={items}
            />
            <div className="py-6 md:py-12">
                <Teachcareer placementData={statsdata} />
            </div>
            <div className="py-6 md:py-12">
                <PlacedStudent showdata={1} />
            </div>
            <TopCompanys/>
            <FaqSection faq_data={faq_data} />
        </div>
    );
};

export default page;
