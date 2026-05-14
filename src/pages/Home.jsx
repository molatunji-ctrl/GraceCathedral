import { Link, useNavigate } from 'react-router-dom';

// Helper: returns Tailwind class string for each tag — compiled at build time
function getTagStyle(tag) {
  const styles = {
    'Worship': 'bg-[#EDE9F6] text-[#8B7BC9]',
    'Study': 'bg-[#E8F0F8] text-[#5B9BD5]',
    'Youth': 'bg-[#FDF0E0] text-[#F4A460]',
    'Men': 'bg-[#F5EDE3] text-[#D4A574]',
    'Children': 'bg-[#E8F5F0] text-[#5BC0A3]',
    'Prayer': 'bg-[#F5EDE0] text-[#C89968]',
    'Music': 'bg-[#EDEAF5] text-[#9B8FC9]',
    'Women': 'bg-[#FCE8F0] text-[#E85D99]',
    'Discipleship': 'bg-[#E8F0F8] text-[#5B9BD5]',
    'Outreach': 'bg-[#FDF0E0] text-[#F5A26B]',
  };
  return styles[tag] || 'bg-gray-100 text-gray-600';
}

function Home() {
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
    { id: 1, name: 'Sunday Worship Service', ministry: 'Main Congregation', time: 'Sunday · 8:00 AM', location: 'Main Auditorium', tag: 'Worship' },
    { id: 2, name: 'Bible Study & Fellowship', ministry: 'Adult Ministry', time: 'Wednesday · 6:00 PM', location: 'Hall B', tag: 'Study' },
    { id: 3, name: 'Youth Ignite Service', ministry: 'Youth Ministry', time: 'Friday · 5:00 PM', location: 'Youth Hall', tag: 'Youth' },
    { id: 4, name: "Men's Leadership Breakfast", ministry: "Men's Ministry", time: 'Saturday · 7:00 AM', location: 'Cafeteria', tag: 'Men' },
    { id: 5, name: "Children's Church", ministry: "Children's Ministry", time: 'Sunday · 9:00 AM', location: "Children's Wing", tag: 'Children' },
  ];

  return (
    <>
      {/* Header */}
      <section className='bg-[#FEFCF6] border-b border-[#E8DFD0]'>
        <div className='flex justify-between items-center gap-3 px-4 sm:px-6 lg:px-9 py-3'>
          <div className="min-w-0">
            <h2 className='text-[16px] sm:text-[18px] text-[#5C1F0A] font-semibold'>Home</h2>
            <p className='text-[10px] sm:text-[11px] text-[#9D8365] truncate'>Grace Cathedral · Abuja, Nigeria</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className='text-[12px] sm:text-[14px] px-2.5 sm:px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold rounded-full whitespace-nowrap flex items-center gap-2'>
              <i className="fa-solid fa-user-group text-[13px] sm:text-[15px]"></i>
              <span className="hidden sm:inline">1,240 Members</span>
              <span className="sm:hidden">1,240</span>
            </span>
            <Link to="/announcement" className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2.5 py-1.5 border border-[#D4C5A8] shrink-0 hover:bg-[#e5d2aa] transition'>
              <i className="fa-regular fa-bell text-[14px]"></i>
            </Link>
          </div>
        </div>
      </section>

      <main className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-9 pb-12 sm:pb-16'>
        
        {/* Hero */}
        <div className='relative w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl mt-6 sm:mt-8 lg:mt-10 overflow-hidden bg-cover bg-center' style={{ backgroundImage: "url('/dashboard.jpg')" }}>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(60,18,6,0.75)_0%,rgba(100,40,15,0.70)_100%)]" />
          <div className='relative z-10 flex flex-col gap-3 px-5 sm:px-8 lg:px-10 py-10 sm:py-12 lg:py-14'>
            <h3 className='text-[11px] sm:text-[12px] font-semibold text-[#D4A017] tracking-wide'>WELCOME, BELOVED</h3>
            <p className='text-[24px] sm:text-[32px] lg:text-[40px] text-white font-medium leading-tight'>"One Fold, One Shepherd."</p>
            <p className='text-[10px] sm:text-[11px] font-semibold italic text-[#C4A882]'>John 10:16 • Theme of the Month</p>
            <div className='flex flex-wrap gap-3 pt-4 sm:pt-5'>
              <Link to='/programs' className='text-white text-[13px] sm:text-[14px] font-semibold border border-[#9F7261] bg-[#783B25] rounded-xl px-4 py-2.5 hover:bg-[#6b331f] transition text-center'>View Programs</Link>
              <Link to='/announcement' className='text-[#5C1F0C] text-[13px] sm:text-[14px] font-semibold border border-[#5C1F0C] bg-[#D4A017] rounded-xl px-4 py-2.5 hover:bg-[#c29415] transition text-center'>Announcements</Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className='mt-8 sm:mt-10 lg:mt-12'>
          <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
            {[ { num: '1,240', label: 'MEMBERS' }, { num: '10', label: 'PROGRAMS' }, { num: '6', label: 'DEPARTMENTS' }, { num: '7', label: 'UPCOMING' } ].map((stat) => (
              <div key={stat.label} className='bg-[#FEFCF6] border px-6 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 rounded-2xl sm:rounded-3xl border-[#9D8365] flex flex-col items-center gap-1 min-w-[100px] sm:min-w-[120px]'>
                <h2 className='text-[22px] sm:text-[24px] md:text-[26px] font-semibold text-[#8B3A14]'>{stat.num}</h2>
                <p className='text-[10px] sm:text-[11px] text-[#AA8565] font-medium tracking-wide'>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Departments & Programs */}
        <section className='mt-12 sm:mt-16 lg:mt-20'>
          <div className='flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12'>
            
            <div className='flex-1 flex flex-col gap-4 sm:gap-5 min-w-0'>
              <h2 className='text-[16px] sm:text-[18px] text-[#5C1F0A] font-semibold'>Departments</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5'>
                {departments.map((dept, index) => (
                  <div key={index} className='group rounded-2xl sm:rounded-3xl border border-[#D4C5A8] bg-white px-4 py-4 text-center transition hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] hover:-translate-y-0.5'>
                    <div className='mx-auto mb-3 inline-flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-2xl sm:rounded-3xl bg-[#F9F2E4] text-[22px] sm:text-[26px]'>{dept.icon}</div>
                    <h3 className='text-[14px] sm:text-[15px] font-semibold text-[#5C1F0A]'>{dept.name}</h3>
                    <p className='mt-1 sm:mt-2 text-[11px] text-[#8A7355]'>{dept.members}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-4 sm:gap-5 min-w-0'>
              <div className='flex items-center justify-between'>
                <h2 className='text-[16px] sm:text-[18px] font-semibold text-[#5C1F0A]'>Upcoming Programs</h2>
                <Link to='/programs' className='text-[#8B3A14] text-[12px] sm:text-[13px] font-semibold hover:underline'>See all →</Link>
              </div>
              <div className='space-y-3'>
                {upcomingPrograms.map((program) => (
                  <button key={program.id} onClick={() => navigate(`/programs`)} className='w-full text-left group rounded-2xl sm:rounded-[28px] border border-[#D4C5A8] bg-white p-4 sm:p-5 transition hover:shadow-[0_14px_40px_rgba(0,0,0,0.05)]'>
                    <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
                      <div className='flex-1 min-w-0'>
                        <h3 className='text-[14px] sm:text-[16px] font-semibold text-[#5C1F0A] leading-snug'>{program.name}</h3>
                        <p className='text-[11px] sm:text-[12px] text-[#8A7355] mt-0.5'>{program.ministry}</p>
                        <div className='mt-2 sm:mt-3 flex flex-wrap gap-2 sm:gap-3 text-[11px] sm:text-[12px] text-[#8A7355]'>
                          <span className='inline-flex items-center gap-1.5'><i className='fa-regular fa-clock text-[10px]'></i>{program.time}</span>
                          <span className='inline-flex items-center gap-1.5'><i className='fa-solid fa-location-dot text-[10px]'></i>{program.location}</span>
                        </div>
                      </div>
                      <div className='flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0'>
                        {/* TAILWIND CLASSES ONLY — same as Announcements page */}
                        <span className={`rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap ${getTagStyle(program.tag)}`}>
                          {program.tag}
                        </span>
                        <span className='inline-flex items-center gap-1.5 rounded-full bg-[#EDF8EE] px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-[#5BC0A3]'>
                          <i className='fa-solid fa-check text-[9px]'></i>Upcoming
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Scripture */}
        <section className='mt-12 sm:mt-16 lg:mt-24'>
          <div className='rounded-2xl sm:rounded-[28px] border border-[#D4C5A8] bg-[#F8EBBA] px-4 sm:px-6 lg:px-8 py-5 sm:py-6 shadow-sm'>
            <p className='text-[10px] uppercase tracking-[0.25em] text-[#8A7355] mb-2 font-medium'>Scripture of the Day</p>
            <p className='text-[14px] sm:text-[16px] lg:text-[18px] italic text-[#5C1F0A] leading-7 sm:leading-8'>"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures; He leads me beside still waters."</p>
            <p className='mt-3 sm:mt-4 text-[11px] sm:text-[12px] font-semibold text-[#8B3A14]'>Psalm 23:1–2</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;