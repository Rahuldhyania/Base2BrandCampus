'use client'
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

function Whatsapp() {
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
      {/* <a
        href={`https://wa.me/9878300209?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="max-w-12"
      > */}
         <Player
            src="/whtasappjson.json"
            loop
            autoplay
            className="max-w-12 md:max-w-[80px]"
            style={{
              height: "max-content"
            }}
          />
      {/* </a> */}
    </div>
  );
}

export default Whatsapp;
