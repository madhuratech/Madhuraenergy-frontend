import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefitsContent = {
  solarEpc: {
    tag: "Benefits",
    title: "Why Businesses Choose Our EPC Services",
    benefits: [
      "End-to-end engineering, procurement, and construction support.",
      "Optimized project execution with quality and safety focus.",
      "Reliable performance with long-term operational value.",
      "Faster delivery through experienced technical coordination.",
    ],
    path:"/services/solar-epc-solutions",
  },

  solarplantmanagement: {
    tag: "Benefits",
    title: "Why Businesses Choose Our Battery Storage Solutions",
    benefits: [
      "Improved backup power reliability during grid interruptions.",
      "Peak load reduction and better energy cost control.",
      "Scalable systems designed for future expansion needs.",
      "Smarter power management for commercial and industrial sites.",
    ],
    path: "/services/solar-plant-management",
  },

  operationMaintenance: {
    tag: "Benefits",
    title: "Sustaining Efficiency and Increasing System Worth ",
    benefits: [
      "Frequent maintenance and observation assist guarantee that your system produces energy in a reliable, consistent manner without experiencing performance declines. ",
      "Early problem identification and prompt repair reduce unanticipated failures and maintain your system's continuous operation. ",
      "Maintaining optimal efficiency and halting increasing energy losses is made simpler by cleaning, inspections, and performance evaluations.",
      "Longer system life and improved asset utilization are supported by well-maintained components, which endure less stress and deterioration. ",
      "Preventive maintenance eventually helps you better control operating expenses by lowering the need for costly repairs",
      "Transparency is provided by regular reporting and data monitoring, which enables you to comprehend system behavior and make wise decisions."
    ],
    path: "/services/operation-maintenance",
  },

  batteryEnergy: {
    tag: "Benefits",
    title: "Why Businesses Choose Our Electrical Infrastructure Services",
    benefits: [
      "Reduces electricity bills with efficient energy management.",
      "Stores excess energy safely and efficiently for reliable use whenever needed.",
      "Enhances overall efficiency and significantly reduces power consumption.",
      "Ensures continuous and stable power supply for operations",
      "Reduces energy waste with smarter and more efficient usage",
      "Simple and easy to use, with efficient management and low-maintenance operation for smoothness",


    ],
    path: "/services/battery-energy-storage",
  },

  energyAudit: {
    tag: "Benefits",
    title: "Why Companies Choose Our Energy Audit Services",
    benefits: [
      "Identify energy losses and efficiency gaps clearly.",
      "Reduce operational costs with practical recommendations.",
      "Support sustainability and optimization goals.",
      "Data-based insights for smarter energy planning.",
    ],
  },
};

function Benefits({ pageKey }) {
  const data = benefitsContent[pageKey];

  if (!data) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,1),rgba(59,130,246,0.12))] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                {data.tag}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {data.title}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {data.benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-[22px] border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-400"
                    size={20}
                  />
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;