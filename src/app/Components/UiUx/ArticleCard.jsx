import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";

const ArticleCard = ({
  id,
  poster_image,
  isfeatured,
  article_tag,
  article_des_tag,
  article_title,
  article_carddescription,
  publish_date,
  reading_time
}) => {
  return (
    <div className="" key={id}>
      <div className="relative">
        <Image
          src={poster_image}
          alt=""
          width={1000}
          height={500}
          className="rounded-t-2xl"
        />
        {isfeatured &&
          <div className="absolute top-5 left-3 bg-primary rounded-4xl text-white text-base flex items-center gap-2 px-3 py-1 w-fit">
            <Image
              src={"/icons/starwhite.svg"}
              alt=""
              width={1000}
              height={500}
              className="max-w-4"
            />
            Featured
          </div>}
        <div className="absolute top-5 right-3 bg-[#FFFFFFE5] rounded-4xl text-primary text-base flex items-center gap-2 px-3 py-1.5 w-fit">
          {article_tag}
        </div>
      </div>
      <div className="py-6 px-8 bg-white rounded-b-2xl">
        <p className="text-[#6A7282] textbase uppercase">
          {article_des_tag}
        </p>
        <h3 className="text-3xl line-clamp-1 pt-3">
          {article_title}
        </h3>
        <p className="text-lg text-[#4A5565] line-clamp-2 pt-2">
          {article_carddescription}
        </p>

        <div className="pt-4 flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#4A5565]">
            <Image
              src={"/icons/calandergray.svg"}
              alt=""
              width={1000}
              height={500}
              className="max-w-4"
            />
            {publish_date}
          </div>
          <div className="flex items-center gap-2 text-[#4A5565]">
            <Image
              src={"/icons/clockgray.svg"}
              alt=""
              width={1000}
              height={500}
              className="max-w-4"
            />
            {reading_time}
          </div>
        </div>
        <div className="pt-3">
          <button className="bg-primary text-white px-4 py-2 rounded-xl text-xl cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
