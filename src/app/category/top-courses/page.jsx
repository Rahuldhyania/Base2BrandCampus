import PageBanner from "@/app/Components/Page-Components/PageBanner";
import React from "react";

export const metadata = {
  title: "Top Professional Courses | B2B Campus Training Programs",
  description:
    "Explore top industry-focused training courses at B2B Campus including Truck Dispatch, Freight Broker, Cyber Security, Devops, and more with practical learning."
};
const page = () => {
  return (
    <div>
      <PageBanner banner_title={" Data Science and Machine Learning"} />
    </div>
  );
};

export default page;
