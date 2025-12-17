import Image from 'next/image';
import React from 'react';
import Globaltitle from '../UiUx/Globaltitle';
import Contactfrom from '../Page-Components/Contactfrom';
import bublebg from "../../../../public/images/bublebg.webp";

import bannerbggradient from "../../../../public/images/bannerbg-gradient.webp";
const CoursesBanner = ({ highlightText, titleEnd, description, leftposter, rightposter ,max_width}) => {
    return (
        <div className="bg-cover bg-no-repeat bg-bottom"
            style={{ backgroundImage: `url(${bannerbggradient.src})` }}
        >
            <div className='max-w-[1900px] m-auto px-[3%]'>
                <div className=" skill-title-container py-2 relative flex justify-centeritems-center">
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                        <Image
                            src={bublebg}
                            width={1000}
                            height={500}
                            alt="bg"
                            className="w-[500px] md:w-[1282px] sm:w-[280px] opacity-90 object-contain mx-auto "
                        />
                    </div>
                    <div className="relative z-10 w-full">
                        <Globaltitle
                            titleStart={""}
                            highlightText={highlightText}
                            titleEnd={titleEnd}
                            description={description}
                        />
                    </div>
                </div>
                <div className=" banner-wrap grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 items-end">
                    <div className="boy relative w-full h-full hidden lg:flex items-end">
                        <Image
                            src={leftposter}
                            width={1000}
                            height={500}
                            alt="boy"
                            className="max-h-[600px] object-contain mx-auto"
                        />
                    </div>
                    <div className='my-auto py-5 md:py-12'>
                        <Contactfrom />
                    </div>
                    <div className="girl relative w-full hidden lg:flex items-center h-full">
                        <Image
                            src={rightposter}
                            width={1000}
                            height={500}
                            alt="girl"
                            className={`max-h-[600px] object-contain mx-auto ${max_width ? max_width : ''}`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesBanner
