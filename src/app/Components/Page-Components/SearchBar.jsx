import React from 'react'
import Image from 'next/image';
import SearchIcon from '../../../../public/images/SearchIcon.webp';

const SearchBar = ({
    placeholder = "What do you want to learn?",
    buttonText = "Search",
    borderColor = "#E4DFFF",
    bgColor = "#FFFFFF",
    buttonBg = "#1B1B2B",
    textColor = "#000000",
    buttonTextColor = "#FFFFFF",
}) => {
    return (
        <div>
            <div className="flex justify-center mt-10">

                <div
                    className="relative w-full max-w-[489px] lg:max-w-[550px] xl:max-w-[400px] 2xl:max-w-[600px] p-[13px] flex items-center gap-2 rounded-full"
                    style={{
                        backgroundColor: bgColor,
                        border: `4px solid ${borderColor}`,
                    }}>

                    <input
                        type="text"
                        placeholder={placeholder}
                        className="text-[16px] flex-1 bg-transparent outline-none border-none   "
                        style={{ color: textColor }}
                    />

                    {/* 🔍 Search Button with Icon */}
                    <button
                        className="w-[142px] lg:w-40 xl:w-[142px] text-[16px] xl:p-2 p-[13px] flex justify-center items-center gap-2 outline-none border-none rounded-xl cursor-pointer"
                        style={{
                            backgroundColor: buttonBg,
                            color: buttonTextColor,
                        }}>

                        {/* Icon */}
                        <Image
                            src={SearchIcon}
                            alt="search"
                            width={18}
                            height={18}
                            className="opacity-90"
                        />

                        {/* Text */}
                        {buttonText}

                    </button>

                </div>
            </div>
        </div>
    )
}

export default SearchBar
