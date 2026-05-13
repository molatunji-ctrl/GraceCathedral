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
            <div className="main-container flex ml-70">
              <Navbar isOpen={navOpen} onClose={() => setNavOpen(false)} />

              {/* Dark overlay behind nav on mobile — tap it to close */}
              {navOpen && (
                <div
                  className="fixed inset-0 bg-black/50 z-30 md:hidden"
                  onClick={() => setNavOpen(false)}
                />
              )}

              <div className="nav-bar-position overflow-y-auto bg-[#FAF6EE] min-h-screen w-full">

                {/* Hamburger button — only visible on mobile */}
                <button
                  className="fixed top-4 left-4 z-50 md:hidden bg-[#5C1F0A] text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                  onClick={() => setNavOpen(true)}
                  aria-label="Open navigation"
                >
                  <i className="fas fa-bars text-[16px]"></i>
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
