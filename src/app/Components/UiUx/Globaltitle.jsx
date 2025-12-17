import React from 'react'

const Globaltitle = ({
    titleStart,
    highlightText,
    titleEnd,
    description
}) => {
    return (
        <div>
            <div className="text-center py-2 px-4" >
                <h1 className=" text-[32px] md:text-[70px] 2xl:text-[60px]  font-bold text-gray-900 leading-snug  " >
                    {titleStart}{" "}
                    <span className=" px-3 py-1 rounded-xl text-[#6346FA]">
                        {highlightText} <br />
                    </span>{" "}
                   <span className='font-normal'>{titleEnd}</span> 
                </h1>

                <p className="mt-3 text-gray-600 text-[16px]  2xl:text-[25px]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Globaltitle
