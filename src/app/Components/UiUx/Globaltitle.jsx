import Image from "next/image";
import React from "react";

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

const Globaltitle = ({ titleStart, highlightText, titleEnd, description, showContect  }) => {
  return (
    <div>
      <div className="text-center py-2 px-4">
        <h1 className=" text-[32px] md:text-[70px] 2xl:text-[60px]  font-bold text-white leading-snug  ">
          {titleStart}{" "}
          <span className=" px-3 py-1 rounded-xl text-white">
            {highlightText} <br />
          </span>{" "}
          <span className="font-normal text-white">{titleEnd}</span>
        </h1>

        <p className="mt-3 text-white text-[16px]  2xl:text-[25px]">
          {description}
        </p>

        {/* {showContect && */}
          <div className="max-w-2xl m-auto pt-6 grid grid-cols-1 md:grid-cols-2 gap-y-2">
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
                className="text-xl text-white hover:underline"
              >
                {" "}+91 98724-87850
              </a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <CanadaFlagIcon />
              <a
                href="tel:+15482554922"
                className="text-xl text-white hover:underline"
              >
                {" "}+1 (548) 255-4922
              </a>
            </div>
          </div>
          {/* } */}
      </div>
    </div>
  );
};

export default Globaltitle;
