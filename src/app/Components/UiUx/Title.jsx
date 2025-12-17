import React from 'react'

const Title = ({ title, text_color }) => {
    return (
        <h2
            className={` text-2xl md:text-[32px] 2xl:text-[45px] leading-[34px] md:leading-[42px] 2xl:leading-[55px]  text-center font-bold ${text_color}`}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    )
}

export default Title
