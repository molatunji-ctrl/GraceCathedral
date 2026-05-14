import { useState } from 'react';
import { Link } from 'react-router-dom';

const TAG_STYLES = {
  'Worship':      'bg-[#EDE9F6] text-[#8B7BC9]',
  'Study':        'bg-[#E8F0F8] text-[#5B9BD5]',
  'Youth':        'bg-[#FDF0E0] text-[#F4A460]',
  'Men':          'bg-[#F5EDE3] text-[#D4A574]',
  'Children':     'bg-[#E8F5F0] text-[#5BC0A3]',
  'Prayer':       'bg-[#F5EDE0] text-[#C89968]',
  'Music':        'bg-[#EDEAF5] text-[#9B8FC9]',
  'Women':        'bg-[#FCE8F0] text-[#E85D99]',
  'Discipleship': 'bg-[#E8F0F8] text-[#5B9BD5]',
  'Outreach':     'bg-[#FDF0E0] text-[#F5A26B]',
};

const ALL_PROGRAMS = [
  { id: 1,  name: 'Sunday Worship Service',      ministry: 'Main Congregation',   time: 'Sunday · 8:00 AM',    location: 'Main Auditorium',   tag: 'Worship',      day: 'Sunday',    week: 1 },
  { id: 2,  name: 'Bible Study & Fellowship',    ministry: 'Adult Ministry',       time: 'Wednesday · 6:00 PM', location: 'Hall B',            tag: 'Study',        day: 'Wednesday', week: 1 },
  { id: 3,  name: 'Youth Ignite Service',        ministry: 'Youth Ministry',       time: 'Friday · 5:00 PM',    location: 'Youth Hall',        tag: 'Youth',        day: 'Friday',    week: 1 },
  { id: 4,  name: "Men's Leadership Breakfast",  ministry: "Men's Ministry",       time: 'Saturday · 7:00 AM',  location: 'Cafeteria',         tag: 'Men',          day: 'Saturday',  week: 1 },
  { id: 5,  name: "Children's Church",           ministry: "Children's Ministry",  time: 'Sunday · 9:00 AM',    location: "Children's Wing",   tag: 'Children',     day: 'Sunday',    week: 1 },
  { id: 6,  name: 'Prayer & Intercession',       ministry: 'Prayer Ministry',      time: 'Tuesday · 5:30 AM',   location: 'Prayer Room',       tag: 'Prayer',       day: 'Tuesday',   week: 1 },
  { id: 7,  name: 'Choir Rehearsal',             ministry: 'Music Ministry',       time: 'Thursday · 4:00 PM',  location: 'Sanctuary',         tag: 'Music',        day: 'Thursday',  week: 1 },
  { id: 8,  name: 'Women of Virtue Meeting',     ministry: "Women's Ministry",     time: 'Saturday · 10:00 AM', location: 'Conference Room',   tag: 'Women',        day: 'Saturday',  week: 2 },
  { id: 9,  name: 'New Members Orientation',     ministry: 'Admin',                time: 'Sunday · 11:00 AM',   location: 'Meeting Room 1',    tag: 'Discipleship', day: 'Sunday',    week: 2 },
  { id: 10, name: 'Evangelism Outreach',         ministry: 'Evangelism Dept.',     time: 'Saturday · 8:00 AM',  location: 'Community Square',  tag: 'Outreach',     day: 'Saturday',  week: 2 },
];

const DAYS  = ['All', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEKS = [1, 2, 3, 4];

function Programs() {
  const [viewMode,     setViewMode]     = useState('weekly');
  const [selectedDay,  setSelectedDay]  = useState('All');
  const [selectedWeek, setSelectedWeek] = useState(1);

  const filtered = ALL_PROGRAMS.filter(p => {
    const dayMatch  = selectedDay === 'All' || p.day === selectedDay;
    const weekMatch = viewMode === 'weekly' ? p.week === selectedWeek : true;
    return dayMatch && weekMatch;
  });

  return (
    <>
      {/* ── Page header (tablet / desktop only) ── */}
      <section className='hidden md:block bg-[#FEFCF6] border-b border-[#E8DFD0]'>
        <div className='flex justify-between items-center gap-3 px-6 lg:px-9 py-3'>
          <div>
            <h2 className='text-[18px] text-[#5C1F0A] font-semibold'>Programs</h2>
            <p className='text-[11px] text-[#9D8365]'>Grace Cathedral · Abuja, Nigeria</p>
          </div>
          <div className="flex items-center gap-2">
            <span className='text-[14px] px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold rounded-full flex items-center gap-2'>
              <i className="fa-solid fa-user-group text-[15px]"></i>1,240 Members
            </span>
            <Link to="/announcement" className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2.5 py-1.5 border border-[#D4C5A8] hover:bg-[#e5d2aa] transition'>
              <i className="fa-regular fa-bell text-[14px]"></i>
            </Link>
          </div>
        </div>
      </section>

      <main className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-9 py-8 lg:py-12'>

        {/* Title */}
        <div className='mb-7'>
          <h2 className='text-[24px] sm:text-[28px] lg:text-[32px] text-[#5C1F0A] font-semibold'>Programs</h2>
          <p className='text-[13px] sm:text-[14px] text-[#8A7355] mt-1'>Browse all church activities and services</p>
        </div>

        {/* ── Weekly / Monthly toggle ── */}
        <div className='flex gap-2 mb-6 flex-wrap bg-amber-500/10 p-4 rounded-xl'>
          <button
            onClick={() => setViewMode('weekly')}
            className={`px-5 py-2 rounded-full font-semibold text-[13px] border transition ${
              viewMode === 'weekly'
                ? 'bg-[#F5E8C0] text-[#5C1F0A] border-[#D4B896]'
                : 'bg-white text-[#8A7355] border-[#D4C5A8] hover:bg-[#faf5ec]'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setViewMode('monthly')}
            className={`px-5 py-2 rounded-full font-semibold text-[13px] border transition ${
              viewMode === 'monthly'
                ? 'bg-[#F5E8C0] text-[#5C1F0A] border-[#D4B896]'
                : 'bg-white text-[#8A7355] border-[#D4C5A8] hover:bg-[#faf5ec]'
            }`}
          >
            Monthly
          </button>
        </div>

        {/* ── Week selector (weekly mode only) ── */}
        {viewMode === 'weekly' && (
          <div className='flex gap-2 mb-6 flex-wrap'>
            {WEEKS.map(week => (
              <button
                key={week}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 rounded-full font-semibold text-[13px] border transition ${
                  selectedWeek === week
                    ? 'bg-[#5C1F0A] text-white border-[#5C1F0A]'
                    : 'bg-white text-[#8A7355] border-[#D4C5A8] hover:bg-[#faf5ec]'
                }`}
              >
                Week {week}
              </button>
            ))}
          </div>
        )}

        {/* ── Day filter ── */}
        <div className='flex gap-2 mb-8 flex-wrap'>
          {DAYS.map(day => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-full font-semibold text-[13px] border transition ${
                selectedDay === day
                  ? 'bg-[#C4622D] text-white border-[#C4622D]'
                  : 'bg-white text-[#8A7355] border-[#D4C5A8] hover:bg-[#faf5ec]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <p className='text-[13px] text-[#8A7355] mb-6 font-medium'>
          {filtered.length} program{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* ── Program cards ── */}
        {filtered.length > 0 ? (
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {filtered.map(program => (
              <div
                key={program.id}
                className='rounded-2xl sm:rounded-[28px] border border-[#E7D8C4] bg-white p-4 sm:p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition'
              >
                <div className='flex items-start justify-between gap-3 mb-3'>
                  <div className='flex-1 min-w-0'>
                    <h3 className='text-[14px] sm:text-[16px] font-semibold text-[#5C1F0A] leading-snug'>{program.name}</h3>
                    <p className='text-[12px] sm:text-[13px] text-[#8A7355] mt-0.5'>{program.ministry}</p>
                  </div>
                  <span className={`rounded-full px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-semibold whitespace-nowrap shrink-0 ${TAG_STYLES[program.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                    {program.tag}
                  </span>
                </div>
                <div className='flex flex-wrap gap-3 text-[11px] sm:text-[12px] text-[#8A7355]'>
                  <span className='inline-flex items-center gap-1.5'>
                    <i className='fa-regular fa-clock text-[10px]'></i>{program.time}
                  </span>
                  <span className='inline-flex items-center gap-1.5'>
                    <i className='fa-solid fa-location-dot text-[10px]'></i>{program.location}
                  </span>
                </div>
                <span className='inline-flex items-center gap-1.5 rounded-full bg-[#EDF8EE] px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-[#5BC0A3] mt-3 sm:mt-4'>
                  <i className='fa-solid fa-check text-[9px]'></i>Upcoming
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-16 sm:py-24'>
            <i className='fa-regular fa-calendar text-[48px] sm:text-[60px] text-[#D4C5A8] mb-4'></i>
            <p className='text-[14px] sm:text-[16px] text-[#8A7355] font-medium'>No programs for this selection.</p>
          </div>
        )}
      </main>
    </>
  );
}

export default Programs;
