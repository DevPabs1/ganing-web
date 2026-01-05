
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import GalleryDetail from './components/GalleryDetail';
import Booking from './components/Booking';

// Main Layout Component for Home Page
const Home = () => (
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

// Layout for Detail Pages (reuses Header/Contact or simplified?)
// Let's reuse the simple layout wrapped around children
const Layout = ({ children }) => (
  <div className="font-sans text-black bg-white selection:bg-black selection:text-white">
    <Header />
    <main>
      {children}
    </main>
    <Contact />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Layout><Booking /></Layout>} />
        <Route path="/project/:id" element={
          <Layout><ProjectDetail /></Layout>
        } />
        <Route path="/gallery/:id" element={
          <Layout><GalleryDetail /></Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
