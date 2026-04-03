import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqPagesData = {
  solarEpc: {
    sectionData: {
      badge: "FAQs",
      title: "Frequently Asked",
      highlight: "Questions",
      description:
        "Find answers to the most common questions about our solar EPC solutions, project execution, timelines, and technical capabilities.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your solar EPC project requirements.",
      contactDescription:
        "Our team can guide you through project scope, design, procurement, installation, and commissioning for commercial and industrial solar projects.",
      buttonText: "Contact Us",
      path: "/solar-epc-solutions",
    },
    faqData: [
      {
        question: "What are Solar EPC Services?",
        answer:
          "They include engineering, procurement, and construction services required to design, source, build, and complete efficient solar energy systems for various applications.",
      },
      {
        question: "How long does installation take?",
        answer:
          "It depends on the project size, but most solar systems are completed quickly within a short time frame by experts",
      },
      {
        question: " Is solar energy cost-effective?",
        answer:
          "Yes, it also helps in reducing your electricity bills over time by generating your own power and reducing dependence on costly energy usage of the grid.",
      },
      {
        question: "Do I need maintenance?",
        answer:
          "Solar systems require minimal maintenance, making them easy to manage, cost-effective, and long-lasting while ensuring consistent energy production over many years.",
      },
      {
        question: "Can it be used for businesses?",
        answer:
          "Yes, solar EPC services are ideal for homes, offices, and industries. The services provide efficient and cost-effective energy solutions for various needs.",
      },
      {
        question: "Do you provide support after installation?",
        answer:
          "Yes, we offer reliable technical support for your solar system to ensure smooth running and timely assistance whenever needed.",
      },
    ],
  },
  solarPlant: {
    sectionData: {
      badge: "FAQs",
      title: "Frequently Asked",
      highlight: "Questions",
      description:
        "Get answers to common questions about our solar plant management services, monitoring capabilities, maintenance support, and performance optimization.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your solar plant management needs.",
      contactDescription:
        "Our experts can help you with monitoring, maintenance, performance optimization, and long-term reliability for your commercial or industrial solar plant.",
      buttonText: "Contact Us",
      path: "/solar-epc-solutions",
    },
    faqData: [
      {
        question: " In what ways can smart testing enhance overall system performance?",
        answer:
          "With the use of sophisticated tools and data analysis to identify issues early in the process, you'll improve efficiency and guarantee your electrical systems operate at peak performance.",
      },
      {
        question: " Is it possible to avoid an unexpected failure with the use of testing?",
        answer:
          "Regular testing will allow you to discover hidden problems and weak points within your system, which will help prevent sudden failures and expensive downtime.",
      },
      {
        question: "How is your testing method different from others?",
        answer:
          "We utilize a combination of cutting-edge technology, expert analysis, and a proactive maintenance approach to provide reliable and accurate results now and into the future.",
      },
      {
        question: " Is testing only required on larger systems?",
        answer:
          "Testing on any and all sizes of systems is crucial for ensuring a safe and efficient system, regardless of the overall size of the system.",
      },
      {
        question: "How will I determine whether or not I need to have my equipment tested?",
        answer:
          "In general, if you notice a decrease in performance, an increase in the number of faults occurring, or notice the age of the equipment, you should have your equipment professionally tested and inspected.",
      },
      {
        question: "Will your services help ensure long-term performance of my system? ",
        answer:
          "Yes, all of our services are designed not just to provide a quick turnaround time, but to improve the durability, efficiency, and longevity of your system, as well",
      },
    ],
  },

  operationsMaintenance: {
    sectionData: {
      badge: "FAQs",
      title: "Operations &",
      highlight: "Maintenance",
      description:
        "Discover comprehensive information about our operations and maintenance services, which include performance optimization, preventative care, and monitoring. ",
      contactTag: "Need more help?",
      contactTitle: "Require More Assistance",
      contactDescription:
        "To guarantee optimal operation, we provide professional monitoring, maintenance, inspections, and prompt problem solving for your solar system.",
      buttonText: "Contact Us",
      path: "/operation-maintenance",
    },
    faqData: [
      {
        question: ". Do you offer more assistance when required? ",
        answer:
          "In order to guarantee continued system performance, we do provide continuing assistance, which includes monitoring, maintenance, and prompt issue resolution.",
      },
      {
        question: "What is included in your O&M service?",
        answer:
          "For the best possible system functioning, we offer monitoring, preventive maintenance, inspections, cleaning, diagnostics, and repair assistance.",
      },
      {
        question: "How frequently is maintenance carried out? ",
        answer:
          "Maintenance is planned according to the requirements of the system and usually consists of routine cleaning, inspections, and efficiency-boosting preventive servicing",
      },
      {
        question: " Do you offer assistance when there are system problems?",
        answer:
          "Yes, we provide prompt troubleshooting and repair assistance to reduce downtime in your solar operations",
      },
      {
        question: "Will performance reports be sent to me?",
        answer:
          "Yes, in order to help with decision-making, we regularly provide reports that include information on system health, performance trends, and maintenance actions. ",
      },
      {
        question: "Are you able to oversee large-scale solar systems? ",
        answer:
          "Yes, we manage systems of all sizes with organized procedures, sophisticated monitoring, and knowledgeable maintenance assistance.",
      },

    ],
    path: "/Operation-maintenance",
  },

  batteryStorage: {
    sectionData: {
      badge: "FAQs",
      title: "Battery Storage",
      highlight: "Questions",
      description:
        "Get answers to common questions about our battery energy storage solutions, backup support, load shifting, and energy optimization.",
      contactTag: "Need more help?",
      contactTitle: "Let’s discuss your energy storage needs.",
      contactDescription:
        "Our experts can help you choose the right battery storage solution for backup power, demand control, energy optimization, and better renewable integration.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: "What is a battery energy storage system?",
        answer:
          "Battery energy storage is a system that stores electricity safely for later use whenever needed, ensuring reliable and continuous power supply.",
      },
      {
        question: "Why is battery energy storage important?",
        answer:
          "It helps provide reliable backup power, saves energy efficiently, and reduces overall electricity costs for homes and businesses every day consistently.",
      },
      {
        question: "Where can battery energy storage be used?",
        answer:
          "It can be used in homes, offices, industries, commercial buildings, and solar power systems to ensure reliable energy storage.",
      },
      {
        question: "Is battery energy storage safe to use?",
        answer:
          "Yes, modern battery energy storage systems are designed with advanced safety features to ensure secure, reliable, and efficient usage in various environments every day.",
      },
      {
        question: "Can battery energy storage reduce electricity bills?",
        answer:
          "Yes, it helps store electricity when costs are lower and use it later during high demand, reducing overall expenses and saving money over time efficiently",
      },
      {
        question: "How long does a battery system last?",
        answer:
          "Most battery energy storage systems last several years with proper maintenance, care, and regular performance monitoring for efficiency.",
      },
    ],
    path: "/battery-storage",
  },

  energyConsulting: {
    sectionData: {
      badge: "FAQs",
      title: "Energy",
      highlight: "Consulting",
      description:
        "Find answers to common questions about our consulting services, feasibility studies, system planning, and project advisory support.",
      contactTag: "Need more help?",
      contactTitle: "Let’s plan your energy strategy.",
      contactDescription:
        "We support businesses with technical guidance, project planning, feasibility analysis, and strategic recommendations for efficient energy investments.",
      buttonText: "Contact Us",
    },
    faqData: [
      {
        question: "What does your energy consulting service include?",
        answer:
          "Our consulting services include feasibility studies, project planning, technical evaluation, energy analysis, system recommendations, and implementation guidance.",
      },
      {
        question: "Can you help assess whether a solar project is feasible?",
        answer:
          "Yes, we evaluate site conditions, energy demand, project viability, technical options, and expected performance to help determine project feasibility.",
      },
      {
        question: "Do you support technology selection and planning?",
        answer:
          "Yes, we guide clients in selecting suitable technologies, system capacity, design approaches, and execution strategies based on operational needs and goals.",
      },
      {
        question: "Who can benefit from energy consulting services?",
        answer:
          "Commercial businesses, industrial facilities, institutions, and developers can all benefit from consulting support when planning or expanding energy projects.",
      },
    ],
  },
};

function FAQ({ page = "solarEpc" }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const currentPage = faqPagesData[page] || faqPagesData.solarEpc;
  const { sectionData, faqData } = currentPage;

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              {sectionData.badge}
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {sectionData.title}
              <span className="block text-emerald-600">
                {sectionData.highlight}
              </span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              {sectionData.description}
            </p>

            <div className="mt-8">
              <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-xl sm:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  {sectionData.contactTag}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-snug">
                  {sectionData.contactTitle}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  {sectionData.contactDescription}
                </p>

                <button className="mt-6 inline-flex items-center rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg">
                  {sectionData.buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="lg:col-span-8">
            <div
              className="space-y-4"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {faqData.map((item, index) => {
                const isOpen = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() =>
                      setHoveredIndex(hoveredIndex === index ? null : index)
                    }
                    className={`group cursor-pointer overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${isOpen
                        ? "border-emerald-300 shadow-xl shadow-emerald-100/60"
                        : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-4 px-6 py-5 sm:px-7 sm:py-6">
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300 ${isOpen
                              ? "bg-emerald-950 text-white"
                              : "bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                            }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className={`text-base font-semibold leading-7 transition-colors duration-300 sm:text-lg ${isOpen
                              ? "text-slate-900"
                              : "text-slate-800 group-hover:text-emerald-700"
                            }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                            ? "rotate-180 border-emerald-200 bg-emerald-50 text-emerald-600"
                            : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                          }`}
                      >
                        <ChevronDown size={20} />
                      </span>
                    </div>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6 pl-[4.9rem] pr-6 text-sm leading-7 text-slate-600 sm:px-7 sm:pb-7 sm:pl-[5.4rem] sm:text-base">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;