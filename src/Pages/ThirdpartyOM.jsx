import React from "react";
import {
    // Sun,
    // Building2,
    // Factory,
    BadgeCheck,
    ArrowRight,
    CheckCircle2,
    PanelsTopLeft,
    Wrench,
    LineChart,
    // ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
// import FeaturedProjects from "../Component/Home/Projects";
import FAQSection from "../Component/Home/FAQ";
import Banner from "../Component/Hero/Banner";
import Aboutservice from "../Component/AboutServices/AboutServices";
import Servicecards from "../Component/Servicecards/servicecards";
import ProcessSection from "../Component/Process/process";
import WhyChooseSection from "../Component/WhyChoose/whychoose";
import Benefits from "../Component/Benefits/benefits";

const scopeItems = [
    {
        title: "Engineering Design",
        description:
            "Complete technical planning including plant layout, generation estimates, structural design, and electrical single-line diagrams.",
        icon: PanelsTopLeft,
        image:
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Procurement & Supply",
        description:
            "Reliable sourcing of modules, inverters, structures, cables, and BOS components from trusted partners.",
        icon: BadgeCheck,
        image:
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Installation & Execution",
        description:
            "End-to-end project execution with strict quality control, safety compliance, and timely site coordination.",
        icon: Wrench,
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Testing & Commissioning",
        description:
            "Performance validation, inspections, grid synchronization, and handover with full documentation.",
        icon: LineChart,
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Testing & Commissioning",
        description:
            "Performance validation, inspections, grid synchronization, and handover with full documentation.",
        icon: LineChart,
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Testing & Commissioning",
        description:
            "Performance validation, inspections, grid synchronization, and handover with full documentation.",
        icon: LineChart,
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Testing & Commissioning",
        description:
            "Performance validation, inspections, grid synchronization, and handover with full documentation.",
        icon: LineChart,
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    },
    {
        title: "Testing & Commissioning",
        description:
            "Performance validation, inspections, grid synchronization, and handover with full documentation.",
        icon: LineChart,
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
    },
];


const benefits = [
    "Reduced electricity costs and long-term savings",
    "Single-point responsibility from concept to commissioning",
    "Scalable solutions for industrial, commercial, and utility projects",
    "Compliance-focused design with safety-first execution",
    "High-performance solar systems built for long-term reliability",
    "Faster execution with quality-driven project management",
];


const whyChoosePoints = [
    {
        title: "Local expertise",
        description:
            "We understand regional requirements, project approvals, and practical installation needs for solar and energy infrastructure projects.",
    },
    {
        title: "Commitment to customer satisfaction",
        description:
            "We work with clear communication, transparent execution, and reliable support throughout the entire project lifecycle.",
    },
    {
        title: "Competitive pricing",
        description:
            "Our solutions are designed to balance quality, performance, and affordability for commercial and industrial clients.",
    },
    {
        title: "Proven track record",
        description:
            "From planning to commissioning, we deliver dependable project outcomes with strong attention to safety, quality, and long-term value.",
    },
];

function SolarPlantManagement() {
    return (
        <div className="bg-slate-950 text-white">
            {/* HERO */}
            <Banner />
            <Aboutservice />
            <Servicecards />
            <ProcessSection />
            <WhyChooseSection />


            {/* OVERVIEW + STICKY SIDE */}
            <section className="py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
                    {/* Left Side Image */}
                    <div className="lg:col-span-6">
                        <div className="relative overflow-hidden rounded-[32px] border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80"
                                alt="Solar overview"
                                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[540px]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Right Side Designed Content */}
                    <div className="lg:col-span-6">
                        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-10 lg:p-12">
                            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                                Overview
                            </p>

                            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                                End-to-End Solar Project Delivery
                            </h2>

                            <div className="mt-6 h-px w-20 bg-emerald-400/60" />

                            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                                Our EPC model brings design, procurement, installation, testing, and
                                commissioning together under one experienced execution team. From
                                rooftop commercial systems to large industrial and utility-scale
                                projects, we focus on engineering precision, execution quality,
                                safety compliance, and long-term energy performance across every
                                stage of the project lifecycle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>``

            {/* SCOPE BLOCKS */}
            <section id="scope" className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                            What We Deliver
                        </p>
                        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                            Complete EPC Scope in 5 Key Service Areas
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {scopeItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: index * 0.08 }}
                                    className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
                                >
                                    <div className="overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                                            {item.description}
                                        </p>

                                        <a
                                            href="#contact"
                                            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
                                        >
                                            Discuss this service
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* <FeaturedProjects /> */}


            {/* PROCESS - STICKY OVERVIEW STYLE */}
            <section className="py-20 bg-slate-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-7 lg:p-8"
                    >
                        <div className="grid items-center gap-10 lg:grid-cols-2">
                            {/* Left image area */}
                            <div className="relative">
                                <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />
                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                                    Why Choose Us
                                </p>

                                <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl p-4">
                                    Why Choose Our Team To Deliver Your Energy Project?
                                </h2>




                                <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-5">

                                    <div className="overflow-hidden rounded-[20px]">
                                        <img
                                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                                            alt="Solar project execution"
                                            className="h-[320px] w-full object-cover sm:h-[420px]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right content */}
                            <div>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                                    We combine technical expertise, disciplined execution, and
                                    client-focused delivery to ensure every project is completed
                                    with quality, safety, and long-term performance in mind.
                                </p>
                                <div className="mt-8 space-y-6">
                                    {whyChoosePoints.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: 24 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.5, delay: index * 0.08 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                                                <PanelsTopLeft size={20} />
                                            </div>

                                            <div>
                                                <h3 className="text-base font-semibold text-white sm:text-lg">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="bg-white py-16 md:py-20 lg:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.25 }}
                        className="rounded-[28px] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10 lg:p-14"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                            About the Service
                        </p>

                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Reliable energy solutions designed for performance, safety, and long-term value
                        </h2>

                        <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                            <p>
                                Our service is built to deliver end-to-end support for businesses
                                and industries looking for dependable, efficient, and future-ready
                                energy solutions. From planning and design to execution and final
                                delivery, we focus on creating systems that match operational
                                needs, budget expectations, and long-term performance goals.
                            </p>

                            <p>
                                We combine technical expertise, quality-driven processes, and
                                practical execution strategies to ensure every project is handled
                                with precision and professionalism. Our approach emphasizes
                                transparency, timely delivery, system reliability, and seamless
                                coordination at every stage of the project lifecycle.
                            </p>

                        </div>
                    </motion.div>
                </div>
            </section>
            <FAQSection />

          <Benefits/>


        </div>
    );
}

export default SolarPlantManagement;