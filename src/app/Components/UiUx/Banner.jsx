"use client";
import React from "react";
import bublebg from "../../../../public/images/bublebg.webp";
import learnboys from "../../../../public/images/learnboys.webp";
import girllearn from "../../../../public/images/girllearn.webp";
import tool1 from "../../../../public/images/tool1.webp";
import tool2 from "../../../../public/images/tool2.webp";
import tool3 from "../../../../public/images/tool3.webp";
import tool4 from "../../../../public/images/tool4.webp";
import tool5 from "../../../../public/images/tool5.webp";
import tool6 from "../../../../public/images/tool6.webp";
import tool7 from "../../../../public/images/tool7.webp";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Globaltitle from "./Globaltitle";
import Contactfrom from "../Page-Components/Contactfrom";
import bannerbggradient from "../../../../public/images/bannerbg-gradient.webp";

const Banner = () => {
  const currentpath = usePathname();
  return (
    <div className="bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${currentpath == '/' ? bannerbggradient.src : '/'})` }}
    >
      <div className="max-w-[1930px] m-auto">
        <div className="skill-title-container py-2 relative flex justify-centeritems-center">
          <div className="absolute inset-0 flex justify-center items-centerpointer-events-none">
            <Image
              src={bublebg}
              alt="bg"
              className="w-[500px] md:w-[1282px] sm:w-[280px] opacity-90 object-contain mx-auto "
            />
          </div>

          <div className="relative z-10 w-full">
            <Globaltitle
              titleStart={"Your Investment,"}
              highlightText={" Our Training"}
              titleEnd={"Our Course Leads You to a Job."}
              description={
                "Skill-focused course + practical training + full placement support"
              }
            />
          </div>
        </div>
        <div className="banner-wrap grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 items-end px-[2%]">
          <div className="boy relative w-full hidden md:block">
            <Image
              src={learnboys}
              width={1000}
              height={500}
              alt="boy"
              className="w-full md:max-w-[420px] mx-auto"
            />
            <div className="relative flex tools-img">
              <div className="absolute bottom-28 lg:bottom-20 tool1">
                <Image src={tool1} width={82} height={82} alt="tool1" />
              </div>
              <div className="absolute bottom-76 lg:bottom-56 tool1">
                <Image src={tool2} width={69} height={69} alt="tool2" />
              </div>
              <div className="absolute bottom-108 lg:bottom-88 2xl:bottom-108 right-32 lg:right-20 tool1">
                <Image src={tool4} width={66} height={66} alt="tool4" />
              </div>
              <div className="absolute bottom-56 lg:bottom-40 right-8 lg:right-4 tool1">
                <Image src={tool3} width={71} height={71} alt="tool3" />
              </div>
            </div>
          </div>
          <div className="py-6">
            <Contactfrom />
          </div>
          <div className="girl relative w-full hidden md:block">
            <Image
              src={girllearn}
              width={1000}
              height={500}
              alt="girl"
              className="w-full md:max-w-[420px] 2xl:max-w-[463px] mx-auto"
            />
            <div className="relative flex tools-img">
              <div className="absolute bottom-28 lg:bottom-20 tool1">
                <Image src={tool6} width={82} height={82} alt="tool6" />
              </div>
              <div className="absolute bottom-88 lg:bottom-88 right-32 lg:right-20 tool1">
                <Image src={tool5} width={95} height={95} alt="tool5" />
              </div>
              <div className="absolute bottom-36 lg:bottom-24 right-8 lg:right-4 tool1">
                <Image src={tool7} width={100} height={100} alt="tool7" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Banner;
