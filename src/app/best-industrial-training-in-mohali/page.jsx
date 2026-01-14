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
        title: "Expert Trainers",
        description: "Trusted, skilled trainers with industry experience guide you step-by-step during your best industrial training in Mohali journey.",
        img: '/images/trainerImg.webp',
        variant: "A",
    },
    {
        title: "Hands-on Training",
        description: "Fully practical, skill-oriented training designed to make you job-ready in real-world professional roles.",
        img: '/images/training.webp',
        variant: "B",
    },
    {
        title: "Career Support",
        description: "Placement-focused guidance with resume building, mock interviews, and ongoing support for your career growth.",
        img: '/images/support.webp',
        variant: "C",
    },
    {
        title: "Success Focused",
        description: "We focus on building real skills and career success, not just providing certificates for best industrial training in Mohali.",
        img: '/images/success.webp',
        variant: "D",
    },

];
const featuresaboutus = [
    {
        title: "100% Practical Training",
        dis: "Gain hands-on experience with real tools in the best industrial training in Mohali."
    },
    {
        title: "Beginner-Friendly Curriculum",
        dis: "Start from basics confidently, no prior knowledge needed at the best industrial training in Mohali."
    },
    {
        title: "Live Project Experience",
        dis: "Work on real-world projects to enhance skills through the best industrial training in Mohali."
    },
    {
        title: "Daily Tasks & Weekly Assessments",
        dis: "Regular assignments and evaluations ensure measurable learning at the best industrial training in Mohali."
    },
    {
        title: "Soft Skills & Interview Preparation",
        dis: "Improve communication, professionalism, and confidence at the best industrial training in Mohali."
    },
    {
        title: "Resume Building & Mock Interviews",
        dis: "Create professional resumes and practice interviews at the best industrial training in Mohali."
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
        q: "What makes this program special?",
        a: "This program offers hands-on learning, live projects, expert trainers, and industry tools, making it the best industrial training in Mohali for students seeking job-ready skills."
    },
    {
        q: "Who can join this training program?",
        a: "Beginners, graduates, and career-switchers can join, as the best industrial training in Mohali starts from basics and gradually builds practical skills through guided, hands-on learning."
    },
    {
        q: "Is the training practical or theoretical?",
        a: "The course focuses on real-world execution, live projects, and tools, ensuring the best industrial training in Mohali remains fully practical and aligned with industry requirements."
    },
    {
        q: "Do students work on live projects?",
        a: "Yes, students actively work on live assignments and case studies, which makes this program the best industrial training in Mohali for gaining real workplace experience."
    },
    {
        q: "Will this training help with jobs?",
        a: "By focusing on skills employers demand, this program positions learners confidently for interviews and roles, proving why it is the best industrial training in Mohali."
    },
    {
        q: "Are trainers experienced professionals?",
        a: "All sessions are guided by industry-experienced trainers who mentor students closely, ensuring the best industrial training in Mohali delivers practical insights and professional guidance."
    },
    {
        q: "What domains are covered in training?",
        a: "The program covers technology, marketing, logistics, and development fields, making it the best industrial training in Mohali for learners targeting diverse, high-demand career paths."
    },
    {
        q: "Is the curriculum beginner-friendly?",
        a: "Yes, the structured curriculum begins from fundamentals and grows gradually, which defines the best industrial training in Mohali for beginners without prior technical experience."
    },
    {
        q: "How are students evaluated during training?",
        a: "Students complete daily tasks and weekly assessments that track progress, reinforce learning, and maintain the best industrial training in Mohali quality standards."
    },
    {
        q: "Why should I choose this institute?",
        a: "With a hands-on approach, expert trainers, and live exposure, this institute stands out as the best industrial training in Mohali for serious career-focused learners."
    }
];


export const metadata = {
    title: 'Best Industrial Training in Mohali | B2B Campus',
    description:
        'Experience practical industrial training in Mohali at B2B Campus with real-world projects and industry mentors. Start learning now today and grow fast here now.'
};



const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={"Your Investment, Our Expertise"}
                titleEnd={"Our Course Leads You to a Job"}
                description={
                    "Skill-focused course • practical training • full placement support"
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
                title_upper={'About Our 6 Weeks Industrial <br/> Training in Mohali'}
                title_lower={'Industry-Ready Training Programs Designed for <br/> Real Career Success and Growth'}
                description={'Industry-Ready Programs for Real Career Growth'}
                features_p={featuresaboutus}
                show_discription={true}
            />
            <CampusProgram />
            <Whatstudentget
                title={'<span class="text-primary"> Key Benefits Students Will Receive   </span> '}

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
