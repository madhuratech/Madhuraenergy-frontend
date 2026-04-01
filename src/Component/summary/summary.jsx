import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const serviceContent = {
  "solar-epc-solutions": {
    tag: "About the Service",
    title: "Complete Solar EPC Solutions",
    description:
      "Our Solar EPC service provides complete project delivery from planning and engineering to procurement, installation, testing, and commissioning. We help businesses and industries adopt efficient solar power systems that reduce electricity costs, improve energy independence, and support long-term sustainability goals through reliable and professionally managed execution.",
    path: "/solar-epc-solutions",
  },

  "solar-plant-management": {
    tag: "About the Service",
    title: "Efficient Rooftop Solar Solutions",
    description:
      "Our rooftop solar service is designed for commercial, industrial, and institutional buildings that want to transform available roof space into a valuable source of clean energy. We create customized systems that improve power efficiency, lower operating expenses, and deliver dependable long-term performance with seamless integration into existing infrastructure.",
    path: "/solar-plant-management",
  },

  "battery-storage": {
    tag: "About the Service",
    title:
      "Store energy smartly and power your life smoothly without any interruptions anytime",
    description:
      "Madhura Energy provides reliable energy battery storage system services for residential and commercial needs. Our solutions help store extra electricity and use it during peak hours or power outages, ensuring uninterrupted power supply. We offer complete services including energy analysis, planning, and customized system design based on your requirements. Our expert team ensures safe installation and efficient performance. Our systems are easy to use, durable, and built with high-quality standards. With our solutions, you can reduce energy waste, improve efficiency, and lower costs. We also support renewable energy like solar, delivering safe and dependable power every day.",
    path: "/battery-storage",
  },

  "operation-maintenance": {
    tag: "About the Service",
    title: "Operation and Maintenance Services for Solar Systems",
    description:
      "Your solar systems will operate at peak efficiency and dependability thanks to our operations and maintenance services. To identify problems early and prevent unplanned breakdowns, we offer preventative maintenance, routine inspections, and continuous monitoring. To reduce downtime and safeguard your investment, our methodical approach includes real-time performance tracking, prompt servicing, and quick problem solving. We increase system longevity and energy output by maintaining every part, from panels to inverters. You may make better decisions and achieve long-term operational success by having clear visibility into system health, maintenance activities, and performance trends through transparent reporting and data-driven insights.",
    path: "/operation-maintenance",
},
};

function Summary() {
  const { slug } = useParams();
  const service = serviceContent[slug];

  if (!service) {
    return (
      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-bold">Service not found</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-12">
            {/* Left side */}
            <div className="border-b border-white/10 p-8 sm:p-10 lg:col-span-4 lg:border-b-0 lg:border-r">
              <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                {service.tag}
              </span>

              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {service.title}
              </h2>
            </div>

            {/* Right side */}
            <div className="p-8 sm:p-10 lg:col-span-8 lg:p-12">
              <p className="max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Summary;
