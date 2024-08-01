import React from 'react';
import { NavBar, Footer } from '@/components';
import Hero from './hero';
import Contact from './contact';
import About from './about';
import BusinessWebsiteDesign from './business-website-design';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/web-development/business-website" element={<BusinessWebsiteDesign />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
