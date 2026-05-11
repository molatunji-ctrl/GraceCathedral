import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ============================================================
// PROGRAMS PAGE COMPONENT
// ============================================================
// This component displays church programs with filtering options
// Users can filter by: Weekly/Monthly view, Day of week, and Week number
// ============================================================

function Programs() {
    // STATE VARIABLES (useState stores data that can change)
    
    // 1. viewMode: determines if showing 'weekly' or 'monthly' view
    const [viewMode, setViewMode] = useState('weekly');
    
    // 2. selectedDay: tracks which day filter is active (e.g., 'Sunday', 'Monday', 'All')
    const [selectedDay, setSelectedDay] = useState('All');
    
    // 3. selectedWeek: tracks which week is selected (1, 2, 3, or 4) in weekly view
    const [selectedWeek, setSelectedWeek] = useState(1);

    // PROGRAM DATA
    // This is an array containing all church programs with their details
    // Each program object has: id, name, ministry, time, location, tag, color, day, week
    const allPrograms = [
        { id: 1, name: 'Sunday Worship Service', ministry: 'Main Congregation', time: 'Sunday · 8:00 AM', location: 'Main Auditorium', tag: 'Worship', color: '#8B7BC9', day: 'Sunday', week: 1 },
        { id: 2, name: 'Bible Study & Fellowship', ministry: 'Adult Ministry', time: 'Wednesday · 6:00 PM', location: 'Hall B', tag: 'Study', color: '#5B9BD5', day: 'Wednesday', week: 1 },
        { id: 3, name: 'Youth Ignite Service', ministry: 'Youth Ministry', time: 'Friday · 5:00 PM', location: 'Youth Hall', tag: 'Youth', color: '#F4A460', day: 'Friday', week: 1 },
        { id: 4, name: "Men's Leadership Breakfast", ministry: "Men's Ministry", time: 'Saturday · 7:00 AM', location: 'Cafeteria', tag: 'Men', color: '#D4A574', day: 'Saturday', week: 1 },
        { id: 5, name: "Children's Church", ministry: "Children's Ministry", time: 'Sunday · 9:00 AM', location: "Children's Wing", tag: 'Children', color: '#5BC0A3', day: 'Sunday', week: 1 },
        { id: 6, name: 'Prayer & Intercession', ministry: 'Prayer Ministry', time: 'Tuesday · 5:30 AM', location: 'Prayer Room', tag: 'Prayer', color: '#C89968', day: 'Tuesday', week: 1 },
        { id: 7, name: 'Choir Rehearsal', ministry: 'Music Ministry', time: 'Thursday · 4:00 PM', location: 'Sanctuary', tag: 'Music', color: '#9B8FC9', day: 'Thursday', week: 1 },
        { id: 8, name: 'Women of Virtue Meeting', ministry: "Women's Ministry", time: 'Saturday · 10:00 AM', location: 'Conference Room', tag: 'Women', color: '#E85D99', day: 'Saturday', week: 2 },
        { id: 9, name: 'New Members Orientation', ministry: 'Admin', time: 'Sunday · 11:00 AM', location: 'Meeting Room 1', tag: 'Discipleship', color: '#5B9BD5', day: 'Sunday', week: 2 },
        { id: 10, name: 'Evangelism Outreach', ministry: 'Evangelism Dept.', time: 'Saturday · 8:00 AM', location: 'Community Square', tag: 'Outreach', color: '#F5A26B', day: 'Saturday', week: 2 },
    ];

    // FILTER OPTIONS ARRAYS
    // These arrays contain all possible filter choices
    const days = ['All', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weeks = [1, 2, 3, 4];

    // ============================================================
    // FILTER LOGIC
    // ============================================================
    // This function filters programs based on:
    // 1. Selected day (or shows all if 'All' is selected)
    // 2. Selected week (only in weekly view mode)
    // ============================================================
    const filteredPrograms = allPrograms.filter(program => {
        // Check if the program's day matches the selected day
        // (or if 'All' is selected, show the program regardless of day)
        const dayMatch = selectedDay === 'All' || program.day === selectedDay;
        
        // Check if the program's week matches the selected week
        // (only applies in weekly view, monthly view shows all weeks)
        const weekMatch = viewMode === 'weekly' ? program.week === selectedWeek : true;
        
        // Only return the program if BOTH conditions are true
        return dayMatch && weekMatch;
    });

    return(
        <React.Fragment>
            {/* ============================================================ */}
            {/* HEADER SECTION - Shows page title and church info */}
            {/* ============================================================ */}
           <section className='bg-[#FEFCF6]'>
              <div className='flex justify-between gap-7 px-9 py-3 items-center'>
                <div className="header-left">
                   <h2 className='text-[18px] text-[#5C1F0A] font-semibold'>Programs</h2>
                   <p className='text-[11px] text-[#9D8365]'>Grace Cathedral · Abuja, Nigeria</p>
                </div>
                <div className="header-right flex justify-center items-center gap-2">
                    <h4 className='text-[14px] px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold border border-transparent rounded-full'>
                        <i className="fa-solid fa-user-group text-[15px] pr-4"></i>1,240 Members</h4>
                    <Link to="/announcement" className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2 py-1.5 border border-[#D4C5A8]'><i className="fa-regular fa-bell"></i></Link>
                </div>
              </div>
           </section>

           <section className='px-9 py-10 max-w-290 mx-auto'>
                {/* Page Title and Description */}
                <div className='mb-8'>
                    <h2 className='text-[32px] text-[#5C1F0A] font-semibold'>Programs</h2>
                    <p className='text-[14px] text-[#8A7355] mt-1'>Browse all church activities and services</p>
                </div>

                {/* ============================================================ */}
                {/* WEEKLY/MONTHLY VIEW TOGGLE BUTTONS */}
                {/* User can click these to switch between weekly and monthly view */}
                {/* ============================================================ */}
                <div className='flex gap-3 mb-7 flex-wrap'>
                    {/* WEEKLY BUTTON - Shows only programs for selected week */}
                    <button
                        onClick={() => setViewMode('weekly')}
                        className={`px-6 py-2 rounded-full font-semibold text-[14px] transition ${
                            viewMode === 'weekly'
                                ? 'bg-[#D4C5A8] text-[#5C1F0A] border border-[#D4C5A8]'
                                : 'bg-white text-[#8A7355] border border-[#D4C5A8]'
                        }`}
                    >
                        Weekly
                    </button>
                    
                    {/* MONTHLY BUTTON - Shows programs for all weeks combined */}
                    <button
                        onClick={() => setViewMode('monthly')}
                        className={`px-6 py-2 rounded-full font-semibold text-[14px] transition ${
                            viewMode === 'monthly'
                                ? 'bg-white text-[#5C1F0A] border border-[#5C1F0A]'
                                : 'bg-white text-[#8A7355] border border-[#D4C5A8]'
                        }`}
                    >
                        Monthly
                    </button>
                </div>

                {/* ============================================================ */}
                {/* WEEK SELECTION BUTTONS (Only shows in Weekly mode) */}
                {/* User selects which week to view programs for */}
                {/* ============================================================ */}
                {viewMode === 'weekly' && (
                    <div className='flex gap-3 mb-7 flex-wrap'>
                        {/* Loop through weeks array and create a button for each week */}
                        {weeks.map(week => (
                            <button
                                key={week}
                                onClick={() => setSelectedWeek(week)}
                                className={`px-4 py-2 rounded-full font-semibold text-[13px] transition ${
                                    selectedWeek === week
                                        ? 'bg-[#8B5425] text-white'
                                        : 'bg-white text-[#8A7355] border border-[#D4C5A8]'
                                }`}
                            >
                                Week {week}
                            </button>
                        ))}
                    </div>
                )}

                {/* Day Selection */}
                {/* ============================================================ */}
                {/* DAY FILTER BUTTONS */}
                {/* User can click to filter programs by day of week */}
                {/* 'All' option shows programs from all days */}
                {/* ============================================================ */}
                <div className='flex gap-3 mb-8 flex-wrap'>
                    {/* Loop through days array and create a button for each day */}
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`px-4 py-2 rounded-full font-semibold text-[13px] transition ${
                                selectedDay === day
                                    ? 'bg-[#B8743A] text-white'
                                    : 'bg-white text-[#8A7355] border border-[#D4C5A8]'
                            }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* ============================================================ */}
                {/* PROGRAM COUNT DISPLAY */}
                {/* Shows how many programs match the current filters */}
                {/* Uses conditional logic to show 'program' or 'programs' */}
                {/* ============================================================ */}
                <p className='text-[13px] text-[#8A7355] mb-6 font-medium'>
                    {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} found
                </p>

                {/* ============================================================ */}
                {/* PROGRAMS DISPLAY SECTION */}
                {/* Shows programs in a grid format if any match the filters */}
                {/* Otherwise, shows an empty state message */}
                {/* ============================================================ */}
                {filteredPrograms.length > 0 ? (
                    // GRID LAYOUT
                    // 'md:grid-cols-2' means: 1 column on mobile, 2 columns on medium screens and larger
                    <div className='grid gap-6 md:grid-cols-2'>
                        {/* Loop through filtered programs and display each one */}
                        {filteredPrograms.map(program => (
                            // Each program card
                            <div key={program.id} className='rounded-[28px] border border-[#E7D8C4] bg-white p-6 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition'>
                                {/* Program Title and Tag Badge */}
                                <div className='flex items-start justify-between gap-4 mb-4'>
                                    <div className='flex-1'>
                                        {/* Program Name */}
                                        <h3 className='text-[16px] font-semibold text-[#5C1F0A] leading-snug'>{program.name}</h3>
                                        {/* Ministry/Department Name */}
                                        <p className='text-[13px] text-[#8A7355] mt-1'>{program.ministry}</p>
                                    </div>
                                    {/* Tag Badge (with dynamic background color) */}
                                    <span className='rounded-full px-3 py-1.5 text-[11px] font-semibold text-white whitespace-nowrap' style={{backgroundColor: program.color}}>
                                        {program.tag}
                                    </span>
                                </div>
                                {/* Program Details - Time and Location */}
                                <div className='flex flex-wrap gap-4 text-[12px] text-[#8A7355]'>
                                    {/* Time with icon */}
                                    <span className='inline-flex items-center gap-2'>
                                        <i className='fa-regular fa-clock'></i>
                                        {program.time}
                                    </span>
                                    {/* Location with icon */}
                                    <span className='inline-flex items-center gap-2'>
                                        <i className='fa-solid fa-location-dot'></i>
                                        {program.location}
                                    </span>
                                </div>
                                {/* Upcoming Status Badge */}
                                <span className='inline-flex items-center gap-2 rounded-full bg-[#EDF8EE] px-3 py-1.5 text-[11px] font-semibold text-[#5BC0A3] mt-4'>
                                    <i className='fa-solid fa-check text-xs'></i>Upcoming
                                </span>
                            </div>
                        ))}
                    </div>
                ) : (
                    // EMPTY STATE
                    // Shows when no programs match the selected filters
                    <div className='flex flex-col items-center justify-center py-24'>
                        {/* Calendar Icon */}
                        <i className='fa-regular fa-calendar text-[60px] text-[#D4C5A8] mb-4'></i>
                        {/* Empty State Message */}
                        <p className='text-[16px] text-[#8A7355] font-medium'>No programs for this selection.</p>
                    </div>
                )}
           </section>
        </React.Fragment>
    )
}

export default Programs