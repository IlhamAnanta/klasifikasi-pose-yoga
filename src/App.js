import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import Classes from './Classes';
import Manfaat from './Manfaat';
import Team from './Team';
import MataKuliah from './MataKuliah';
import Predict from './Predict';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="mt-16">
          <section id="home">
            <HeroSection />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="classes">
            <Classes />
          </section>
          <section id="manfaat">
            <Manfaat />
          </section>
          <section id="matakuliah">
            <MataKuliah />
          </section>
          <section id="team">
            <Team />
          </section>
          <section id="predict">
            <Predict />
          </section>
        </div>
      </div>
    </Router>
  );
}

export default App;
