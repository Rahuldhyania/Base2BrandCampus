'use client'
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
const newCertificateData = [
  {
    image: "/images/studentdresspic1.webp",
    description:
      "Learners completed hands-on training and earned certificates showcasing their practical skills and industry readiness."
  },
  {
    image: "/images/studentdresspic2.webp",
    description:
      "Students gained real-world coding experience and received certifications validating their technical knowledge and expertise."
  },
  {
    image: "/images/studentdresspic3.webp",
    description:
      "Certified learners demonstrated strong problem-solving abilities through project-based learning and practical training programs."
  },
  {
    image: "/images/studentdresspic9.webp",
    description:
      "Graduates successfully completed intensive training and earned certificates reflecting their commitment to skill development."
  },
  {
    image: "/images/studentdresspic5.webp",
    description:
      "Learners achieved certification after mastering hands-on tools, technologies, and real-world software development practices."
  },
  {
    image: "/images/studentdresspic6.webp",
    description:
      "Students earned professional certificates by completing structured training focused on practical application and industry skills."
  },
  {
    image: "/images/studentdresspic7.webp",
    description:
      "Certified professionals showcased their learning journey through successful completion of hands-on training and live projects."
  },
    {
    image: "/images/studentdresspic12.webp",
    description:
      "Certified professionals showcased their learning journey through successful completion of hands-on training and live projects."
  },
];

const CertificateDress = () => {

  const currentpath = usePathname();
  
  return (
    <div className="w-full my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 xl:gap-x-4 2xl:gap-x-4 md:px-6 xl:px-4 2xl:px-4 max-w-[1500px] mx-auto">
        {newCertificateData.map((data, index) =>
          <div
            className={`flex shadow-[4px_4px_0px_#6346fa] rounded-4xl ${index %
              2 === 0
              ? "flex-col"
              : "flex-col md:flex-col-reverse"}`}
            key={index}
          >
            {/* <div className="mt-3">
              <p className="text-card text-[18px] sm:text-[20px] max-w-[300px] text-center p-2.5 border border-[#6346FA80] rounded-[29px] transition-all duration-300 hover:bg-[#F5F0FF] m-auto">
                {data.description}
              </p>
            </div> */}
            <div>
              <Image
                src={`${data.image}`}
                alt=""
                width={1000}
                height={500}
                className="rounded-[33px] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateDress;
