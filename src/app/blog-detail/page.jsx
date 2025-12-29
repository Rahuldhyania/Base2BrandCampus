import React from 'react'
import BlogDetailsHead from '../Components/Page-Components/BlogDetailsHead'
import Journeywithb2b2 from '../Components/Page-Components/Journeywithb2b2'
import FaqSection from '../Components/Page-Components/FaqSection'
import SingleDetailBlogContent from '../Components/Page-Components/SingleDetailBlogContent'


const page = () => {
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
    return (
        <div>
            <BlogDetailsHead backbtn="Back to Blogs" share_btn="Share" />
            <SingleDetailBlogContent />

            <FaqSection faq_data={faq_data} />
            <Journeywithb2b2 PlacedStudent={false} />
        </div>
    )
}

export default page
