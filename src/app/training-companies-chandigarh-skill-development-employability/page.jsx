import React from "react";
import ContactForm from "../Components/Page-Components/From";
import Page2Banner from "../Components/seo-pages/Page2Banner";
import Page2TitleDisList from "../Components/seo-pages/Page2TitleDisList";
import Page2FinalThoughts from "../Components/seo-pages/Page2FinalThoughts";
const listData1 = [
  {
    title:
      "The main job of training companies in Chandigarh is to teach skills in a simple and practical way. Instead of only reading books, students get to practice what they learn. This includes:",
    listdata: [
      "Learning with real examples",
      "Working on live projects",
      "Using tools and software",
      "Solving real-life problems"
    ]
  }
];
const listData2 = [
  {
    title: "They offer training in areas like:",
    listdata: [
      "Digital marketing",
      "Web development",
      "Software testing",
      "Data and technology skills"
    ]
  }
];
const Conclusion = [
  "The role of training companies in Chandigarh in skill development and employability is very important. They help students and professionals learn real skills, gain confidence, and become job-ready.",
  "By offering practical training, career guidance, and industry-focused courses, B2B Campus stands out among training companies in Chandigarh. For anyone looking to improve skills and build a strong career, choosing the right training company can make a big difference."
];
export const metadata = {
  title: "Training Companies in Chandigarh for Skill Development",
  description:
    "Training companies in Chandigarh focus on skill development and employability through practical learning and career-oriented programs. Enroll now to grow skills."
};
const page = () => {
  return (
    <div className="main-bg">
      <div className="cus_container relative">
        <div className="flex gap-2">
          <div className="lg:w-[70%]">
            <Page2Banner
              title={
                "Role of Training Companies in Chandigarh in Skill Development and Employability"
              }
              discription1={
                "Today, getting a good job is not only about having a college degree. Companies want people who have real skills, practical knowledge, and confidence to work. This is where training companies in Chandigarh play a very important role. They help students and professionals learn useful skills and become ready for jobs."
              }
              discription2={
                "Chandigarh has become a popular place for education and training. Many students from nearby cities come here to learn new skills. Training companies in Chandigarh help learners improve their abilities and increase their chances of getting a good job. One such trusted name is B2B Campus, which focuses on practical learning and career growth."
              }
            />
            <Page2TitleDisList
              title={"1. Why Skill Development Is Important?"}
              discription1={
                "Many students study hard in school and college, but still feel confused when they start looking for jobs. This happens because book knowledge is not enough. Companies want people who know how to use tools, work in teams, and solve problems."
              }
              discription2={
                "Training companies in Chandigarh help solve this problem. They teach skills that are used in real offices and companies. These skills help students understand how work is done in the real world. B2B Campus designs its courses to make learning simple, practical, and job-focused."
              }
            />
            <Page2TitleDisList
              title={"2. Chandigarh as a Learning and Training City"}
              discription1={
                "Chandigarh is clean, well-planned, and safe for students. It has many colleges, IT companies, and training institutes. This makes it a good city for learning new skills. Because of this, many training companies in Chandigarh have opened to support students and professionals."
              }
              discription2={
                "These training companies understand what companies need. They update their courses regularly so learners can stay up to date. B2B Campus is known for offering modern training in IT and digital marketing, helping learners stay ready for today’s job market."
              }
            />
            <Page2TitleDisList
              title={"3. How Training Companies Help in Skill Development"}
              listData={listData1}
              discription2={
                "At B2B Campus, students learn by doing. This helps them remember better and gain confidence. When learners practice regularly, they feel more prepared to work in real companies."
              }
            />
            <Page2TitleDisList
              title={"4. Making Students Job-Ready"}
              discription1={
                "Getting a job is not only about skills. Students also need to know how to talk confidently, attend interviews, and work with others. Training companies in Chandigarh help students develop these abilities too."
              }
              discription2={
                "B2B Campus focuses on overall development. Along with technical skills, students learn communication skills, teamwork, and basic office behavior. This helps them feel confident during interviews and at work."
              }
            />
            <Page2TitleDisList
              title={"5. Courses That Match Industry Needs"}
              discription1={
                "The job market keeps changing. New technologies come every year. Many college courses do not change quickly, but training companies in Chandigarh keep their courses updated."
              }
              listData={listData2}
              discription2={
                "B2B Campus offers industry-relevant courses that match what companies are looking for today. This helps students learn skills that are useful and in demand."
              }
            />
            <Page2TitleDisList
              title={"6. Helping Students Find Jobs"}
              discription1={`One of the biggest reasons students join training companies in Chandigarh is for better job opportunities. Many training institutes guide students on how to prepare for jobs. <br/>
                            B2B Campus supports students with resume building, interview practice, and career guidance. This support helps students understand what companies expect and how to present themselves better.  
                            `}
              discription2={
                "When students feel guided and supported, their confidence grows, and their chances of getting hired improve."
              }
            />
            <Page2TitleDisList
              title={"7. Support for Working Professionals"}
              discription1={`Not only students, but working professionals also need training. Many people want to learn new skills to get better jobs or change careers. Training companies in Chandigarh offer flexible learning options for them.`}
              discription2={
                "B2B Campus provides courses that working professionals can attend without leaving their jobs. This helps them grow in their careers and stay updated with new skills."
              }
            />
            <Page2TitleDisList
              title={"8. Helping the Local Economy"}
              discription1={`Training companies in Chandigarh do more than just teach students. They help the city grow by creating a skilled workforce. Skilled people attract more companies, which creates more jobs.`}
              discription2={
                "By training students and professionals, institutes like B2B Campus help build a strong future for Chandigarh. Skilled workers help businesses grow and support the local economy."
              }
            />
            <Page2TitleDisList
              title={"9. The Future of Training Companies in Chandigarh"}
              discription1={`In the future, skills will become even more important. Technology will change jobs, and people will need to keep learning. Training companies in Chandigarh will play a bigger role in helping people stay skilled and confident.`}
              discription2={
                "B2B Campus is preparing learners for this future by focusing on practical training, updated courses, and career support. This makes it a trusted choice for skill development."
              }
            />
          </div>
          <div className="w-[30%] py-6 md:py-12 sticky top-0 h-fit hidden lg:block">
            <ContactForm />
          </div>
        </div>
        <Page2FinalThoughts title={"Conclusion"} finalthoughts={Conclusion} />
      </div>
    </div>
  );
};

export default page;
