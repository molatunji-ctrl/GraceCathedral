import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Announcement from './pages/Announcement';
import Programs from './pages/Programs';


function App() {
  const [navOpen, setNavOpen] = useState(false);

  return(
      <BrowserRouter>
        <React.Fragment>
            <div className="main-container flex">
              <Navbar isOpen={navOpen} onClose={() => setNavOpen(false)} />

              {/* Dark overlay — tap to close nav on mobile */}
              {navOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-30 md:hidden"
                  onClick={() => setNavOpen(false)}
                />
              )}

              <div className="nav-bar-position overflow-y-auto bg-[#FAF6EE] min-h-screen w-full">

                {/* Hamburger — mobile only, uses .hamburger-btn class from index.css */}
                <button
                  className="hamburger-btn fixed top-3 left-3 z-50 md:hidden bg-[#5C1F0A] text-white rounded-xl flex items-center justify-center shadow-md"
                  onClick={() => setNavOpen(true)}
                  aria-label="Open navigation"
                >
                  <i className="fas fa-bars text-[13px]"></i>
                </button>

                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/programs' element={<Programs />} />
                  <Route path='/announcement' element={<Announcement />} />
                  <Route path='/contact' element={<Contact />} />
               </Routes>
              </div>
            
            </div>
            
        </React.Fragment>
      </BrowserRouter>
  )
}

export default App;
