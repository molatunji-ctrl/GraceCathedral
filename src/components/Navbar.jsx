import React from 'react';
import { NavLink } from 'react-router-dom';
import Prop from './Prop';

const navLinkClasses = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2 rounded-xl transition w-full ${
    isActive
      ? 'bg-[#CF9C16] text-[#5C1F0E] font-semibold shadow-[0_4px_16px_rgba(212,160,23,0.38)]'
      : 'text-[#D9C292] hover:bg-[#4a1c0b] hover:text-white'
  }`;

function Navbar({ isOpen, onClose }) {
    return (
        <React.Fragment>
            <section
              className={`
                main flex flex-col fixed h-screen top-0 left-0
                w-[80vw] max-w-[280px] md:w-64 lg:w-72
                bg-[#5C1F0A] text-white z-40
                overflow-y-auto
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
              `}
            >
              {/* ── Inner scroll container ── */}
              <div className="flex flex-col gap-5 p-5 md:p-6 min-h-full">

                {/* Close button — mobile only */}
                <button
                  onClick={onClose}
                  className="self-end md:hidden text-[#D9C292] hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#4a1c0b] transition flex-shrink-0"
                  aria-label="Close navigation"
                >
                  <i className="fas fa-times text-[16px]"></i>
                </button>

                {/* ── Logo & Next Service ── */}
                <div className='flex flex-col gap-4 border-b pb-5 border-[#8E5226]'>
                  <div className="main-logo flex flex-col gap-1">
                    <img src="Grace_Cathedral.jpg" alt="Grace Cathedral" width={'35px'} />
                    <h2 className="text-[15px] md:text-[16px] text-white font-semibold mt-1">Grace Cathedral</h2>
                    <p className="text-[10px] text-[#8E5226]">ABUJA, NIGERIA • EST. 1994</p>
                  </div>
                  <div className="little-info border bg-[#692C0B] px-3 py-3 rounded-xl border-[#8E5226]">
                    <h4 className="text-[10px] md:text-[11px] text-[#D19511]">NEXT SERVICE</h4>
                    <h4 className="text-[12px] text-white mt-0.5">Sunday Worship</h4>
                    <p className="text-[10px] md:text-[11px] text-[#A08571] mt-0.5">Sunday • 8:00 AM • Main Auditorium</p>
                  </div>
                </div>

                {/* ── Navigation links ── */}
                <div className='flex flex-col gap-2 flex-1'>
                  <h2 className="text-[10px] md:text-[11px] text-[#845341] mb-1">NAVIGATION</h2>
                  <NavLink to='/' onClick={onClose} className={navLinkClasses}>
                    <i className="fas fa-home text-base"></i>
                    <span className='text-[14px] md:text-[15px]'>Home</span>
                  </NavLink>
                  <NavLink to='/programs' onClick={onClose} className={navLinkClasses}>
                    <i className="fas fa-calendar-alt text-base"></i>
                    <span className='text-[14px] md:text-[15px]'>Programs</span>
                  </NavLink>
                  <NavLink to='/announcement' onClick={onClose} className={navLinkClasses}>
                    <i className="fas fa-bell text-base"></i>
                    <span className='text-[14px] md:text-[15px]'>Announcements</span>
                    <span className='ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E53E3E] px-2 text-[10px] font-semibold text-white'>5</span>
                  </NavLink>
                  <NavLink to='/contact' onClick={onClose} className={navLinkClasses}>
                    <i className="fas fa-envelope text-base"></i>
                    <span className='text-[14px] md:text-[15px]'>Contact</span>
                  </NavLink>
                </div>

                {/* ── Footer address & service times ── */}
                <div className='border px-3 py-3 rounded-xl border-[#8E5226] bg-[#662C18] mt-auto'>
                  <h5 className='text-[10px] md:text-[11px] text-[#A08571]'>
                    <i className="fas fa-map-marker-alt mr-1"></i>14 Faith Avenue
                  </h5>
                  <h5 className='text-[10px] md:text-[11px] text-[#A08571] mt-0.5'>Abuja, Nigeria</h5>
                  <div className="flex gap-2 mt-3">
                    <Prop day='SUN' time='8AM'/>
                    <Prop day='WED' time='6PM'/>
                    <Prop day='FRI' time='5PM'/>
                  </div>
                </div>

              </div>
            </section>
        </React.Fragment>
    )
}

export default Navbar
