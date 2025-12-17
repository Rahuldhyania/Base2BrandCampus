"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import qoutes from "../../../../public/images/qoutes.webp";
import leftarrow from "../../../../public/images/leftarrow.webp";
import sliderrightarrow from "../../../../public/images/sliderrightarrow.webp";
import leaf1 from "../../../../public/images/leaf.webp";
import leaf2 from "../../../../public/images/leaf2.webp";
import Buttons from "../UiUx/Buttons";
import Link from "next/link";

const TestimonialsSlider = () => {
  const data = [
    {
      id: 1,
      name: "Sanjeev Kumar",
      image: "/images/sanjeevkumar.webp",
      stars: 5,
      review:
        "I have joined B2B CAMPUS for training in video editing, and I am fully satisfied. Qualified and cooperative staff. Specially, my trainer's teaching style is very easy to understand. According to my opinion, this is the best IT training centre."
    },
    {
      id: 2,
      name: "Babli",
      image: "", // No image, placeholder will show
      stars: 5,
      review:
        "I completed a 3-month Digital Marketing course at B2B Campus. It was a fantastic learning experience. The curriculum was well-structured, covering Google Ads, Meta Ads, SEO, etc. Trainers were knowledgeable and supportive."
    },
    {
      id: 3,
      name: "Sushmita Sharma",
      image: "", // No image, placeholder will show
      stars: 5,
      review:
        "Im currently learning the Digital Marketing course at B2B Campus, and its been a great experience so far The trainers are knowledgeable, and the course covers practical, realworld strategies"
    },
    {
      id: 4,
      name: "Tanish Kumar",
      image: "", // No image, placeholder will show
      stars: 5,
      review:
        "Excellent training at B2B Campus! The instructors were knowledgeable and supportive.The program was designed in a very practical and hands-on manner, which helped me gain valuable skills that I can use in"
    }
    // Add more slides here
  ];

  const statsData = [
    {
      leaf1: leaf1,
      value: "1485+",
      text: "Learners trained with practical skills",
      leaf: leaf2
    },
    {
      leaf1: leaf1,
      value: "9,874+",
      text: "Hours of real project based learning",
      leaf: leaf2
    },
    {
      leaf1: leaf1,
      value: "18+",
      text: "Industry-focused courses available",
      leaf: leaf2
    },
    {
      leaf1: leaf1,
      value: "98%",
      text: "Student satisfaction & positive feedback",
      leaf: leaf2
    }
  ];

  return (
    <div className="py-12 md:py-16">
      {/* Stats Section */}
      <div className="w-full flex justify-center cus_container">
        <div className="bg-[#EFE8FF] rounded-3xl py-8 px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8">
          {statsData.map((item, index) =>
            <StatItem
              key={index}
              item={item}
              isLast={index === statsData.length - 1}
            />
          )}
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative w-full flex flex-col lg:flex-row pt-10 cus_container justify-around">
        <div className="w-[100%] md:w-[60%] relative m-auto">
          {/* Custom Left Arrow */}
          <div className="custom-prev hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 left-[-50px] -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
            <Image
              src={leftarrow}
              width={1000}
              height={500}
              className="w-2.5 h-2.5"
              alt="Prev"
            />
          </div>

          {/* Custom Right Arrow */}
          <div className="custom-next hidden sm:flex w-[42px] h-[42px] justify-center items-center rounded-full bg-black absolute top-1/2 right-[-50px] -translate-y-1/2 cursor-pointer z-20 transition-transform duration-300 hover:scale-110 hover:bg-purple-700">
            <Image
              src={sliderrightarrow}
              width={100}
              height={500}
              className="w-2.5 h-2.5"
              alt="Next"
            />
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev"
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="mySwiper"
              speed={1200}
              spaceBetween={40}
            >
              {data.map(item =>
                <SwiperSlide key={item.id}>
                  <div className="bg-white rounded-[44px] ps-[5%] py-[8%] pe-[5%] lg:pe-[11%] border-2 border-[#6346FA80] shadow-md transition-transform duration-500 hover:shadow-xl ">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                      {/* User Image or Placeholder */}
                      {item.image
                        ? <Image
                            src={item.image}
                            width={90}
                            height={90}
                            className="rounded-full transition-transform duration-500 hover:scale-110"
                            alt={item.name}
                          />
                        : <div className="w-[90px] h-[90px] flex items-center justify-center rounded-full bg-purple-200 text-white text-3xl font-bold">
                            {item.name[0].toUpperCase()}
                          </div>}

                      <div className="text-center sm:text-left">
                        <h2 className="text-[27px] font-bold text-[#5D38DE]">
                          {item.name}
                        </h2>
                        <div className="flex justify-center sm:justify-start">
                          {Array(item.stars).fill().map((_, i) =>
                            <span
                              key={i}
                              className="text-yellow-500 text-[30px]"
                            >
                              ★
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-700 text-[18px] sm:text-[20px] leading-relaxed text-center sm:text-left lg:max-w-[75%]">
                      {item.review}
                    </p>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
        <div className="ps-[5%] flex justify-center">
          <div className=" h-full top-0 right-4 hidden lg:flex items-center z-20 ">
            <div className="flex flex-col gap-2 bg-white shadow-[3px_4px_8px_0px_#6346fa] p-4 xl:p-6 rounded-3xl">
              <div className="flex justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#googleLogo)">
                    <path
                      d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                      fill="#fbbb00"
                    />
                    <path
                      d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z"
                      fill="#518ef8"
                    />
                    <path
                      d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z"
                      fill="#28b446"
                    />
                    <path
                      d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z"
                      fill="#f14336"
                    />
                  </g>
                  <defs>
                    <clipPath id="googleLogo">
                      <rect width="16" height="16" fill="#ffffff" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="flex gap-1 justify-center">
                {[
                  "/rating.png",
                  "/rating.png",
                  "/rating.png",
                  "/rating.png",
                  "/rating.png"
                ].map((data, index) =>
                  <div className="" key={index}>
                    <Image
                      src={data}
                      alt=""
                      width={1000}
                      height={500}
                      className="max-w-5 2xl:max-w-7"
                    />
                  </div>
                )}
              </div>
              <p className="text-base 2xl:text-lg font-normal">
                {" "}<span className="font-bold">4.9</span> rating from{" "}
                <span className="font-bold">81 reviews</span>{" "}
              </p>
              <div className="flex justify-center">
                <div className="w-8 xl:w-10 h-8 xl:h-10 rounded-[50%] bg-green-600 flex items-center justify-center text-white text-xl">
                  C
                </div>
                <div className="relative right-2 w-8 xl:w-10 h-8 xl:h-10 rounded-[50%] bg-red-600 flex items-center justify-center text-white text-xl">
                  A
                </div>
                <div className="relative right-4 w-8 xl:w-10 h-8 xl:h-10 rounded-[50%] bg-purple-600 flex items-center justify-center text-white text-xl">
                  K
                </div>
                <div className="relative right-6 w-8 xl:w-10 h-8 xl:h-10 rounded-[50%] bg-black flex items-center justify-center text-white text-sm">
                  78+
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href={
                    "https://www.google.com/search?q=b2bcampus&rlz=1C1JJTC_enIN1091IN1091&oq=b2&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg8IARBFGDkYgwEYsQMYgAQyBggCEEUYQDINCAMQABiDARixAxiABDIGCAQQRRg9MgYIBRBFGD0yBggGEEUYPDIGCAcQRRg80gEIMTMyNWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x390fef709990df93:0xb9ae31b247ff7455,3,,,,"
                  }
                  target="_blank"
                >
                  <Buttons
                    btnname={"Leave a Review"}
                    btn_primary={true}
                    text_color={"text-white"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Top Right Quotes Icon */}
        <div className="absolute right-[32%] top-5 z-10 hidden sm:block">
          <Image
            src={qoutes}
            width={149}
            height={128}
            alt="quotes"
            className="transition-transform duration-500 hover:scale-110 max-w-[100px]"
          />
        </div>

        {/* Swiper Custom Styling */}
        <style jsx global>{`
          .swiper-button-prev,
          .swiper-button-next {
            width: 35px;
            height: 35px;
            background: white;
            border-radius: 50%;
            border: 2px solid #4a3aff;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000 !important;
            transition: transform 0.3s, background 0.3s;
          }
          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            background: #4a3aff;
            color: #fff !important;
            transform: scale(1.1);
          }

          .swiper-pagination-bullet {
            background: #a78bfa;
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #4a3aff;
            width: 25px;
            border-radius: 10px;
          }
        `}</style>
      </div>
    </div>
  );
};

function StatItem({ item, isLast }) {
  const parseValue = val => {
    if (typeof val === "number") return val;
    let cleaned = val.replace(/[+, %]/g, "").replace(/,/g, "");
    return parseInt(cleaned) || 0;
  };

  const numericValue = parseValue(item.value);
  const [count, setCount] = useState(0);

  useEffect(
    () => {
      let startTimestamp = null;
      const duration = 1500;

      const step = timestamp => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const progressPercent = Math.min(progress / duration, 1);
        setCount(Math.floor(progressPercent * numericValue));
        if (progress < duration) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    },
    [numericValue]
  );

  const suffix = item.value.replace(/[0-9,]/g, "");

  return (
    <div className="flex items-center gap-8">
      <div className="leaf1">
        <Image
          src={item.leaf1}
          width={22}
          height={77}
          className="mt-2 opacity-70"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-[#5A3DFA]">
          {count.toLocaleString()}
          {suffix}
        </h2>
        <p className="text-gray-700 text-sm mt-1">
          {item.text}
        </p>
      </div>

      <div className="leaf2">
        <Image
          src={item.leaf}
          width={22}
          height={77}
          className="mt-2 opacity-70"
          alt=""
        />
      </div>

      {!isLast && <div className="hidden md:block w-px h-16 bg-[#C9B8FF]" />}
    </div>
  );
}

export default TestimonialsSlider;
