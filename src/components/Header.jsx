import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Mock data for Mega Menu (simulating Mekari's products)
const projectsMenu = [
  {
    title: "Web Development",
    description: "Full-stack web solutions",
    icon: <img src={`${import.meta.env.BASE_URL}assets/3dicons/computer.png`} alt="Web" className="w-8 h-8 grayscale contrast-125" />,
    path: "/projects?cat=web"
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android native apps",
    icon: <img src={`${import.meta.env.BASE_URL}assets/3dicons/mobile.png`} alt="Mobile" className="w-6 h-6 grayscale contrast-125" />,
    path: "/projects?cat=mobile"
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces",
    icon: <img src={`${import.meta.env.BASE_URL}assets/3dicons/paint-kit.png`} alt="Design" className="w-7 h-7 grayscale contrast-125" />,
    path: "/projects?cat=design"
  },
  {
    title: "System Integration",
    description: "Connecting complex APIs",
    icon: <img src={`${import.meta.env.BASE_URL}assets/3dicons/setting.png`} alt="System" className="w-7 h-7 grayscale contrast-125" />,
    path: "/projects?cat=system"
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${isMenuOpen ? 'bg-black' : 'glass-nav'}`}>
        <div className="container-custom h-[90px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-black text-lg font-bold group-hover:scale-105 transition-transform duration-300">G</span>
            GANING
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {/* Mega Menu Trigger */}
            <div
              className="relative group h-[90px] flex items-center"
              onMouseEnter={() => setActiveDropdown('projects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${activeDropdown === 'projects' ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}>
                Products
                <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === 'projects' ? 'rotate-180 text-white' : 'text-gray-600 group-hover:text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'projects' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-[80px] -left-12 w-[640px] bg-[#0A0A0A]/95 backdrop-blur-3xl rounded-3xl border border-white/5 p-2 grid grid-cols-2 gap-2 shadow-[0_40px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/5"
                  >
                    <div className="bg-black/40 rounded-2xl p-4 space-y-2 col-span-2 grid grid-cols-2 gap-2">
                      {projectsMenu.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group/item border border-transparent hover:border-white/5"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-white group-hover/item:scale-110 group-hover/item:border-white/20 transition-all">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-[13px] mb-0.5 group-hover/item:text-white transition-colors">{item.title}</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed font-medium group-hover/item:text-gray-400 transition-colors">{item.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="col-span-2 pt-2 px-6 pb-4 flex justify-between items-center text-[13px]">
                      <span className="text-gray-500 font-medium">Looking for enterprise solutions?</span>
                      <Link to="/contact" className="text-white hover:text-gray-300 font-semibold transition-colors flex items-center gap-1 group/link">
                        Contact Sales
                        <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Company
            </Link>
            <Link to="/gallery" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Support
            </Link>

            <div className="pl-6 border-l border-white/5 ml-6 flex items-center gap-6">
              <a href={`${apiUrl}/auth/github`} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                Login
              </a>

              <Link
                to="/appointment"
                className="px-6 py-2.5 bg-white text-black text-[13px] font-bold rounded-full hover:bg-gray-200 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                Schedule Demo
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-black z-[200] pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-extra-bold text-white uppercase tracking-widest border-b border-white/20 pb-2 mb-4">Products</h3>
                {projectsMenu.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="flex items-center gap-3 text-lg font-medium text-white"
                  >
                    <span className="w-8 h-8 flex items-center justify-center">{item.icon}</span>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-white/10 my-4" />

              <Link to="/about" className="text-lg font-medium text-white">Company</Link>
              <Link to="/gallery" className="text-lg font-medium text-white">Resources</Link>
              <Link to="/contact" className="text-lg font-medium text-white">Support</Link>

              <div className="mt-8 space-y-4">
                <a href={`${apiUrl}/auth/github`} className="block w-full text-center py-3 text-white font-bold border border-white/20 rounded-xl">
                  Login
                </a>

                <Link to="/appointment" className="block w-full text-center py-3 bg-white text-black font-bold rounded-xl shadow-lg">
                  Schedule Demo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
