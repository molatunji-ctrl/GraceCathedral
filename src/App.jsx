import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Announcement from './pages/Announcement';
import Programs from './pages/Programs';


function App() {
  return(
      <BrowserRouter>
        <React.Fragment>
            <div className="main-container flex ml-70">
              <Navbar />

              <div className="nav-bar-position overflow-y-auto bg-[#FAF6EE] min-h-screen w-full ">
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