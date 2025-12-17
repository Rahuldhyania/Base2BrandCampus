"use client";
import React, { useState } from "react";
import { Coursesdata } from "@/app/Data/CoursesData";
import { toast } from "react-toastify";
import Buttons from "../UiUx/Buttons";
function Contactfrom({ onCloseModal }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    course: ""
  });
  const [thankyou, setthankyou] = useState(false);
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      __vtrftk: "sid:5fd0ebe73d5ae63b11e53b8e94a7b63892025362,1765278059",
      publicid: "b1d358f820e3c28e411b9058299241a5",
      urlencodeenable: "1",
      name: "b2bcampus",
      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,
      "cf_1192[]": formData.course
    };

    try {
      const res = await fetch("/api/contact-from", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Form submitted successfully!");

        setFormData({
          firstname: "",
          lastname: "",
          mobile: "",
          email: "",
          course: "Shopify Development"
        });
        setthankyou(true);
        onCloseModal();
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
        {thankyou
          ? <div className="flex flex-col items-center justify-center p-10 bg-purple-50 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-[#6346FA] mb-4 text-center">
              Thank you for filling out the form!
            </h2>
            <p className="text-gray-600 text-center  mb-6">
              Our team will get in touch with you shortly to guide you further.
              Get ready to start your journey with the No.1 Training Institute in Mohali!
            </p>
          </div>
          : <form onSubmit={handleSubmit} className="crm-form">
            <section className="middle w-full flex justify-center items-center px-4 relative">
              <div className="max-w-2xl w-full text-center sm:text-left">
                <h2 className="text-[28px] sm:text-[30px] font-semibold text-[#6346FA] text-center">
                  Start Your Campus Journey
                </h2>
                <p className="text-gray-600 mb-6 sm:mb-4 text-[16px] sm:text-[20px] text-center">
                  Let us help you with enrollment, courses, and more.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 "
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 "
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 "
                    required
                  />
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 "
                    required
                  />

                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50  sm:col-span-2"
                    required
                  >
                    <option value="">Select Cource</option>
                    {
                      Coursesdata.map((data, index) => (
                        <option value={data.name} key={index}>
                          {data.name}
                        </option>
                      ))
                    }
                  </select>

                  <div className="buttons text-[25px] flex justify-center mt-6 mb-6 sm:col-span-2">
                    <Buttons
                      btnname="Enquire Now"
                      text_color="text-white"
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </section>
          </form>}
      </div>
    </div>
  );
}

export default Contactfrom;
