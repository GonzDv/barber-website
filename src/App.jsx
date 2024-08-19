import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Reserva from './pages/Reserva.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservar-Cita" element={<Reserva />} />
          <Route path="*" element={<h1>Opp... Not Found</h1>} />
        </Routes>
        <Footer/>
      </Router>
      
  );
}

export default App;
