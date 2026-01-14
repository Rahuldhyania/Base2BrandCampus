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
        title: "Industry-Aligned Learning",
        description: "Learners work on real-time projects, live case studies, and hands-on assignments that bridge the gap between academic knowledge and professional skills, helping them become confident and job-ready.",
        img: '/images/trainerImg.webp',
        variant: "A",
    },
    {
        title: "Career-Focused Training Programs",
        description: "We offer a wide range of career-driven courses under our six months industrial training in Mohali, covering trending and high-demand domains.",
        img: '/images/training.webp',
        variant: "B",
    },
    {
        title: "Flexible Learning Options",
        description: "This flexibility makes it suitable for students, working professionals, fresh graduates, and individuals planning a career transition.",
        img: '/images/support.webp',
        variant: "C",
    },
    {
        title: "Expert Mentorship and Placement Support",
        description: "Our six months industrial training in Mohali includes resume preparation, mock interviews, career counseling, and placement support to help candidates confidently step into professional roles.",
        img: '/images/success.webp',
        variant: "D",
    },
];
const featuresaboutus = [
    {
        title: "100% Practical Training Approach",
        dis: "Gain in-depth hands-on experience using real-world industry tools, modern technologies, and professional working environments throughout the training period."
    },
    {
        title: "Beginner-Friendly Course Structure",
        dis: "Start with core fundamentals and gradually advance to professional-level concepts, making learning smooth and effective even for students with no prior technical background."
    },
    {
        title: "Live Project-Oriented Learning",
        dis: "Work on multiple real-time and capstone projects that help you apply concepts practically while building strong confidence and job-ready expertise."
    },
    {
        title: "Monthly Performance Evaluations",
        dis: "Regular practical tasks and structured performance reviews ensure continuous learning, measurable progress, and skill enhancement over six months."
    },
    {
        title: "Career Readiness Training",
        dis: "Develop effective communication abilities, workplace ethics, teamwork skills, and interview confidence required for real-world professional roles."
    },
    {
        title: "Mock Interview Practice",
        dis: "Build industry-standard resumes and participate in mock interview sessions designed to match current recruitment and hiring expectations."
    }
];

const items = [
    { icon: "📘", text: "Complete Course Material & Notes" },
    { icon: "💼", text: "Real Company-Level Projects" },
    { icon: "🎯", text: "Job-Ready Skills Training" },
    { icon: "❓", text: "1:1 Doubt Support" },
    { icon: "📝", text: "LinkedIn Optimization" },
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
        q: "What is six months industrial training in Mohali?",
        a: "It is a practical, industry-focused program that builds job-ready skills through live projects, professional tools, and expert mentoring."
    },
    {
        q: "Who can join six months industrial training in Mohali?",
        a: "Students, freshers, and career changers can join. The beginner-friendly structure allows learners without technical backgrounds to grow confidently."
    },
    {
        q: "Is the training fully practical?",
        a: "Yes, the program focuses completely on hands-on learning, real-time projects, and practical tasks with minimal theory involvement."
    },
    {
        q: "Are live projects included?",
        a: "Yes, students work on real industry projects that simulate workplace challenges and help build professional experience."
    },
    {
        q: "Do you provide placement support?",
        a: "Yes, placement support includes resume building, interview preparation, mock interviews, and career guidance after training completion."
    },
    {
        q: "What courses are offered?",
        a: "Courses include IT, digital marketing, design, logistics, web development, AI, cybersecurity, and other industry-demanded skills."
    },
    {
        q: "How are students evaluated?",
        a: "Students are evaluated through daily tasks, project reviews, performance tracking, and continuous feedback from experienced mentors."
    },
    {
        q: "Are industry tools taught?",
        a: "Yes, learners train on professional tools and technologies currently used by experts across different industries."
    },
    {
        q: "Is it suitable for beginners?",
        a: "Yes, the program starts from basics and gradually advances, making it ideal for beginners and non-technical learners."
    },
    {
        q: "How does it help career growth?",
        a: "The training builds confidence, practical skills, industry exposure, and job readiness needed to succeed in competitive markets."
    }
];


export const metadata = {
    title: 'Six Months Industrial Training in Mohali | B2B Campus',
    description:
        'Looking for six months industrial training in Chandigarh? Join B2B Campus for hands-on training, real-world skills, and career-focused learning. Apply now.'
};



const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={"Six Months Industrial Training in"}
                titleEnd={"Mohali"}
                description={
                    "Skill-based programs • Hands-on experience • Placement assistance"
                }
                leftposter={"/images/fullstack_leftbanner.webp"}
                rightposter={"/images/fullstack_rightbanner.webp"}
            />

            <WhyChooseSection
                title={'<span class="text-primary"> Why Enroll in Six Months  </span> <br/> Training in Mohali?'}
                features_p={features}
            />
            <Youtubevideo />
            <TrainingSection
                title_upper={'About Our Six Months Industrial '}
                title_lower={'Training in Mohali'}
                description={'Industry-Ready Programs Designed for Long-Term Career Growth'}
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
                    title={'No Classroom Theory Purely Skill-Driven <br/> <span class="text-primary"> Industrial training </span>'}
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
