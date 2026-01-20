import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import TokenHandler from './components/TokenHandler';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import GalleryDetail from './components/GalleryDetail';
import Booking from './components/Booking';
import Footer from './components/Footer';
import LogoGrid from './components/LogoGrid';
import StatsSection from './components/StatsSection';
import WhatsAppWidget from './components/WhatsAppWidget';

// New Pages
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';


import { AnimatePresence, motion } from 'framer-motion';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

// Layout for Detail Pages with Animation
const Layout = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
    className="font-sans text-black bg-white selection:bg-black selection:text-white"
  >
    <Header />
    <ScrollToTop />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
  </motion.div>
);

// Main Layout Component for Home Page
const Home = () => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    transition={pageTransition}
    className="font-sans text-mekari-text bg-white selection:bg-mekari-blue selection:text-white"
  >
    <Header />
    <main>
      <Hero />
      <LogoGrid />
      <StatsSection />
      <Projects />
      <Gallery />
      <About />
      <Contact />
    </main>
    <WhatsAppWidget />
    <Footer />
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />

        {/* New Dedicated Pages */}
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

        <Route path="/appointment" element={<Layout><Booking /></Layout>} />
        <Route path="/project/:id" element={
          <Layout><ProjectDetail /></Layout>
        } />
        <Route path="/gallery/:id" element={
          <Layout><GalleryDetail /></Layout>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <TokenHandler />
        <Routes>
          <Route path="/*" element={<AnimatedRoutes />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
