import React from 'react';
import PopularCourses from '../Components/Page-Components/PopularCourses';
import WhyChooseSection from '../Components/Page-Components/WhyChooseSection';
import Whatstudentget from '../Components/Page-Components/Whatstudentget';

const page = () => {
    return (
        <div>
            <PopularCourses />
            <div className="main-bg">
                <WhyChooseSection />
            </div>
            <Whatstudentget />
        </div>
    )
}

export default page
