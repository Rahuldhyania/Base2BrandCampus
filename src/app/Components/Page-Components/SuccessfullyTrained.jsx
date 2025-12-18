"use client";

import React, { useEffect, useRef, useState } from "react";
import Title from "../UiUx/Title";
import Image from "next/image";

const traindata = [
  {
    icon: "/icons/trainedicon1.svg",
    number: 6,
    des: "Years of Experience",
  },
  {
    icon: "/icons/trainedicon2.svg",
    number: 1350,
    des: "Successful Batches",
  },
  {
    icon: "/icons/trainedicon3.svg",
    number: 1500,
    des: "Successfully Trained",
  },
  {
    icon: "/icons/trainedicon4.svg",
    number: 200,
    des: "Placement Partners",
  },
];

const DURATION = 1500;

const SuccessfullyTrained = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [counts, setCounts] = useState(traindata.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;

    traindata.forEach((item, index) => {
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / DURATION,
          1
        );

        const value = Math.floor(progress * item.number);

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = value;
          return updated;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, [startCount]);

  return (
    <div ref={sectionRef}>
      <div className="cus_container py-12 md:py-16">
        <div className="text-center">
          <Title
            title={
              'Successfully Trained <br/> <span class="text-primary">  1,500+ Students </span>'
            }
            text_color={"text-secondary"}
          />
        </div>

        <div className="pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 bg-primary rounded-3xl">
            {traindata.map((data, index) => (
              <div
                key={index}
                className="flex items-center gap-4 max-w-[90%] m-auto"
              >
                <div className="bg-white w-fit p-2.5 rounded-full">
                  <Image
                    src={data.icon}
                    alt={data.des}
                    width={40}
                    height={40}
                  />
                </div>

                <div>
                  <h4 className="text-3xl text-white">
                    {counts[index]}{' '}+
                  </h4>
                  <p className="text-lg text-white">{data.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullyTrained;
