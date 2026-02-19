'use client'
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
const newCertificateData = [
  { image: "/images/studentdresspic1.webp", description: "" },
  { image: "/images/studentdresspic2.webp", description: "" },
  { image: "/images/studentdresspic3.webp", description: "" },
  { image: "/images/studentdresspic4.webp", description: "" },
  { image: "/images/studentdresspic5.webp", description: "" },
  { image: "/images/studentdresspic6.webp", description: "" },
  { image: "/images/studentdresspic7.webp", description: "" },
  { image: "/images/studentdresspic8.webp", description: "" },
  { image: "/images/studentdresspic9.webp", description: "" },
  { image: "/images/studentdresspic10.webp", description: "" },
  { image: "/images/studentdresspic11.webp", description: "" },
  { image: "/images/studentdresspic12.webp", description: "" },
  // { image: "/images/studentdresspic13.webp", description: "" },
  // { image: "/images/studentdresspic14.webp", description: "" },
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
