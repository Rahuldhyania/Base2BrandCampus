import React from 'react'
import CoursesBanner from '../Components/Courses/CoursesBanner'
import Image from 'next/image';
import IndustrialGallery from '../Components/Page-Components/IndustrialGallery';
import WhatIndustrial from '../Components/Page-Components/WhatIndustrial';

const page = () => {
    return (
        <div>
            <CoursesBanner
                highlightText={'Industry-Ready Industrial Training'}
                titleEnd={'at B2B Campus'}
                description={"Learn from industry experts. Work on live projects. Get career-ready."}
                leftposter={'/images/industrial-trainingleftbanner.webp'}
                rightposter={'/images/industrial-trainingrightbanner.webp'}
            />
            <div className='main-bg'>
                <IndustrialGallery />
                <WhatIndustrial />
            </div>

        </div>
    )
}

export default page
