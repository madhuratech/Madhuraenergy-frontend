import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  Factory,
  Landmark,
  BatteryCharging,
  Sun,
  CheckCircle2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ground from "../../assets/Projects/Ground.png";
import Industry from "../../assets/Projects/Industry.png";
import commercial from "../../assets/Projects/Solar.png";
import battery from "../../assets/Projects/Battery.png";
import publicinfrastructure from "../../assets/Projects/Public.png";

const projects = [
  {
    id: "01",
    title: "Ground-Mounted Solar Project",
    subtitle: "Utility-scale solar deployment for high-output generation.",
    description:
      "Developed a ground-mounted solar project designed for maximum generation efficiency, durable performance, and seamless integration into the client’s broader energy ecosystem.",
    image: ground,
    icon: Sun,
    points: [
      "Ground-mounted plant design",
      "High-output energy production",
      "Durable site execution",
      "Optimized lifecycle value",
    ],
  },
  {
    id: "02",
    title: "Industrial Solar Plant",
    subtitle: "High-capacity rooftop solar installation for manufacturing.",
    description:
      "Designed and executed a high-performance rooftop solar plant for an industrial facility, helping reduce grid dependency, improve energy efficiency, and achieve long-term cost savings.",
    image: Industry,
    icon: Factory,
    points: [
      "Large-scale rooftop installation",
      "Optimized energy generation",
      "Reduced operational energy costs",
      "Built for long-term reliability",
    ],
  },
  {
    id: "03",
    title: "Commercial Energy Upgrade",
    subtitle: "Smart energy infrastructure for a modern commercial campus.",
    description:
      "Delivered a clean energy solution for a commercial property with improved efficiency, stronger power management, and a scalable system design tailored to future expansion.",
    image: commercial,
    icon: Building2,
    points: [
      "Commercial rooftop system",
      "Enhanced energy optimization",
      "Future-ready infrastructure",
      "Improved sustainability goals",
    ],
  },
  {
    id: "04",
    title: "Battery Storage Integration",
    subtitle: "Reliable backup and peak-load management solution.",
    description:
      "Integrated an energy storage system to improve resilience, manage peak demand, and support consistent performance for a critical facility with advanced power requirements.",
    image: battery,
    icon: BatteryCharging,
    points: [
      "Peak load optimization",
      "Reliable backup support",
      "Scalable battery architecture",
      "Improved power stability",
    ],
  },
  {
    id: "05",
    title: "Public Infrastructure Project",
    subtitle: "Sustainable power deployment for a government facility.",
    description:
      "Executed a renewable energy project for a public-sector site with a focus on reliability, compliance, and efficient long-term performance under demanding operating conditions.",
    image: publicinfrastructure,
    icon: Landmark,
    points: [
      "Public-sector energy solution",
      "Compliance-focused execution",
      "Efficient system integration",
      "Long-term performance planning",
    ],
  },
];

function FeaturedProjects() {
  const [active, setActive] = useState(projects[0]);

  return (
    <section
      className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-16 md:py-20 lg:py-24"
      id="projects"
    >
      {/* background accents */}
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-16 h-52 w-52 rounded-full bg-emerald-950/10 blur-3xl sm:h-64 sm:w-64" />
        <div className="absolute bottom-0 right-[-60px] h-56 w-56 rounded-full bg-emerald-950/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 sm:bg-[size:44px_44px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl sm:mb-10 lg:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-400 sm:text-sm sm:tracking-[0.24em]">
            Featured Projects
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
            Proven execution across industrial, commercial, and public sectors
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 lg:text-lg">
            Explore selected projects through a clean interactive layout that
            highlights execution quality, project impact, and sector expertise.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start lg:gap-8">
          {/* Active project card */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:rounded-[28px]"
              >
                <div className="relative h-[220px] overflow-hidden sm:h-[280px] md:h-[320px]">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-white backdrop-blur sm:left-6 sm:top-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.22em]">
                    {active.id} / PROJECT
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                    <h3 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">
                      {active.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                      {active.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 p-4 sm:gap-6 sm:p-6 md:grid-cols-1 md:p-8 xl:grid-cols-[1.2fr_0.9fr] xl:gap-8">
                  <div>
                    <p className="text-sm leading-7 text-slate-300 sm:text-base">
                      {active.description}
                    </p>

                    <a
                      href="#projects"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:mt-6 sm:px-5 sm:py-3"
                    >
                      View Project
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  <div className="grid gap-3">
                    {active.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-sm sm:px-4 sm:py-4"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                          <p className="text-sm leading-6 text-slate-200">
                            {point}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project selector list */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            {/* Mobile: horizontal scroll cards */}
            <div className="flex gap-3 overflow-x-auto pb-2 lg:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {projects.map((project) => {
                const Icon = project.icon;
                const isActive = active.id === project.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActive(project)}
                    className={`min-w-[260px] rounded-[20px] border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? "border-emerald-700 bg-emerald-950/20"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-emerald-950 text-white"
                            : "bg-white/10 text-slate-200"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      <span className="text-xs font-semibold tracking-[0.16em] text-slate-400">
                        {project.id}
                      </span>
                    </div>

                    <h3 className="text-base font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden space-y-3 lg:block">
              {projects.map((project, index) => {
                const Icon = project.icon;
                const isActive = active.id === project.id;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    onMouseEnter={() => setActive(project)}
                    onFocus={() => setActive(project)}
                    onClick={() => setActive(project)}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    viewport={{ once: true }}
                    className={`w-full rounded-[22px] border p-5 text-left transition-all duration-300 backdrop-blur-sm ${
                      isActive
                        ? "border-emerald-700/60 bg-emerald-950/10"
                        : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-emerald-950 text-white"
                            : "bg-white/10 text-slate-200"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-xs font-semibold tracking-[0.18em] text-slate-400">
                            {project.id}
                          </span>
                          <ArrowRight
                            size={18}
                            className={`transition-transform duration-300 ${
                              isActive
                                ? "translate-x-0 text-emerald-400"
                                : "-translate-x-1 text-slate-500"
                            }`}
                          />
                        </div>

                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;