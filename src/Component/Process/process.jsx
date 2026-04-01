import React from "react";
import { motion } from "framer-motion";

const processSectionData = {
  solarEpc: {
    badge: "How It Works",
    title: "Our Company Makes It Easy For You",
    highlightedLine: "To Work On Your Solar Project",
    description:
      "We follow a clear delivery path from feasibility study and engineering to procurement, installation, testing, and handover.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Site Assessment",
        description:
          "We evaluate site conditions, energy needs, and project feasibility.",
      },
      {
        number: "02",
        title: "Engineering Design",
        description:
          "We prepare layouts, technical drawings, and performance planning.",
      },
      {
        number: "03",
        title: "Procurement",
        description:
          "We source quality solar modules, inverters, and balance of system materials.",
      },
      {
        number: "04",
        title: "Installation",
        description:
          "Our team executes the project with quality, safety, and timeline control.",
      },
      {
        number: "05",
        title: "Testing & Handover",
        description:
          "We commission the system, test performance, and deliver final handover.",
      },
    ],
    path: "/solar-epc-solutions",
  },

  solarplant: {
    badge: "Our Process",
    title: "Reliable Energy Storage Delivery",
    highlightedLine: "From Planning To Commissioning",
    description:
      "We design and deploy battery storage systems with focus on backup power, efficiency, and operational reliability.",
    backgroundImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Load Analysis",
        description:
          "We study load profile, backup needs, and peak demand patterns.",
      },
      {
        number: "02",
        title: "System Design",
        description:
          "We define battery sizing, inverter integration, and control strategy.",
      },
      {
        number: "03",
        title: "Equipment Selection",
        description:
          "We choose the right battery chemistry and system components.",
      },
      {
        number: "04",
        title: "Installation",
        description:
          "We install the battery system with proper safety and compliance measures.",
      },
      {
        number: "05",
        title: "Integration & Testing",
        description:
          "We connect, test, and optimize the storage system for performance.",
      },
    ],
    path: "/solar-plant-management",
  },

  operationsMaintenance: {
    badge: "Service Workflow",
    title: "O&M Services for Solar Energy Systems Using a Clear and Systematic Approach to Solar System Management ",
    description:
      "To guarantee that your solar systems are monitored, maintained, and adjusted for dependable long-term performance, we employ a methodical and well defined procedure. ",
    backgroundImage:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Monitoring Performance ",
        description:
          "Modern monitoring technologies are used to continuously monitor system performance in order to spot abnormalities, maximize output, and guarantee steady energy production.",
      },
      
      {
        number: "02",
        title: "Upkeep and Repair ",
        description:
          "Rapid problem detection and resolution with coordinated troubleshooting and repair assistance to minimize downtime and restore system functionality",
      },
      {
        number: "03",
        title: "Preventive Maintenance",
        description:
          "In order to minimize system wear, avoid unforeseen problems, and ensure steady performance, preventive maintenance consists of scheduled inspections and regular maintenance.",
      },
      {
        number: "04",
        title: "Asset Maintenance and Cleaning ",
        description:
          "To avoid efficiency loss brought on by dust, debris, and environmental conditions, regular equipment maintenance and module cleaning are necessary.",
      },
      {
        number: "05",
        title: "Remote Assistance & Diagnostics ",
        description:
          "Remote diagnostics and real-time system monitoring provide for faster decision-making and responsiveness by identifying problems early.",
      },
    ],
    path:"/operation-maintenance",
  },

  batteryStorage: {
    badge: "Execution Process",
    title: "Complete Electrical Infrastructure",
    highlightedLine: "Delivered With Precision",
    description:
      "Energy battery storage systems capture, store, and deliver energy with maximum efficiency and power when needed",
    backgroundImage:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Energy Analysis",
        description:
          "We thoroughly analysed your existing energy requirements, consumption rates, and future needs to determine exactly what you need and provide the most appropriate storage system.",
      },
      {
        number: "02",
        title: "System Design",
        description:
          "Our experienced team designs a battery energy storage system that meets your available space requirements, energy needs, and operational requirements for better efficiency.",
      },
      {
        number: "03",
        title: "Planning & Setup",
        description:
          "We plan everything very thoroughly and carefully, making all the necessary arrangements in advance to ensure a smooth, efficient, and completely trouble-free installation process from start to finish.",
      },
      {
        number: "04",
        title: "Installation",
        description:
          "Our experienced professionals install the system with proper care and attention to safety and quality standards for maximum efficiency and long-term performance.",
      },
      {
        number: "05",
        title: "Testing & Optimization",
        description:
          "We thoroughly test the system under various operating conditions and optimize its performance to ensure maximum efficiency and desired results.",
      },
    ],
    path: "/battery-storage",
  },

  energyConsulting: {
    badge: "Consulting Approach",
    title: "Helping You Make Better",
    highlightedLine: "Energy Decisions",
    description:
      "Our consulting process supports better planning, cost optimization, and sustainable energy strategy development.",
    backgroundImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Understanding Goals",
        description:
          "We gather business objectives, energy challenges, and project priorities.",
      },
      {
        number: "02",
        title: "Energy Assessment",
        description:
          "We evaluate consumption patterns, infrastructure, and improvement areas.",
      },
      {
        number: "03",
        title: "Solution Strategy",
        description:
          "We recommend practical and scalable energy solutions.",
      },
      {
        number: "04",
        title: "Financial Review",
        description:
          "We estimate investment, savings, ROI, and implementation roadmap.",
      },
      {
        number: "05",
        title: "Action Plan",
        description:
          "We deliver a clear strategy for execution and long-term success.",
      },
    ],
  },
};

function ProcessSection({ serviceKey = "solarEpc" }) {
  const service = processSectionData[serviceKey];

  if (!service) return null;

  return (
    <section className="relative bg-slate-100 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Banner */}
        <div className="relative overflow-hidden rounded-[24px] bg-slate-900">
          <img
            src={service.backgroundImage}
            alt={service.title}
            className="h-[260px] w-full object-cover opacity-20 sm:h-[300px] lg:h-[340px]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.55),rgba(2,6,23,0.88))]" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              {service.badge}
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {service.title}
              <span className="block">{service.highlightedLine}</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              {service.description}
            </p>
          </div>
        </div>

        {/* Floating Step Cards */}
        <div className="relative z-10 mx-auto -mt-10 grid max-w-8xl gap-5 sm:grid-cols-2 lg:mt-2 lg:grid-cols-5">
          {service.processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[20px] bg-white px-5 pb-6 pt-10 shadow-[0_12px_30px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto -mt-16 mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-base font-bold text-white shadow-lg">
                {step.number}
              </div>

              <h3 className="text-lg font-bold leading-snug text-slate-800">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;