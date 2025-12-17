import Image from "next/image";
import fontscratch from "../../../../public/images/fontscratch.webp";

export default function ScratchCards() {
    const scratchCards = [
        {
            title: "NOTES",
            subtitle: "Build Skills Through Real Projects",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-purple-400",
            rotate: "-rotate-3",
        },
        {
            title: "TUTORS",
            subtitle: "Train With People Who Work in the Industry Daily",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-yellow-400",
            rotate: "rotate-2",
        },
        {
            title: "TEXTBOOKS",
            subtitle: "Learn From Practical Case Breakdowns",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-green-400",
            rotate: "-rotate-2",
        },
        {
            title: "ZOOM-ONLY",
            subtitle: "Get Real Mentoring, Face to Face",
            scratchImg: fontscratch,
            bgColor: "bg-white",
            shadowColor: "shadow-pink-400",
            rotate: "rotate-3",
        },
    ];

    return (
        <div className="relative w-full flex justify-center px-4 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-30 max-w-[90%] w-full">
                {scratchCards.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col justify-center items-center transform transition duration-500 hover:scale-105 cursor-pointer ${item.rotate}`}
                    >
                        <div
                            className={`relative rounded-[30px] p-6 flex flex-col items-center ${item.bgColor} shadow-md hover:shadow-lg transition-shadow duration-500`}
                        >
                            <Image
                                src={item.scratchImg}
                                alt="scratch"
                                width={159}
                                height={80}
                                className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
                                priority
                            />
                            <h2 className="text-[28px] font-semibold text-center text-[#6346FA] tracking-wide">
                                {item.title}
                            </h2>
                            <p className="text-[14px] text-black text-center mt-3 leading-tight">
                                {item.subtitle}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
