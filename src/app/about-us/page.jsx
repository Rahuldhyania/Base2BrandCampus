import React from 'react'
import CoursesBanner from '../Components/Courses/CoursesBanner'
import AboutWhoWeAre from '../Components/Page-Components/AboutWhoWeAre'
import AboutWhatWeDo from '../Components/Page-Components/AboutWhatWeDo'
import AboutWhyChoose from '../Components/Page-Components/AboutWhyChoose'
import Journeywithb2b2 from '../Components/Page-Components/Journeywithb2b2'
import FaqSection from '../Components/Page-Components/FaqSection'
import Youtubevideo from '../Components/Page-Components/Youtubevideo'
import SubscribeYoutube from '../Components/Page-Components/SubscribeYoutube'


const faq_data = [
    {
        q: "What is Industrial Training?",
        a:
            "Industrial Training is a practical, job-oriented training program where students learn real industry tools, workflows, and skills through hands-on practice and live projects."
    },
    {
        q: "Is this Industrial Training suitable for beginners?",
        a:
            "Yes. This program is designed for beginners as well as intermediate learners. We start from fundamentals and gradually move to advanced, industry-level concepts."
    },
    {
        q: "What domains are covered in Industrial Training?",
        a:
            "We offer multiple training domains including Graphic Designing, Video Editing, Web Development, Full Stack Development, Python/Java, Web Designing, IoT, AI, WordPress, and Digital Marketing."
    },
    {
        q: "Will I get hands-on practical experience?",
        a:
            "Absolutely. The training focuses on 100% practical learning with real tools, assignments, case studies, and live industry projects."
    },
    {
        q: "Do you provide live projects and real client work?",
        a:
            "Yes. Students work on live projects and real-world scenarios that help them understand actual industry requirements."
    },
    {
        q: "How does this training help in career growth?",
        a:
            "Industrial Training helps you become job-ready by building practical skills, improving confidence, creating a strong portfolio, and preparing you for real interviews."
    },
    {
        q: "Will I receive a certificate after completion?",
        a:
            "Yes. After successfully completing the training, you will receive an industry-recognized certification."
    },
    {
        q: "Do you provide placement or career support?",
        a:
            "Yes. We offer career guidance, resume building, interview preparation, mock interviews, and placement assistance through our industry network."
    },
    {
        q: "Who will be my trainers?",
        a:
            "You will be trained by experienced industry professionals who follow modern teaching methods and provide continuous mentoring."
    },
    {
        q: "What makes your Industrial Training program different?",
        a:
            "Our program stands out due to practical-first learning, real projects, industry-standard tools, personal mentoring, and strong focus on portfolio and career readiness."
    },
    {
        q: "How long is the Industrial Training duration?",
        a:
            "The duration typically ranges from 3 to 6 months, depending on the selected domain and learning pace."
    },
    {
        q: "How can I enroll in the Industrial Training program?",
        a:
            "You can enroll by contacting us, attending a counseling session, selecting your preferred domain and batch, and starting your training journey."
    }
];

const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={'Industry-Ready Industrial Training'}
                titleEnd={'at B2B Campus'}
                description={"Learn from industry experts. Work on live projects. Get career-ready."}
                leftposter={'/images/png-young-indian-man-student-photo-happy 1.webp'}
                rightposter={'/images/smiling-young-woman-with-laptop-backpack 1.webp'}
            />
            <AboutWhoWeAre experinece_heading="6+" experinece_description="Years of Excellence in Training" />
            < AboutWhatWeDo our_approach_headig="Our Training Approach" learn_by_doing="Learn by Doing" learn_description="Hands-on training with real projects that prepare you for the industry" />
            <AboutWhyChoose />
            <Youtubevideo />
            <SubscribeYoutube />
            <FaqSection
                faq_data={faq_data}
            />
            <Journeywithb2b2 PlacedStudent={false} />
        </div>
    )
}

export default page
