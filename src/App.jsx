import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Book from './pages/Book.jsx';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Book" element={<Book />} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
