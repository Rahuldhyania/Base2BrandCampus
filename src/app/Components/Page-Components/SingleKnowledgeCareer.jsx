import React from 'react'

const SingleKnowledgeCareer = ({ title, description, yes_btn, no_btn }) => {

    // yes button svg
    const yesbtnSvg = (
        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M6.20312 8.85693V19.4856" stroke="white" strokeWidth="1.77145" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.2918 5.2081L12.406 8.85729H17.5698C17.8448 8.85729 18.1161 8.92132 18.362 9.04431C18.608 9.16729 18.822 9.34586 18.987 9.56587C19.152 9.78588 19.2635 10.0413 19.3127 10.3119C19.3619 10.5824 19.3474 10.8607 19.2704 11.1247L17.2067 18.2105C17.0994 18.5785 16.8756 18.9017 16.569 19.1317C16.2623 19.3617 15.8894 19.486 15.5061 19.486H3.54879C3.07898 19.486 2.6284 19.2994 2.29619 18.9671C1.96398 18.6349 1.77734 18.1844 1.77734 17.7145V10.6287C1.77734 10.1589 1.96398 9.70835 2.29619 9.37613C2.6284 9.04392 3.07898 8.85729 3.54879 8.85729H5.9934C6.32296 8.85711 6.64594 8.76501 6.92603 8.59132C7.20611 8.41764 7.43219 8.16927 7.57885 7.87413L10.6346 1.77148C11.0523 1.77666 11.4634 1.87615 11.8372 2.06253C12.2111 2.24891 12.538 2.51736 12.7935 2.84782C13.049 3.17828 13.2265 3.56221 13.3128 3.97092C13.3991 4.37963 13.3919 4.80256 13.2918 5.2081Z" stroke="currentColor" strokeWidth="1.77145" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

    // no btn svg
    const nobtnsvg = (
        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M15.0586 12.4002V1.77148" stroke="black" strokeWidth="1.77145" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.97529 16.0494L8.86101 12.4002H3.69723C3.42222 12.4002 3.15099 12.3362 2.90502 12.2132C2.65904 12.0902 2.44508 11.9116 2.28007 11.6916C2.11507 11.4716 2.00355 11.2162 1.95436 10.9456C1.90516 10.6751 1.91964 10.3967 1.99664 10.1327L4.06038 3.04693C4.1677 2.67897 4.39147 2.35575 4.6981 2.12577C5.00473 1.8958 5.37768 1.77148 5.76097 1.77148H17.7183C18.1881 1.77148 18.6387 1.95812 18.9709 2.29033C19.3031 2.62254 19.4897 3.07312 19.4897 3.54294V10.6287C19.4897 11.0986 19.3031 11.5491 18.9709 11.8813C18.6387 12.2136 18.1881 12.4002 17.7183 12.4002H15.2737C14.9441 12.4004 14.6211 12.4925 14.341 12.6662C14.061 12.8398 13.8349 13.0882 13.6882 13.3833L10.6325 19.486C10.2148 19.4808 9.80366 19.3813 9.42982 19.1949C9.05599 19.0086 8.7291 18.7401 8.47359 18.4097C8.21808 18.0792 8.04055 17.6953 7.95426 17.2866C7.86797 16.8778 7.87516 16.4549 7.97529 16.0494Z" stroke="currentColor" strokeWidth="1.77145" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
    return (
        <div>
            <div className='main-single-knowledge '>
                <div className="confused-career-blogs bg-cover bg-center bg-no-repeat  rounded-md sm:rounded-lg md:rounded-xl lg:rounded-[40px] p-8 sm:p-12 md:p-16 lg:p-[74px]"
                    style={{ backgroundImage: "url('/images/blogs-confused-career.webp')" }}>
                    {/* Title */}
                    <h2 className="text-center text-[20px] sm:text-[38px] md:text-[35px] lg:text-[40px] font-medium text-white pb-[5px]">
                        {title}
                    </h2>

                    {/* Description */}
                    <p className="text-center text-[14px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-regular text-white pb-[15px] sm:pb-[20px] md:pb-[25px] lg:pb-[30px]">
                        {description}
                    </p>

                    {/* Buttons wraper */}
                    <div className='yes_no_btn_wraper flex justify-center gap-[10px]'>
                        <a href='' title={yes_btn} className="flex items-center gap-[8px] sm:gap-[9px] md:gap-[10px] bg-[#6346FA] hover:bg-[#000]  transition-colors duration-300 py-[5px] sm:py-[6px] md:py-[10px] px-[10px] sm:px-[12px] md:px-[13px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] text-[14px] sm:text-[15px] md:text-[17px] leading-[20px] sm:leading-[22px] md:leading-[25px] text-[#fff] ">
                            {yesbtnSvg} {yes_btn}
                        </a>
                        <a href='' title={no_btn} className="flex items-center gap-[8px] sm:gap-[9px] md:gap-[10px] bg-[#fff] hover:bg-[#6346FA] hover:text-[#fff] transition-colors duration-300 py-[5px] sm:py-[6px] md:py-[7px] px-[10px] sm:px-[12px] md:px-[13px] rounded-[8px] sm:rounded-[9px] md:rounded-[10px] text-[14px] sm:text-[15px] md:text-[17px] leading-[20px] sm:leading-[22px] md:leading-[25px] text-[#000]">
                            {nobtnsvg} {no_btn}
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleKnowledgeCareer
