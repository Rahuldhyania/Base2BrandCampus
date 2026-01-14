import React from "react";
import Description from "../UiUx/Description";
import Image from "next/image";

const Page2TitleDisList = ({ title, discription1, listData, discription2 }) => {
  return (
    <div className="pt-8">
      <h2 className="text-xl md:text-2xl 2xl:text-3xl text-primary">
       {title}
      </h2>

      {discription1 &&
        <Description
          description={discription1}
          text_color={"text-black"}
          text_start={true}
        />}
      {listData &&
        listData.map((data, index) =>
          <div className="py-3" key={index}>
            <h4 className="text-lg lg:text-xl 2xl:text-2xl text-black font-medium">
              Industrial training helps students:
            </h4>
            <ul className="pt-3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 px-4">
              {data.listdata.map((item, i) =>
                <div
                  key={i}
                  className="relative flex items-center bg-[#6C47FF] text-white ps-2 py-4 2xl:py-3 rounded-[17px] shadow-sm  transition-all duration-300 overflow-visible"
                >
                  <Image
                    src="/images/greencheck.webp"
                    alt="check"
                    width={1000}
                    height={500}
                    className="w-[30px] 2xl:w-[41px] h-[30px] 2xl:h-[41px] object-contain absolute left-2 md:-left-5 top-2"
                  />
                  <p className="text-lg  font-medium pl-10 md:pl-5">
                    {item}
                  </p>
                </div>
              )}
            </ul>
          </div>
        )}

      {discription2 &&
        <Description
          description={discription2}
          text_color={"text-black"}
          text_start={true}
        />}
    </div>
  );
};

export default Page2TitleDisList;
