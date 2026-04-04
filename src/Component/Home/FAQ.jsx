import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What solar EPC services do you provide?",
    answer:
      "We provide complete solar EPC solutions including design, engineering, procurement, installation, testing, and commissioning for commercial, industrial, and utility-scale projects.",
  },
  {
    question: "Do you offer operations and maintenance support?",
    answer:
      "Yes, we offer end-to-end O&M support including preventive maintenance, performance monitoring, fault detection, cleaning schedules, and system health optimization.",
  },
  {
    question: "Can you handle large-scale industrial solar projects?",
    answer:
      "Absolutely. We specialize in handling rooftop and ground-mounted solar projects for industrial and commercial clients with a strong focus on safety, efficiency, and long-term performance.",
  },
  {
    question: "Do you also provide energy storage solutions?",
    answer:
      "Yes, we provide integrated energy storage solutions to improve energy reliability, peak load management, backup support, and better utilization of renewable power.",
  },
  {
    question: "How long does a typical solar project take?",
    answer:
      "Project timelines depend on system size, approvals, and site conditions, but most projects move through design, procurement, installation, and commissioning in a structured and time-efficient manner.",
  },
  {
    question: "Which locations do you serve?",
    answer:
      "We serve clients across Tamil Nadu and Pan-India, supporting industrial, commercial, and public-sector renewable energy projects.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-4">
            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              FAQs
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Frequently Asked
              <span className="block text-emerald-600"> Questions</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Find answers to the most common questions about our solar EPC,
              O&amp;M, and energy storage services. Designed to help visitors
              quickly understand your expertise and process.
            </p>

            {/* Contact Card */}
            <div className="mt-8">
              <div className="rounded-[28px] bg-slate-900 p-6 text-white shadow-xl sm:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Need more help?
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-snug">
                  Let’s discuss your project requirements.
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                  Our team can guide you through project scope, execution
                  timelines, technology selection, and end-to-end solar
                  solutions for your business.
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Right FAQ */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                const contentId = `faq-content-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <div
                    key={index}
                    className={`group overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-emerald-300 shadow-xl shadow-emerald-100/60"
                        : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                    }`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-emerald-950 text-white"
                              : "bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className={`text-base font-semibold leading-7 transition-colors duration-300 sm:text-lg ${
                            isOpen
                              ? "text-slate-900"
                              : "text-slate-800 group-hover:text-emerald-700"
                          }`}
                        >
                          {item.question}
                        </h3>
                      </div>

                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-emerald-200 bg-emerald-50 text-emerald-600"
                            : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600"
                        }`}
                      >
                        <ChevronDown size={20} />
                      </span>
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
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

export default FAQSection;