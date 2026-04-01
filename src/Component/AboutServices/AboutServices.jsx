import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

function Aboutservice() {
  const { slug } = useParams();

  const serviceContent = {
    "solar-epc-solutions": {
      tag: "About Our Solutions",
      title: "Smart Solar EPC Solutions Built for Long-Term Performance",
      description:
        "We deliver complete solar EPC solutions tailored for commercial, industrial, and infrastructure projects with a focus on engineering precision, execution quality, and long-term value.",
      points: [
        "End-to-end solar project planning and execution",
        "High-efficiency system design and installation",
        "Reliable support for long-term plant performance",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Solar EPC solution",
      statLabel: "Performance",
      statValue: "98%",
      statDescription: "Optimized solar system efficiency",
      path: "/Pages/solar-epc-solutions",
    },

    "solar-plant-management": {
      tag: "About Our Solutions",
      title: "Advanced Battery Storage for Smarter Energy Management",
      description:
        "Our battery storage systems are designed to improve energy reliability, backup readiness, and peak load optimization for modern businesses and infrastructure.",
      points: [
        "Reliable backup power solutions",
        "Peak demand and energy cost optimization",
        "Scalable systems for future expansion",
        
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Battery storage solution",
      statLabel: "Backup Reliability",
      statValue: "24/7",
      statDescription: "Power support when it matters most",
      path:"/solar-plant-management",
    },

    "operation-maintenance": {
      tag: "About Our Solutions",
      title: "Dependable Solar System Operations and Maintenance Services",
      description:
        "With proactive monitoring, preventative maintenance, and quick problem solving, our operations and maintenance services guarantee optimal solar performance, reducing downtime and optimizing long-term energy output.",
      points: [
        "Regular monitoring and maintenance ",
        "System control for better performance ",
        "Reliable support for daily operations",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Operation and maintenance",
      statLabel: "System Uptime",
      statValue: "99%",
      statDescription: "Maintained for consistent operations",
      path: "/operation-maintenance",
    },

    "battery-storage": {
      tag: "About Our Solutions",
      title: "Smart Energy Storage for a Better Tomorrow - Future",
      description:
        "The way we help companies at Madhura Energy is through the smarter management of energy, which we achieve through the storage of energy for future use.",
      points: [
        "Continuous and dependable power supply",
        "Smart energy usage and savings",
        "Easy and safe storage solutions",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Electrical infrastructure",
      statLabel: "Safety",
      statValue: "100%",
      statDescription: "Built with compliance-focused execution",
      path:" /battery-storage",
    },

    "third-party-OM": {
      tag: "About Our Solutions",
      title: "Energy Consulting That Drives Better Project Decisions",
      description:
        "Our consulting services help clients evaluate, plan, and implement efficient energy solutions aligned with technical, operational, and financial goals.",
      points: [
        "Site assessment and feasibility analysis",
        "Strategic planning for energy optimization",
        "Technical guidance for project success",
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Energy consulting",
      statLabel: "Project Planning",
      statValue: "360°",
      statDescription: "Comprehensive advisory support",
      path: "/third-party-OM",
    },
  };

  const data = serviceContent[slug];

  if (!data) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-white px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Page Not Found</h2>
          <p className="mt-3 text-slate-600">
            The service page you are looking for does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
            {data.tag}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            {data.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            {data.description}
          </p>

          <div className="mt-8 space-y-4">
            {data.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p className="text-slate-700">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={data.buttonLink}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              {data.buttonText}
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[28px] shadow-2xl">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl md:block">
            <p className="text-sm font-medium text-slate-500">
              {data.statLabel}
            </p>
            <h3 className="mt-1 text-2xl font-bold text-slate-900">
              {data.statValue}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {data.statDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Aboutservice;