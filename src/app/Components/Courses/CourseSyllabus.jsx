'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import Title from '../UiUx/Title';
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
const CourseSyllabus = ({Syllabus_data,title}) => {
   const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className=' main-bg'>
        <section className=" cus_container py-6 ">
        <div className="relative flex justify-center items-center">
          <Image
            src={titlewhitebg.src}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute  hidden md:block top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[431px] sm:w-60 opacity-100 pointer-events-none select-none"
          />

          <div className="relative z-10 text-center">
            <Title
              title={title}
              text_color={'text-secondary'}
            />

          </div>
        </div>
        <div className="max-w-7xl mx-auto md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 pt-6">



          {Syllabus_data.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="mb-4 bg-[#F8F0FF] border border-purple-300 rounded-lg shadow-sm transition-all duration-500 h-max"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 flex justify-between items-center text-start text-[#6346FA] text-lg md:text-xl"
                >
                  {item.title}

                  <Image
                    src={isOpen ? "/images/arrowup1.webp" : "/images/arrowdown2.webp"}
                    alt="arrow"
                    width={24}
                    height={24}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[700px] pb-4 " : "max-h-0 py-0 "
                    }`}
                >
                  <ul className="px-5 space-y-1 text-black">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 m-0">
                        <span className="text-black  text-lg font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  )
}

export default CourseSyllabus
