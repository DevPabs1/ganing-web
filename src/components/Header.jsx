import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Mock data for Mega Menu (simulating Mekari's products)
const projectsMenu = [
  {
    title: "Web Development",
    description: "Full-stack web solutions",
    icon: <img src="/assets/3dicons/computer.png" alt="Web" className="w-8 h-8" />,
    path: "/projects?cat=web"
  },
  {
    title: "Mobile Apps",
    description: "iOS & Android native apps",
    icon: <img src="/assets/3dicons/mobile.png" alt="Mobile" className="w-6 h-6" />,
    path: "/projects?cat=mobile"
  },
  {
    title: "UI/UX Design",
    description: "User-centric interfaces",
    icon: <img src="/assets/3dicons/paint-kit.png" alt="Design" className="w-7 h-7" />,
    path: "/projects?cat=design"
  },
  {
    title: "System Integration",
    description: "Connecting complex APIs",
    icon: <img src="/assets/3dicons/setting.png" alt="System" className="w-7 h-7" />,
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
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="container-custom h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-mekari-dark flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-mekari-blue flex items-center justify-center text-white text-lg">G</span>
            GANING
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Mega Menu Trigger */}
            <div
              className="relative group h-20 flex items-center"
              onMouseEnter={() => setActiveDropdown('projects')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-sm font-medium text-mekari-text hover:text-mekari-blue transition-colors flex items-center gap-1">
                Products & Solutions
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === 'projects' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeDropdown === 'projects' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-12 w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-4"
                  >
                    {projectsMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group/item"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-50 text-mekari-blue flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-mekari-dark text-sm mb-1">{item.title}</h4>
                          <p className="text-xs text-gray-500">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 mt-2 pt-4 border-t border-gray-100 flex justify-between items-center bg-gray-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                      <span className="text-sm text-gray-600 font-medium ml-2">Looking for enterprise solutions?</span>
                      <Link to="/contact" className="text-sm font-bold text-mekari-blue hover:underline">Contact Sales →</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-sm font-medium text-mekari-text hover:text-mekari-blue transition-colors">
              Company
            </Link>
            <Link to="/gallery" className="text-sm font-medium text-mekari-text hover:text-mekari-blue transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-sm font-medium text-mekari-text hover:text-mekari-blue transition-colors">
              Support
            </Link>

            <div className="pl-4 border-l border-gray-200 ml-4 flex items-center gap-4">
              <a href={`${apiUrl}/auth/github`} className="text-sm font-bold text-mekari-dark hover:text-mekari-blue">
                Login
              </a>

              <Link
                to="/appointment"
                className="px-5 py-2.5 bg-mekari-blue text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-mekari-dark"
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
            className="fixed inset-0 bg-white z-40 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Products</h3>
                {projectsMenu.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="flex items-center gap-3 text-lg font-medium text-mekari-dark"
                  >
                    <span className="w-8 h-8 flex items-center justify-center">{item.icon}</span>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-gray-100 my-4" />

              <Link to="/about" className="text-lg font-medium text-mekari-dark">Company</Link>
              <Link to="/gallery" className="text-lg font-medium text-mekari-dark">Resources</Link>
              <Link to="/contact" className="text-lg font-medium text-mekari-dark">Support</Link>

              <div className="mt-8 space-y-4">
                <a href={`${apiUrl}/auth/github`} className="block w-full text-center py-3 text-mekari-dark font-bold border border-gray-200 rounded-xl">
                  Login
                </a>

                <Link to="/appointment" className="block w-full text-center py-3 bg-mekari-blue text-white font-bold rounded-xl shadow-lg">
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
