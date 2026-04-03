import React from "react";
import IndustriesSection from "../Component/Industry/industries";
import HowWeWorkForYou from "../Component/wework/wework";
import Banner from "../Component/Hero/Banner";
import Aboutservice from "../Component/AboutServices/AboutServices";
import Servicecards from "../Component/Servicecards/servicecards";
import ProcessSection from "../Component/Process/process";
import WhyChooseSection from "../Component/WhyChoose/whychoose";
import Benefits from "../Component/Benefits/benefits";
import Summary from "../Component/summary/summary";
import FAQ from "../Component/Questions/questions";
import CTASection from "../Component/CallToAction/calltoaction";



function SolarEpcSolutionsPage() {
  return (
    <div className="bg-slate-950 text-white">
      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solar-epc-solutions" />
      <ProcessSection />
      <WhyChooseSection />
      <IndustriesSection />
      <Benefits pageKey="solarEpc" />
      <HowWeWorkForYou />
      <Summary/>
      <FAQ/>
      <CTASection page="solarEpc" />
    </div>
  );
}

export default SolarEpcSolutionsPage; 