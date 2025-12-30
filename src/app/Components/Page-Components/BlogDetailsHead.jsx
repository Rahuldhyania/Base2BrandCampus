"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogDetailsHead = ({ backbtn, share_btn, backUrl }) => {
  const router = useRouter();
  const backarrow = (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      className="text-white group-hover:text-black transition"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0013 15.8333L4.16797 10L10.0013 4.16667"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8346 10H4.16797"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const share_btned = (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      className="text-black group-hover:text-white transition"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.33333C13.1046 5.33333 14 4.4379 14 3.33333C14 2.22876 13.1046 1.33333 12 1.33333C10.8954 1.33333 10 2.22876 10 3.33333C10 4.4379 10.8954 5.33333 12 5.33333Z"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
      <path
        d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
      <path
        d="M12 14.6667C13.1046 14.6667 14 13.7712 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7712 10.8954 14.6667 12 14.6667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
      <path
        d="M5.72656 9.00667L10.2799 11.66"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
      <path
        d="M10.2732 4.34L5.72656 6.99333"
        stroke="currentColor"
        strokeWidth="1.33333"
      />
    </svg>
  );

  return (
    <div className="bg-[#6346FA] py-[29px]">
      <div className="cus_container">
        <div className="inner_details_head flex  justify-between px-2 sm:px-2 md:px-10 lg:px-[120px] xl:px-[180px]">
          {backUrl ? (
            <Link
              href={backUrl}
              title={backbtn}
              className="group bg-[#4129BA] hover:bg-white hover:text-black transition duration-300 ease-in-out flex items-center gap-2 sm:gap-[10px] text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] w-fit text-white rounded-lg py-1.5 sm:py-[8px] px-2 sm:px-[10px]"
            >
              {backarrow}
              {backbtn}
            </Link>
          ) : (
            <button
              onClick={() => router.back()}
              title={backbtn}
              className="group bg-[#4129BA] hover:bg-white hover:text-black transition duration-300 ease-in-out flex items-center gap-2 sm:gap-[10px] text-sm sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] w-fit text-white rounded-lg py-1.5 sm:py-[8px] px-2 sm:px-[10px]"
            >
              {backarrow}
              {backbtn}
            </button>
          )}
          <button
            onClick={() => {
              if (typeof window !== "undefined" && navigator.share) {
                navigator.share({
                  title: document.title,
                  url: window.location.href,
                });
              } else if (typeof window !== "undefined") {
                navigator.clipboard.writeText(window.location.href);
                alert("Link copied to clipboard!");
              }
            }}
            title={share_btn}
            className="group flex items-center gap-2 sm:gap-[10px] bg-white hover:bg-[#4129BA] hover:text-white transition duration-300 ease-in-out w-fit rounded-lg text-sm sm:text-[16px] leading-[20px] sm:leading-[24px] p-2 sm:p-[10px]"
          >
            {share_btned}
            {share_btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHead;
