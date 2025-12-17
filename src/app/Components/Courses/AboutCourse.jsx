import React from 'react'
import Title from '../UiUx/Title'

function AboutCourse({ title, description1, description2, description3 }) {
    return (
        <div className='main-bg'>
            <section className="cus_container py-16">
                <div className="max-w-6xl mx-auto">

                    <div className='pb-6'>
                        <Title
                            title={title}
                            text_color={'text-secondary'}
                        />
                    </div>

                    <p className="text-lg 2xl:text-xl leading-relaxed text-[#6346FA] mb-6"
                        dangerouslySetInnerHTML={{ __html: description1 }}
                    >
                    </p>

                    <div className="bg-[#F3E8FF] border-l-4 border-[#6346FA] p-6 rounded-xl shadow-md mb-8">
                        <p className="text-[#6346FA] text-lg 2xl:text-xl leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: description2 }}
                        >
                        </p>
                    </div>

                    <p className="text-lg 2xl:text-xl leading-relaxed text-[#6346FA]"
                        dangerouslySetInnerHTML={{ __html: description3 }}
                    >
                    </p>

                </div>
            </section>
        </div>
    )
}

export default AboutCourse
