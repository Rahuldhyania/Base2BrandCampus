'use client'
import React, { useMemo } from "react";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Image from "next/image";
import Title from "../UiUx/Title";

const studentplacedata = [
  {
    id: 1,
    student: [
      "/images/placestudentn1.webp",
      "/images/placestudentn2.webp",
      "/images/placestudentn15.webp",
      "/images/placestudentn4.webp"
    ]
  },
  {
    id: 2,
    student: [
      "/images/placestudentn5.webp",
      "/images/placestudentn6.webp",
      "/images/placestudentn7.webp",
      "/images/placestudentn8.webp"
    ]
  },
  {
    id: 3,
    student: [
      "/images/placestudentn9.webp",
      "/images/placestudentn10.webp",
      "/images/placestudentn11.webp",
      "/images/placestudentn12.webp"
    ]
  },
  {
    id: 4,
    student: [
      "/images/placestudentn13.webp",
      "/images/placestudentn14.webp",
      "/images/placestudentn3.webp",
      "/images/placestudentn16.webp"
    ]
  }
];
const PlacedStudent = ({ showdata, rownumber }) => {

   const shuffleArray = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

   const shuffledPlacedData = useMemo(() => {
    return shuffleArray(studentplacedata).map(group => ({
      ...group,
      student: shuffleArray(group.student)
    }));
  }, []);
  return (
    <div>
      <div className="">
        <div className="cus_container">
          <div className="relative">
            <Image
              src={titlewhitebg.src}
              width={1000}
              height={500}
              alt="bubble-bg"
              className="absolute hidden md:block -bottom-8 left-1/2 -translate-x-1/2 w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
            />

            <div className="relative z-10 text-center">
              <Title
                title={
                  '<span class="text-primary"> Our Placed Students Ready <br/>  </span> to Lead the Industry '
                }
                text_color={"text-secondary"}
              />
            </div>
          </div>
        </div>
        <div className="pt-12 md:pt-16">
          {shuffledPlacedData
            .slice(0, showdata ? showdata : shuffledPlacedData.length)
            .map((data, index) =>
              <div
                key={index}
                className={`${index % 2 === 0 ? "bg-primary" : "bg-[#DDD6FF]"}`}
              >
                <div
                  className={`cus_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-12 md:py-16`}
                >
                  {data.student.map((items, i) =>
                    <div key={i}>
                      <Image
                        src={items}
                        alt="student"
                        width={3000}
                        height={500}
                        className="max-w-[85%] 2xl:max-w-[95%] m-auto shadow-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default PlacedStudent;
