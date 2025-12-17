"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Buttons from "../UiUx/Buttons";

function ContactForm({ onCloseModal }) {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    notes: "",
    sheetType: "b2bcampus contact"
  });

  const [thankyou, setThankyou] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      __vtrftk: "sid:b2b63c85d8483eb5adc01e968e97426da76fe12e,1765801868",
      publicid: "b4cb0fc08583e64b8011a69f828d9b2d",
      urlencodeenable: "1",
      name: "b2bcampus",

      firstname: formData.firstname,
      lastname: formData.lastname,
      mobile: formData.mobile,
      email: formData.email,

      cf_1196: formData.notes, // Notes field
      cf_1298: formData.sheetType
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
          notes: "",
          sheetType: "b2bcampus contact"
        });

        setThankyou(true);
        onCloseModal && onCloseModal();
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error!");
    }
  };

  return (
    <div className="p-4 border-2 border-[#6346FA66] bg-white shadow-[0px_0px_13px_7px_#00000038] rounded-3xl">
      {thankyou ? (
        <div className="flex flex-col items-center justify-center p-10 bg-purple-50 rounded-xl shadow-md">
          <h2 className="text-4xl font-bold text-[#6346FA] mb-4 text-center">
            Thank you for filling out the form!
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Our team will get in touch with you shortly. <br />
            Get ready to start your journey with the No.1 Training Institute in Mohali!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-[28px] font-semibold text-[#6346FA] text-center mb-4">
            Start Your Campus Journey
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 w-full"
              required
            />

            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 w-full"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 w-full"
              required
            />

            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 w-full"
              required
            />

            {/* Notes Textarea */}
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Your Message / Notes"
              rows="4"
              className="border border-gray-300 rounded-lg px-4 py-3 bg-purple-50 w-full resize-none"
            />

            <input type="hidden" name="sheetType" value="b2bcampus contact" />

            <div className="flex justify-center mt-6">
              <Buttons
                btnname="Enquire Now"
                text_color="text-white"
                type="submit"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
