import React from 'react';
import { Link } from 'react-router-dom';

function Announcement() {
    const announcements = [
        {
            title: 'Annual Convention 2025',
            description: 'Our annual convention holds July 14–18. Register now to secure your seat. Early bird discounts available.',
            date: 'June 12, 2025',
            tag: 'Event',
            badge: 'URGENT',
        },
        {
            title: 'Building Fund Drive',
            description: 'We are raising funds for the new sanctuary extension. Our target is ₦50 million. Kindly support generously.',
            date: 'June 10, 2025',
            tag: 'Finance',
        },
        {
            title: 'Volunteer Call – Media Team',
            description: 'The media department urgently needs camera operators, sound engineers, and graphic designers. Join today.',
            date: 'June 8, 2025',
            tag: 'Volunteer',
        },
        {
            title: 'Condolence Notice',
            description: 'We mourn the passing of Elder Tunde Adesanya, a faithful and dedicated servant of this ministry.',
            date: 'June 7, 2025',
            tag: 'Notice',
        },
        {
            title: "Children's VBS – July 1–5",
            description: 'Vacation Bible School is here! For children aged 5–12. Theme: Warriors of Light. Five days of fun and faith.',
            date: 'June 5, 2025',
            tag: 'Event',
            badge: 'URGENT',
        },
    ];

    return(
        <React.Fragment>
           <section className='bg-[#FEFCF6]'>
              <div className='flex justify-between gap-8 px-9 py-3 items-center'>
                <div className="header-left">
                   <h2 className='text-[18px] text-[#5C1F0A] font-semibold'>Announcements</h2>
                   <p className='text-[11px] text-[#9D8365]'>Grace Cathedral · Abuja, Nigeria</p>
                </div>
                <div className="header-right flex justify-center items-center gap-2">
                    <h4 className='text-[14px] px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold border border-transparent rounded-full'>
                        <i className="fa-solid fa-user-group text-[15px] pr-4"></i>1,240 Members</h4>
                         <span className="hidden sm:inline">1,240 Members</span>
                         <span className="sm:hidden">1,240</span>
                    <Link to="/announcement" className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2 py-1.5 border border-[#D4C5A8]'><i className="fa-regular fa-bell"></i></Link>
                </div>
              </div>
           </section>

           <section className='px-9 py-10'>
                <div className='max-w-7xl mx-auto'>
                    <div className='mb-8'>
                        <h2 className='text-[28px] font-semibold text-[#5C1F0A]'>Announcements</h2>
                        <p className='text-[14px] text-[#8A7355] mt-2'>Latest updates from the church</p>
                    </div>
                    <div className='grid gap-6 md:grid-cols-2'>
                        {announcements.map((item, index) => (
                            <div key={index} className='rounded-[30px] border border-[#E7D8C4] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'>
                                <div className='flex flex-wrap items-start justify-between gap-3'>
                                    <h3 className='text-[18px] font-semibold text-[#5C1F0A] leading-tight'>{item.title}</h3>
                                    <span className='rounded-full bg-[#E9F4FF] px-3 py-1.5 text-[11px] font-semibold text-[#3B6F9A]'>{item.tag}</span>
                                </div>
                                <p className='text-[13px] text-[#8A7355] mt-4 leading-7'>{item.description}</p>
                                <div className='mt-4 flex items-center justify-between gap-3'>
                                    <span className='text-[12px] text-[#A08571]'>{item.date}</span>
                                    {item.badge && (
                                        <span className='rounded-full border border-[#F5CE8C] bg-[#FFF5DF] px-3 py-1.5 text-[11px] font-semibold text-[#B46A05]'>{item.badge}</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
           </section>
        </React.Fragment>
    )
}

export default Announcement