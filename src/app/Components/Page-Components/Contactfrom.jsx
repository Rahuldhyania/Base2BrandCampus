"use client";
import React, { useState } from "react";
import { Coursesdata } from "@/app/Data/CoursesData";
import { toast } from "react-toastify";
import Buttons from "../UiUx/Buttons";
import Image from "next/image";

const PABBLY_WEBHOOK =
  "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZkMDYzMDA0MzY1MjY5NTUzNDUxMzIi_pc";
export const CanadaFlagIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="25px"
      height="25px"
      viewBox="0 0 36 36"
      aria-hidden="true"
      role="img"
      className="iconify iconify--twemoji"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        fill="#D52B1E"
        d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h6V5H4zm28 0h-6v26h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4z"
      />
      <path fill="#EEE" d="M10 5h16v26H10z" />
      <path
        fill="#D52B1E"
        d="M18.615 22.113c1.198.139 2.272.264 3.469.401l-.305-1.002a.46.46 0 0 1 .159-.476l3.479-2.834l-.72-.339c-.317-.113-.23-.292-.115-.722l.531-1.936l-2.021.427c-.197.03-.328-.095-.358-.215l-.261-.911l-1.598 1.794c-.227.288-.687.288-.544-.376l.683-3.634l-.917.475c-.257.144-.514.168-.657-.089l-1.265-2.366v.059v-.059l-1.265 2.366c-.144.257-.401.233-.658.089l-.916-.475l.683 3.634c.144.664-.317.664-.544.376l-1.598-1.793l-.26.911c-.03.12-.162.245-.359.215l-2.021-.427l.531 1.936c.113.43.201.609-.116.722l-.72.339l3.479 2.834c.138.107.208.3.158.476l-.305 1.002l3.47-.401c.106 0 .176.059.175.181l-.214 3.704h.956l-.213-3.704c.002-.123.071-.182.177-.182z"
      />
    </svg>
  );
};
function Contactfrom({ onCloseModal, singleColumn, description, showVideoPopupOnSubmit = false, showContact }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    course: ""
  });

  const [thankyou, setthankyou] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const sendToPabbly = (dataObj) => {
    try {
      const data = new URLSearchParams();
      data.append("firstname", dataObj.firstname || "");
      data.append("lastname", dataObj.lastname || "");
      data.append("email", dataObj.email || "");
      data.append("mobile", dataObj.mobile || "");
      data.append("course", dataObj.course || "");
      data.append("leadsource", "b2bcampus website");

      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        const blob = new Blob([data.toString()], {
          type: "application/x-www-form-urlencoded;charset=UTF-8"
        });
        navigator.sendBeacon(PABBLY_WEBHOOK, blob);
        return;
      }

      fetch(PABBLY_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: data.toString()
      }).catch(() => { });
    } catch (e) {
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      __vtrftk: "sid:86d217288de8307d1159faec2cd8f20e6fd42759,1766745690",
      publicid: "b1d358f820e3c28e411b9058299241a5",
      urlencodeenable: "1",
      name: "b2bcampus",
      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,
      cf_1192: formData.course,
      leadsource: "b2bcampus website"
    };

    try {
      const res = await fetch("/api/contact-from", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        sendToPabbly(formData);

        toast.success("Form submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          course: ""
        });
        setthankyou(true);
        window.dispatchEvent(new Event("openVideoPopup"));
        onCloseModal?.();

      } else {
        toast.error("Submission failed.");
      }
    } catch (err) {
      toast.error("Server error!");
    }
  };

  return (
    <div className="p-4 border-2 border-[#6346FA66] bg-white shadow-[0px_0px_13px_7px_#00000038] rounded-3xl">
      <div className="form-wrapper h-max">
        {thankyou ? (
          <div className="flex flex-col items-center justify-center p-10 bg-purple-50 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-[#6346FA] mb-4 text-center">
              Thank you for filling out the form!
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Our team will get in touch with you shortly to guide you further.
              Get ready to start your journey with the No.1 Training Institute in Mohali!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="crm-form" data-np-intersection-state="visible">
            <section className="middle w-full flex justify-center items-center px-4 relative">
              <div className="max-w-2xl w-full text-center sm:text-left">
                <h2 className="text-[28px] sm:text-[30px] font-semibold text-[#6346FA] text-center">
                  Start Your Campus Journey
                </h2>
                {
                  description === false ?
                    null
                    :
                    <p className="text-gray-600 mb-6 sm:mb-4 text-[16px] sm:text-[20px] text-center">
                      Let us help you with enrollment, courses, and more.
                    </p>
                }


                <div
                  className={` gap-4 ${singleColumn
                    ? 'flex flex-col'
                    : 'grid grid-cols-1 sm:grid-cols-2'
                    }`}
                >
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50"
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50"
                    required
                  />
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50"
                    required
                  />

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 sm:col-span-2"
                    required
                  >
                    <option value="">Select Course</option>
                    {Coursesdata.map((d, index) => (
                      <option value={d.name} key={index}>
                        {d.name}
                      </option>
                    ))}
                  </select>

                  <div className="buttons text-[25px] flex flex-col items-center justify-center mt-6 sm:col-span-2 gap-2">
                    <Buttons btnname="Enquire Now" text_color="text-white" type="submit" />
                    <div className="text-lg underline w-fit m-auto block md:hidden">
                      <a
                        href={`tel:+919878300209`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Free Demo Class
                      </a>
                    </div>
                  </div>
                  {
                    showContact &&
                    <div className="max-w-2xl m-auto grid grid-cols-1 gap-y-2">
                      <div className="flex items-center justify-center gap-4">
                        <Image
                          src={"/images/Flag_of_India.svg.png"}
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-[2px]"
                        />
                        <a
                          href="tel:+919872487850"
                          className="text-xl text-black hover:underline"
                        >
                          {" "}+91 98724-87850
                        </a>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <CanadaFlagIcon />
                        <a
                          href="tel:+15482554922"
                          className="text-xl text-black hover:underline"
                        >
                          {" "}+1 (548) 255-4922
                        </a>
                      </div>
                    </div>
                  }

                </div>
              </div>
            </section>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contactfrom;
