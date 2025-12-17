"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";



export default function FaqSection({faq_data}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-12 2xl:py-16 px-4 md:px-6 relative overflow-hidden main-bg">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div className="relative ">
          <div className="relative z-2 text-center">
            <img
              src={titlewhitebg.src}
              alt="bubble-bg"
              className="absolute hidden md:block md:top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[745px]  sm:w-60 pointer-events-none select-none opacity-90"
            />

            <div className="relative z-3">
              <Title
                title={
                  '<span class="text-primary">  Frequently Asked Questions</span> <br/>  '
                }
                text_color={"text-secondary"}
              />
            </div>
          </div>

          <div className="text-center relative z-3">
            <Description
              description={
                " Clear answers — so you feel confident before joining."
              }
              text_color={"text-secondary"}
            />
          </div>
        </div>

        {/* Grid with 2 Independent Columns */}
        <div className="mt-6 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT COLUMN */}
          <div className="space-y-3 md:space-y-6">
            {faq_data.filter((_, i) => i % 2 === 0).map((faq, i) => {
              const actualIndex = i * 2;
              const isOpen = openIndex === actualIndex;

              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200/60"
                >
                  {/* Question Box */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                    className="w-full flex justify-between items-center py-3 px-6 text-left"
                  >
                    <span className="text-lg md:text-xl text-black">
                      {faq.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-black text-2xl"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </button>

                  {/* Smooth Answer */}
                  <AnimatePresence>
                    {isOpen &&
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-black leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-3 md:space-y-6">
            {faq_data.filter((_, i) => i % 2 !== 0).map((faq, i) => {
              const actualIndex = i * 2 + 1;
              const isOpen = openIndex === actualIndex;

              return (
                <motion.div
                  key={actualIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl border border-purple-200/60"
                >
                  {/* Question Box */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
                    className="w-full flex justify-between items-center py-3 px-6 text-left"
                  >
                    <span className="text-lg md:text-xl text-black">
                      {faq.q}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-black text-2xl"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen &&
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-black leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
