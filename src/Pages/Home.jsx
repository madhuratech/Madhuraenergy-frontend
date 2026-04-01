import React from 'react'

// Import your sections
import Herosection from '../Component/Home/Herosection'
import Services from '../Component/Home/Services'
import Projects from '../Component/Home/Projects'
import AboutUs from '../Component/Home/AboutUs'
import ChannelPartners from '../Component/Home/TrustedBy'
import WhatWeDoProcess from '../Component/Home/OurProcess'
import BlogSection from '../Component/Home/Blog'
import WhyChooseUs from '../Component/Home/WhyUs'
import FAQSection from '../Component/Home/FAQ'
import CallToActionCard from '../Component/Home/CallTo'

const Home = () => {
  return (
    <div>
      <Herosection />
      <AboutUs />
      <Services />
      <ChannelPartners/>
      <Projects />
      <WhyChooseUs/>
      <WhatWeDoProcess/>
      <CallToActionCard/>
      <BlogSection/>
      <FAQSection/>

    </div>
  )
}

export default Home