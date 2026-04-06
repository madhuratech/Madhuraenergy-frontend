import React from "react";
import { Link } from "react-router-dom";
import {
  Sun,
  BatteryCharging,
  Wrench,
  Settings,
  ArrowUpRight,
} from "lucide-react";
// import AnimatedEnergyBackground from "./Flowanimate";

const services = [
  {
    id: "01",
    title: "Solar EPC Solutions",
    path: "/services/solar-epc-solutions",
    description:
      "End-to-end engineering, procurement, and construction services for commercial, industrial, and utility-scale solar projects.",
    icon: Sun,
  },
  {
    id: "02",
    title: "Solar Plant Management",
    path: "/services/solar-plant-management",
    description:
      "Comprehensive management and optimization services for existing solar installations.",
    icon: BatteryCharging,
  },
  {
    id: "03",
    title: "Operation & Maintenance",
    path: "/services/operation-maintenance",
    description:
      "Preventive and corrective maintenance services to maximize uptime, safety, and long-term performance.",
    icon: Wrench,
  },
  {
    id: "04",
    title: "Battery Energy Storage",
    path: "/services/battery-storage",
    description:
      "Complete electrical integration including panels, cabling, distribution systems, and grid connectivity.",
    icon: Settings,
  },
  {
    id: "05",
    title: "Solar Pump",
    path: "/services/solar-pump",
    description:
      "Complete electrical integration including panels, cabling, distribution systems, and grid connectivity.",
    icon: Settings,
  },
  {
    id: "06",
    title: "Solar Plant Cleaning Robots",
    path: "/services/solar-plant-cleaning-robots",
    description:
      "Complete electrical integration including panels, cabling, distribution systems, and grid connectivity.",
    icon: Settings,
  },
  {
    id: "07",
    title: "Third party power purchase",
    path: "/services/third-party-power-purchase",
    description:
      "Complete electrical integration including panels, cabling, distribution systems, and grid connectivity.",
    icon: Settings,
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      to={service.path}
      className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.55)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-950/30 hover:bg-white/[0.07] hover:shadow-[0_25px_70px_-30px_rgba(16,185,129,0.25)] sm:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/10 via-white/[0.02] to-emerald-950/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-950/20 bg-emerald-950/10 text-emerald-300 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-300/40 group-hover:bg-emerald-950/15">
          <Icon size={26} />
        </div>

        <span className="text-sm font-bold tracking-[0.2em] text-white/25 transition-colors duration-300 group-hover:text-emerald-300/80">
          {service.id}
        </span>
      </div>

      <div className="relative z-10 mt-8 flex-1">
        <h3 className="text-2xl font-semibold leading-snug text-white">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          {service.description}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-emerald-300">
          Learn More
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-slate-200 transition-all duration-300 group-hover:border-emerald-300/50 group-hover:bg-emerald-950/10 group-hover:text-emerald-300">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-12 text-white md:py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />
      </div>

      {/* <AnimatedEnergyBackground /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            Our Services
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Complete Energy Solutions with a Clean Modern Approach
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            We deliver reliable renewable and electrical services designed for
            performance, efficiency, and long-term value.
          </p>
        </div>

        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;