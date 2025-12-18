import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubscribeYoutube = () => {
    return (
        <div>
            <div className="cus_container relative py-12 md:py-16">
                <div className=' bg-center bg-cover bg-no-repeat rounded-3xl'
                  style={{ backgroundImage: `url(/images/Background+Shadow.webp)` }}
                >
                    <div className='grid grid-cols-3 w-[95%] m-auto relative'>
                        <div className='py-8'>
                            <Image
                                src={'/images/youtubetext.webp'}
                                alt=''
                                width={1000}
                                height={500}
                                className='max-w-40'
                            />
                        </div>
                        <div className='flex flex-col items-center gap-4 py-8'>
                            <h4 className='text-white text-3xl text-center'>
                                Subscribe Our Youtube <br /> Channel
                            </h4>
                            <Link
                                href={'https://www.youtube.com/@b2bcampus-institute-in-mohali'}
                                target='_blank'
                            >
                                <button className='flex items-center bg-[#D21919] py-3 px-6 rounded-full text-white text-xl cursor-pointer'>
                                    Subscribe Now
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                        <rect width="24" height="24" fill="none" />
                                        <path fill="#fff" d="M14.235 19c.865 0 1.322 1.024.745 1.668A4 4 0 0 1 12 22a4 4 0 0 1-2.98-1.332c-.552-.616-.158-1.579.634-1.661l.11-.006zM12 2c1.358 0 2.506.903 2.875 2.141l.046.171l.008.043a8.01 8.01 0 0 1 4.024 6.069l.028.287L19 11v2.931l.021.136a3 3 0 0 0 1.143 1.847l.167.117l.162.099c.86.487.56 1.766-.377 1.864L20 18H4c-1.028 0-1.387-1.364-.493-1.87a3 3 0 0 0 1.472-2.063L5 13.924l.001-2.97A8 8 0 0 1 8.822 4.5l.248-.146l.01-.043a3 3 0 0 1 2.562-2.29l.182-.017z" />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Image
                                src={'/images/youtube_girl.webp'}
                                alt=''
                                width={3000}
                                height={500}
                                className='max-w-[320px] absolute right-[2%] bottom-0'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscribeYoutube
