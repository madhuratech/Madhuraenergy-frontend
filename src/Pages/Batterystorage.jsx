import React from 'react'
import Banner from '../Component/Hero/Banner'
import Aboutservice from '../Component/AboutServices/AboutServices'
import ProcessSection from '../Component/Process/process'
import WhyChooseSection from '../Component/WhyChoose/whychoose'
import Benefits from '../Component/Benefits/benefits'
import Summary from '../Component/summary/summary'
import FAQ from '../Component/Questions/questions'
import Batterysection from '../Component/Batterysection/batterysection'
import CTASection from '../Component/CallToAction/calltoaction'

function Batterystorage() {
    return (
        <div className="bg-slate-950 text-white">
            <Banner />
            <Aboutservice />
            <Batterysection />
            <ProcessSection  serviceKey="batteryStorage" />
            <WhyChooseSection serviceKey="batterystorage" />
            <Summary />
            <FAQ  page="batteryStorage" />
            <Benefits pageKey="batteryEnergy" />
            <CTASection page="batteryStorage" />
        </div>
    )
}

export default Batterystorage