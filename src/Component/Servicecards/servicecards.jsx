import React from "react";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  BadgeCheck,
  Wrench,
  LineChart,
  ShieldCheck,
  BatteryCharging,
  Settings,
  Factory,
  Building2,
} from "lucide-react";
// SolarEPC
import ProjectPlanning from "../../assets/services/Service- solarEPC/ProjectPlanning.jpg"
import SeamlessExecution from "../../assets/services/Service- solarEPC/SeamlessExecution.jpg"
import Customsystemdesign from "../../assets/services/Service- solarEPC/Customsystemdesign.jpg"
import Solarpanelprocurement from "../../assets/services/Service- solarEPC/Solarpanelprocurement.jpg"
import EfficientEngineering from "../../assets/services/Service- solarEPC/EfficientEngineering.jpg"
import ExpertInstallation from "../../assets/services/Service- solarEPC/ExpertInstallation.jpg"
import ComplianceSupport from "../../assets/services/Service- solarEPC/ComplianceSupport.jpg"
import ConcepttoCommissioning from "../../assets/services/Service- solarEPC/ConcepttoCommissioning.jpg"
import TrustedTechnicalSupport from "../../assets/services/Service- solarEPC/TrustedTechnicalSupport.jpg"
// SolarPlantManagement
import ElectricalTesting from "../../assets/services/Service-solarPlant/ElectricalTesting.jpg"
import ACandDCEquipmentTesting from "../../assets/services/Service-solarPlant/ACandDCEquipmentTesting.jpg"
import BreakerMaintenance from "../../assets/services/Service-solarPlant/BreakerMaintenance.jpg"
import PowerTransformersTesting from "../../assets/services/Service-solarPlant/PowerTransformersTesting.jpg"
import InsulatingTesting from "../../assets/services/Service-solarPlant/InsulatingTesting.jpg"
import InsulatingResistanceTesting from "../../assets/services/Service-solarPlant/InsulatingResistanceTesting.jpg"
// OperationMaintenance
import MonitoringPerformance from "../../assets/services/Service-O&M/MonitoringPerformance.jpg"
import PreventiveMedicalCare from "../../assets/services/Service-O&M/PreventiveMedicalCare.jpg"
import AssistancewithRepairs from "../../assets/services/Service-O&M/AssistancewithRepairs.jpg"
import AnalyzingtheSystem from "../../assets/services/Service-O&M/AnalyzingtheSystem.jpg"
import WashingPanels from "../../assets/services/Service-O&M/WashingPanels.jpg"
import Observingfromadistance from "../../assets/services/Service-O&M/Observingfromadistance.jpg"







const serviceScopeData = {
  "solar-epc-solutions": {
    tag: "What We Deliver",
    title: "Complete EPC Scope in 5 Key Service Areas",
    items: [
      {
        title: "Project Planning",
        description:
          "We carefully plan every solar project by understanding your energy needs, budget, and site conditions. Our approach ensures the system is designed for maximum efficiency, better performance, and long-term savings, giving you a reliable and cost-effective solar solution.",
        icon: PanelsTopLeft,
        image: ProjectPlanning,
      },
      {
        title: "Seamless Execution",
        description:
          "We execute every solar project with precision and careful planning, ensuring smooth and hassle-free execution at every stage. Our team focuses on quality, timely delivery, and efficient coordination to deliver reliable and long-lasting solar solutions.",
        icon: BadgeCheck,
        image:
          SeamlessExecution,
      },
      {
        title: "Custom System Design",
        description:
          "We design our solar systems in such a way that they meet your energy needs. Our solar systems are designed in such a way that they meet your needs and are the most efficient and effective.",
        icon: Wrench,
        image: Customsystemdesign,
      },
      {
        title: "Solar Panel Procurement",
        description:
          "At our company, we procure the highest quality solar panel components that meet your specific energy needs. Our main focus is the quality and reliability of the solar panel components.",
        icon: ShieldCheck,
        image: Solarpanelprocurement,
      },
      {
        title: "Efficient Engineering",
        description:
          "Our engineering process is designed in such a way that it ensures safety, efficiency, and maximum energy production. We follow tried and tested standards and smart planning to deliver efficient solar solutions that are reliable and consistent in nature.",
        icon: LineChart,
        image: EfficientEngineering,
      },
      {
        title: "Expert Installation",
        description:
          "Your solar system is installed with precision and accuracy by our experts to ensure maximum efficiency and durability in the long run. We also ensure that your solar system is installed safely and according to the best practices in the industry.",
        icon: LineChart,
        image: ExpertInstallation,
      },
      {
        title: "Compliance Support",
        description:
          "We take utmost care in ensuring that all the approvals, documentation, and regulations are taken care of. Our team ensures that all the processes are in accordance with the guidelines, saving your precious time and effort by making the process smooth, simple, and hassle-free.",
        icon: LineChart,
        image: ComplianceSupport,
      },
      {
        title: "Concept to Commissioning",
        description:
          "We ensure that your solar experience is taken care of with the utmost precision, right from the concept to the commissioning of the project. Our team of experts will be able to provide you with the most efficient, reliable, and high-performance solar solution with ease and no hassle at all.",
        icon: LineChart,
        image: ConcepttoCommissioning,
      },
      {
        title: "Trusted Technical Support",
        description:
          "We are here to provide the best and most reliable support to your solar system. Our team is at your service and is willing to assist you in the maintenance and proper functioning of your solar system with the utmost efficiency and no interruptions.",
        icon: LineChart,
        image: TrustedTechnicalSupport,
      },
    ],
    path: "/solar-epc-solutions"
  },

  solarplantmanagement: {
    tag: "Storage Solutions",
    title: "Advanced Energy Management Solutions for Efficient Use of Electricity",
    items: [
      {
        title: "Electrical Testing",
        description:
          "We offer complete electrical testing services that meet regulatory compliance requirements for electrical equipment to ensure it is functioning correctly and is safe and properly maintained.",
        icon: BatteryCharging,
        image: ElectricalTesting,
      },
      {
        title: "AC and DC Equipment Testing ",
        description:
          "Our AC and DC testing services allow us to verify the proper functioning of AC and DC circuit breakers by performing thorough inspection, calibration and testing to ensure proper operating conditions",
        icon: Settings,
        image: ACandDCEquipmentTesting,
      },
      {
        title: "Breaker Maintenance",
        description:
          "Our breaker maintenance solutions ensure that the operation of circuit breakers is safe and compliant with applicable standards so they do not fail and place electrical equipment at risk of damage due to overloads or short circuits.",
        icon: LineChart,
        image: BreakerMaintenance,
      },
      {
        title: "Power Transformers Testing",
        description:
          "Transformer testing is used to examine many aspects of a transformer's performance. Our transformer testing services help to detect emerging issues through the assessment of performance, efficiency, and safety. We also help ensure reliable and uninterrupted power delivery to your facility.",
        icon: LineChart,
        image: PowerTransformersTesting,
      },
      {
        title: "Insulating Testing ",
        description:
          "Our Insulating material testing services are used to test the insulation materials of your transformers. By testing the strength and quality of your insulating materials, you can prevent unintentional electrical leakage, unsafe faults, and electrical Hazards.",
        icon: LineChart,
        image: InsulatingTesting,
      },
      {
        title: "Insulating Resistance Testing",
        description:
          "Our Insulation Resistance Testing Services will check the insulating resistance of your electrical system, which allows for a safe, long-lasting and code compliant system.",
        icon: LineChart,
        image: InsulatingResistanceTesting,
      },
    ],
    path: "/solar-plant-management",
  },

  operationMaintenance: {
    tag: "WHAT WE PROVIDE: ",
    title: "Operation & Maintenance Coverage in All Important Service Domains",
    items: [
      {
        title: "Monitoring Performance ",
        description:
          "Use intelligent monitoring tools to keep an eye on your solar system in real time. Recognize performance declines early, maximize energy production, and guarantee steady power.",
        icon: Wrench,
        image: MonitoringPerformance,
      },
      {
        title: "Preventive Medical Care",
        description:
          "With planned maintenance and regular inspections, problems can be avoided before they arise. Minimize system wear, prevent expensive malfunctions, and maintain the effectiveness. ",
        icon: ShieldCheck,
        image: PreventiveMedicalCare,
      },
      {
        title: "Assistance with Repairs",
        description:
          "For any system issues, get prompt and dependable repair assistance. To keep energy flowing, our staff promptly finds problems, fixes them, and reduces downtime.",
        icon: LineChart,
        image: AssistancewithRepairs,
      },
      {
        title: "Analyzing the System ",
        description:
          "Extensive system checks assist identify hidden issues and ensure peak performance. Frequent evaluations can improve performance, safety, and long-term dependability.",
        icon: LineChart,
        image: AnalyzingtheSystem,
      },
      {
        title: "Washing Panels",
        description:
          "Keep your solar panels clear of dust and debris to maintain their optimal performance. Regular cleaning improves energy absorption and stops performance declines over time. ",
        icon: LineChart,
        image: WashingPanels,
      },
      {
        title: "Observing from a distance ",
        description:
          "Utilize advanced diagnostics to keep an eye on your solar system from a distance. Get alerts in real time, make decisions faster, and monitor performance all the time.",
        icon: LineChart,
        image: Observingfromadistance,
      },

    ],
    path: "/operation-maintenance",
  },

  batteryEnergy: {
    tag: "Infrastructure Scope",
    title: "Core Electrical Infrastructure Services We Provide",
    items: [
      {
        title: "Panel & Distribution Systems",
        description:
          "Robust electrical panels and distribution systems designed for safe and efficient power delivery.",
        icon: Settings,
        image:
          "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Industrial Installation",
        description:
          "End-to-end installation support for industrial and commercial electrical infrastructure projects.",
        icon: Factory,
        image:
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80",
      },
      {
        title: "Grid Connectivity",
        description:
          "Reliable grid interconnection and electrical integration for smooth project commissioning.",
        icon: Building2,
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
      },
    ],
  },

};

function Servicecards({ serviceKey }) {
  const service = serviceScopeData[serviceKey];

  if (!service) return null;

  return (
    <section id="scope" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
            {service.tag}
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {service.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Servicecards;