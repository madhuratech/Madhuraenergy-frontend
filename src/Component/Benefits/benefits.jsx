import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefitsContent = {
  solarEpc: {
    tag: "Benefits",
    title: "Why Businesses Choose Our EPC Services",
    benefits: [
      "Make your own energy, save money in the long run.",
      "Reliable solar power during utility outages.",
      "Green living with renewable solar energy.",
      "Low maintenance, high efficiency solar systems.",
      "Increase your home’s value with solar systems.",
      "Live with sustainable, renewable energy."
    ],
    path:"/services/solar-epc-solutions",
  },

  solarplantmanagement: {
    tag: "Benefits",
    title: "Why Businesses Choose Our Battery Storage Solutions",
    benefits: [
      "Increases energy production and overall performance of the system",
      "Lowers operation costs by improving efficiency in the management of the system",
      "Lessens downtime through proactive monitoring and maintenance.",
      "Increases the efficiency of the system and extends equipment longevity.",
      "Provides consistent and reliable power production.",
      "Offers real time data to assist with decision-making.",
      "Reduces energy loss and improves productivity.",
      "Easy to monitor, manage, and maintain."
    ],
    path: "/services/solar-plant-management",
  },

  operationMaintenance: {
    tag: "Benefits",
    title: "Benefits of Operations and Maintenance Services ",
    benefits: [
      "Consistent and dependable solar energy performance is guaranteed by routine maintenance",
      "Early problem identification lowers failure rates and maintains daily system functionality ",
      "Inspections and cleaning contribute to energy loss reduction and efficiency maintenance. ",
      "Well-maintained systems perform better and endure longer",
      "Preventive care enhances overall operational management and reduces repair costs.",
      "Transparent reporting provides information for more intelligent system design and decision-making"
    ],
    path: "/services/operation-maintenance",
  },

  batteryEnergy: {
    tag: "Benefits",
    title: "Why Businesses Choose Our Electrical Infrastructure Services",
    benefits: [
      "Reduces electricity bills with efficient energy management.",
      "Stores excess energy safely and efficiently for reliable use whenever needed.",
      "Enhances overall efficiency and significantly reduces power consumption.",
      "Ensures continuous and stable power supply for operations",
      "Reduces energy waste with smarter and more efficient usage",
      "Simple and easy to use, with efficient management and low-maintenance operation for smoothness",


    ],
    path: "/services/battery-energy-storage",
  },

  solarPlantCleaningRobots: {
    tag: "Benefits",
    title: "Cutting Maintenance Costs and Boosting Output",
    benefits: [
      "Frequent cleaning reduces performance loss and encourages consistent energy output by keeping panels free of dust and debris.",
      "Automation reduces operational reliance on manpower and saves time by doing away with the requirement for regular manual cleaning",
      "Clean panels function more effectively, sustaining anticipated performance levels and boosting system output as a whole.",
      "Panels receive continuous maintenance thanks to scheduled cleaning, which eventually increases system reliability.",
      "The technology minimizes incremental efficiency losses and supports continuous operation by minimizing dust collection.",
      "System longevity is increased and long-term performance is improved by routine cleaning and decreased component stress."
    ]
  },
  solarPump:{
    tag: "Benefits",
    title: "Benefits of Solar Pumping Solutions",
    benefits: [
      "Reduces electricity costs with renewable solar energy powered pump systems",
      "Ensures continuous water supply even in remote locations without electricity",
      "Eco-friendly solution reducing carbon emissions and environmental impact significantly",
      "Low maintenance system with long-lasting performance and durable components",
      "Ideal for agriculture, residential, and industrial water pumping applications",
      "Easy installation with reliable performance and minimal operational challenges",
    ],
    path:"/services/solar-pump"
  }
};

function Benefits({ pageKey }) {
  const data = benefitsContent[pageKey];

  if (!data) return null;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(15,23,42,1),rgba(59,130,246,0.12))] p-8 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
                {data.tag}
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                {data.title}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {data.benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-[22px] border border-white/10 bg-white/5 p-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-emerald-400"
                    size={20}
                  />
                  <p className="text-sm leading-7 text-slate-200 sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;