import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Query from './components/Query';
import Contact from './components/Contact';
import CommitmentSection from './components/CommitmentSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Services />
      {/* Adding the CommitmentSection below the Services section */}
      <CommitmentSection />
      <Query />
      <Contact />
    </div>
  );
}

export default App;
