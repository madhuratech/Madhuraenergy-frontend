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



function SolarPump() {
  return (
    <div className="bg-slate-950 text-white">

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solarPump" />
      <ProcessSection serviceKey="solarPump"/>
      <WhyChooseSection serviceKey="solarPump"/>
      <IndustriesSection/>
      <Benefits pageKey="solarPump" />
      <Summary/>
      <FAQ page="solarPump" />
      <CTASection page="solarPump" />
    </div>
  );
}

export default SolarPump;