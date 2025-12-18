import React from 'react';
import CoursesBanner from '../Components/Courses/CoursesBanner';
import placementleft from "../../../public/images/placementleft_banner.webp";
import placementright from "../../../public/images/placementright_banner.webp";
import ClassroomSkills from '../Components/Page-Components/ClassroomSkills';
import PlacedStudent from '../Components/Page-Components/PlacedStudent';
import PlacementPartner from '../Components/Page-Components/PlacementPartner';
import Youtubevideo from '../Components/Page-Components/Youtubevideo';
import SubscribeYoutube from '../Components/Page-Components/SubscribeYoutube';
import ClassroomGallery from '../Components/Page-Components/ClassroomGallery';
import SuccessfullyTrained from '../Components/Page-Components/SuccessfullyTrained';
import FaqSection from '../Components/Page-Components/FaqSection';
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
const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={'From Classroom Learning to High-Growth'}
                titleEnd={'Company Opportunities'}
                description={"At B2B Campus, every student grows from classroom learning to real career success."}
                leftposter={placementleft}
                rightposter={placementright}
            />
            <div>

            </div>
            <div className='main-bg'>
                <ClassroomSkills />
                <PlacedStudent />
            </div>
            <PlacementPartner />
            <Youtubevideo />
            <div className='hidden lg:block'>
                <SubscribeYoutube />
            </div>
            <ClassroomGallery />
            <SuccessfullyTrained />
            <FaqSection
                faq_data={faq_data}
            />
        </div>
    )
}

export default page
