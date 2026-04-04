import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

function Aboutservice() {
  const { slug } = useParams();

  const serviceContent = {
    "solar-epc-solutions": {
      tag: "About Our Solutions",
      title: "Efficient and Reliable Solar EPC Services for smarter, and sustainable energy",
      description:
        "At our company, we provide complete solar EPC services, making your energy journey easier with efficient, reliable, and cost-effective services for both residential and commercial needs.",
      points: [
        "End-to-end solar project management services",
        "Cost-effective and efficient solar services",
        "Reliable solar services",
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
      title: "Smart Solar Plant Management for a Sustainable Future",
      description:
        "At Madhura Energy, we offer companies various intelligent, sophisticated solar energy management solutions to enable businesses to achieve optimal performance, increased output and long-term reliability of their solar plants through intelligent monitoring and management.",
      points: [
        "Real-time monitoring of peak production.",
        "Preventive maintenance to limit downtime.",
        "Increasing production and maximizing efficiency.",
        "Data analytics solutions to help you make better decisions."
        
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80",
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

   "solar-pump": {
      tag: "About Our Solutions",
      title: "Efficient Solar Pump Solutions for Sustainable Water Management",     
      description:
        "At Madhura Energy, we provide efficient solar pump solutions that harness the power of the sun to deliver reliable and sustainable water management for agricultural, industrial, and residential applications.",
      points: [
        "Energy-efficient water pumping solutions",
        "Sustainable and eco-friendly operation",
        "Low maintenance and high durability"
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Solar pump",
      statLabel: "Efficiency",
      statValue: "95%",
      statDescription: "Maximized performance for optimal results",
      path: "/solar-pump",
    },
    "solar-plant-cleaning-robots": {
      tag: "About Our Solutions",
      title: "Advanced Solar Plant Cleaning Robots for Optimal Performance",
      description:
        "Our innovative solar plant cleaning robots ensure optimal performance by providing efficient and automated cleaning solutions for solar panels.",
      points: [
        "Automated cleaning for maximum efficiency",
        "Robust design for harsh weather conditions",
        "Remote monitoring and control capabilities"
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Solar plant cleaning robot",
      statLabel: "Cleaning Efficiency",
      statValue: "99%",
      statDescription: "Ensuring peak performance for solar installations",
      path: "/solar-plant-cleaning-robots",
    },
      "third-party-power-purchase": { 
      tag: "About Our Solutions",
      title: "Third-Party Power Purchase Solutions for Sustainable Energy Access",
      description:
        "Our third-party power purchase solutions provide a reliable and sustainable way to access clean energy for businesses and individuals.",
      points: [
        "Access to clean and renewable energy sources",
        "Flexible purchasing options for various needs",
        "Support for sustainable energy initiatives"
      ],
      buttonText: "Learn More",
      buttonLink: "/contact",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80",
      imageAlt: "Third-party power purchase",
      statLabel: "Sustainability",
      statValue: "100%",
      statDescription: "Commitment to environmentally responsible energy solutions",
      path: "/third-party-power-purchase",
    }

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