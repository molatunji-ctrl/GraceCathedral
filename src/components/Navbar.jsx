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
                main flex flex-col gap-7 fixed h-screen top-0 left-0 w-70
                bg-[#5C1F0A] text-white p-6 z-40
                transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
              `}
            >
               {/* Close button — only visible on mobile */}
               <button
                 onClick={onClose}
                 className="absolute top-4 right-4 md:hidden text-[#D9C292] hover:text-white w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#4a1c0b] transition"
                 aria-label="Close navigation"
               >
                 <i className="fas fa-times text-[18px]"></i>
               </button>

               <div className='display-logo flex flex-col gap-5 border-b pb-7 border-[#8E5226] '>
                 <div className="main-logo">
                   <img src="Grace_Cathedral.jpg" alt="" width={'35px'} />
                   <h2 className="text-[16px] text-white">Grace Cathedral</h2>
                   <p className="text-[11px] text-[#8E5226]">ABUJI, NIGERIA • EST, 1994</p>
                 </div>
                   <div className="little-info border bg-[#692C0B] px-3 py-3 rounded-xl border-[#8E5226]">
                      <h4 className="text-[11px] text-[#D19511]">NEXT SERVICE</h4>
                       <h4 className="text-[12px] text-white">Sunday Worship</h4>
                       <p className="text-[11px] text-[#A08571]">Sunday • 8:AM • Main Auditorium</p>
                   </div>
               </div>
               <div className='navigation-display'>
                   <h2 className="text-[11px] text-[#845341]">NAVIGATION</h2>
                   <div className="navigation flex flex-col gap-2 mt-3 border-b pb-35 border-[#8E5226]">
                      <NavLink to='/' onClick={onClose} className={navLinkClasses}>
                        <i className="fas fa-home text-lg"></i>
                        <span className='text-[15px]'>Home</span>
                      </NavLink>
                      <NavLink to='/programs' onClick={onClose} className={navLinkClasses}>
                        <i className="fas fa-calendar-alt text-lg"></i>
                        <span className='text-[15px]'>Programs</span>
                      </NavLink>
                      <NavLink to='/announcement' onClick={onClose} className={navLinkClasses}>
                        <i className="fas fa-bell text-lg"></i>
                        <span className='text-[15px]'>Announcements</span>
                        <span className='ml-auto inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E53E3E] px-2 text-[11px] font-semibold text-white'>5</span>
                      </NavLink>
                      <NavLink to='/contact' onClick={onClose} className={navLinkClasses}>
                        <i className="fas fa-envelope text-lg"></i>
                        <span className='text-[15px]'>Contact</span>
                      </NavLink>
                   </div>
                  
               </div>
               <div className='footer border px-2 py-3 rounded-xl border-[#8E5226] bg-[#662C18]  '>
                  <h5 className='text-[11px] text-[#A08571]'><i className="fas fa-map-marker-alt"></i> 14 Faith Avenue</h5>
                  <h5 className='text-[11px] text-[#A08571]'>Abuja, Nigeria</h5>
                <div className="display-days flex gap-3 mt-3 cursor-pointer">
                     <Prop day='SUN' time='8AM'/>
                     <Prop day='WED' time='6PM'/>
                     <Prop day='FRI' time='5PM'/>
                  </div>
               </div>
            </section>

        </React.Fragment>
    )
}

export default Navbar
