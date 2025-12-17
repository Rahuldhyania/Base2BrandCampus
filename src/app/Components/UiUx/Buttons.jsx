import React from 'react'
import mainbtnng from "../../../../public/images/mainbtnbg.webp"
const Buttons = ({ btnname, text_color, btn_primary, btn_bg }) => {
    return (
        <div>
            <button className={`border-none outline-none transition-all duration-300 hover:-translate-y-1 text-2xl py-3 px-8 rounded-2xl ${text_color} ${btn_bg} bg-cover bg-center cursor-pointer banner_button`}
                style={
                    btn_primary === false
                        ? {}
                        : { backgroundImage: `url(${mainbtnng.src})` }
                } >
                {btnname}
            </button>
        </div>
    )
}

export default Buttons
