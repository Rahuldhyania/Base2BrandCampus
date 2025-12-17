"use client";

import { motion } from "framer-motion";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Buttons from "../UiUx/Buttons";

const features = [
    "100% practical sessions",
    "Beginner-friendly curriculum",
    "Real project work",
    "Daily tasks + weekly assessments",
    "Soft skills + interview training",
    "Resume building & mock interviews",
];

export default function TrainingSection({clickscroll}) {
    return (
        <section
            className="relative py-12 px-2 md:px-6 overflow-hidden"
            // style={{ backgroundColor: "#DDD6FF" }} // MAIN BACKGROUND COLOR
        >

            {/* Decorative Gradient Blobs */}
            {/* <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-300/40 blur-[150px] rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/40 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4"></div> */}

            {/* Floating Circles Animation */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute w-40 h-40 bg-purple-300/30 rounded-full blur-xl top-20 right-40"
            ></motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute w-32 h-32 bg-purple-200/30 rounded-full blur-xl bottom-32 left-20"
            ></motion.div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Heading Section */}
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-extrabold text-[#6346FA] text-center drop-shadow-lg"
                >
                    <div className="relative">

                        <img
                            src={titlewhitebg.src}
                            alt="bubble-bg"
                            className="absolute hidden md:block  top-[50%] md:top-[60%] left-1/2  -translate-x-1/2 -translate-y-1/2 w-full md:w-[900px]  sm:w-[241px] pointer-events-none select-none opacity-90 max-w-[900px] m-auto"
                        />

                        <div className="relative z-10 text-center">
                            <Title
                                title={'About Our Course'}
                                text_color={'text-primary'}
                            />
                            <Title
                                title={'Industry-Ready Software Training <br/> Designed for Real Jobs'}
                                text_color={'text-secondary'}
                            />
                           <div className="pt-3">
                             <Description
                                description={'We dont just teach — we train you for a job. <br /> '}
                                text_color={'text-secondary'}
                            />
                           </div>
                        </div>
                    </div>

                </motion.h2>

                {/* Features Grid — Glass Effect */}
                <div className="grid md:grid-cols-2 gap-10 mt-6 md:mt-20">
                    {features.map((item, index) => (
                        // <motion.div
                        //     key={index}
                        //     initial={{ opacity: 0, scale: 0.8 }}
                        //     whileInView={{ opacity: 1, scale: 1 }}
                        //     transition={{ duration: 0.6, delay: index * 0.15 }}
                        //     viewport={{ once: true }}
                        //     className="p-8 bg-white/50 backdrop-blur-xl border border-purple-200/60
                        //  rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03] 
                        //  flex items-center gap-4"
                        // >
                        //     <div className="w-10 h-10 bg-purple-300/60 rounded-full flex items-center justify-center shadow-md">
                        //         <span className="text-purple-900 text-2xl">★</span>
                        //     </div>
                        //     <p className="text-black text-xl font-semibold leading-relaxed">
                        //         {item}
                        //     </p>
                        // </motion.div>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="p-5 bg-white/50 backdrop-blur-xl border border-purple-200/60
        rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-[1.02]
        flex items-center gap-3"
                        >
                            <div className="w-8 h-8 bg-purple-300/60 rounded-full flex items-center justify-center shadow-md">
                                <span className="text-purple-900 text-xl">★</span>
                            </div>
                            <p className="text-black text-lg font-semibold leading-relaxed">
                                {item}
                            </p>
                        </motion.div>

                    ))}
                </div>
                 <div className="buttons text-[25px] md:hidden flex justify-center m-auto mt-[2%]" onClick={clickscroll}>
                    <Buttons btnname='Enquire Now' text_color={'text-white'} />
                </div>
            </div>
        </section>
    );
}
