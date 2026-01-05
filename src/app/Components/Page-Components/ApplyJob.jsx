import React from "react";
import Title from "../UiUx/Title";
import { FaBriefcase, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const latestJobs = [
  {
    id: 1,
    title: "Freight Broker Executive",
    description:
      "B2B Campus – Where Freight Broker Careers Begin and Global Logistics Professionals Are Built.",
  },
  {
    id: 2,
    title: "Truck Dispatch Specialist",
    description:
      "B2B Campus – Learn Truck Dispatch Once, Work Globally Forever.",
  },
  {
    id: 3,
    title: "AI Expert",
    description:
      "B2B Campus – Learn Artificial Intelligence Today, Lead Tomorrow’s Technology.",
  },
  {
    id: 4,
    title: "Cyber Security Analyst",
    description:
      "B2B Campus – Learn Cyber Security Today, Protect the Digital World Tomorrow.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    description:
      "B2B Campus – Learn DevOps Today, Automate and Deploy Tomorrow.",
  },
  {
    id: 6,
    title: "IoT Solutions Engineer",
    description:
      "B2B Campus – Learn IoT and Build Smart, Connected, and Automated Solutions.",
  },
   {
    id: 7,
    title: "Data Science Expert",
    description:
      "B2B Campus – Work on real-world data, analytics, and machine learning projects.",
  },
  {
    id: 8,
    title: "Training Executive",
    description:
      "B2B Campus – Handle training operations, coordination, and student engagement.",
  },
];

const ApplyJob = () => {
  return (
    <div className="cus_container">
      <div className="text-center">
        <Title title={"Latest Jobs"} text_color={"text-black"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
        {latestJobs.map((data) => (
          <div
            key={data.id}
            className="main-bg rounded-2xl p-6 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-primary text-white p-3 rounded-full">
                <FaBriefcase size={22} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center">
              {data.title}
            </h3>

            {/* Description */}
            <p className="text-center text-sm italic text-gray-600 pt-3 min-h-[80px]">
              {data.description}
            </p>

            {/* Meta Info */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                Base2Brand Campus, Mohali
              </p>
              <p className="flex items-center justify-center gap-2 font-medium">
                <FaClock className="text-primary" />
                Monday to Friday
              </p>
            </div>

            {/* Button */}
            <div className="pt-5 flex justify-center">
              <a
                href="mailto:hello@b2bcampus.com?subject=Job Application&body=Hello B2B Campus Team,"
                className="bg-primary text-white px-6 py-2 rounded-md 
                           hover:bg-black transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;
