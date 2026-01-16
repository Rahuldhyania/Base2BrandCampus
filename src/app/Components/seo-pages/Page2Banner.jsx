"use client";
import React, { useEffect, useState } from "react";
import coathcing from "../../../../public/images/coathcing.webp";
import coathcing2 from "../../../../public/images/coathcing2.webp";
import coathcing3 from "../../../../public/images/coathcing3.webp";
import coathcing4 from "../../../../public/images/coathcing4.webp";
import coathcing5 from "../../../../public/images/coathcing5.webp";
import coathcing6 from "../../../../public/images/coathcing6.webp";
import coathcing8 from "../../../../public/images/coathcing8.webp";
import coathcing9 from "../../../../public/images/coathcing9.webp";
import coathcing10 from "../../../../public/images/coathcing10.webp";
import coathcing11 from "../../../../public/images/coathcing11.webp";
import Image from "next/image";
import Description from "../UiUx/Description";
const coachingImages = [
  coathcing,
  coathcing2,
  coathcing3,
  coathcing4,
  coathcing5,
  coathcing6,
  coathcing8,
  coathcing9,
  coathcing10,
  coathcing11
];
const Page2Banner = ({ title, discription1, discription2 }) => {
  const [randomImage, setRandomImage] = useState(null);
  useEffect(() => {
    const lastIndex = localStorage.getItem("lastCoachingImage");

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * coachingImages.length);
    } while (newIndex === Number(lastIndex));

    localStorage.setItem("lastCoachingImage", newIndex);
    setRandomImage(coachingImages[newIndex]);
  }, []);
  return (
    <div className="pt-6 md:pt-12">
      <h1 className="text-[22px] leading-[30px] sm:text-[28px] sm:leading-[36px] md:text-[32px] md:leading-[40px] lg:text-[40px] lg:leading-[48px] font-regular text-[#0A0A0A] mt-4 mb-3">
        {title}
      </h1>
      <Image
        src={randomImage || ''}
        alt="randomImage"
        width={1000}
        height={500}
        className="rounded-4xl max-h-[600px] object-cover mb-4"
      />

      {discription1 &&
        <Description
          description={discription1}
          text_color={"text-black"}
          text_start={true}
        />}
      {discription2 &&
        <div className="pt-1">
          <Description
            description={discription2}
            text_color={"text-black"}
            text_start={true}
          />
        </div>}
    </div>
  );
};

export default Page2Banner;
