"use client";
import React, { useState } from "react";
import { PressReleasesData } from "@/app/Data/PressReleases";
import { pressCertificate } from "@/app/Data/PressReleases";
import Image from "next/image";
import Link from "next/link";
import Buttons from "../UiUx/Buttons";
import ReadytoGrow from "./ReadytoGrow";
import Journeywithb2b2 from "./Journeywithb2b2";

export const TopPressReleases = ({ bg }) => {
  return (
    <div className={`${bg == true ? "main-bg" : ""}`}>
      <div className={`cus_container py-12 md:py-16`}>
        <p className="w-fit text-xl text-primary px-4 py-1 bg-white rounded-full">
          Top Press Releases
        </p>

        <div className="pt-6 md:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PressReleasesData.map((data, index) => {
            if (!data.top_press) return null;
            return (
              <Link href={data.pageout_link} key={index} target="_blank">
                <div className="rounded-xl border border-[#DBEAFE] group">
                  <div>
                    <Image
                      src={data.poster_image}
                      alt={data.title}
                      width={1000}
                      height={500}
                      className="rounded-t-lg"
                    />
                  </div>

                  <div className="py-10 main-bg px-4 rounded-b-xl">
                    <p className="w-fit text-sm px-4 py-1 bg-white rounded-full text-primary">
                      {data.tag_name}
                    </p>

                    <h2 className="text-[22px] text-black line-clamp-3 pt-4 group-hover:underline transition-all duration-200 group-hover:text-(--primary)">
                      {data.title}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export const PressCertificate = () => {
  return (
    <div className="bg-primary py-12">
      <div className="cus_container">
        <p className="text-xl text-white">Certifications</p>

        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressCertificate.map((data, index) =>
            <div key={index}>
              <div className="bg-white py-3 rounded-t-lg">
                <Image
                  src={data.cerficate_image}
                  alt="Certifications"
                  width={1000}
                  height={500}
                  className="max-w-[95%] m-auto"
                />
              </div>
              <div className="py-10 main-bg px-4 rounded-b-xl">
                <p className="w-fit text-sm px-4 py-1 bg-white rounded-full text-primary">
                  {data.cerficate_tag}
                </p>

                <h2 className="text-lg text-black line-clamp-2 pt-4">
                  {data.title}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export const RecentPressReleases = () => {
  return (
    <div className="main-bg py-12 md:py-16">
      <div className="cus_container">
        <p className="text-black text-xl">Recent Press Releases</p>
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PressReleasesData.map((data, index) => {
            if (!data.resent_press) return null;

            return (
              // <Link href={data.pageout_link} key={index} target="_blank">
              <div className="rounded-xl border border-[#DBEAFE]" key={index}>
                <div>
                  <Image
                    src={data.poster_image}
                    alt={data.title}
                    width={1000}
                    height={500}
                    className="rounded-t-lg"
                  />
                </div>

                <div className="py-8 main-bg px-4 rounded-b-xl">
                  <p className="w-fit text-sm px-4 py-1 bg-white rounded-full text-primary">
                    {data.tag_name}
                  </p>

                  <h2 className="text-lg text-black line-clamp-2 pt-4">
                    {data.title}
                  </h2>
                </div>
              </div>
              // </Link>
            );
          })}
        </div>
        <div className="pt-6 flex justify-center">
          <div className="w-fit">
            <Buttons btnname={"Load More PRs"} text_color={"text-white"} />
          </div>
        </div>
      </div>
    </div>
  );
};
const PressReleases = () => {
  return (
    <div className="main-bg">
      <TopPressReleases />
      <RecentPressReleases />
      <PressCertificate />
      <RecentPressReleases />
      <ReadytoGrow />
      <Journeywithb2b2  />
    </div>
  );
};

export default PressReleases;
