import React from "react";
import Buttons from "../UiUx/Buttons";
import Link from "next/link";

const ReadytoGrow = () => {
    return (
        <div className="py-12">
            <div className="cus_container bg-[#E4DFFF] text-center py-12 rounded-[50px]">
                <h2 className="text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    Ready to Grow Your Career?
                </h2>

                <p className="text-base lg:text-lg 2xl:text-xl text-black max-w-7xl m-auto py-5">
                    B2B Campus is here to help you achieve professional success by
                    providing comprehensive, hands-on training in digital marketing and
                    web development. Learn from experienced industry experts, work on
                    real-world projects, and develop the practical skills employers value
                    most. With our career-focused programs, you can confidently step into
                    the IT and digital marketing world and unlock opportunities for
                    growth, achievement, and long-term success
                </p>

                <div className="pt-3 flex flex-col md:flex-row gap-4 items-center justify-center">
                    <Link
                        href={'/courses'}
                    >
                        <Buttons
                            btnname={'Explore All Courses'}
                            text_color={'text-white'}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReadytoGrow;
