import React from "react";
import Title from "../UiUx/Title";
import Description from "../UiUx/Description";
import Image from "next/image";

const CourseExtracontent = () => {
    const highlights = [
        "USA/Canada market training",
        "Remote / Work-from-India roles",
        "Freelance + business pathway"
    ];

    const cards = [
        {
            id: 1,
            title: "Truck Dispatcher (USA / Canada Market)",
            desc:
                "This is the primary and most in-demand role after completing truck dispatch training.",
            workMode: "Remote (Work from India) • Office / BPO / Logistics company",
            bullets: [
                "Assigning loads to truck drivers",
                "Using load boards (DAT, Truckstop)",
                "Communicating with drivers & brokers",
                "Tracking shipments & solving delivery issues"
            ]
        },
        {
            id: 2,
            title: "Remote Truck Dispatcher (Work From Home)",
            desc:
                "Many international trucking companies hire remote dispatchers trained in the US market.",
            note:
                "Ideal for candidates looking for international income with Indian living costs.",
            bullets: [
                "Work from home",
                "Flexible shifts",
                "Earn in USD / CAD",
                "No visa required"
            ]
        },
        {
            id: 3,
            title: "Logistics Coordinator",
            desc: "After dispatch training, students can work as:",
            chips: [
                "Logistics Coordinator",
                "Transportation Coordinator",
                "Operations Executive"
            ],
            metaLabel: "Key Skills Used",
            metaValue:
                "Route planning • Shipment coordination • Client communication • Fleet coordination"
        },
        {
            id: 4,
            title: "Freight Broker Assistant / Support Executive",
            desc:
                "Truck dispatch knowledge helps you work with freight brokers, logistics agencies, and shipping companies.",
            note:
                "This role is a stepping stone to becoming a Freight Broker in the future."
        },
        {
            id: 5,
            title: "Freelance Truck Dispatcher",
            desc:
                "After gaining confidence, students can work as independent dispatchers.",
            bullets: [
                "Multiple clients",
                "Flexible working hours",
                "Higher earning potential",
                "Work globally from India"
            ]
        },
        {
            id: 6,
            variant: "primary",
            title: "Start Your Own Dispatch Business",
            desc: "Many B2B Campus students aim to become entrepreneurs.",
            bullets: [
                "Start your own dispatch company",
                "Hire dispatchers",
                "Work with multiple trucking companies",
                "Build a long-term logistics business"
            ]
        },
        {
            id: 7,
            title: "Fleet Manager / Operations Manager (With Experience)",
            desc: "With experience, dispatchers can grow into:",
            chips: ["Fleet Manager", "Operations Manager", "Logistics Supervisor"],
            note:
                "These are high-responsibility, high-pay roles in logistics companies."
        }
    ];

    const header = {
        pill: "B2B Campus • Mohali, India",
        title: "Job Opportunities After Truck Dispatch Training",
        subtitle:
            "Truck Dispatch Training from B2B Campus opens doors to multiple high-demand job roles in the USA & Canada logistics industry, even while working from India. Our industry-oriented training prepares students for practical, real-time dispatch operations, making them job-ready from day one."
    };

    const cta = {
        title: "Start Your Training This Week",
        desc:
            "Get counselling and learn how you can work with USA/Canada logistics companies from India.",
        btn1: { text: "Explore Course", href: "/truck-dispatching" },
        btn2: { text: "Apply for Counselling", href: "/contact-us" }
    };

    return (
        <section className="main-bg py-6 md:py-12">
            <div className="cus_container">
                <div className="max-w-4xl m-auto">
                    <Title title={header.title} text_color={"text-black"} />
                    <Description description={header.subtitle} text_color={"text-secondary"} />

                    <div className="mt-5 flex flex-wrap gap-3">
                        {highlights.map((text, idx) => (
                            <div
                                key={idx}
                                className="inline-flex items-center gap-2 rounded-2xl border border-[rgba(27,27,43,0.10)] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(27,27,43,0.06)]"
                            >
                                <span className="grid h-7 w-7 place-items-center rounded-xl bg-[rgba(99,70,250,0.12)] text-sm font-extrabold text-[var(--primary)]">
                                    ✓
                                </span>
                                <span className="text-sm font-semibold text-[rgba(27,27,43,0.88)]">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {cards.map((card) => {
                        const isPrimary = false;

                        return (
                            <article
                                key={card.id}
                                className={
                                    "rounded-3xl border border-[rgba(27,27,43,0.10)] bg-white p-6 shadow-[0_18px_40px_rgba(27,27,43,0.08)] transition  hover:shadow-[0_24px_60px_rgba(27,27,43,0.12)]"
                                }
                            >
                                <div className="flex items-start gap-3 md:min-h-[72px]">
                                    <div
                                        className={
                                            isPrimary
                                                ? "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/20 text-base font-extrabold text-white"
                                                : "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[rgba(99,70,250,0.12)] text-base font-extrabold text-[var(--primary)]"
                                        }
                                    >
                                        {card.id}
                                    </div>

                                    <div>
                                        <h3
                                            className={
                                                "text-lg lg:text-xl 2xl:text-2xl  mb-2 relative z-10 text-[var(--secondary)]"
                                            }
                                        >
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>

                                <Description
                                    description={card.desc}
                                    text_color={"text-secondary"}
                                    text_start={true}
                                />

                                {card.workMode && (
                                    <div className=" rounded-2xl bg-[rgba(27,27,43,0.04)] p-4">
                                        <p className="text-xs md:text-base font-bold text-[rgba(27,27,43,0.75)]">
                                            Work Mode
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-[rgba(27,27,43,0.88)]">
                                            {card.workMode}
                                        </p>
                                    </div>
                                )}

                                {card.chips && (
                                    <div className={isPrimary ? "mt-4 flex flex-wrap gap-2" : "mt-4 flex flex-wrap gap-2"}>
                                        {card.chips.map((chip, i) => (
                                            <span
                                                key={i}
                                                className={
                                                    isPrimary
                                                        ? "rounded-full bg-white/15 px-3 py-1 text-sm font-bold text-white/90"
                                                        : "rounded-full bg-[rgba(27,27,43,0.06)] px-3 py-1 text-sm font-bold text-[rgba(27,27,43,0.80)]"
                                                }
                                            >
                                                {chip}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {card.metaLabel && card.metaValue && (
                                    <div className="rounded-2xl bg-[rgba(27,27,43,0.04)] p-4">
                                        <p className="text-sm md:text-base font-bold text-[rgba(27,27,43,0.75)]">
                                            {card.metaLabel}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-[rgba(27,27,43,0.88)]">
                                            {card.metaValue}
                                        </p>
                                    </div>
                                )}

                                {card.bullets && (
                                    <ul
                                        className={
                                            isPrimary
                                                ? "space-y-2 text-sm text-white/90"
                                                : "mt-2 space-y-2 text-sm text-[rgba(27,27,43,0.86)]"
                                        }
                                    >
                                        {card.bullets.map((b, i) => (
                                            <li key={i} className="flex gap-2 items-center text-sm md:text-base">
                                                <span
                                                    className={
                                                        isPrimary
                                                            ? "mt-0.5 font-extrabold text-white"
                                                            : "mt-0.5 font-extrabold text-[var(--primary)]"
                                                    }
                                                >
                                                    <Image src={"/images/greencheck.webp"} alt="" width={20} height={20} />
                                                </span>
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {card.note && (
                                    <div
                                        className={
                                            isPrimary
                                                ? "mt-4 rounded-2xl bg-white/15 p-4 text-sm font-semibold text-white/90"
                                                : "mt-4 rounded-2xl border border-[rgba(99,70,250,0.20)] bg-[rgba(99,70,250,0.10)] p-4 text-sm font-semibold text-[rgba(27,27,43,0.88)]"
                                        }
                                    >
                                        {card.note}
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CourseExtracontent;
