import React from 'react';
import Title from '../UiUx/Title';
import bannerbggradient from "../../../../public/images/bannerbg-gradient.webp";
import Form from './From';
const ContactusBanner = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-bottom"
            style={{ backgroundImage: `url(${bannerbggradient.src})` }}
        >
            <div className="cus_container py-12 md:py-16">
                <div className="grid grid-cols-[3fr_2fr] gap-6">
                    <div className='flex items-center'>
                        <div>
                            <Title
                                title={'Get in touch with us'}
                                text_color={'text-black md:text-start'}
                            />
                            <div className='pt-10 space-y-4'>
                                <div>
                                    <p className='flex items-center gap-1 text-2xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                                            <rect width="24" height="24" fill="none" />
                                            <path fill="#6346fa" d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                      <span className='min-w-[132px]'> Phone : </span> <span className='mx-3'> <a href="tel:+919878300209" target='_blank' className='hover:text-[var(--primary)]'>+91 98783-00209</a>,  <a href="+918360116967" target='_blank' className='hover:text-[var(--primary)]'>+91 83601-16967</a></span>
                                    </p>
                                </div>
                                <div>
                                    <p className='flex items-center gap-1 text-2xl'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                            <rect width="24" height="24" fill="none" />
                                            <path fill="#6346fa" d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z" />
                                        </svg>
                                       <span className='min-w-[132px]'>Email :</span>  <span className='mx-3'> <a href="mailto:hello@b2bcampus.com" target='_blank' className='hover:text-[var(--primary)]'>hello@b2bcampus.com</a></span>
                                    </p>
                                </div>
                                <div>
                                    <p className='flex items-center gap-1 text-2xl'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 256 258"
                                        >
                                            <rect width="256" height="258" fill="none" />

                                            <defs>
                                                <linearGradient id="SVGBRLHCcSy" x1="50%" x2="50%" y1="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#1faf38" />
                                                    <stop offset="100%" stopColor="#60d669" />
                                                </linearGradient>

                                                <linearGradient id="SVGHW6lecxh" x1="50%" x2="50%" y1="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#f9f9f9" />
                                                    <stop offset="100%" stopColor="#fff" />
                                                </linearGradient>
                                            </defs>

                                            <path
                                                fill="url(#SVGBRLHCcSy)"
                                                d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
                                            />

                                            <path
                                                fill="url(#SVGHW6lecxh)"
                                                d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
                                            />

                                            <path
                                                fill="#fff"
                                                stroke="#fff"
                                                strokeWidth="6.5"
                                                d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
                                            />
                                        </svg>
                                      <span className='min-w-[132px]'> Whatsapp :</span>  <span className='mx-3'> <a href="https://wa.me/9878300209" target='_blank' className='text-green-800 underline'>+91 98783-00209</a></span>
                                    </p>
                                </div>
                                <div>
                                    <p className='flex items-start gap-1 text-2xl whitespace-nowrap'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                            <rect width="24" height="24" fill="none" />
                                            <path fill="#6346fa" d="M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5" />
                                        </svg>
                                      <span className='min-w-[132px]'>Address :</span>   <span className='mx-3 whitespace-normal'>
                                            <a href="https://goo.gl/maps/T97ciccSwQPX5eg47" target='_blank' className='text-black underline hover:text-[var(--primary)]'>F-209, Industrial area Phase 8-B, Sector 74, <br /> Mohali, 160074</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactusBanner
