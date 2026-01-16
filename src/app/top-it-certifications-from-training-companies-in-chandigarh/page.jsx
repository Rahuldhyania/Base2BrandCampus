import React from 'react';
import Page2Banner from '../Components/seo-pages/Page2Banner';
import ContactForm from '../Components/Page-Components/From';
import Page2TitleDisList from '../Components/seo-pages/Page2TitleDisList';
import Page2FinalThoughts from '../Components/seo-pages/Page2FinalThoughts';

const listData1 = [
    {
        title: "IT certifications are useful because:",
        listdata: [
            "They help you learn skills step by step",
            "They increase your chances of getting a job",
            "They build confidence",
            "They are useful for students, freshers, and working people"
        ]
    }
];
const listData2 = [
    {
        title: "At B2B Campus, students learn web development in an easy way:",
        listdata: [
            "What websites are",
            "How web pages are created",
            "How colors, text, and images are added",
            "How websites work on mobile phones"
        ]
    }
];
const listData3 = [
    {
        title: "At B2B Campus, students learn:",
        listdata: [
            "Frontend website design",
            "Backend working",
            "Databases",
            "Real-life projects"
        ]
    }
];
const listData4 = [
    {
        title: "At B2B Campus, the digital marketing certification covers:",
        listdata: [
            "Social media promotion",
            "Website marketing basics",
            "Online advertising",
            "Content creation"
        ]
    }
];
const listData5 = [
    {
        title: "At B2B Campus, students learn Google Ads in a very simple way:",
        listdata: [
            "What Google Ads are",
            "How ads appear on Google",
            "How businesses use ads",
            "Basic ad setup and understanding"
        ]
    }
];
const listData6 = [
    {
        title: "At B2B Campus, students learn:",
        listdata: [
            "What data means",
            "How to read simple charts",
            "How companies use data",
            "Easy tools to understand information"
        ]
    }
];
const listData7 = [
    {
        title: "At B2B Campus, students learn:",
        listdata: [
            "What AI is",
            "Where AI is used in daily life",
            "Simple examples of smart machines",
            "Easy tools and concepts"
        ]
    }
];
const listData8 = [
    {
        title: "At B2B Campus, the Python certification includes:",
        listdata: [
            "Basic coding concepts",
            "Writing simple programs",
            "Logical thinking",
            "Real-world use of Python"
        ]
    }
];
const listData9 = [
    {
        title: "At B2B Campus, students learn:",
        listdata: [
            "What software testing is",
            "How to find errors",
            "Manual testing basics",
            "Simple testing methods"
        ]
    }
];
const listData10 = [
    {
        title: "At B2B Campus, students learn:",
        listdata: [
            "What hackers are",
            "How cyber attacks happen",
            "How to stay safe online",
            "Basic security tools"
        ]
    }
];
const listData11 = [
    {
        title: "At B2B Campus, students learn:",
        listdata: [
            "What cloud storage is",
            "How companies store data online",
            "Basic cloud concepts",
            "Real-life examples"
        ]
    }
];
const listData12 = [
    {
        title: "At B2B Campus, the truck dispatching certification teaches:",
        listdata: [
            "What truck dispatching is",
            "How loads are assigned",
            "How dispatchers communicate with drivers",
            "Software and tools used in dispatching"
        ]
    }
];
const listData13 = [
    {
        title: "Reasons students choose B2B Campus:",
        listdata: [
            "Easy language teaching",
            "Beginner-friendly courses",
            "Practical projects",
            "Career-focused certifications",
            "Supportive trainers"
        ]
    }
];
const listData14 = [
    {
        title: "The main goal of IT certifications is to build a strong future. Certifications from B2B Campus help students:",
        listdata: [
            "Learn real skills",
            "Gain confidence",
            "Prepare for interviews",
            "Start IT careers"
        ]
    }
];


const finalthoughts = [
    'IT certifications are the key to a successful future in technology. They help students learn useful skills and open doors to many job opportunities. Chandigarh is a great place to study IT, and B2B Campus proudly stands among the Best IT training companies in Chandigarh.',
    'From web development and Python to Google Ads, truck dispatching, data analytics, and AI, B2B Campus offers top certifications in a simple and student-friendly way. With the right certification and guidance, any student can build a bright and successful career in IT.'
]
const page = () => {
    return (
        <div className="main-bg">
            <div className="cus_container relative">
                <div className="flex gap-2">
                    <div className="lg:w-[70%]">
                        <Page2Banner
                            title={"Top Certifications You Can Earn from IT Training Companies in Chandigarh"}
                            discription1={`Technology is a big part of our lives today. We use mobile phones, laptops, apps, and websites every day. Behind all these things are people who learn IT skills and work in technology jobs. If you want to build a future in technology, earning the right certification is very important. <br/> 
                            Chandigarh is becoming one of the most popular cities for learning IT skills. Many students search online for the Best IT training companies in Chandigarh to start their career journey. Among them, B2B Campus in Chandigarh and Mohali is known for providing easy-to-understand, job-focused IT certifications for students of all levels.  
                            `}
                            discription2={"This blog explains the top IT certifications you can earn in Chandigarh, written in very simple language so even a Class 5 student can understand."}
                        />
                        <Page2TitleDisList
                            title={"1. Why IT Certifications Matter for Students"}
                            discription1={"An IT certification is like a certificate that shows what you have learned. It tells companies that you know how to use computers, software, or technology tools."}
                            listData={listData1}
                            discription2={"At B2B Campus, certifications are designed in a simple way so students never feel scared of technology."}
                        />
                        <Page2TitleDisList
                            title={"2. Web Development Certification"}
                            discription1={"Web development means making websites. Every website you open on the internet is created by a web developer."}
                            listData={listData2}
                            discription2={"This certification is perfect for beginners. Many students who search for the Best IT training companies in Chandigarh choose B2B Campus for web development because of its practical teaching style."}
                        />
                        <Page2TitleDisList
                            title={"3. Full Stack Development Certification"}
                            discription1={"Full stack development means working on both sides of a website—the part users see and the part that works behind the scenes."}
                            listData={listData3}
                            discription2={"This certification helps students prepare for professional IT jobs. Even though the name sounds big, B2B Campus teaches it in a very simple and friendly way."}
                        />
                        <Page2TitleDisList
                            title={"4. Digital Marketing Certification"}
                            discription1={"Digital marketing is about promoting businesses online. This includes social media, websites, and online advertisements."}
                            listData={listData4}
                            discription2={"This course is easy to learn and very popular among students. It is one of the most chosen courses when students look for the Best IT training companies in Chandigarh."}
                        />
                        <Page2TitleDisList
                            title={"5. Google Ads Certification"}
                            discription1={"Google Ads is a special part of digital marketing. It helps businesses show ads on Google."}
                            listData={listData5}
                            discription2={"This certification is useful for students who want jobs in marketing or want to help businesses grow online. B2B Campus explains Google Ads using real examples so learning becomes easy."}
                        />
                        <Page2TitleDisList
                            title={"6. Data Analytics Certification"}
                            discription1={"Data analytics means understanding information and numbers to help companies make decisions."}
                            listData={listData6}
                            discription2={"This certification is taught step by step. Even students who think data is difficult can understand it easily at B2B Campus."}
                        />
                        <Page2TitleDisList
                            title={"7. Artificial Intelligence and Machine Learning Certification"}
                            discription1={"Artificial Intelligence means making computers think smartly. Machine Learning means computers learning from data."}
                            listData={listData7}
                            discription2={"This certification helps students understand future technology. B2B Campus makes these advanced topics easy for beginners."}
                        />
                        <Page2TitleDisList
                            title={"8. Python Programming Certification"}
                            discription1={"Python is one of the easiest coding languages to learn."}
                            listData={listData8}
                            discription2={"This course is great for students starting their IT journey. Many learners choose B2B Campus when searching for the Best IT training companies in Chandigarh for Python training."}
                        />
                        <Page2TitleDisList
                            title={"9. Software Testing Certification"}
                            discription1={"Software testing means checking apps and websites for mistakes before they are used by people."}
                            listData={listData9}
                            discription2={"This certification is good for students who want IT jobs without heavy coding. B2B Campus explains everything with simple examples."}
                        />
                        <Page2TitleDisList
                            title={"10. Cyber Security Certification"}
                            discription1={"Cyber security is about protecting computers and data from online threats."}
                            listData={listData10}
                            discription2={"This certification is very important in today’s digital world. B2B Campus teaches cyber security in a beginner-friendly way."}
                        />
                        <Page2TitleDisList
                            title={"11. Cloud Computing Certification"}
                            discription1={"Cloud computing means saving data on the internet instead of on a computer."}
                            listData={listData11}
                            discription2={"This certification helps students understand modern IT systems easily."}
                        />
                        <Page2TitleDisList
                            title={"12. Truck Dispatching Certification"}
                            discription1={"Truck dispatching is a growing career option that uses technology to manage truck transportation and logistics."}
                            listData={listData12}
                            discription2={"This course is simple to understand and offers good job opportunities. Many students now choose this course when looking for the Best IT training companies in Chandigarh."}
                        />
                        <Page2TitleDisList
                            title={"13. Why B2B Campus Is Among the Best IT Training Companies in Chandigarh"}
                            discription1={"B2B Campus is trusted by students because it focuses on simple learning, practical training, and career growth."}
                            listData={listData13}
                            discription2={"B2B Campus in Chandigarh and Mohali offers courses for students, freshers, and working professionals."}
                        />
                        <Page2TitleDisList
                            title={"14. Certifications That Help You Get Jobs"}
                            listData={listData14}
                            discription2={"Many students begin with one course and later upgrade their skills with advanced certifications at B2B Campus."}
                        />
                    </div>
                    <div className="w-[30%] py-6 md:py-12 sticky top-0 h-fit hidden lg:block">
                        <ContactForm />
                    </div>
                </div>
                <Page2FinalThoughts
                    title={'Conclusion'}
                    finalthoughts={finalthoughts}
                />
            </div>
        </div>
    )
}

export default page
