import React from 'react'
import callicon from "../../../../public/icons/callicon.svg"
import Image from 'next/image'
const Helpline = () => {
    return (
        <div>
            <div className='bg-primary px-8 py-2 rounded-2xl hidden md:block'>
                <div className='md:flex items-center gap-2  hidden'>
                    <Image
                        src={callicon}
                        alt='callicon'
                        width={1000}
                        height={500}
                        className='max-w-8'
                    />
                    <span className='text-white text-lg'>
                        Helpline Number
                    </span>
                </div>
                <div className='text-center'>
                    <a href="tel:+919878300209" target='_blank' className='text-white text-lg underline '>+91 98783-00209</a>
                </div>
            </div>
            <a href="tel:+919878300209" target='_blank' className='block md:hidden'>
                <div className='bg-primary p-3 rounded-full'>
                    <Image
                        src={callicon}
                        alt='callicon'
                        width={1000}
                        height={500}
                        className='max-w-6'
                    />
                </div>
            </a>

        </div>

    )
}

export default Helpline
