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

const features = [
    {
        title: "Industry-Focused Practical Training",
        description: "B2B Campus offers six weeks industrial training in Mohali designed around real industry requirements. Students gain confidence through live projects, case studies, simulations, and practical exposure beyond theory.",
        img: '/images/trainerImg.webp',
        variant: "A",
    },
    {
        title: "Career-Oriented Course Options",
        description: "Recognized as one of the trusted industrial training institutes in Mohali, B2B Campus provides diverse programs including digital marketing, web development, graphic design, AI, cybersecurity, and advanced IT technologies.",
        img: '/images/training.webp',
        variant: "B",
    },
    {
        title: "Flexible Learning Models",
        description: "Our six weeks industrial training in Mohali is available in online, offline, and hybrid formats. With mentor-led guidance, the programs are ideal for students, working professionals, entrepreneurs, and career switchers.",
        img: '/images/support.webp',
        variant: "C",
    },
    {
        title: "Expert Trainers & Placement Support",
        description: "As a leading industrial training institute in Mohali, B2B Campus delivers expert-led training along with resume building, interview preparation, and placement assistance to help learners enter the workforce confidently.",
        img: '/images/success.webp',
        variant: "D",
    },
];

const featuresaboutus = [
    {
        title: "100% Practical Training Approach",
        dis: "Gain hands-on experience using real industry tools, technologies, and professional working environments."
    },
    {
        title: "Beginner-Friendly Course Design",
        dis: "Start from the basics and progress step by step, making learning simple and effective even without prior technical experience."
    },
    {
        title: "Live Project-Based Learning",
        dis: "Work on real-time projects that help you apply concepts practically while building confidence and job-ready skills."
    },
    {
        title: "Daily Tasks & Weekly Performance Reviews",
        dis: "Regular assignments and structured evaluations ensure consistent learning, improvement, and skill assessment."
    },
    {
        title: "Soft Skills & Interview Preparation",
        dis: "Develop strong communication skills, workplace professionalism, and interview confidence for real-world job roles."
    },
    {
        title: "Resume Building & Mock Interview Sessions",
        dis: "Create industry-standard resumes and participate in mock interviews aligned with current hiring practices."
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
        q: "What is included in 6 weeks industrial training in Mohali at B2B Campus?",
        a: "The 6 weeks industrial training in Mohali includes practical sessions, live projects, assessments, soft skills training, and placement support."
    },
    {
        q: "Who can join 6 weeks industrial training in Mohali?",
        a: "Students, freshers, professionals, and career changers can enroll in 6 weeks industrial training in Mohali without prior technical experience."
    },
    {
        q: "Is the 6 weeks industrial training in Mohali beginner friendly?",
        a: "Yes, the 6 weeks industrial training in Mohali starts from basics and gradually advances to industry-level practical skills."
    },
    {
        q: "Do students work on live projects during training?",
        a: "Yes, 6 weeks industrial training in Mohali includes real-time projects that help learners gain hands-on experience and job-ready confidence."
    },
    {
        q: "Does 6 weeks industrial training in Mohali provide placement assistance?",
        a: "The 6 weeks industrial training in Mohali offers resume building, mock interviews, career guidance, and placement assistance."
    },
    {
        q: "What learning modes are available for 6 weeks industrial training in Mohali?",
        a: "B2B Campus offers online, offline, and hybrid options for 6 weeks industrial training in Mohali."
    },
    {
        q: "Are trainers experienced industry professionals?",
        a: "Yes, 6 weeks industrial training in Mohali is delivered by experienced trainers with strong industry and practical teaching backgrounds."
    },
    {
        q: "How are students evaluated during training?",
        a: "The 6 weeks industrial training in Mohali includes daily tasks, weekly assessments, and continuous performance reviews."
    },
    {
        q: "Which courses are covered under 6 weeks industrial training in Mohali?",
        a: "Courses include digital marketing, web development, graphic design, AI, cybersecurity, logistics, and more in 6 weeks industrial training in Mohali."
    },
    {
        q: "How does 6 weeks industrial training in Mohali help career growth?",
        a: "The 6 weeks industrial training in Mohali builds practical skills, confidence, and industry exposure that improves employability and career opportunities."
    }
];


export const metadata = {
    title: 'Six Week Industrial Training in Mohali | B2B Campus',
    description:
        'B2B Campus offers six week industrial training in Mohali with hands-on practice, real projects, and career-focused learning. Apply today now to grow skills fast.'
};




const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={"Six Weeks Industrial Training in"}
                titleEnd={"Mohali to Become Job-Ready"}
                description={
                    "Skill-oriented courses • Project-based practical learning • Placement and career support"
                }
                leftposter={"/images/fullstack_leftbanner.webp"}
                rightposter={"/images/fullstack_rightbanner.webp"}
            />

            <WhyChooseSection
                title={'<span class="text-primary"> Why Choose Us for Industrial </span> <br/> Training in Mohali?'}
                features_p={features}
            />
            <Youtubevideo />
            <TrainingSection
                title_upper={'About Our 6 Weeks Industrial '}
                title_lower={'Training in Mohali'}
                description={'Industry-Ready Programs Designed for Career-Focused Learning'}
                features_p={featuresaboutus}
                show_discription={true}
            />
            <CampusProgram />
            <Whatstudentget
                title={'<span class="text-primary"> What Students Receive with  </span> <br/> Industrial Training '}

                items_p={items}
            />
            <div className="py-6 md:py-12">
                <Teachcareer
                    placementData={statsdata}
                    // scratchCards_cus={scratchCards_cus}
                    title={'No theory, completely hands-on <br/> <span class="text-primary"> Industrial training </span>'}
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
