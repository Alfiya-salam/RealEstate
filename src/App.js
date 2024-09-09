import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Query from './components/Query';
import Contact from './components/Contact';
import CommitmentSection from './components/CommitmentSection';
import Banner from './components/BannerSlider';  // Correct the import here

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      <CommitmentSection />
      <Banner />   {/* Add Banners here */}
      <Query />
      <Contact />
    </div>
  );
}

export default App;
