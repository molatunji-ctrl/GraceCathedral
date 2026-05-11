import React from 'react';
import { Link , useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
        const departments = [
        { icon: '⛪', name: 'Worship', members: '45 members' },
        { icon: '⚡', name: 'Youth', members: '120 members' },
        { icon: '👩', name: 'Women', members: '88 members' },
        { icon: '☀️', name: 'Children', members: '63 members' },
        { icon: '🎬', name: 'Media', members: '22 members' },
        { icon: '🙏', name: 'Prayer', members: '55 members' },
    ];
     const upcomingPrograms = [
        { id: 1, name: 'Sunday Worship Service', ministry: 'Main Congregation', time: 'Sunday · 8:00 AM', location: 'Main Auditorium', tag: 'Worship', color: '#8B7BC9' },
        { id: 2, name: 'Bible Study & Fellowship', ministry: 'Adult Ministry', time: 'Wednesday · 6:00 PM', location: 'Hall B', tag: 'Study', color: '#5B9BD5' },
        { id: 3, name: 'Youth Ignite Service', ministry: 'Youth Ministry', time: 'Friday · 5:00 PM', location: 'Youth Hall', tag: 'Youth', color: '#F4A460' },
        { id: 4, name: "Men's Leadership Breakfast", ministry: "Men's Ministry", time: 'Saturday · 7:00 AM', location: 'Cafeteria', tag: 'Men', color: '#D4A574' },
        { id: 5, name: "Children's Church", ministry: "Children's Ministry", time: 'Sunday · 9:00 AM', location: "Children's Wing", tag: 'Children', color: '#5BC0A3' },
    ];
    return(
        <React.Fragment>
           <section className='bg-[#FEFCF6]'>
              <div className='flex justify-between gap-8 px-9 py-3 items-center'>
                <div className="header-left">
                   <h2 className='text-[18px] text-[#5C1F0A] font-semibold'>Home</h2>
                   <p className='text-[11px] text-[#9D8365]'>Grace Cathedral · Abuja, Nigeria</p>
                </div>
                <div className="header-right flex justify-center items-center gap-2">
                    <h4 className='text-[14px] px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold border border-transparent rounded-full'>
                        <i class="fa-solid fa-user-group text-[15px] pr-4"></i>1,240 Members</h4>
                    <Link to="/announcement" className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2 py-1.5 border border-[#D4C5A8]'><i class="fa-regular fa-bell"></i></Link>
                </div>
              </div>
           </section>
     
            <main className='max-w-290 mx-auto px-9'>
                <div className='flex-col gap-3 bg-[linear-gradient(90deg,hsla(16,80%,22%,1)_0%,hsla(23,71%,35%,1)_100%)] w-full rounded-4xl mt-10 px-10 py-14 flex'>
                    <h3 className='text-[12px] font-semibold text-[#AD7C14]'>WELCOME , BELOVED</h3>
                    <cite className='text-[40px] text-white'>"He who finds a wife, finds a good thing."</cite>
                    <p className='text-[11px] font-semibold italic text-[#AA8565]'>Proverb 18:22 • Theme of the Month</p>
                     <div className='flex gap-3 pt-5'>
                        <span>
                            <Link to='/programs' className='text-white text-[14px] font-semibold border border-[#9F7261] bg-[#783B25] rounded-xl px-4 py-2'>View Programs</Link>
                        </span>
                        <span>
                            <Link to='/announcement' className='text-[#5C1F0C] text-[14px] font-semibold border border-[#5C1F0C] bg-[#D4A017] rounded-xl px-4 py-2'>Announcements</Link>
                        </span>
                     </div>
                </div>

                <section className='counting flex gap-14 justify-center items-center flex-wrap'>
                    <span className='bg-[#FEFCF6] border px-23 py-3 rounded-4xl border-[#9D8365] flex flex-col items-center gap-2  mt-10'>
                        <h2 className='text-[26px] font-semibold text-[#8B3A14] '>1,240</h2>
                        <p className='text-[11px] text-[#AA8565] '>MEMBERS</p>
                    </span>
                    <span className='bg-[#FEFCF6] border px-23 py-3 rounded-4xl border-[#9D8365] flex flex-col items-center gap-2  mt-10'>
                        <h2 className='text-[26px] font-semibold text-[#8B3A14]'>10</h2>
                        <p className='text-[11px] text-[#AA8565] '>PROGRAMS</p>
                    </span>
                    <span className='bg-[#FEFCF6] border px-23 py-3 rounded-4xl border-[#9D8365] flex flex-col items-center gap-2  mt-10'>
                        <h2 className='text-[26px] font-semibold text-[#8B3A14]'>6</h2>
                        <p className='text-[11px] text-[#AA8565] '>DEPARTMENTS</p>
                    </span>
                    <span className='bg-[#FEFCF6] border px-23 py-3 rounded-4xl border-[#9D8365] flex flex-col items-center gap-2  mt-10'>
                        <h2 className='text-[26px] font-semibold text-[#8B3A14]'>7</h2>
                        <p className='text-[11px] text-[#AA8565] '>UPCOMING</p>
                    </span>
                </section>

                <section>
                    <div className='department-program flex flex-col lg:flex-row gap-10 justify-center items-start mt-20 px-9'>
                        <div className='departments flex-1 flex flex-col gap-5'>
                            <h2 className='text-[18px] text-[#5C1F0A] font-semibold  mb-1'>Departments</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
                                {departments.map((dept, index) => (
                                    <div key={index} className='group rounded-3xl border border-[#D4C5A8] bg-white px-4 py-3 text-center transition hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]'>
                                        <div className='mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-[#F9F2E4] text-[26px]'>{dept.icon}</div>
                                        <h3 className='text-[15px] font-semibold text-[#5C1F0A]'>{dept.name}</h3>
                                        <p className='mt-2 text-[11px] text-[#8A7355]'>{dept.members}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='programs flex-1 flex flex-col gap-5 '>
                            <div className='mb-1 flex items-center justify-between'>
                                <h2 className='text-[18px] font-semibold text-[#5C1F0A]'>Upcoming Programs</h2>
                                <Link to='/programs' className='text-[#8B3A14] text-[13px] font-semibold hover:underline'>See all →</Link>
                            </div>
                            <div className='space-y-3'>
                                {upcomingPrograms.map((program) => (
                                    <button key={program} onClick={() => navigate(`/programs`)} className='w-full text-left group rounded-[28px] border border-[#D4C5A8] bg-white p-5 transition hover:shadow-[0_14px_40px_rgba(0,0,0,0.05)]'>
                                        <div className='flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between'>
                                            <div className='flex-1'>
                                                <div className='flex flex-col gap-1.5'>
                                                    <h3 className='text-[16px] font-semibold text-[#5C1F0A]'>{program.name}</h3>
                                                    <p className='text-[12px] text-[#8A7355]'>{program.ministry}</p>
                                                </div>
                                                <div className='mt-3 flex flex-wrap gap-3 text-[12px] text-[#8A7355]'>
                                                    <span className='inline-flex items-center gap-2'><i className='fa-regular fa-clock'></i>{program.time}</span>
                                                    <span className='inline-flex items-center gap-2'><i className='fa-solid fa-location-dot'></i>{program.location}</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col items-start gap-2 sm:items-end'>
                                                <span className='rounded-full px-3 py-1.5 text-[11px] font-semibold text-white' style={{backgroundColor: program.color}}>{program.tag}</span>
                                                <span className='inline-flex items-center gap-2 rounded-full bg-[#EDF8EE] px-3 py-1 text-[11px] font-semibold text-[#5BC0A3]'>
                                                    <i className='fa-solid fa-check'></i>Upcoming
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                    <section className='mt-30 px-9 '>
                        <div className='rounded-[28px] border border-[#D4C5A8] bg-[#F8EBBA] px-6 py-4 shadow-sm'>
                            <p className='text-[10px] uppercase tracking-[0.3em] text-[#8A7355] mb-2'>Scripture of the Day</p>
                            <p className='text-[16px] italic text-[#5C1F0A] leading-7'>"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters."</p>
                            <p className='mt-3 text-[12px] font-semibold text-[#8B3A14]'>Psalm 23:1–2</p>
                        </div>
                    </section>
            </main>



        </React.Fragment>
    )
}

export default Home