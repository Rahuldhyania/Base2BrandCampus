import Image from 'next/image';
import React from 'react';
import smallbublebg from "../../../../public/images/smallbublebg.webp";
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';
const learningSteps = [
    {
        step: 1,
        title: "Fundamentals",
        description: "Build a strong foundation with core concepts",
    },
    {
        step: 2,
        title: "Practical Sessions",
        description: "Apply learning through guided practice",
    },
    {
        step: 3,
        title: "Live Projects",
        description: "Work on real-world assignments",
    },
    {
        step: 4,
        title: "Evaluation & Mentoring",
        description: "Regular feedback and improvement",
    },
    {
        step: 5,
        title: "Certification",
        description: "Industry-recognized certificate",
    },
];

const TraningStep = () => {
    return (
        <div>
            <div className="cus_container py-12 md:py-16">
                <div className="text-center">
                    <div className="relative">
                        <Image
                            src={smallbublebg.src}
                            alt="bubble-bg"
                            width={1000}
                            height={500}
                            className="absolute hidden md:block -bottom-8 left-1/2 -translate-x-1/2 w-[480px] md:w-[670px] sm:w-[241px] pointer-events-none select-none opacity-90"
                        />
                        <Title
                            title={
                                'Training Structure'
                            }
                            text_color={"text-primary relative z-10"}
                        />
                    </div>

                    <div className="pt-3 relative z-10">
                        <Description
                            description={"A step-by-step journey to becoming industry-ready"}
                            text_color={"text-secondary"}
                        />
                    </div>
                </div>

                <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
                    {
                        learningSteps.map((data, index) => (
                            <div className='' key={index}>
                                <div className="max-w-[90%] m-auto">
                                    <div className='text-xl text-white w-[58px] h-[58px] bg-primary rounded-[50%] flex items-center justify-center m-auto'>
                                        {data.step}
                                    </div>

                                    <div className=' text-center pt-2'>
                                        <p className='text-[22px] text-secondary font-bold'>
                                            {data.title}
                                        </p>
                                        <p className='text-[17px] text-[#4A5565]'>
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TraningStep
