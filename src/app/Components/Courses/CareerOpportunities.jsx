import React from 'react'
import Title from '../UiUx/Title'

const CareerOpportunities = ({ careeropportunitie, lowerdata, lower_title1, lower_description1, lower_title2, lower_description2 }) => {
    return (
        <div className='cus_container'>
            <div>
                <Title
                    title={' Career Opportunities After <br/> <span class="text-primary"> B2B Campus </span> Training '}
                    text_color={'text-secondary'}
                />
            </div>
            <div className={`md:max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ${lowerdata ? 'pt-12' : 'py-12'} `}>
                {careeropportunitie.map((item, index) =>
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                    >
                        <div className=" items-start gap-4">
                            <div>
                                <h3 className="text-[#4A38F4] font-semibold text-xl leading-tight pb-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-[15px] 2xl:text-[17px] md:w-[85%] mt-1 leading-snug">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            {
                lowerdata && (
                    <div className='md:max-w-[95%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 py-12'>
                        <div>
                            <h5 className='text-primary text-xl 2xl:text-2xl flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="#6346fa" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" />
                                </svg>
                                {lower_title1}
                            </h5>
                            <p className='pt-2 text-base 2xl:text-lg'>
                                {lower_description1}
                            </p>
                        </div>
                        <div className='md:text-end'>
                            <h5 className='text-primary text-2xl flex justify-end items-center'>
                                {lower_title2}
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="#6346fa" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
                                </svg>
                            </h5>
                            <p className='pt-2 text-base 2xl:text-lg'>
                                {lower_description2} <br />
                                <a href="tel:+919878300209"> Call Now </a>  | <a href="https://wa.me/9878300209" className=''> <span className='text-green-600'>WhatsApp Us </span> |  Book Free Counseling</a>
                            </p>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CareerOpportunities
