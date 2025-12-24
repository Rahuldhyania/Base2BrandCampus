import React from 'react'
import Image from 'next/image'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';
const AboutWhyChoose = () => {
    const traningSession = [
        {
            icon: (
                <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1332 29.2762C23.559 29.2762 29.5788 23.3183 29.5788 15.9689C29.5788 8.6195 23.559 2.66162 16.1332 2.66162C8.70733 2.66162 2.6875 8.6195 2.6875 15.9689C2.6875 23.3183 8.70733 29.2762 16.1332 29.2762Z" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1016 15.9681L14.7907 18.6296L20.169 13.3066" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Hands-On Training",
            description: "Learn by doing with practical exercises, live projects, and real-world case studies that prepare you for actual workplace challenges."
        },
        {
            icon: (
                <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1332 29.2762C23.559 29.2762 29.5788 23.3183 29.5788 15.9689C29.5788 8.6195 23.559 2.66162 16.1332 2.66162C8.70733 2.66162 2.6875 8.6195 2.6875 15.9689C2.6875 23.3183 8.70733 29.2762 16.1332 29.2762Z" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1016 15.9681L14.7907 18.6296L20.169 13.3066" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Expert Mentors",
            description: "Gain insights from industry veterans who bring years of professional experience and continue to work actively in their fields."
        },
        {
            icon: (
                <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1332 29.2762C23.559 29.2762 29.5788 23.3183 29.5788 15.9689C29.5788 8.6195 23.559 2.66162 16.1332 2.66162C8.70733 2.66162 2.6875 8.6195 2.6875 15.9689C2.6875 23.3183 8.70733 29.2762 16.1332 29.2762Z" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1016 15.9681L14.7907 18.6296L20.169 13.3066" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Dedicated Career Support",
            description: "Receive comprehensive placement assistance including resume building, interview preparation, and direct connections to hiring partners."
        },
        {
            icon: (
                <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1332 29.2762C23.559 29.2762 29.5788 23.3183 29.5788 15.9689C29.5788 8.6195 23.559 2.66162 16.1332 2.66162C8.70733 2.66162 2.6875 8.6195 2.6875 15.9689C2.6875 23.3183 8.70733 29.2762 16.1332 29.2762Z" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1016 15.9681L14.7907 18.6296L20.169 13.3066" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Flexible Learning Options",
            description: "Choose from weekday, weekend, or online batches designed to fit your schedule without compromising on quality or outcomes."
        },
        {
            icon: (
                <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1332 29.2762C23.559 29.2762 29.5788 23.3183 29.5788 15.9689C29.5788 8.6195 23.559 2.66162 16.1332 2.66162C8.70733 2.66162 2.6875 8.6195 2.6875 15.9689C2.6875 23.3183 8.70733 29.2762 16.1332 29.2762Z" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1016 15.9681L14.7907 18.6296L20.169 13.3066" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Industry-Recognized Certifications",
            description: "Earn credentials that employers value and that validate your expertise to help you stand out in competitive job markets."
        },
        {
            icon: (
                <svg width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.1332 29.2762C23.559 29.2762 29.5788 23.3183 29.5788 15.9689C29.5788 8.6195 23.559 2.66162 16.1332 2.66162C8.70733 2.66162 2.6875 8.6195 2.6875 15.9689C2.6875 23.3183 8.70733 29.2762 16.1332 29.2762Z" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12.1016 15.9681L14.7907 18.6296L20.169 13.3066" stroke="#1B1B2B" strokeWidth="2.66146" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Lifetime Learning Access",
            description: "Access course materials, updates, and alumni networks for continuous learning and professional growth beyond graduation."
        },
    ]

    // traning blogs
    const taningBlogs = [
        {
            image: "/images/expert-method.webp",
            title: "Expert Mentors",
            description: "Learn from industry leaders"
        },
        {
            image: "/images/hand-on-tranding.webp",
            title: "Hands-On Training",
            description: "Real projects, real skills"
        },
        {
            image: "/images/career-success.webp",
            title: "Career Success",
            description: "Achieve your goals"
        },
    ]
    return (
        <div className='main-bg py-[58px]'>
            <div className='cus_container'>
                <div>
                    <div className="relative py-3">
                        <Image src={titlewhitebg.src} alt="bubble-bg" width={1000} height={500} className="absolute hidden md:block -bottom-[28px] h-[120px] left-1/2 -translate-x-1/2 w-[700px] md:w-[700px] sm:w-[241px] pointer-events-none select-none opacity-90" />
                        <div className="relative z-10 text-center md:pt-5">
                            <Title title={'Why Choose <span class="text-primary"> B2B Campus </span>'} text_color={'text-secondary'} />
                        </div>
                    </div>
                    <Description description={'More than training—focused on your success.'} text_color={'text-black relative z-10 pt-[0px] pb-10 md:pt-10 md:pb-14 lg:pt-[50px] lg:pb-[70px]'} />
                </div>

                {/* tranining blogs */}
                <div className='tarning_blogs grid mb-[39px] gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {taningBlogs.map((blogs, index) => (
                        <div
                            key={index}
                            className='blogs relative rounded-[18px] overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-3'>

                            <div className="relative w-full h-[292px] overflow-hidden">
                                <Image
                                    src={blogs.image}
                                    alt={blogs.title}
                                    width={400}
                                    height={292}
                                    className='w-full h-full object-cover'
                                />
                                {/* Dark Overlay */}
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            <div className='content absolute bottom-3 sm:bottom-5 left-3 sm:left-5'>
                                <h2 className='text-base sm:text-lg md:text-xl font-semibold text-white'>{blogs.title}</h2>
                                <p className='text-xs sm:text-sm md:text-base text-white mt-1 sm:mt-2'>{blogs.description}</p>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Training session */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-[20px]">
                    {traningSession.map((session, index) => (
                        <div
                            key={index}
                            className='session_card flex gap-[16px] sm:gap-4 md:gap-6 bg-white rounded-[24px] p-4 sm:p-6 md:p-[36px] shadow-md transition-transform duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2'>
                            <div className='icon bg-[#fff] rounded-[50%] w-[32px] h-[32px] flex justify-center items-center'>{session.icon}</div>
                            <div className="content flex-1">
                                <h3 className='text-[#6346FA] text-[16px] leading-[24px] medium'>{session.title}</h3>
                                <p className='py-[8px] text-[#45556C] text-[14px] leading-[24px] lg:max-w-[70%] sm:max-w-[100%]'>{session.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AboutWhyChoose
