import Title from "../UiUx/Title";
import titlewhitebg from "../../../../public/images/titlewhitebg.webp"
import Description from "../UiUx/Description";

export default function Whatstudentget() {
    const items = [
        { icon: "📘", text: "Full Course Material & Notes" },
        { icon: "💼", text: "Real Company-Level Projects" },
        { icon: "🎯", text: "Job-ready Skills Training" },
        { icon: "❓", text: "1:1 Doubt Support" },
        { icon: "📝", text: "Resume + LinkedIn Optimization" },
        { icon: "🎤", text: "Mock Interviews" },
        { icon: "📞", text: "Placement Calls & Job References" },
        { icon: "🎓", text: "Career Guidance for Life" },
    ];

    return (
        <section className="main-bg py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4 md:px-6">

                {/* Section Header */}
                <div className="relative text-center pb-3">
                    <div className="relative z-10 text-center">
                        <img
                            src={titlewhitebg.src}
                            alt="bubble-bg"
                            className="absolute hidden md:block top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-[480px] md:w-[670px]  sm:w-[241px] pointer-events-none select-none opacity-90"
                        />
                        <Title
                            title={'<span class="text-primary"> What Students </span>  Receive'}
                            text_color={'text-secondary relative z-[2]'}
                        />
                    </div>
                   <div className="relative z-10">
                     <Description
                        description={'Everything you need to become job-ready and industry-prepared'}
                        text_color={'text-secondary'}
                    />
                   </div>


                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm 
              border border-[#E3DFFF] hover:shadow-md transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="text-3xl bg-[#ECE7FF] w-14 h-14 flex items-center justify-center rounded-xl">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <p className="text-gray-800 text-[17px] font-medium">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
