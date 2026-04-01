import React from "react";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  BadgeCheck,
  Wrench,
  LineChart,
  ShieldCheck,
  BatteryCharging,
  Settings,
  Factory,
  Building2,
} from "lucide-react";

const serviceScopeData = {
  "solar-epc-solutions": {
    tag: "What We Deliver",
    title: "Complete EPC Scope in 5 Key Service Areas",
    items: [
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
          "Professional on-site installation with safety-first execution and strict quality control measures.",
        icon: Wrench,
        image:
          "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Testing & Commissioning",
        description:
          "Detailed testing, inspections, and commissioning to ensure dependable and compliant system performance.",
        icon: ShieldCheck,
        image:
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Performance Monitoring",
        description:
          "Ongoing monitoring and reporting tools to optimize output and improve long-term system efficiency.",
        icon: LineChart,
        image:
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    path: "/solar-epc-solutions"
  },

  solarplantmanagement: {
    tag: "Storage Solutions",
    title: "Advanced Battery Storage Capabilities We Deliver",
    items: [
      {
        title: "Battery System Design",
        description:
          "Custom battery energy storage design tailored for backup power, peak shaving, and energy optimization.",
        icon: BatteryCharging,
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "System Integration",
        description:
          "Integration with solar plants, electrical networks, and energy management systems for seamless performance.",
        icon: Settings,
        image:
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Control & Automation",
        description:
          "Smart controls and automation features for efficient dispatch, monitoring, and load balancing.",
        icon: LineChart,
        image:
          "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    path: "/solar-plant-management",
  },

  operationMaintenance: {
    tag: "WHAT WE PROVIDE: ",
    title: "Operation & Maintenance Coverage in All Important Service Domains ",
    items: [
      {
        title: "Tracking Performance ",
        description:
          "System performance is continuously monitored using state-of-the-art monitoring tools to identify anomalies, optimize output, and ensure consistent energy generation. ",
        icon: Wrench,
        image:
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Preventive maintenance includes planned inspections and routine maintenance to reduce system wear, prevent unanticipated issues, and maintain consistent performance. ",
        icon: ShieldCheck,
        image:
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Maintenance and Repair ",
        description:
          "Quick issue identification and repair with coordinated troubleshooting and repair support to reduce downtime and restore system performance",
        icon: LineChart,
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Inspection and Reporting of Systems ",
        description:
          "Thorough site inspections and performance reports that offer lucid insights into operational effectiveness, system health, and areas for development. ",
        icon: LineChart,
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Cleaning and Asset Maintenance ",
        description:
          "To avoid efficiency loss brought on by dust, debris, and environmental conditions, regular module cleaning and equipment maintenance are necessary. ",
        icon: LineChart,
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Remote Diagnostics & Support",
        description:
          "Remote diagnostics and real-time system monitoring provide for quicker decision-making and responsiveness by identifying problems early.",
        icon: LineChart,
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    path: "/operation-maintenance",
  },

  batteryEnergy: {
    tag: "Infrastructure Scope",
    title: "Core Electrical Infrastructure Services We Provide",
    items: [
      {
        title: "Panel & Distribution Systems",
        description:
          "Robust electrical panels and distribution systems designed for safe and efficient power delivery.",
        icon: Settings,
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Industrial Installation",
        description:
          "End-to-end installation support for industrial and commercial electrical infrastructure projects.",
        icon: Factory,
        image:
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Grid Connectivity",
        description:
          "Reliable grid interconnection and electrical integration for smooth project commissioning.",
        icon: Building2,
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },
  
};

function Servicecards({ serviceKey }) {
  const service = serviceScopeData[serviceKey];

  if (!service) return null;

  return (
    <section id="scope" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            {service.tag}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {service.items.map((item, index) => {
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

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicecards;