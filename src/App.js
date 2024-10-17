import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
       
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
