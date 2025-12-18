"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import titlewhitebg from "../../../../public/images/titlewhitebg.webp";

// Coaching Images
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

import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Buttons from "../UiUx/Buttons";

// 🔹 Images Array
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
  coathcing11,
];

const CanJoin = ({ conjoin_data }) => {
  const [randomImage, setRandomImage] = useState(null);

  // 🔁 Random image on refresh (no repeat of last image)
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
    <section className="py-12 cus_container">
      {/* Heading */}
      <div className="relative justify-center items-center">
        <div className="relative z-10 text-center">
          <Title
            title={'<span class="text-primary"> Who Can Join</span>'}
            text_color={"text-secondary relative z-10"}
          />
          <Image
            src={titlewhitebg}
            width={1000}
            height={500}
            alt="bg-shape"
            className="absolute hidden md:block top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[456px] sm:w-60 pointer-events-none select-none"
          />
        </div>

        <div className="md:pt-6">
          <Description
            description={"Perfect for beginners & career changers."}
            text_color={"text-secondary"}
          />
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-6 md:pt-12 gap-6 md:gap-14 lg:gap-20">
        {/* Left Image */}
        <div className="boy relative w-full">
          {randomImage && (
            <Image
              src={randomImage}
              width={1000}
              height={500}
              alt="coaching"
              className="mx-auto"
              priority
            />
          )}
        </div>

        {/* Right Content */}
        <section className="flex items-center">
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {conjoin_data.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center bg-white text-black px-6 py-4 rounded-[17px] shadow-sm hover:scale-[1.02] transition-all duration-300 ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    width={55}
                    height={55}
                    alt="icon"
                    className="object-contain absolute left-2 md:-left-4 top-2 md:top-0 w-[38px] md:w-[45px] 2xl:w-[55px]"
                  />
                  <p className="text-lg 2xl:text-xl font-medium pl-10 md:pl-5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="buttons text-[25px] flex justify-center md:justify-start pt-6 md:pt-12">
              <Buttons
                btnname="Book Your Seats Now"
                text_color={"text-white"}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CanJoin;
