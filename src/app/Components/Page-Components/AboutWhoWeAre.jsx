import Image from 'next/image'
import React from 'react'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp";
import Title from '../UiUx/Title';
import Description from '../UiUx/Description';

const AboutWhoWeAre = ({ experinece_heading, experinece_description }) => {
    const traningData = [
        {
            icon: (
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L14.6667 18.6667L20 13.3333M28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Practical Training",
            description: "Real-world skills for immediate application"
        },
        {
            icon: (
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 17.6733C24.1873 19.2149 20.1126 20.005 16 20C11.756 20 7.70667 19.1733 4 17.6733M21.3333 7.99996V5.33329C21.3333 4.62605 21.0524 3.94777 20.5523 3.44767C20.0522 2.94758 19.3739 2.66663 18.6667 2.66663H13.3333C12.6261 2.66663 11.9478 2.94758 11.4477 3.44767C10.9476 3.94777 10.6667 4.62605 10.6667 5.33329V7.99996M16 16H16.0133M6.66667 26.6666H25.3333C26.0406 26.6666 26.7189 26.3857 27.219 25.8856C27.719 25.3855 28 24.7072 28 24V10.6666C28 9.95938 27.719 9.2811 27.219 8.78101C26.7189 8.28091 26.0406 7.99996 25.3333 7.99996H6.66667C5.95942 7.99996 5.28115 8.28091 4.78105 8.78101C4.28095 9.2811 4 9.95938 4 10.6666V24C4 24.7072 4.28095 25.3855 4.78105 25.8856C5.28115 26.3857 5.95942 26.6666 6.66667 26.6666Z" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Job Readiness",
            description: "Comprehensive career preparation programs"
        },
        {
            icon: (
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.668 26.6667H29.3346V24C29.3346 23.1688 29.0755 22.3581 28.5935 21.6809C28.1115 21.0036 27.4304 20.4934 26.645 20.221C25.8595 19.9487 25.0088 19.9279 24.211 20.1614C23.4132 20.3949 22.7079 20.8712 22.1933 21.524M22.668 26.6667H9.33464M22.668 26.6667V24C22.668 23.1254 22.5 22.2894 22.1933 21.524M22.1933 21.524C21.6982 20.2867 20.8436 19.226 19.74 18.4789C18.6363 17.7318 17.3341 17.3324 16.0013 17.3324C14.6685 17.3324 13.3663 17.7318 12.2626 18.4789C11.159 19.226 10.3044 20.2867 9.8093 21.524M9.33464 26.6667H2.66797V24C2.66803 23.1688 2.92708 22.3581 3.40912 21.6809C3.89115 21.0036 4.57222 20.4934 5.35764 20.221C6.14306 19.9487 6.9938 19.9279 7.79162 20.1614C8.58943 20.3949 9.29467 20.8712 9.8093 21.524M9.33464 26.6667V24C9.33464 23.1254 9.50264 22.2894 9.8093 21.524M20.0013 9.33337C20.0013 10.3942 19.5799 11.4117 18.8297 12.1618C18.0796 12.9119 17.0622 13.3334 16.0013 13.3334C14.9404 13.3334 13.923 12.9119 13.1729 12.1618C12.4227 11.4117 12.0013 10.3942 12.0013 9.33337C12.0013 8.27251 12.4227 7.25509 13.1729 6.50495C13.923 5.7548 14.9404 5.33337 16.0013 5.33337C17.0622 5.33337 18.0796 5.7548 18.8297 6.50495C19.5799 7.25509 20.0013 8.27251 20.0013 9.33337ZM28.0013 13.3334C28.0013 14.0406 27.7204 14.7189 27.2203 15.219C26.7202 15.7191 26.0419 16 25.3346 16C24.6274 16 23.9491 15.7191 23.449 15.219C22.9489 14.7189 22.668 14.0406 22.668 13.3334C22.668 12.6261 22.9489 11.9479 23.449 11.4478C23.9491 10.9477 24.6274 10.6667 25.3346 10.6667C26.0419 10.6667 26.7202 10.9477 27.2203 11.4478C27.7204 11.9479 28.0013 12.6261 28.0013 13.3334ZM9.33464 13.3334C9.33464 14.0406 9.05368 14.7189 8.55359 15.219C8.05349 15.7191 7.37521 16 6.66797 16C5.96072 16 5.28245 15.7191 4.78235 15.219C4.28225 14.7189 4.0013 14.0406 4.0013 13.3334C4.0013 12.6261 4.28225 11.9479 4.78235 11.4478C5.28245 10.9477 5.96072 10.6667 6.66797 10.6667C7.37521 10.6667 8.05349 10.9477 8.55359 11.4478C9.05368 11.9479 9.33464 12.6261 9.33464 13.3334Z" stroke="black" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Placement Support",
            description: "Dedicated career assistance and connections"
        },
    ]

    const cardsData = [
        {
            title: 'Our Mission',
            icon: (
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9693 29.2889C23.3219 29.2889 29.2824 23.3285 29.2824 15.9759C29.2824 8.6233 23.3219 2.66284 15.9693 2.66284C8.61671 2.66284 2.65625 8.6233 2.65625 15.9759C2.65625 23.3285 8.61671 29.2889 15.9693 29.2889Z" stroke="white" strokeWidth="2.66261" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.9761 23.9638C20.3877 23.9638 23.9639 20.3875 23.9639 15.976C23.9639 11.5644 20.3877 7.98816 15.9761 7.98816C11.5646 7.98816 7.98828 11.5644 7.98828 15.976C7.98828 20.3875 11.5646 23.9638 15.9761 23.9638Z" stroke="white" strokeWidth="2.66261" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.9751 18.6385C17.4456 18.6385 18.6377 17.4464 18.6377 15.9758C18.6377 14.5053 17.4456 13.3132 15.9751 13.3132C14.5046 13.3132 13.3125 14.5053 13.3125 15.9758C13.3125 17.4464 14.5046 18.6385 15.9751 18.6385Z" stroke="white" strokeWidth="2.66261" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: "To empower individuals and organizations by delivering world-class, practical training that translates into measurable career growth. We are committed to closing the skills gap and creating pathways to meaningful employment through expert-led programs, hands-on learning, and continuous support.",
            detail: '"Building careers, one skill at a time."'
        },
        {
            title: 'Our Vision',
            icon: (
                <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.74728 16.439C2.63632 16.1401 2.63632 15.8113 2.74728 15.5124C3.8279 12.8922 5.66219 10.6518 8.01761 9.07537C10.373 7.49892 13.1435 6.65735 15.9778 6.65735C18.8121 6.65735 21.5825 7.49892 23.938 9.07537C26.2934 10.6518 28.1277 12.8922 29.2083 15.5124C29.3193 15.8113 29.3193 16.1401 29.2083 16.439C28.1277 19.0592 26.2934 21.2995 23.938 22.876C21.5825 24.4524 18.8121 25.294 15.9778 25.294C13.1435 25.294 10.373 24.4524 8.01761 22.876C5.66219 21.2995 3.8279 19.0592 2.74728 16.439Z" stroke="white" strokeWidth="2.66261" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.9783 19.9698C18.1841 19.9698 19.9722 18.1816 19.9722 15.9758C19.9722 13.7701 18.1841 11.9819 15.9783 11.9819C13.7725 11.9819 11.9844 13.7701 11.9844 15.9758C11.9844 18.1816 13.7725 19.9698 15.9783 19.9698Z" stroke="white" strokeWidth="2.66261" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            description: "To be the most trusted name in professional development and workforce transformation across industries. We envision a future where every motivated learner has access to quality training, expert mentorship, and clear pathways to fulfilling careers—creating a skilled workforce that drives innovation and economic growth.",
            detail: '"Shaping tomorrow`s workforce, today."'
        },
    ]

    return (
        <div className='main-bg pt-8 md:pt-14 lg:pt-20  sm:px-[0] md:px-[0px] lg:px-16 2xl:px-[5%]'>
            <div className='cus_container'>

                <div>
                    <div className="relative py-3">
                        <Image src={titlewhitebg.src} alt="bubble-bg" width={1000} height={500} className="absolute hidden md:block -bottom-[28px] h-[120px] left-1/2 -translate-x-1/2 w-[480px] md:w-[400px] sm:w-[241px] pointer-events-none select-none opacity-90" />
                        <div className="relative z-10 text-center md:pt-5">
                            <Title title={'Who <span class="text-primary"> We Are </span>'} text_color={'text-secondary'} />
                        </div>
                    </div>
                    <Description description={'B2B Campus is a leading professional training and workforce development <br> organization dedicated to transforming careers and bridging  the gap <br> between talent and industry needs.'} text_color={'text-black relative z-10 pt-[0px] pb-10 md:pt-10 md:pb-14 lg:pt-[50px] lg:pb-[70px]'} />
                </div>
                <div className="about_traning grid items-center gap-24 grid-cols-1sm:grid-cols-[30%_70%] sm:gap-24md:grid-cols-[30%_70%] md:gap-24 lg:grid-cols-[35%_65%] lg:gap-10xl:grid-cols-[30%_70%] xl:gap-10">

                    <div className="experience_traning rounded-lg relative">

                        <Image
                            src="/images/about-traning.webp"
                            alt="Training"
                            width={1000}
                            height={500}
                            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[300px] xl:h-[300px] 2xl:h-[300px] object-cover object-center rounded-lg"
                        />
                        <div className="about_experience rounded-lg shadow-lg absolute left-[20px] md:left-[20px] lg:-left-14 -bottom-12 bg-[#6346FA] w-fit p-6 sm:p-8 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:shadow-2xl">
                            <h2 className="pb-2 sm:pb-3 font-bold text-xl sm:text-3xl md:text-4xl text-center text-white">{experinece_heading}</h2>
                            <p className="text-sm sm:text-base md:text-lg text-center text-white">{experinece_description}</p>
                        </div>
                    </div>

                    <div className='tranings_boxed grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6 sm:gap-3'>
                        {traningData.map((item, idx) => (
                            <div key={idx} className='group boxed_innered bg-white p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:shadow-2xl'>
                                <div className='w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mb-4 sm:mb-6 bg-[#E4E0FC] transition-colors duration-300 ease-in-out group-hover:bg-[#6346FA] text-black group-hover:text-white'>
                                    {React.cloneElement(item.icon, { className: 'stroke-current' })}
                                </div>
                                <h3 className='text-[#6346FA] text-lg sm:text-xl md:text-2xl font-semibold mb-2'>{item.title}</h3>
                                <p className='text-[#424D5D] text-base sm:text-lg'>{item.description}</p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Mission & Vision Section */}
                <div className="about_mission_vission grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[20px]  mt-[30px] sm:mt-[50px] md:mt-[80px] lg:mt-[150px] pb-16 md:pb-24 lg:pb-[97px]">
                    {cardsData.map((item, index) => (
                        <div key={index} className={`card_mision cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-5 hover:shadow-2xl" rounded-2xl p-6 sm:p-8 md:p-12 ${index === 1 ? 'bg-[#6346FA] text-[#EFF6FF]' : 'bg-white text-[#314158]'} shadow-lg`}>
                            <div className="card_header flex items-center gap-4 sm:gap-6 mb-4">
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg ${index === 1 ? 'bg-[#9686ed]' : 'bg-[#6346FA]'}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold">{item.title}</h3>
                            </div>
                            <div className="card_content">
                                <p className="text-sm sm:text-base md:text-lg leading-relaxed border-b border-white/30 pb-4">{item.description}</p>
                                <p className={`italic pt-4 sm:pt-6 ${index === 1 ? 'text-[#DBEAFE]' : 'text-[#45556C]'}`}>{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AboutWhoWeAre
