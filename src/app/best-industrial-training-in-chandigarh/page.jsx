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

const features = [
    {
        title: "Industry-Oriented Practical Training",
        description: "B2B Campus combines theoretical knowledge with hands-on projects, live simulations, and case studies for job readiness.",
        img: '/images/trainerImg.webp',
        variant: "A",
    },
    {
        title: "Comprehensive Course Portfolio",
        description: "The institute offers digital marketing, web development, graphic design, data science, cybersecurity, AI, and truck dispatching courses.",
        img: '/images/training.webp',
        variant: "B",
    },
    {
        title: "Flexible Learning Options",
        description: "Students enjoy online and self-paced learning with mentorship, ideal for students, professionals, homemakers, and entrepreneurs.",
        img: '/images/support.webp',
        variant: "C",
    },
    {
        title: "Expert Instructors and Career Support",
        description: "Knowledgeable trainers provide guidance, industry-standard tools, and practical skills preparing learners for high-paying jobs and freelancing.",
        img: '/images/success.webp',
        variant: "D",
    },

];
const featuresaboutus = [
    "100% practical sessions",
    "Beginner-friendly curriculum",
    "Live Project Experience",
    "Daily Tasks & Weekly Assessments",
    "Soft Skills & Interview Preparation",
    "Resume Building & Mock Interviews",
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
        q: "What is included in 6 weeks industrial training in Chandigarh at B2B Campus?",
        a: "The 6 weeks industrial training at B2B Campus includes practical training, live projects, industry tools, expert mentorship, and placement support, making it one of the trusted industrial training companies in Chandigarh."
    },
    {
        q: "Who can join the 6 weeks industrial training in Chandigarh programs?",
        a: "Students, freshers, working professionals, and entrepreneurs can join the 6 weeks industrial training in Chandigarh at B2B Campus without any prior technical experience."
    },
    {
        q: "Why choose B2B Campus over other industrial training companies in Chandigarh?",
        a: "B2B Campus offers 100% practical learning, experienced trainers, live projects, and strong career support, making it the best industrial training institute in Chandigarh."
    },
    {
        q: "Does 6 weeks industrial training in Chandigarh focus on practical skills?",
        a: "Yes, the training focuses on hands-on experience, real industry tools, and live projects, unlike theory-based industrial training companies in Chandigarh."
    },
    {
        q: "Are live projects included in 6 weeks industrial training in Chandigarh?",
        a: "Yes, students work on real-time projects to build confidence, strengthen their portfolio, and become job-ready at the best industrial training institute in Chandigarh."
    },
    {
        q: "Is placement support available after 6 weeks industrial training in Chandigarh?",
        a: "Yes, B2B Campus provides placement assistance, resume building, and interview preparation, which sets it apart from other industrial training companies in Chandigarh."
    },
    {
        q: "Which courses are available under 6 weeks industrial training in Chandigarh?",
        a: "Courses include Digital Marketing, Web Development, Graphic Design, Artificial Intelligence, Cybersecurity, DevOps, and Logistics at the best industrial training institute in Chandigarh."
    },
    {
        q: "Are trainers experienced at B2B Campus?",
        a: "Yes, trainers at B2B Campus are industry professionals with strong practical expertise, making it one of the most reliable industrial training companies in Chandigarh."
    },
    {
        q: "Is 6 weeks industrial training in Chandigarh suitable for beginners?",
        a: "Absolutely. The beginner-friendly curriculum helps learners grow step-by-step, which is why B2B Campus is considered the best industrial training institute in Chandigarh."
    },
    {
        q: "How does 6 weeks industrial training in Chandigarh help career growth?",
        a: "It builds job-ready skills, practical exposure, and professional confidence through live training, distinguishing B2B Campus from other industrial training companies in Chandigarh."
    }
];

export const metadata = {
    title: 'Best Industrial Training in Chandigarh | B2B Campus',
    description:
        'B2B Campus offers top industrial training in Chandigarh with practical exposure, expert trainers, and job-ready programs to build skills. Apply today now.'
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
                title={'<span class="text-primary"> Why Choose </span> B2B Campus'}
                features_p={features}
            />
            <Youtubevideo />
            <TrainingSection
                title_upper={'About Our Industrial Training'}
                title_lower={'in Chandigarh'}
                description={'Industry-Ready Training Programs Designed for Real Careers'}
                features_p={featuresaboutus}
            />
            <CampusProgram />
            <Whatstudentget
                title={'<span class="text-primary"> What Students Receive with  </span> Industrial Training in Mohali'}

                items_p={items}
            />
            <div className="py-6 md:py-12">
                <Teachcareer placementData={statsdata} />
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
