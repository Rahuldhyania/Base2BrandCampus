import React from "react";
import ContactForm from "../Components/Page-Components/From";
import Page2Banner from "../Components/seo-pages/Page2Banner";3
import Page2TitleDisList from "../Components/seo-pages/Page2TitleDisList";
import Page2FinalThoughts from "../Components/seo-pages/Page2FinalThoughts";
const pageData = [
  {
    title: "1. What Is Six Weeks Industrial Training?",
    description1:
      "Six weeks industrial training is a short professional training program designed for students. It usually happens during summer or winter breaks. This training helps students learn how real industries work.",
    description2:
      "Instead of only reading books, students get hands-on experience. They learn by doing real tasks. During six weeks industrial training in Chandigarh, students work on projects, use software, and learn from experts. This makes learning more interesting and useful."
  },
  {
    title: "2. Why Chandigarh Is Best for Industrial Training?",
    description1:
      "Chandigarh is a well-planned and student-friendly city. It has many IT companies, training centers, and learning opportunities. Students from different states come here for training.",
    description2:
      "Six weeks industrial training in Chandigarh is popular because the city offers quality education at reasonable fees. Institutes like B2B Campus provide industry-level training with expert guidance. Chandigarh’s calm environment helps students focus on learning and skill development."
  },
  {
    title: "3. How Industrial Training Improves Job Readiness?",
    description1:
      "Job readiness means being prepared to work confidently in a company. Many students are smart but lack practical knowledge. Six weeks industrial training in Chandigarh helps students become ready for jobs by teaching real-world skills.",
    description2:
      "Students learn how to work in teams, meet deadlines, and complete tasks like professionals. This training helps them understand what companies expect from employees."
  },
  {
    title: "4. Students Learn Real Skills, Not Just Theory",
    description1:
      "In colleges, students mostly learn theory from books. But companies need people who can apply knowledge in real situations. Industrial training helps students practice what they learn.",
    description2:
      "During six weeks industrial training in Chandigarh, students use real tools and software. At B2B Campus, trainers explain concepts in a simple way and help students practice daily. This improves understanding and builds strong skills."
  },
  {
    title: "5. Training in Different Job Roles",
    description1:
      "One big advantage of six weeks industrial training in Chandigarh is that students can choose training according to their interests. This helps them understand which career path suits them best.",
    description2:
      "Let us look at different job roles taught during industrial training."
  },
  {
    title: "6. Software Developer Training",
    description1:
      "Software development training teaches students how to create programs and applications. Students learn coding languages and logic.",
    description2:
      "In six weeks industrial training in Chandigarh, students learn how software is planned, written, tested, and improved. B2B Campus provides beginner-friendly training that helps students prepare for developer roles in companies."
  },
  {
    title: "7. Web Designing Training",
    description1:
      "Web designing focuses on creating attractive and easy-to-use websites. This role is good for creative students.",
    description2:
      "During six weeks industrial training in Chandigarh, students learn how websites are designed and updated. They understand how design helps businesses grow online."
  },
  {
    title: "8. Digital Marketing Training",
    description1:
      "Digital marketing is a fast-growing field. Many companies need people who can promote products online.",
    description2:
      "In six weeks industrial training in Chandigarh, students learn SEO, social media marketing, Google Ads, and content creation. B2B Campus provides live projects so students learn how real online marketing works."
  },
  {
    title: "9. Data Analytics Training",
    description1:
      "Data analytics helps companies understand information and make better decisions.",
    description2:
      "Through six weeks industrial training in Chandigarh, students learn how to collect, organize, and understand data. This training is helpful for students who like numbers and analysis."
  },
  {
    title: "10. Graphic Designing Training",
    description1:
      "Graphic designing is about creating visuals that attract people. This includes posters, banners, and logos.",
    description2:
      "During six weeks industrial training in Chandigarh, students learn design tools and creative thinking. This helps them prepare for creative jobs in media and marketing companies."
  },
  {
    title: "11. Networking and Cyber Security Training",
    description1:
      "Networking and cyber security are important for protecting computer systems.",
    description2:
      "In six weeks industrial training in Chandigarh, students learn basic networking concepts and safety practices. This training helps them understand how systems are protected in companies."
  },
  {
    title: "12. Students Gain Confidence",
    description1:
      "Many students feel nervous while speaking to interviewers or seniors. Industrial training helps remove this fear.",
    description2:
      "During six weeks industrial training in Chandigarh, students talk to trainers, work in groups, and explain their projects. At B2B Campus, trainers encourage students and help them build confidence slowly and comfortably."
  },
  {
    title: "13. Understanding Office Culture",
    description1:
      "Office life is very different from college life. Students must follow rules, respect time, and work in teams.",
    description2:
      "Six weeks industrial training in Chandigarh teaches students how offices work. They learn communication skills, teamwork, and discipline. This makes their first job experience smooth and stress-free."
  },
  {
    title: "14. Live Projects Improve Experience",
    description1:
      "Experience is very important for jobs. But students often do not get a chance to gain experience.",
    description2:
      "At B2B Campus, six weeks industrial training in Chandigarh includes live projects. Students work on real tasks just like employees. This experience makes them job-ready and confident."
  },
  {
    title: "15. Resume Becomes Stronger",
    description1:
      "A resume with only academic details is not enough. Companies like resumes with skills and experience.",
    description2:
      "Adding six weeks industrial training in Chandigarh to a resume shows that the student has practical knowledge. B2B Campus also guides students on how to prepare a strong resume."
  },
  {
    title: "16. Better Interview Performance",
    description1:
      "Interviews become easier when students have real experience.",
    description2:
      "Students who complete six weeks industrial training in Chandigarh can explain projects clearly. They answer questions with confidence and perform better in interviews."
  },
  {
    title: "17. Placement and Career Guidance",
    description1: "Career guidance is very important for students.",
    description2:
      "B2B Campus provides interview training, mock interviews, and placement assistance. This support helps students understand career options after six weeks industrial training in Chandigarh."
  },
  {
    title: "18. Why Choose B2B Campus for Industrial Training?",
    description1:
      "B2B Campus is a trusted institute for six weeks industrial training in Chandigarh.",
    listData: [
      {
        title: "They offer:",
        listdata: [
          "Simple and clear teaching",
          "Industry-expert trainers",
          "Live project-based learning",
          "Student-friendly environment"
        ]
      }
    ],
    description2: "They focus on skill development and job readiness."
  },
  {
    title: "19. Who Can Join Six Weeks Industrial Training?",
    listData: [
      {
        title: "Six weeks industrial training in Chandigarh is perfect for:",
        listdata: [
          "B.Tech students",
          "MCA and BCA students",
          "Diploma students",
          "Freshers",
          "Beginners"
        ]
      }
    ],
    description2: "Anyone who wants to improve skills can join."
  },
  {
    title: "20. How Industrial Training Helps Freshers",
    description1:
      "Freshers often struggle to get jobs because they lack experience.",
    description2:
      "Six weeks industrial training in Chandigarh helps freshers learn practical skills, improve communication, and understand industry work. This increases their chances of getting selected."
  }
];
const finalthoughts = [
  "In today’s competitive world, students need more than degrees. They need skills, confidence, and experience. Six weeks industrial training in Chandigarh helps students become job-ready and confident.",
  "With expert trainers, live projects, and strong career support, B2B Campus is an excellent choice for students. If you want to prepare for a successful career, joining six weeks industrial training in Chandigarh at B2B Campus is a smart step for your future."
];
export const metadata = {
   title : 'Six Weeks Industrial Training in Chandigarh for Job Readiness',
   description : 'Six weeks industrial training in Chandigarh helps students gain hands-on experience, industry exposure, and job-ready skills needed for real careers. Join now!'
}
const page = () => {
  return (
    <div className="main-bg">
      <div className="cus_container relative">
        <div className="flex gap-2">
          <div className="lg:w-[70%]">
            <Page2Banner
              title={
                "How Six Weeks Industrial Training in Chandigarh Improves Job Readiness?"
              }
              discription1={
                "Today, getting a good job is not easy for students. Marks and degrees are important, but companies want more than that. They want students who can work confidently, solve problems, and understand real office work. This is why six weeks industrial training in Chandigarh is very helpful for students who want a good career."
              }
              discription2={
                "Many students study theory in college, but they feel confused when they face interviews. They do not know how companies work or what skills are needed. Six weeks industrial training in Chandigarh helps students learn real skills and prepares them for the working world. It builds confidence and removes fear of jobs."
              }
            />
            {pageData.map((data, index) =>
              <Page2TitleDisList
                key={index}
                title={data.title}
                discription1={data.description1 || false}
                listData={data.listData || false}
                discription2={data.description2}
              />
            )}
          </div>
          <div className="w-[30%] py-6 md:py-12 sticky top-0 h-fit hidden lg:block">
            <ContactForm />
          </div>
        </div>
        <Page2FinalThoughts
          title={"Final Thoughts"}
          finalthoughts={finalthoughts}
        />
      </div>
    </div>
  );
};
export default page;
