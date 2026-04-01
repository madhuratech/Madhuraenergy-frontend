import React from "react";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  BatteryCharging,
  Wrench,
  Settings,
  LineChart,
  Sun,
} from "lucide-react";

const whyChooseData = {
  solarEpc: {
    badge: "Why Choose Us",
    heading: "Why Choose Our Team To Deliver Your Solar EPC Project?",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    description:
      "We combine technical expertise, disciplined execution, and client-focused delivery to ensure every solar project is completed with quality, safety, and long-term performance in mind.",
    points: [
      {
        title: "End-to-End Project Execution",
        description:
          "From engineering and procurement to installation and commissioning, we manage the complete EPC lifecycle efficiently.",
        icon: Sun,
      },
      {
        title: "Experienced Technical Team",
        description:
          "Our engineers and project teams bring practical expertise in delivering reliable and scalable solar systems.",
        icon: PanelsTopLeft,
      },
      {
        title: "Quality-Focused Delivery",
        description:
          "We use proven components, structured planning, and strict quality checks to ensure dependable project outcomes.",
        icon: Settings,
      },
    ],
    path:"/solar-epc-solutions",
  },

  solarplant: {
    badge: "Why Choose Us",
    heading: "Why Choose Our Team For Battery Energy Storage Solutions?",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    description:
      "We design and deliver energy storage solutions that improve resilience, optimize consumption, and support long-term operational efficiency.",
    points: [
      {
        title: "Smart Energy Optimization",
        description:
          "Our storage systems help reduce peak load, improve backup reliability, and maximize energy usage efficiency.",
        icon: BatteryCharging,
      },
      {
        title: "Scalable System Design",
        description:
          "We tailor storage configurations based on project load profile, site requirements, and future expansion needs.",
        icon: PanelsTopLeft,
      },
      {
        title: "Reliable Performance",
        description:
          "Our solutions are built for safety, long lifecycle, and consistent operational performance.",
        icon: LineChart,
      },
    ],
    path:"/solar-plant-management"
  },

  operationMaintenance: {
    badge: "Why Choose Us",
    heading: "Why Choose Our Team For Operation & Maintenance Services?",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    description:
      "We provide proactive maintenance support that improves uptime, reduces failures, and protects your energy investment over the long term.",
    points: [
      {
        title: "Reliable O&M Services for Solar Energy Systems",
        description:
          "In addition to maintaining systems, we also want to make sure that they continue to function reliably throughout time. To assist you prevent performance declines and operational disruptions, we offer a planned approach, skilled execution, and ongoing system care.",
        icon: Wrench,
      },
      {
        title: "Performance-focused methodology ",
        description:
          "To guarantee that your solar investment continues to yield the anticipated returns without suffering undue losses, we place a high priority on system production and efficiency.",
        icon: Settings,
      },
      {
        title: "Methodical Maintenance Procedure ",
        description:
          "Our O&M operations adhere to an open and methodical procedure that lowers uncertainty and guarantees consistent system administration.",
        icon: LineChart,
      },
      {
        title: "Proactive Resolution of Issues",
        description:
          "By monitoring things and providing preventative services, we may spot possible problems early on and prevent significant interruptions and unplanned downtime. ",
        icon: LineChart,
      },
      {
        title: "Open Reporting",
        description:
          "Regular updates and performance reports allow you to stay informed about system status, maintenance chores, and areas for improvement.",
        icon: LineChart,
      },
    ],
    path:"/operation-maintenance",
  },

  batterystorage: {
    badge: "Why Choose Us",
    heading: "Choose Madhura Energy for reliable and efficient battery energy storage solutions you can trust.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description:
      "We are dedicated to providing you with efficient and reliable energy solutions that are easy to understand and implement. Our team of experts will ensure that you have the best energy solution that meets your needs. Our energy solutions will help you save on energy costs while providing you with reliable power to keep your business running smoothly. Our energy solutions are designed to make your life easy by providing you with uninterrupted power while saving you money in the long run.",
    points: [
      {
        title: "Trusted Quality",
        description:
          "We provide you with quality energy solutions that are reliable and efficient. Our energy solutions are designed to last for a long time while providing you with the support you need for your business.",
        icon: Settings,
      },
      {
        title: "Expert Team",
        description:
          "Our team of experts will ensure that you have the best energy solution that meets your needs. Our team will work hard to ensure that you have the best results from the beginning to the final execution of the project.",
        icon: PanelsTopLeft,
      },
      {
        title: "Cost Efficient",
        description:
          "We deliver smart energy solutions that not only help you save on your electricity costs but also prevent wastage and enhance efficiency for better savings.",
        icon: LineChart,
      },
      {
        title: "Full Support",
        description:
          "We give you complete end-to-end support to ensure your system functions smoothly at all times.",
        icon: LineChart,
      },
    ],
    path:"/battery-storage"
  },

 
};

function WhyChooseSection({ serviceKey = "solarEpc" }) {
  const service = whyChooseData[serviceKey];

  if (!service) return null;

  return (
    <section className="bg-slate-950 py-20">
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
                {service.badge}
              </p>

              <h2 className="mt-4 max-w-xl p-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {service.heading}
              </h2>

              <div className="relative rounded-[24px] border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={service.image}
                    alt={service.heading}
                    className="h-[320px] w-full object-cover sm:h-[420px]"
                  />
                </div>
              </div>
            </div>

            {/* Right content */}
            <div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                {service.description}
              </p>

              <div className="mt-8 space-y-6">
                {service.points.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
                        <Icon size={20} />
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
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseSection;