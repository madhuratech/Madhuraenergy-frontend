import React from "react";

import Banner from "../Component/Hero/Banner";
import Aboutservice from "../Component/AboutServices/AboutServices";
import Servicecards from "../Component/Servicecards/servicecards";
import ProcessSection from "../Component/Process/process";
import WhyChooseSection from "../Component/WhyChoose/whychoose";
import Benefits from "../Component/Benefits/benefits";
import FAQ from "../Component/Questions/questions";
import IndustriesSection from "../Component/Industry/industries";
import Summary from "../Component/summary/summary";
import CTASection from "../Component/CallToAction/calltoaction";



function SolarPlantManagement() {
  return (
    <div className="bg-slate-950 text-white">

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solarplantmanagement" />
      <ProcessSection serviceKey="solarplant"/>
      <WhyChooseSection serviceKey="solarplant"/>
      <IndustriesSection/>
      <Benefits pageKey="solarplantmanagement" />
      <Summary/>
      <FAQ page="solarPlant" />
      <CTASection page="solarPlant" />
    </div>
  );
}

export default SolarPlantManagement;