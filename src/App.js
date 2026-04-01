import React from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

import Navbar from './Component/layout/Navbar'
import Footer from './Component/layout/Footer'

import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'

import Services from './Component/Home/Services'
import Projects from './Component/Home/Projects'
import About from './Component/Home/AboutUs'

import SolarEpcSolutionsPage from './Pages/SolarEPCSolution'
import SolarPlantManagement from './Pages/SolarPlantManagement'
import OMservices from './Pages/OMservices'
import ScrollToSection from './Component/layout/ScrollToSection'
import Batterystorage from './Pages/Batterystorage'
import ThirdpartyOM from './Pages/ThirdpartyOM'
import Banner from './Component/Hero/Banner'

const ServiceRouter = () => {
  const { slug } = useParams();
  switch (slug) {
    case 'solar-epc-solutions':
      return <SolarEpcSolutionsPage />;
    case 'solar-plant-management':
      return <SolarPlantManagement />;
    case 'operation-maintenance':
      return <OMservices />;
    case 'battery-storage':
      return <Batterystorage />;
    case 'third-party-OM':
      return <ThirdpartyOM />;
    default:
      return <SolarEpcSolutionsPage />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services/:slug" element={<ServiceRouter />} />

        <Route path="/hero/:slug" element={<Banner />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App