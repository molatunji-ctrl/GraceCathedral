import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Announcement from './pages/Announcement';
import Programs from './pages/Programs';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[#FAF6EE]">
        
        {/* ── Sidebar ── */}
        <Navbar isOpen={navOpen} onClose={() => setNavOpen(false)} />

        {/* ── Mobile overlay ── */}
        {navOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setNavOpen(false)}
          />
        )}

        {/* ── Main Content Area ──
             Mobile:  full width
             Tablet+: pushed right by sidebar width (md:ml-64, lg:ml-72)
        ── */}
        <div className="flex-1 overflow-y-auto min-h-screen w-full md:ml-64 lg:ml-72 relative">

          {/* Hamburger — mobile only */}
          <button
            className="fixed top-3 left-3 z-50 md:hidden bg-[#5C1F0A] text-white rounded-xl w-10 h-10 flex items-center justify-center shadow-md active:scale-95 transition"
            onClick={() => setNavOpen(true)}
            aria-label="Open navigation"
          >
            <i className="fas fa-bars text-[13px]"></i>
          </button>

          {/* Top padding on mobile so hamburger never covers page header */}
          <div className="pt-14 md:pt-0">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/programs' element={<Programs />} />
              <Route path='/announcement' element={<Announcement />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;