import Image from 'next/image'
import React from 'react'
import footerlogo from '../../../../public/images/footerlogo.webp'
import Footerfacebook from '../../../../public/images/Footerfacebook.webp'
import linkedin from '../../../../public/images/linkedin.webp'
import insta from '../../../../public/images/insta.webp'
import footermiallogo from '../../../../public/images/footermiallogo.webp'
import Link from 'next/link'
const socialLinks = [
    { icon: Footerfacebook, url: "https://www.facebook.com/CampusB2B" },
    { icon: insta, url: "https://www.instagram.com/b2bcampus/?hl=en" },
    { icon: linkedin, url: "https://www.linkedin.com/company/b2b-campus/" },
];
const Footer = () => {
    const message = encodeURIComponent(
        "Hello B2B Campus Team 👋\n" +
        "I want to get complete details about your courses in\n" +
        "✅ Development\n" +
        "✅ Digital Marketing\n" +
        "✅ Truck Dispatch\n" +
        "✅ Graphic Designing\n" +
        "✅ Video Editing\n\n" +
        "Please guide me with fees, duration & career opportunities."
    );

    return (
        <footer className="bg-[#5D38DE] text-white py-10 px-4 sm:px-8 md:px-16">
            <div className="w-full grid grid-cols-1 md:grid-cols-[26%_auto] gap-10 md:gap-0">

                {/* LEFT SECTION */}
                <div className="flex flex-col w-full space-y-6 items-center md:items-start text-center md:text-left">
                    <Link
                        href={'/'}
                    >
                        <Image
                            src={footerlogo}
                            alt="footerlogo"
                            width={211}
                            height={60}
                            className="max-w-[211px]"
                        />
                    </Link>
                    <div className='mb-4 flex items-center gap-2 hover:scale-[1.03] transition-all duration-300 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 258" > <defs> <linearGradient id="SVGBRLHCcSy" x1="50%" x2="50%" y1="100%" y2="0%"> <stop offset="0%" stopColor="#1faf38" /> <stop offset="100%" stopColor="#60d669" /> </linearGradient> <linearGradient id="SVGHW6lecxh" x1="50%" x2="50%" y1="100%" y2="0%"> <stop offset="0%" stopColor="#f9f9f9" /> <stop offset="100%" stopColor="#fff" /> </linearGradient> </defs> <path fill="url(#SVGBRLHCcSy)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" /> <path fill="url(#SVGHW6lecxh)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z" /> <path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" /> </svg>

                        <a
                            href={`https://wa.me/9878300209?text=${message}`}
                            target="_blank"
                            className="text-lg text-[16px] transition-all duration-300 hover:text-green-600"
                        >
                            <p>
                                Admission Helpline & Support <br />
                                9878300209
                            </p>
                        </a>

                    </div>

                    <div className="flex flex-col gap-5 ">
                        <div className="email max-w-[382px] ">
                            <div className="relative w-full">
                                <Image
                                    src={footermiallogo}
                                    width={1000}
                                    height={500}
                                    alt=''
                                    className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 opacity-70"
                                />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="text-[19px] border p-3.5 pl-12 rounded-2xl w-full 
                           transition-all duration-300 
                           hover:border-[#5D38DE] focus:border-[#5D38DE] outline-none"
                                />
                            </div>
                        </div>

                        <Link href="/#">
                            <button className="bg-white text-[#5D38DE] px-6 sm:px-10 py-2 text-[16px] sm:text-[18px] rounded-2xl 
                           w-full sm:w-auto 
                           transition-all duration-300 
                           hover:bg-[#f3efff] hover:scale-[1.03]">
                                Submit
                            </button>
                        </Link>
                    </div>

                </div>

                {/* RIGHT SECTION (COURSES) */}
                <div className="wrap-courses w-full px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">

                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[22px] font-semibold mb-4">Company</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Home</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Placement</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Our Story</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Resources</li>
                            <li className="transition-all duration-300 hover:text-purple-500 hover:translate-x-1">Connect</li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[22px] font-semibold mb-4">Logistics</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Truck Dispatch</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Freight Broker</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Personality</li>
                        </ul>
                    </div>
                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[22px] font-semibold mb-4"> Marketing-business </h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px] opacity-90">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Digital Marketing</li>

                        </ul>
                    </div>
                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[22px] font-semibold mb-4">Development</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px]">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Web Development</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">AI</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">IOT</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Shopify Development</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">React Native</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">WordPress</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">React Js</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">PHP</li>


                        </ul>
                    </div>

                    <div className="w-full flex flex-col">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[22px] font-semibold mb-4">Graphics</h3>
                        <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-[18px]">
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Graphic Design</li>
                            <li className="transition-all duration-300 hover:text-blue-500 hover:translate-x-1">Video Editing</li>

                        </ul>
                    </div>



                </div>
            </div>


            <div className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">

                <p className="text-sm opacity-80 text-center sm:text-left">© B2B Campus. All Rights Reserved 2025.</p>

                <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-0">
                    {socialLinks.map((item, i) => (
                        <Link href={item.url} key={i} target="_blank">
                            <div className="p-3 sm:p-[11px] rounded-full bg-[#4924C9] flex justify-center items-center transition-transform duration-300 hover:scale-110">
                                <Image
                                    src={item.icon}
                                    width={20}
                                    height={20}
                                    alt=""
                                />
                            </div>
                        </Link>
                    ))}
                </div>


            </div>
        </footer>
    )
}

export default Footer
