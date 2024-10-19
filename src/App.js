import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projets from './components/Projets';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
       
      <main>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/hard-skills" element={<HardSkills />} />
          <Route path="/soft-skills" element={<SoftSkills />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
