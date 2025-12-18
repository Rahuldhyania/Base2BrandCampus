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
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
                    <div className="flex items-center">
                        <div className="w-full">
                            <Title
                                title={"Get in touch with us"}
                                text_color={"text-black md:text-start"}
                            />

                            <div className="pt-6 md:pt-10 space-y-5">
                                {/* Phone */}
                                <div className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 md:w-12 md:h-12 shrink-0"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#6346fa"
                                            d="M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.77 14.77 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22"
                                        />
                                    </svg>

                                    <p className="text-base md:text-2xl leading-snug">
                                        <span className="font-medium">Phone:</span>
                                        <br className="md:hidden" />
                                        <a
                                            href="tel:+919878300209"
                                            className="ml-0 md:ml-3 hover:text-[var(--primary)] block md:inline"
                                        >
                                            +91 98783-00209
                                        </a>
                                        <a
                                            href="tel:+918360116967"
                                            className="ml-0 md:ml-2 hover:text-[var(--primary)] block md:inline"
                                        >
                                            +91 83601-16967
                                        </a>
                                    </p>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 md:w-12 md:h-12 shrink-0"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#6346fa"
                                            d="M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7z"
                                        />
                                    </svg>

                                    <p className="text-base md:text-2xl">
                                        <span className="font-medium">Email:</span>
                                        <br className="md:hidden" />
                                        <a
                                            href="mailto:hello@b2bcampus.com"
                                            className="hover:text-[var(--primary)] break-all"
                                        >
                                            hello@b2bcampus.com
                                        </a>
                                    </p>
                                </div>

                                {/* Whatsapp */}
                                <div className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 md:w-12 md:h-12 shrink-0"
                                        viewBox="0 0 256 258"
                                    >
                                        <path
                                            fill="#1faf38"
                                            d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0"
                                        />
                                    </svg>

                                    <p className="text-base md:text-2xl">
                                        <span className="font-medium">Whatsapp:</span>
                                        <br className="md:hidden" />
                                        <a
                                            href="https://wa.me/9878300209"
                                            target="_blank"
                                            className="text-green-700 underline"
                                        >
                                            +91 98783-00209
                                        </a>
                                    </p>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7 md:w-12 md:h-12 shrink-0"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#6346fa"
                                            d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7"
                                        />
                                    </svg>

                                    <p className="text-base md:text-2xl">
                                        <span className="font-medium">Address:</span>
                                        <br />
                                        <a
                                            href="https://goo.gl/maps/T97ciccSwQPX5eg47"
                                            target="_blank"
                                            className="underline hover:text-[var(--primary)]"
                                        >
                                            F-209, Industrial Area Phase 8-B, Sector 74,
                                            Mohali, 160074
                                        </a>
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
