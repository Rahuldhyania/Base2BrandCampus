import React from "react";
import Whatsapp from "../Page-Components/Whatsapp";

const MobileFooterbar = () => {
    const message = encodeURIComponent(
        "Hello B2B Campus Team 👋\n" +
        "I want to get complete details about your courses in\n" +
        "✅ Development\n" +
        "✅ Digital Marketing\n" +
        "✅ Truck Dispatch\n" +
        "✅ Graphic Designing\n" +
        "✅ Video Editing\n\n" +
        "Please guide me with fees, duration & career opportunities."
    );
    return (
        <div>
            <a
                href={`https://wa.me/9878300209?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="flex items-center justify-end w-fit ms-auto">
                    <div className="relative left-8">
                        <Whatsapp />
                    </div>
                    <div className="text-sm w-fit bg-primary pb-1 pt-2 ps-8 pe-4 text-white rounded-l-xl">
                        Chat With Us On
                        <p className="text-lg m-0">Whatsapp</p>
                    </div>
                </div>
            </a>


                <div className="bg-primary flex items-center justify-center gap-3 mt-6 py-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#fff"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                        />
                    </svg>
                    <a
                        href={`tel:+919878300209`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="text-xl font-bold text-white underline">FREE DEMO CLASS</span>
                    </a>
                </div>
        </div>
    );
};

export default MobileFooterbar;
