import Image from 'next/image';
import arrowup from '../../../../public/images/arrowup.webp'
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import manlaptop from "../../../../public/images/manlaptop.webp"
import fontscratch from "../../../../public/images/fontscratch.webp"
import cloud from "../../../../public/images/cloud.webp"
import Globaltitle from '../UiUx/Globaltitle';
import Title from '../UiUx/Title';

import ScratchCards from './ScratchCard';
import Buttons from '../UiUx/Buttons';
export default function Teachcareer({clickscroll}) {
  const items = [
    {
      icon: "/images/arrowup.webp",
      title: "170%",
      subtitle: "170% Average Salary Hike",
    },
    {
      icon: "/images/bag.webp",
      title: "518+",
      subtitle: "Job Placements",
    },
    {
      icon: "/images/mail.webp",
      title: "Live",
      subtitle: "Interactive Sessions",
    },
  ];

  return (
    <div className=''>
      <div className="w-[90%] relative bottom-[57px] m-auto max-w-[1450px] p-[1%] border-none rounded-[50px] bg-[#E9E5FF] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-2 md:gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center w-[45%] m-auto md:w-full sm:w-auto justify-center group relative transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg animate-float p-1.5 rounded-[19px]"
          >
            <div className="wrap-div flex flex-col sm:flex-row justify-center items-center 
                      md:gap-4 sm:gap-10 text-center sm:text-left">

              <div className="bg-white flex justify-center items-center rounded-[50px] h-[60px] w-[60px] sm:h-[76px] sm:w-[76px] transition-all duration-300 hover:scale-110">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-10 h-10 sm:w-[53px] sm:h-[53px] object-contain"
                />
              </div>

              <div>
                <h3 className="text-[#6346FA] text-[26px]  md:text-[38px] lg:text-[42px] transition-all duration-300 group-hover:text-purple-600">
                  {item.title}
                </h3>
                <p className="text-[14px]  md:text-[19px] lg:text-[21px] transition-all duration-300 group-hover:text-gray-700">
                  {item.subtitle}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className="relative flex justify-center items-center">

        {/* Background Image */}
        <img
          src={titlewhitebg.src}
          alt="background-bubble"
          className="absolute hidden md:block top-1/2  left-1/2 -translate-x-1/2  -translate-y-1/2 w-[480px] md:w-[900px] sm:w-60 pointer-events-none
      select-none"
        />

        {/* Title On Top */}
        <div className="relative z-10 text-center cus_container ">
          <Title
            title={'Other Institutes Teach Chapters<br/> <span class="text-primary"> We Teach Careers </span>'}
            text_color={'text-secondary'}
          />
        </div>
      </div>
      <div className="laptopwithman  relative">

        <div className="relative w-full">

          <div className="w-full h-full absolute inset-0 z-0">
            <Image
              src={cloud}
              alt="Cloud Background"
              className="w-full h-full object-contain object-center"
              priority
              fill
            />
          </div>

          <div className="relative z-10">
            <Image
              src={manlaptop}
              alt="main"
              width={1000}
              height={500}
              className="relative max-w-[735px] w-full sm:w-[90%] md:w-[456px] m-auto h-auto object-cover
                 transition-transform duration-500 hover:scale-105 hidden lg:block"
            />
          </div>

          {/* <div className="relative z-10 flex justify-center m-auto mt-4 sm:mb-0" onClick={clickscroll}>
            <Buttons btnname="Backed by a Successful Agency" text_color={"text-white"} />
          </div> */}

          <div className="absolute screcth-relative inset-0 flex justify-center items-center z-20 pointer-events-none">
            <ScratchCards />
          </div>
           <div className="relative z-10 flex justify-center m-auto mt-8 md:mt-4 sm:mb-0" onClick={clickscroll}>
            <Buttons btnname="Backed by a Successful Agency" text_color={"text-white"} />
          </div>

        </div>




      </div>
    </div >


  );
}
