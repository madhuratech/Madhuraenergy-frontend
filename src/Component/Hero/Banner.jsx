import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Banner() {
  const { slug } = useParams();

  const services = {
    "solar-epc-solutions": {
      tag: "Service Details",
      title: "Solar EPC",
      highlight: "Solutions",
      description:
        "Complete  procurement, construction, testing, and commissioning solutions for solar projects built with precision, speed, and long-term performance in mind.",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1800&q=80",
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/Pages/solar-epc-solutions",
    },

    "solar-plant-management": {
      tag: "Service Details",
      title: "Battery Energy Storage",
      highlight: "Solutions",
      description:
        "Advanced battery storage systems designed for backup power, peak load management, energy optimization, and long-term operational reliability.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/solar-plant-management",
    },

    "operation-maintenance": {
      tag: "Service Details",
      title: "Operations and Maintenance Services",
      description:
        "Utilize professional operations and maintenance services to optimize solar performance. Through proactive monitoring, prompt service, and data driven optimization, we guarantee system efficiency, minimize downtime, and prolong asset life.",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=80",
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/operation-maintenance",
    },

    "battery-storage": {
      tag: "Service Details",
      title: "Battery Energy Storage Systems",

      description:
        "Store energy smarter, cut costs more efficiently, and stay powered anytime with our advanced and dependable energy solutions that are thoughtfully crafted to deliver on the escalating and evolving needs of contemporary power requirements.",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1800&q=80",
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/battery-storage",
    },

    "third-party-OM": {
      tag: "Service Details",
      title: "Energy Consulting",
      highlight: "Services",
      description:
        "Strategic energy advisory services to help businesses improve efficiency, reduce costs, plan investments, and build sustainable energy roadmaps.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
      primaryButtonText: "Get Consultation",
      primaryButtonLink: "#contact",
      secondaryButtonText: "Explore Service",
      secondaryButtonLink: "#scope",
      path: "/services/third-party-OM",
    },
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <h2 className="text-2xl font-semibold">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-[-100px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-4 py-14 sm:px-6 md:min-h-[60vh] md:py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-center"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">
              {service.tag}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              {service.title}
              <span className="block text-slate-200">{service.highlight}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={service.primaryButtonLink}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                {service.primaryButtonText}
                <ArrowRight size={18} />
              </a>

              <a
                href={service.secondaryButtonLink}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                {service.secondaryButtonText}
              </a>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}

export default Banner;