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
        title: "Industry-Focused Practical Learning",
        description: "B2B Campus provides six months industrial training in Chandigarh with live projects, case studies, and simulations for hands-on industry readiness.",
        img: '/images/trainerImg.webp',
        variant: "A",
    },
    {
        title: "Extensive Career-Oriented Programs",
        description: "As leading industrial training companies in Chandigarh, we offer AI, cybersecurity, DevOps, web development, graphic design, digital marketing, and IoT programs.",
        img: '/images/training.webp',
        variant: "B",
    },
    {
        title: "Flexible Learning Models",
        description: "Our six months industrial training in Chandigarh includes online, hybrid, and self-paced options, mentoring students, professionals, homemakers, and entrepreneurs nationwide.",
        img: '/images/support.webp',
        variant: "C",
    },
    {
        title: "Experienced Trainers and Placement Assistance",
        description: "Among top industrial training companies in Chandigarh, our trainers offer mentorship, resume building, mock interviews, and guidance for successful career placements.",
        img: '/images/success.webp',
        variant: "D",
    },

];
const featuresaboutus = [
    {
        title: "Hands-On Practical Training",
        dis: "Learn using professional tools, software, and environments to gain real-world experience."
    },
    {
        title: "Beginner-Friendly Curriculum",
        dis: "Start from scratch and build expertise without any prior knowledge."
    },
    {
        title: "Live Project Exposure",
        dis: "Work on real projects to develop practical skills and confidence."
    },
    {
        title: "Daily Tasks and Weekly Assessments",
        dis: "Regular assignments and evaluations ensure measurable progress."
    },
    {
        title: "Soft Skills and Interview Readiness",
        dis: "Enhance communication, professionalism, and workplace confidence."
    },
    {
        title: "Resume Creation and Mock Interviews",
        dis: "Prepare resumes and practice interviews aligned with current hiring standards of top industrial training companies in Chandigarh."
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
        q: "What is six months industrial training in Chandigarh?",
        a: "It is a comprehensive program offering practical learning, live projects, and placement support, preparing students for real industry roles efficiently."
    },
    {
        q: "Which courses are offered in industrial training in Chandigarh?",
        a: "B2B Campus provides digital marketing, web development, AI, cybersecurity, DevOps, IoT, graphic design, video editing, and more career-focused programs."
    },
    {
        q: "Who can join six months industrial training in Chandigarh?",
        a: "Students, professionals, homemakers, and entrepreneurs can join B2B Campus programs to gain practical skills and hands-on experience."
    },
    {
        q: "What makes B2B Campus one of the best industrial training companies in Chandigarh?",
        a: "Experienced trainers, live projects, industry tools, flexible learning models, and placement support make B2B Campus top-rated among industrial training companies in Chandigarh."
    },
    {
        q: "Is prior experience required for industrial training in Chandigarh?",
        a: "No prior knowledge is required. Programs start from basics and gradually build practical skills through six months industrial training in Chandigarh."
    },
    {
        q: "Are there placement opportunities after six months industrial training in Chandigarh?",
        a: "Yes, B2B Campus provides resume building, mock interviews, career guidance, and placement assistance to help students secure jobs in their domain."
    },
    {
        q: "Can I choose online learning for six months industrial training in Chandigarh?",
        a: "Yes, B2B Campus offers online, hybrid, and self-paced learning options for industrial training in Chandigarh to suit different schedules."
    },
    {
        q: "Do students get real-time project experience in industrial training in Chandigarh?",
        a: "Absolutely, students work on live company-level projects, gaining hands-on exposure to industry tools and workflows during six months industrial training in Chandigarh."
    },
    {
        q: "How long is the six months industrial training in Chandigarh program?",
        a: "The program lasts six months, focusing on practical skills, live projects, industry tools, and placement assistance to make students job-ready."
    },
    {
        q: "Why choose B2B Campus among industrial training companies in Chandigarh?",
        a: "B2B Campus offers expert trainers, hands-on learning, live projects, flexible learning, and placement support, making it the ideal choice for six months industrial training in Chandigarh."
    }
];


export const metadata = {
    title: 'Six Months Industrial Training in Chandigarh | B2B Campus',
    description:
        'Start your career with six months industrial training in Chandigarh at B2B Campus. Learn practical skills, work on projects, and apply now today ahead now fast.'
};



const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={"Six Months Industrial Training in "}
                titleEnd={"Chandigarh to Make You Job Ready"}
                description={
                    "Skill-driven courses • Project-based practical learning • Placement and career support"
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
                title_upper={'About Our Six Months Industrial '}
                title_lower={'Training in Chandigarh'}
                description={'Industry-Ready Programs for Real Career Growth'}
                features_p={featuresaboutus}
                show_discription={true}
            />
            <CampusProgram />
            <Youtubevideo />
            <Whatstudentget
                title={'<span class="text-primary"> Student Benefits from Industrial  </span>  Training '}

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
                <PlacedStudent  showdata={1} />
            </div>
            <TopCompanys />
            <FaqSection faq_data={faq_data} />
        </div>
    );
};

export default page;
