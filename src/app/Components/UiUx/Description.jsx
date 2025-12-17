import React from 'react'

const Description = ({ description, text_color }) => {
    return (
        <div>
            <h2
                className={` text-[16px] md:text-[20px] leading-8 text-center  bold-none ${text_color}`}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </div>
    )
}

export default Description
