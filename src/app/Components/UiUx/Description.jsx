import React from 'react'

const Description = ({ description, text_color,text_start }) => {
    return (
        <div>
            <p
                className={` text-[16px] md:text-[20px] leading-8 ${text_start ? 'text-start' : 'text-center'}  bold-none ${text_color}`}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}

export default Description
