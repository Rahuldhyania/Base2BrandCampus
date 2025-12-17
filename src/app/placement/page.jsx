import React from 'react';
import CoursesBanner from '../Components/Courses/CoursesBanner';
import placementleft from "../../../public/images/placementleft_banner.webp";
import placementright from "../../../public/images/placementright_banner.webp";
import ClassroomSkills from '../Components/Page-Components/ClassroomSkills';
const page = () => {
    return (
        <div>
           <CoursesBanner
                highlightText={'From Classroom Learning to High-Growth'}
                titleEnd={'Company Opportunities'}
                description={"At B2B Campus, every student grows from classroom learning to real career success."}
                leftposter={placementleft}
                rightposter={placementright}
            />
            <ClassroomSkills />
        </div>
    )
}

export default page
