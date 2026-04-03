import React from "react";
import { motion } from "framer-motion";

const processSectionData = {
  solarEpc: {
    badge: "How It Works",
    title: "Simple and Efficient Solar EPC Services from Start to Finish",
    // highlightedLine: "To Work On Your Solar Project",
    description:
      "At solar EPC solutions, our focus is to provide quality, maintain transparency, and ensure that high performance standards are met in all projects that we handle.",
    backgroundImage:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Site Analysis & Requirement Study",
        description:
          "We analyse energy, location, roof, and sunlight for optimal solutions.",
      },
      {
        number: "02",
        title: "System Design & Planning",
        description:
          "A customized solar system is designed for maximum efficiency.",
      },
      {
        number: "03",
        title: "Procurement of Materials",
        description:
          "We procure quality solar materials for durability, safety, reliability.",
      },
      {
        number: "04",
        title: "Installation & Execution",
        description:
          "The solar system is installed by professionals to ensure maximum efficiency.",
      },
      {
        number: "05",
        title: "Testing, Commissioning & Support",
        description:
          "The solar system is tested, commissioned, and supported for maximum performance",
      },
    ],
    path: "/solar-epc-solutions",
  },

  solarplant: {
    badge: "Our Process",
    title: "Reliable Energy Storage Delivery",
    highlightedLine: "From Planning To Commissioning",
    description:
      "We provide step-by-step support to our customers so they can experience the successful, long-term operation of a Solar Plant.",
    backgroundImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
    processSteps: [
      {
        number: "01",
        title: "Site & Performance Analysis",
        description:
          "As part of our initial work, we thoroughly analyse your solar plant's current output and system condition, and identify all gaps along with any possible areas for improvement.",
      },
      {
        number: "02",
        title: "Monitoring Setup",
        description:
          "We install cutting-edge monitoring technology to provide you with real-time performance, generation and health of your system so you have complete visibility.",
      },
      {
        number: "03",
        title: "Preventative Maintenance Plan ",
        description:
          "A pre-emptive maintenance schedule is developed to prevent potential problems, decrease down time, and ensure reliable energy production.",
      },
      {
        number: "04",
        title: "Issue Detection and Resolution",
        description:
          "We analyse data and use analytical tools to detect faults quickly and rectify them to keep your plant operating smoothly.",
      },
      {
        number: "05",
        title: "Performance Optimisation",
        description:
          "We consistently optimize the performance of every system with insights gained from data analytics, to provide maximum efficiency and the highest energy yield over time.",
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
        title: "Performance Monitoring ",
        description:
          "Track solar system performance in real time. Monitor output patterns, identify issues early, and ensure consistent energy production with continuous system visibility. ",
      },
      
      {
        number: "02",
        title: "Handling of Repairs",
        description:
          "Determine and quickly resolve system problems with coordinated repair support. Minimize downtime, increase output, and keep generating energy.",
      },
      {
        number: "03",
        title: "Preventive Maintenance ",
        description:
          "To reduce wear and avoid unforeseen breakdowns, schedule routine maintenance. Ensure improved long-term system health, consistent performance, and operational reliability. ",
      },
      {
        number: "04",
        title: "Asset Cleaning ",
        description:
          "Regular cleaning removes dust particles that reduce efficiency. You can maintain optimal energy absorption and boost system output by properly maintaining your equipment.",
      },
      {
        number: "05",
        title: "Remote diagnostics",
        description:
          "Make use of remote technology to promptly monitor, detect, and fix issues. Reduce manual inspections, expedite decision-making, and efficiently oversee system performance.",
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