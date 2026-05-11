import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    return(
        <React.Fragment>
           <section className='bg-[#FEFCF6]'>
              <div className='flex justify-between gap-8 px-9 py-3 items-center'>
                <div className="header-left">
                   <h2 className='text-[18px] text-[#5C1F0A] font-semibold'>Contact</h2>
                   <p className='text-[11px] text-[#9D8365]'>Grace Cathedral · Abuja, Nigeria</p>
                </div>
                <div className="header-right flex justify-center items-center gap-2">
                    <h4 className='text-[14px] px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold border border-transparent rounded-full'>
                        <i class="fa-solid fa-user-group text-[15px] pr-4"></i>1,240 Members</h4>
                    <Link to="/announcement" className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2 py-1.5 border border-[#D4C5A8]'><i class="fa-regular fa-bell"></i></Link>
                </div>
              </div>
           </section>
           <section className="py-12 px-9 flex flex-col gap-8">
               <div className="heading">
                 <h2 className='text-[32px] text-[#5C1F0A] font-semibold'>Get in Touch</h2>
                  <p className='text-[14px] text-[#8A7355]'>We would love to hear from you</p>
               </div>
                <div className="details flex gap-16">
                    <div className="church-info flex flex-col gap-8 flex-1">
                        <div className="li-info grid grid-cols-2 gap-4">
                            <span className='border border-[#D4C5A8] px-6 py-4 rounded-2xl bg-white shadow-sm'>
                                <h2 className='text-[12px] text-[#8A7355] font-semibold mb-2'><i className="fa-solid fa-phone mr-2 text-[#8A7355]"></i>PHONE</h2>
                                <p className='text-[16px] text-[#5C1F0A] font-semibold'>+234 803 456 7890</p>
                            </span>
                            <span className='border border-[#D4C5A8] px-6 py-4 rounded-2xl bg-white shadow-sm'>
                                <h2 className='text-[12px] text-[#8A7355] font-semibold mb-2'><i className="fa-solid fa-envelope mr-2 text-[#8A7355]"></i>EMAIL</h2>
                                <p className='text-[16px] text-[#5C1F0A] font-semibold'>hello@gracecathedral.ng</p>
                            </span>
                            <span className='border border-[#D4C5A8] px-6 py-4 rounded-2xl bg-white shadow-sm'>
                                <h2 className='text-[12px] text-[#8A7355] font-semibold mb-2'><i className="fa-solid fa-map-marker mr-2 text-[#8A7355]"></i>ADDRESS</h2>
                                <p className='text-[16px] text-[#5C1F0A] font-semibold'>14 Faith Ave, Abuja</p>
                            </span>
                            <span className='border border-[#D4C5A8] px-6 py-4 rounded-2xl bg-white shadow-sm'>
                                <h2 className='text-[12px] text-[#8A7355] font-semibold mb-2'><i className="fa-solid fa-globe mr-2 text-[#8A7355]"></i>WEBSITE</h2>
                                <p className='text-[16px] text-[#5C1F0A] font-semibold'>gracecathedral.ng</p>
                            </span>
                        </div>
                        <div className="weekly-services border border-[#D4C5A8] px-6 py-5 rounded-2xl bg-white shadow-sm">
                            <h2 className='text-[14px] text-[#5C1F0A] font-semibold mb-4'>SERVICE TIMES</h2>
                             <div className="sunday flex justify-between border-b pb-4 border-[#D4C5A8] mb-3">
                                <h2 className='text-[14px] text-[#8B3A14] font-semibold'>Sunday</h2>
                                <span className='text-[14px] text-[#8A7355]'>1st Service – 7:00 AM</span>
                             </div>
                             <div className="sunday flex justify-between border-b pb-4 border-[#D4C5A8] mb-3">
                                <h2 className='text-[14px] text-[#8B3A14] font-semibold'>Sunday</h2>
                                <span className='text-[14px] text-[#8A7355]'>2nd Service – 9:30 AM</span>
                             </div>
                             <div className="wednesday flex justify-between border-b pb-4 border-[#D4C5A8] mb-3">
                                <h2 className='text-[14px] text-[#8B3A14] font-semibold'>Wednesday</h2>
                                <span className='text-[14px] text-[#8A7355]'>Bible Study – 6:00 PM</span>
                             </div>
                             <div className="friday flex justify-between">
                                <h2 className='text-[14px] text-[#8B3A14] font-semibold'>Friday</h2>
                                <span className='text-[14px] text-[#8A7355]'>Youth Service – 5:00 PM</span>
                             </div>

                        </div>
                    </div>
                    <div className="user-input flex flex-col gap-4 border border-[#D4C5A8] px-6 py-5 rounded-2xl bg-white shadow-sm w-96">
                        <h2 className='text-[14px] text-[#5C1F0A] font-semibold'>SEND A MESSAGE</h2>
                        <form className="user-display flex flex-col gap-3">
                            <input type="text" placeholder='Full Name' required className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017]' />
                            <input type="email" placeholder='Email Address' required className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017]' />
                            <input type="text" placeholder='Subject' className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017]' />
                            <textarea placeholder='Your message...' rows='5' required className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017] resize-none'></textarea>
                            <button type='submit' className='bg-[#5C2414] text-white font-semibold text-[16px] py-3 rounded-lg hover:bg-[#4a1d0f] transition-colors mt-2'>Send Message</button>
                        </form>
                    </div>
                </div>
           </section>
        </React.Fragment>
    )
}

export default Contact