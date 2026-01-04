
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans text-black bg-white selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Gallery />
      </main>
      <Contact />
    </div>
  );
}

export default App;
