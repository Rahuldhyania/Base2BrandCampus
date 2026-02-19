import React from "react";
import Image from "next/image";
import arrowiconcvgv from "../../../../public/images/arrowicon.webp";
import Link from "next/link";
const ServiceCard = ({
  title,
  icon,
  color,
  arrowicon,
  des,
  buttonText,
  clickscroll,
  linkpage,
  trandingCource,
  trandingSecondary
}) => {
  const getNextMonday = () => {
    const today = new Date();
    const day = today.getDay();
    const daysUntilNextMonday = (8 - day) % 7 || 7;

    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilNextMonday);

    return nextMonday.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  const nextBatchDate = getNextMonday();
  const getNextMondayTwoWeeksLater = () => {
    const today = new Date();
    const day = today.getDay();
    const daysUntilNextMonday = (8 - day) % 7 || 7;

    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilNextMonday);
    nextMonday.setDate(nextMonday.getDate() + 14);

    return nextMonday.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  const nextBatchDateSecondary = getNextMondayTwoWeeksLater();
    const handlePhoneClick = () => {
    window.location.href = `tel:+919872487850`;
  };
  return (
    <Link href={`${linkpage}`}>
      <div className="group relative w-full ] rounded-2xl p-6 md:p-auto md:px-4 md:py-6 flex flex-col justify-between bg-white border border-[#5D38DE66] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#CEC5FF] gap-y-2 h-full">
        {trandingCource
          ? <div>
            <p class="text-[11px] w-fit absolute right-2 top-1 px-[8px] py-[3px] text-white rounded-[23px] flex items-center gap-1 animate-[bgBlink_1s_infinite]">
              <span class="w-[6px] h-[6px] rounded-full animate-[dotBlink_1s_infinite]" />
               {trandingSecondary ? `Most Trending — ${nextBatchDateSecondary}` : `NEXT BATCH  — ${nextBatchDate}`}
            </p>
          </div>
          : null}

        <div className="flex justify-between items-center">
          <Image
            src={icon}
            alt={title}
            width={1000}
            height={500}
            className="transition-transform duration-300 group-hover:scale-110 max-w-16"
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />

          <h2 className="text-[#6346FA] text-2xl text-end">
            {title}
          </h2>
        </div>
        <p className="text-black text-base md:text-[14px] pt-2">
          {des}
        </p>

        <div className="grid grid-cols-[3fr_60px] md:grid-cols-1 gap-2">


          <div className="flex justify-between items-center bg-white border border-[#6346FA4D] rounded-xl p-[2%] cursor-pointer transition-all duration-300  hover:bg-[#F3F0FF] hover:shadow-md hover:-translate-y-1 ">
            <span className="text-[18px] md:text-[16px] font-medium text-[#1C1C1C]">
              {buttonText}
            </span>

            <div className="w-10 h-10 sm:w-7 sm:h-7 rounded-full bg-[#CEC5FF] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 hover:bg-[#b8aaff]">
              <Image src={arrowiconcvgv} alt="arrow" width={12} height={12} />
            </div>
          </div>
          
         
          <div  onClick={(e) => {
              e.preventDefault();
              handlePhoneClick();
            }} className="flex md:hidden justify-center items-center rounded-[50%] w-[50px] h-[50px] ms-auto border border-primary relative z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="var(--primary)"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
              />
            </svg>
          </div>


        </div>

      </div>
    </Link>
  );
};

export default function ServicesSection({ courses, clickscroll }) {
  return (
    <div className="py-10">
      <div className="md:w-[90%] cus_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {courses.map(item =>
          <ServiceCard
            key={item.id}
            title={item.title}
            des={item.des}
            icon={item.icon}
            color={item.color}
            buttonText={item.buttonText}
            img={item.arrowIcon}
            clickscroll={clickscroll}
            linkpage={item.page_link}
            trandingCource={item.trandingCource}
            trandingSecondary={item.trandingSecondary}
          />
        )}
      </div>
    </div>
  );
}
