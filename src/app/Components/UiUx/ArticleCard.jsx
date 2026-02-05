import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({
  id,
  poster_image,
  imageUrl,
  isfeatured,
  features,
  article_tag,
  article_des_tag,
  article_title,
  heading,
  article_carddescription,
  shortDescription,
  description,
  publish_date,
  createdAt,
  reading_time,
  category,
  tags,
  slugUrl,
}) => {
  // Handle imageUrl - it might be a pipe-separated string, take the first image
  const displayImage = imageUrl
    ? (imageUrl.split('|')[0] || imageUrl)
    : poster_image || '';

  const displayTitle = heading || article_title || '';
  const displayDescription = shortDescription || description || article_carddescription || '';
  const displayTag = category?.tags || tags || article_tag || '';
  const displayCategory = category?.name || article_des_tag || '';
  const displayDate = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : publish_date || '';
  const showFeatured = features || isfeatured;

  return (
    <div className="" key={id}>
      <div className="relative">
        <Image
          src={displayImage}
          alt={displayTitle}
          width={1000}
          height={500}
          className="rounded-t-2xl"
        />
        {showFeatured && (
          <div className="absolute top-5 left-3 bg-primary rounded-4xl text-white text-base flex items-center gap-2 px-3 py-1 w-fit">
            <Image
              src={"/icons/starwhite.svg"}
              alt=""
              width={1000}
              height={500}
              className="max-w-4"
            />
            Featured
          </div>
        )}
        <div className="absolute right-[1%] max-w-[98%] top-5  bg-[#FFFFFFE5] rounded-4xl text-primary text-base flex items-center gap-2 px-3 py-1.5 w-fit">
          {displayTag}
        </div>
      </div>
      <div className="py-6 px-8 bg-white rounded-b-2xl">
        <p className="text-[#6A7282] textbase uppercase">
          {displayCategory}
        </p>
        <h3 className="text-3xl line-clamp-1 pt-3">
          {displayTitle}
        </h3>
        <p className="text-lg text-[#4A5565] line-clamp-2 pt-2"
          dangerouslySetInnerHTML={{ __html: displayDescription }}
        />

        <div className="pt-4 flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#4A5565]">
            <Image
              src={"/icons/calandergray.svg"}
              alt=""
              width={1000}
              height={500}
              className="max-w-4"
            />
            {displayDate}
          </div>
          <div className="flex items-center gap-2 text-[#4A5565]">
            <Image
              src={"/icons/clockgray.svg"}
              alt=""
              width={1000}
              height={500}
              className="max-w-4"
            />
            {reading_time || '5 min read'}
          </div>
        </div>
        <div className="pt-3">
          <Link href={`/knowledge-center/${slugUrl || id}`}>
            <button className="bg-primary text-white px-4 py-2 rounded-xl text-xl cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
