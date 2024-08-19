import React from 'react';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';
import Services from './Services.jsx';
import Products from './Products.jsx';
import Location from './Location.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Section from './Section.jsx';

//

export default function Layout({ children }) {
  return (
    <>
      <main>
        
      <Hero />
      <Section> 
        <Services />
      </Section>
      
      <Section>
        <AboutMe />
      </Section>

      <Section>
        <Products />
      </Section>
      
      <Section>
        <Location />
      </Section>
      <Section>
        <Contact />
      </Section>
      </main>
      {children}
      <Footer /> 
    </>
  );
}
