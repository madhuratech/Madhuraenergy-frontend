import React from 'react'
import Banner from '../Component/Hero/Banner'
import Aboutservice from '../Component/AboutServices/AboutServices'
import Servicecards from '../Component/Servicecards/servicecards'
import ProcessSection from '../Component/Process/process'

import WhyChooseSection from '../Component/WhyChoose/whychoose'
import Benefits from '../Component/Benefits/benefits'
import Summary from '../Component/summary/summary'
import FAQ from '../Component/Questions/questions'
import CTASection from '../Component/CallToAction/calltoaction'
import IndustriesWeServe from '../Component/Industry/industries'

function SolarPlantCleaningRobots() {
  return (
    <div className="bg-slate-950 text-white">

      <Banner />
      <Aboutservice />
      <Servicecards serviceKey="solarPlantCleaningRobots" />
      <ProcessSection serviceKey="solarPlantCleaningRobots" />
      <WhyChooseSection serviceKey="solarPlantCleaningRobots" />
      <IndustriesWeServe/>
      <Benefits pageKey="solarPlantCleaningRobots" />
      <Summary/>
      <FAQ page="solarPlantCleaningRobots" />
      <CTASection page="solarPlantCleaningRobots" />
    </div>
  )
}

export default SolarPlantCleaningRobots