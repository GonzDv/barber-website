import React from 'react';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';
import Services from './Services.jsx';
import Products from './Products.jsx';
import Location from './Location.jsx';
import Contact from './Contact.jsx';

import Footer from './Footer.jsx';
export default function Layout({ children }) {
  return (
    <>
      <main>
      <Hero />
      <Services />
      <AboutMe />
      <Products />
      <Location />
      <Contact />
      </main>
      {children}
    </>
  );
}
