import React from 'react'
import Page2Banner from '../Components/seo-pages/Page2Banner'
import ContactForm from '../Components/Page-Components/From'
import Page2TitleDisList from '../Components/seo-pages/Page2TitleDisList'
import Page2FinalThoughts from '../Components/seo-pages/Page2FinalThoughts';

const listData1 = [
    {
        title: "Here’s why industrial training matters:",
        listdata: [
            "Hands-on experience through real projects that simulate workplace environments",
            "Exposure to industry tools, technologies, frameworks, and professional software",
            "Improved professional confidence by working with mentors and collaborating in teams",
            "Better job readiness as employers prefer candidates with practical training experience"
        ]
    }
];
const listData2 = [
    {
        title: "The best part? B2B Campus offers Free Six Months Industrial Training in Chandigarh specifically for:",
        listdata: [
            "B.Tech Students",
            "MCA Students",
            "Diploma Students"
        ]
    }
];
const listData3 = [
    {
        title: "The program is open to:",
        listdata: [
            "Students currently enrolled in or recently graduated from B.Tech (all streams)",
            "Students pursuing or graduated with MCA",
            "Students enrolled in Diploma Engineering programs"
        ]
    }
];
const listData4 = [
    {
        title: "The training at B2B Campus focuses on practical skill development in areas such as:",
        listdata: [
            "Full Stack Web Development",
            "Mobile App Development",
            "Artificial Intelligence & Machine Learning",
            "Data Science & Analytics",
            "Cloud Computing",
            "DevOps",
            "Cybersecurity",
            "Software Testing",
            "Digital Marketing",
            "UI/UX Design"
        ]
    }
];
const listData5 = [
    {
        title: "Unlike traditional training centers that just teach theory, B2B Campus ensures students work on live projects for real businesses. This helps students:",
        listdata: [
            "Understand real-world team workflows",
            "Use version control systems like Git",
            "Complete assigned tasks within deadlines",
            "Present project outcomes confidently to mentors"
        ]
    }
];
const listData6 = [
    {
        title: "Training at B2B Campus isn’t just about going through modules. You’ll be guided by industry professionals and experienced mentors who:",
        listdata: [
            "Provide personalized feedback to help students improve",
            "Conduct doubt-clearing sessions for better understanding",
            "Prepare students for interviews and job opportunities",
            "Help build professional portfolios showcasing skills and projects"
        ]
    }
];
const listData7 = [
    {
        title: "Software Development",
        listdata: [
            "Core programming languages like Java, Python, JavaScript",
            "Frameworks such as Spring Boot, React, Angular",
            "Backend & front-end integration",
            "Database management"
        ]
    },
    {
        title: "Data Science & AI",
        listdata: [
            "Data preprocessing",
            "Machine learning algorithms",
            "Python libraries (NumPy, Pandas, Scikit-Learn)",
            "Model deployment"
        ]
    },
    {
        title: "Cloud & DevOps",
        listdata: [
            "AWS, Azure fundamentals",
            "CI/CD tools",
            "Containerization with Docker & Kubernetes"
        ]
    },
    {
        title: "Cybersecurity",
        listdata: [
            "Ethical hacking basics",
            "Network security protocols",
            "Vulnerability assessments"
        ]
    },
    {
        title: "Digital Marketing",
        listdata: [
            "SEO, SEM strategies",
            "Social media campaigns",
            "Analytics & performance tracking"
        ]
    }
];
const finalthoughts = [
    'Many students who joined the program with limited industry experience now work at top tech firms, startups, and multinational companies.',
    'From fresh B.Tech graduates to diploma holders seeking career growth, the free six-month training at B2B Campus has paved the way for many success stories. These testimonials reflect the quality of training, mentorship, and the practical edge students gain.'
];
const page = () => {
    return (
        <div className="main-bg">
            <div className="cus_container relative">
                <div className="flex gap-2">
                    <div className="lg:w-[70%]">
                        <Page2Banner
                            title={"Free Six Months Industrial Training in Chandigarh for B.Tech, MCA, and Diploma Students"}
                            discription1={`In this highly competitive job market, merely earning a degree in engineering or computer science is no longer enough. Employers seek practical skills, industry exposure, and job-ready professionals who can contribute from day one. <br/>
                            That’s where Free Six Months Industrial Training in Chandigarh comes into play, especially for B.Tech, MCA, and Diploma students who want to gain real experience, boost their resumes, and start careers with confidence.
                            `}
                            discription2={"If you’re a student looking to bridge the gap between theoretical knowledge and practical expertise, B2B Campus in Chandigarh and Mohali offers one of the most transformative industrial training programs, completely free with scholarship opportunities and stipends for deserving candidates upon clearing entrance assessments."}
                        />
                        <Page2TitleDisList
                            title={"1. Why Industrial Training Matters?"}
                            discription1={"Academic coursework gives you foundational knowledge but it’s industrial training that prepares you for the real world."}
                            listData={listData1}
                            discription2={"However, high-quality industrial training usually comes with a price tag. Tuition fees for training programs can range from thousands to tens of thousands of rupees — a barrier for many students."}
                        />
                        <Page2TitleDisList
                            title={"2. Introducing B2B Campus: Chandigarh & Mohali’s Leading Training Institute"}
                            discription1={"B2B Campus, located in the heart of Chandigarh and Mohali, has built a strong reputation for transforming students into industry professionals. The institute focuses on IT, software development, digital technologies, and advanced applications, with a curriculum aligned to real job requirements."}
                            listData={listData2}
                            discription2={"This program is designed to empower learners with practical skills, real project experience, and job placement support."}
                        />
                        <Page2TitleDisList
                            title={"3. Who Can Apply?"}
                            listData={listData3}
                            discription2={"Regardless of your specialization, whether it’s Computer Science, Electronics, IT, Mechanical, or others, B2B Campus has relevant modules to match your interests and career goals."}
                        />
                        <Page2TitleDisList
                            title={"4. Absolutely Free with Scholarships"}
                            discription1={'Many training programs charge hefty fees. B2B Campus breaks that barrier by offering the industrial training free of cost to selected candidates. Students have the opportunity to earn scholarships based on performance in an entrance test conducted by B2B Campus.'}
                            discription2={"Clear the test, secure a scholarship, and your training becomes fully funded."}
                        />
                        <Page2TitleDisList
                            title={"5. Stipends for Top Performers"}
                            discription1={'To further motivate excellence, B2B Campus provides monthly stipends to students who demonstrate exceptional performance during their six-month training. This means you not only learn for free, you could also earn while you train, a unique advantage rarely found elsewhere.'}
                        />
                        <Page2TitleDisList
                            title={"6. Industry-Aligned Curriculum"}
                            listData={listData4}
                            discription2={'These are high-demand fields in today’s job market — and the curriculum is structured around real industry needs.'}
                        />
                        <Page2TitleDisList
                            title={"7. Live Projects with Real Companies"}
                            listData={listData5}
                            discription2={'Such exposure significantly increases your employability.'}
                        />
                        <Page2TitleDisList
                            title={"8. Expert Faculty & Mentorship"}
                            listData={listData6}
                            discription2={'This mentorship distinguishes B2B Campus from conventional training programs.'}
                        />
                        <Page2TitleDisList
                            title={"9. What You’ll Learn"}
                            discription1={'Depending on your chosen specialization, your training will cover'}
                            listData={listData7}
                            discription2={'These skills are not only relevant, they are in demand by employers worldwide.'}
                        />
                        <Page2TitleDisList
                            title={"10. Certification"}
                            discription1={'After completing the program, you’ll receive a certificate from B2B Campus, a credential that is recognized by employers across industries.'}
                        />
                        <Page2TitleDisList
                            title={"11. Professional Portfolio"}
                            discription1={'Your live project work becomes part of your portfolio, a powerful proof of your capabilities during job interviews.'}
                        />
                        <Page2TitleDisList
                            title={"12. Placement Assistance"}
                            discription1={'B2B Campus also offers placement support to help you secure internships or entry-level jobs after training.'}
                        />
                        <Page2TitleDisList
                            title={"13. Networking Opportunities"}
                            discription1={'Training alongside peers, engaging with mentors, and working on company projects opens doors to professional networks.'}
                        />
                    </div>
                    <div className="w-[30%] py-6 md:py-12 sticky top-0 h-fit hidden lg:block">
                        <ContactForm />
                    </div>
                </div>
                <Page2FinalThoughts
                    title={'Real Success Stories'}
                    finalthoughts={finalthoughts}
                />
            </div>
        </div>
    )
}

export default page
