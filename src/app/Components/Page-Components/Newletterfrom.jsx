"use client";

import Image from "next/image";
import React, { useState } from "react";
import footermiallogo from "../../../../public/images/footermiallogo.webp";
import { toast } from "react-toastify";

export const Newletterfrom = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter email");
      return;
    }

    // ✅ VTiger needs x-www-form-urlencoded
    const payload = new URLSearchParams();
    payload.append(
      "__vtrftk",
      "sid:c8df06e6795d3983c0e30b0eda2ce9c6c6db3906,1765291193"
    );
    payload.append("publicid", "266ab7e2196cdb634e4e2ac84b815c33");
    payload.append("urlencodeenable", "1");
    payload.append("name", "B2bcampus Newsletter");

    // ✅ required fields
    payload.append("email", email);
    payload.append("lastname", "Newsletter");
    payload.append("cf_1298", "b2bcampus newsletter");

    try {
      const res = await fetch(
        "https://crm.base2brand.com/modules/Webforms/capture.php",
        {
          method: "POST",
          body: payload
        }
      );

      if (res.ok) {
        setEmail("");
        setMsg("Newsletter subscribed successfully!");
        toast.success("Subscribed successfully");
      } else {
        toast.error("CRM error, try again");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error!");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-end gap-5">
        <div className="w-full md:max-w-[382px]">
          <h5 className="text-white text-2xl pb-3 text-center md:text-start">
            Stay Updated With Us
          </h5>

          <div className="relative w-full">
            <Image
              src={footermiallogo}
              width={24}
              height={24}
              alt="email"
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-70"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="text-[18px] placeholder-white py-3 pe-3.5 pl-12 rounded-2xl w-full border-2 border-white bg-transparent text-white outline-none"
              required
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-white text-[#5D38DE] px-6 sm:px-10 py-3 text-[16px] sm:text-[18px] rounded-2xl hover:bg-[#f3efff]"
        >
          Submit
        </button>
      </div>

      {msg && (
        <div className="text-sm text-green-400 pt-2 text-center md:text-left">
          {msg}
        </div>
      )}
    </div>
  );
};
