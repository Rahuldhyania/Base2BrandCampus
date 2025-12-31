"use client";
import React from "react";
import Image from "next/image";
import Buttons from "../UiUx/Buttons";
import ReadytoGrow from "./ReadytoGrow";
import Globaltitle from "../UiUx/Globaltitle";
import Title from "../UiUx/Title";

const traits = [
  {
    title: "Problem Solver",
    desc: "Focused on finding solutions"
  },
  {
    title: "Self-Motivated",
    desc: "Self-starter with a strong work ethic"
  },
  {
    title: "Ambitious",
    desc: "Persistent in pursuing goals"
  },
  {
    title: "Enthusiastic",
    desc: "Committed and enthusiastic about their work"
  }
];

const reviews = [
  {
    name: "Aashu Goswami",
    review:
      "The facilities and resources provided are exceptional, enabling students to explore their creativity fully."
  },
  {
    name: "MD. Zaid",
    review:
      "The curriculum is well-structured, covering all essential topics with great clarity."
  },
  {
    name: "Priynka Banwal",
    review:
      "A highly conducive learning environment that makes teaching and learning a pleasure."
  },
  {
    name: "Ankit Verma",
    role: "Frontend Developer · 1 Year at B2B Campus",
    review:
      "The team culture is supportive, deadlines are realistic, and there is always encouragement to improve skills and try better solutions. Over the past year, I’ve grown a lot as a frontend developer."
  },
  {
    name: "Gaurav Kumar",
    role: "Frontend Developer",
    review:
      "Working in this dynamic environment has significantly improved my technical skills. The projects are challenging but rewarding."
  },
  {
    name: "Aman Kumar",
    role: "UI/UX Designer · Figma Designer",
    review:
      "The creative freedom and collaborative environment have really helped me enhance my design skills, especially with tools like Figma."
  }
];

const Career = () => {
  return (
    <div className="main-bg">
      <div
        className="banner_section bg-cover bg-center"
        style={{ backgroundImage: "url(/images/knowledgecenterbg.webp)" }}
      >
        <div className="cus_container py-12 md:py-16">
          <Globaltitle
            highlightText="High-Quality Education for a"
            titleEnd={" Successful Career"}
            description="Explore exciting career opportunities and grow with us."
          />
        </div>
      </div>

      <div className="main-bg">
      <div className="py-20  from-white to-[#F7F5FF]">
        <div className="cus_container text-center">
          <Title
            title={"Join Our Growing Team, if you are"}
            text_color={"text-black"}
          />

          <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-2xl group-hover:bg-primary group-hover:text-white transition">
                💡
              </div>
              <h3 className="mt-6 text-xl font-semibold">Problem Solver</h3>
              <p className="mt-2 text-gray-600">Focused on finding solutions</p>
            </div>

            <div className="group bg-white border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-2xl group-hover:bg-primary group-hover:text-white transition">
                🎯
              </div>
              <h3 className="mt-6 text-xl font-semibold">Self-Motivated</h3>
              <p className="mt-2 text-gray-600">
                Self-starter with a strong work ethic
              </p>
            </div>

            <div className="group bg-white border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-2xl group-hover:bg-primary group-hover:text-white transition">
                🚀
              </div>
              <h3 className="mt-6 text-xl font-semibold">Ambitious</h3>
              <p className="mt-2 text-gray-600">Persistent in pursuing goals</p>
            </div>

            <div className="group bg-white border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full bg-purple-100 text-2xl group-hover:bg-primary group-hover:text-white transition">
                ⚡
              </div>
              <h3 className="mt-6 text-xl font-semibold">Enthusiastic</h3>
              <p className="mt-2 text-gray-600">
                Committed and enthusiastic about their work
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* CAREER DISCUSSION */}
      <div className="py-16">
        <div className="cus_container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold">
              Personalized Career Discussion
            </h2>

            <div className="pt-6 space-y-4">
              <div className="p-5 rounded-lg border-l-4 border-primary bg-[#F5F3FF]">
                Our institute offers personalized career discussions to help you
                make informed decisions about your career path.
              </div>
              <div className="p-5 rounded-lg border-l-4 border-[#FF6B00] bg-[#FFF4EC]">
                Get insights into job market trends and necessary skills to
                succeed in your chosen field.
              </div>
              <div className="p-5 rounded-lg border-l-4 border-[#22C55E] bg-[#ECFDF5]">
                Take the first step toward building a successful and fulfilling
                career.
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/images/careerright.webp"
              alt="Career Discussion"
              width={700}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
     </div>
      {/* REVIEWS */}
      <div className="py-16 main-bg">
        <div className="cus_container">
          <Title
            title={"Employed Students Reviews"}
            text_color={"text-primary"}
          />
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((item, i) =>
              <div key={i} className="bg-[#F1F5FF] p-6 rounded-xl">
                <div className="flex gap-1 text-orange-400 text-xl">★★★★★</div>
                <h3 className="pt-3 font-semibold">
                  {item.name}
                </h3>
                <p className="pt-2 text-gray-600">
                  {item.review}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <ReadytoGrow />
    </div>
  );
};

export default Career;
