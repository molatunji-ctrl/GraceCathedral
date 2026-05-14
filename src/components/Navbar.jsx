import React from 'react';
import { NavLink } from 'react-router-dom';
import Prop from './Prop';

const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2.5 rounded-xl transition w-full text-[13px] md:text-[14px] lg:text-[15px] ${
    isActive
      ? 'bg-[#CF9C16] text-[#5C1F0E] font-semibold shadow-[0_4px_16px_rgba(212,160,23,0.38)]'
      : 'text-[#D9C292] hover:bg-[#4a1c0b] hover:text-white'
  }`;

function Navbar({ isOpen, onClose }) {
  return (
    <React.Fragment>
      <aside
        className={`
          fixed top-0 left-0 h-screen z-40
          w-[80vw] max-w-70
          md:w-64 lg:w-72
          bg-[#5C1F0A] text-white
          flex flex-col
          overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col gap-5 p-4 sm:p-5 md:p-6 min-h-full">

          {/* Close button — mobile only */}
          <button
            onClick={onClose}
            className="self-end md:hidden text-[#D9C292] hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#4a1c0b] transition shrink-0"
            aria-label="Close navigation"
          >
            <i className="fas fa-times text-[16px]"></i>
          </button>

          {/* Logo & Next Service */}
          <div className='flex flex-col gap-4 border-b pb-5 border-[#8E5226]'>
            <div className="flex flex-col gap-1">
              <img 
                src="Grace_Cathedral.jpg" 
                alt="Grace Cathedral" 
                className="w-8 h-8 md:w-9 md:h-9 object-contain rounded"
              />
              <h2 className="text-[14px] md:text-[15px] lg:text-[16px] text-white font-semibold mt-1">
                Grace Cathedral
              </h2>
              <p className="text-[10px] md:text-[11px] text-[#8E5226]">
                ABUJA, NIGERIA • EST. 1994
              </p>
            </div>
            <div className="border bg-[#692C0B] px-3 py-3 rounded-xl border-[#8E5226]">
              <h4 className="text-[10px] md:text-[11px] text-[#D19511] font-medium">NEXT SERVICE</h4>
              <h4 className="text-[12px] text-white mt-0.5">Sunday Worship</h4>
              <p className="text-[10px] md:text-[11px] text-[#A08571] mt-0.5">
                Sunday • 8:00 AM • Main Auditorium
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className='flex flex-col gap-1.5 flex-1'>
            <h2 className="text-[10px] md:text-[11px] text-[#845341] mb-1 font-medium tracking-wide">
              NAVIGATION
            </h2>
            <NavLink to='/' onClick={onClose} className={navLinkClasses}>
              <i className="fas fa-home text-base"></i>
              <span>Home</span>
            </NavLink>
            <NavLink to='/programs' onClick={onClose} className={navLinkClasses}>
              <i className="fas fa-calendar-alt text-base"></i>
              <span>Programs</span>
            </NavLink>
            <NavLink to='/announcement' onClick={onClose} className={navLinkClasses}>
              <i className="fas fa-bell text-base"></i>
              <span>Announcements</span>
              <span className='ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E53E3E] px-2 text-[10px] font-semibold text-white'>
                5
              </span>
            </NavLink>
            <NavLink to='/contact' onClick={onClose} className={navLinkClasses}>
              <i className="fas fa-envelope text-base"></i>
              <span>Contact</span>
            </NavLink>
          </nav>

          {/* Footer */}
          <div className='border px-3 py-3 rounded-xl border-[#8E5226] bg-[#662C18] mt-auto'>
            <h5 className='text-[10px] md:text-[11px] text-[#A08571]'>
              <i className="fas fa-map-marker-alt mr-1"></i>14 Faith Avenue
            </h5>
            <h5 className='text-[10px] md:text-[11px] text-[#A08571] mt-0.5'>
              Abuja, Nigeria
            </h5>
            <div className="flex gap-2 mt-3">
              <Prop day='SUN' time='8AM'/>
              <Prop day='WED' time='6PM'/>
              <Prop day='FRI' time='5PM'/>
            </div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  )
}

export default Navbar;