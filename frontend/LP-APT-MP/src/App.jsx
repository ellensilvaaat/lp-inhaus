import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DreamApartment from './components/DreamApartment';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import ContactCTA from './components/ContactCTA';
import ProjectsCarousel from './components/ProjectsCarousel';
import Testimonials from './components/Testimonials';
import FinalQuoteForm from './components/FinalQuoteForm';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DreamApartment />
      <WhyChooseUs />
      <OurProcess />
      <ContactCTA />
      <ProjectsCarousel />
      <Testimonials />
      <FinalQuoteForm />
      <Footer />
    </>
  );
}

export default App;
