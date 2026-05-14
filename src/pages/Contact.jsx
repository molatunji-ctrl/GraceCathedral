import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* ── Header Bar ── */}
      <section className='bg-[#FEFCF6] border-b border-[#E8DFD0]'>
        <div className='flex justify-between items-center gap-3 px-4 sm:px-6 lg:px-9 py-3'>
          <div className="min-w-0">
            <h2 className='text-[16px] sm:text-[18px] text-[#5C1F0A] font-semibold'>
              Contact
            </h2>
            <p className='text-[10px] sm:text-[11px] text-[#9D8365] truncate'>
              Grace Cathedral · Abuja, Nigeria
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className='text-[12px] sm:text-[14px] px-2.5 sm:px-3 py-1.5 bg-[#F5E8C0] text-[#5C1F0A] font-semibold rounded-full whitespace-nowrap flex items-center gap-2'>
              <i className="fa-solid fa-user-group text-[13px] sm:text-[15px]"></i>
              <span className="hidden sm:inline">1,240 Members</span>
              <span className="sm:hidden">1,240</span>
            </span>
            <Link 
              to="/announcement" 
              className='text-[#5C1F0A] bg-[#eedcb8] rounded-xl px-2.5 py-1.5 border border-[#D4C5A8] shrink-0 hover:bg-[#e5d2aa] transition'
            >
              <i className="fa-regular fa-bell text-[14px]"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className='max-w-350 mx-auto px-4 sm:px-6 lg:px-9 py-8 sm:py-12 lg:py-16'>
        
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <h2 className='text-[24px] sm:text-[28px] lg:text-[32px] text-[#5C1F0A] font-semibold leading-tight'>
            Get in Touch
          </h2>
          <p className='text-[13px] sm:text-[14px] text-[#8A7355] mt-1'>
            We would love to hear from you
          </p>
        </div>

        {/* Details: info + form */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left: Church Info */}
          <div className="flex flex-col gap-6 flex-1 min-w-0">
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className='border border-[#D4C5A8] px-4 sm:px-6 py-4 rounded-2xl bg-white shadow-sm'>
                <h3 className='text-[11px] sm:text-[12px] text-[#8A7355] font-semibold mb-2'> 
                  <i className="fa-solid fa-phone mr-2 text-[#8A7355]"></i>PHONE
                </h3>
                <p className='text-[14px] sm:text-[16px] text-[#5C1F0A] font-semibold'>
                  +234 803 456 7890
                </p>
              </div>
              <div className='border border-[#D4C5A8] px-4 sm:px-6 py-4 rounded-2xl bg-white shadow-sm'>
                <h3 className='text-[11px] sm:text-[12px] text-[#8A7355] font-semibold mb-2'>
                  <i className="fa-solid fa-envelope mr-2 text-[#8A7355]"></i>EMAIL
                </h3>
                <p className='text-[14px] sm:text-[16px] text-[#5C1F0A] font-semibold break-all'>
                  hello@gracecathedral.ng
                </p>
              </div>
              <div className='border border-[#D4C5A8] px-4 sm:px-6 py-4 rounded-2xl bg-white shadow-sm'>
                <h3 className='text-[11px] sm:text-[12px] text-[#8A7355] font-semibold mb-2'>
                  <i className="fa-solid fa-map-marker mr-2 text-[#8A7355]"></i>ADDRESS
                </h3>
                <p className='text-[14px] sm:text-[16px] text-[#5C1F0A] font-semibold'>
                  14 Faith Ave, Abuja
                </p>
              </div>
              <div className='border border-[#D4C5A8] px-4 sm:px-6 py-4 rounded-2xl bg-white shadow-sm'>
                <h3 className='text-[11px] sm:text-[12px] text-[#8A7355] font-semibold mb-2'>
                  <i className="fa-solid fa-globe mr-2 text-[#8A7355]"></i>WEBSITE
                </h3>
                <p className='text-[14px] sm:text-[16px] text-[#5C1F0A] font-semibold'>
                  gracecathedral.ng
                </p>
              </div>
            </div>

            {/* Service Times */}
            <div className="border border-[#D4C5A8] px-4 sm:px-6 py-5 rounded-2xl bg-white shadow-sm">
              <h3 className='text-[13px] sm:text-[14px] text-[#5C1F0A] font-semibold mb-4'>
                SERVICE TIMES
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-2 border-b pb-3 border-[#D4C5A8]">
                  <span className='text-[13px] sm:text-[14px] text-[#8B3A14] font-semibold'>Sunday</span>
                  <span className='text-[13px] sm:text-[14px] text-[#8A7355] text-right'>1st Service – 7:00 AM</span>
                </div>
                <div className="flex justify-between items-center gap-2 border-b pb-3 border-[#D4C5A8]">
                  <span className='text-[13px] sm:text-[14px] text-[#8B3A14] font-semibold'>Sunday</span>
                  <span className='text-[13px] sm:text-[14px] text-[#8A7355] text-right'>2nd Service – 9:30 AM</span>
                </div>
                <div className="flex justify-between items-center gap-2 border-b pb-3 border-[#D4C5A8]">
                  <span className='text-[13px] sm:text-[14px] text-[#8B3A14] font-semibold'>Wednesday</span>
                  <span className='text-[13px] sm:text-[14px] text-[#8A7355] text-right'>Bible Study – 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center gap-2 shrink-0">
                  <span className='text-[13px] sm:text-[14px] text-[#8B3A14] font-semibold'>Friday</span>
                  <span className='text-[13px] sm:text-[14px] text-[#8A7355] text-right'>Youth Service – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex flex-col gap-4 border border-[#D4C5A8] px-4 sm:px-6 py-5 rounded-2xl bg-white shadow-sm w-full lg:w-96 xl:w-105 shrink-0">
            <h3 className='text-[13px] sm:text-[14px] text-[#5C1F0A] font-semibold'>
              SEND A MESSAGE
            </h3>
            <form className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder='Full Name' 
                required 
                className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017] w-full' 
              />
              <input 
                type="email" 
                placeholder='Email Address' 
                required 
                className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017] w-full' 
              />
              <input 
                type="text" 
                placeholder='Subject' 
                className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017] w-full' 
              />
              <textarea 
                placeholder='Your message...' 
                rows='5' 
                required 
                className='bg-[#F5E8D0] border-0 px-4 py-3 rounded-lg text-[14px] text-[#5C1F0A] placeholder-[#A08571] focus:outline-none focus:ring-2 focus:ring-[#D4A017] resize-none w-full'
              ></textarea>
              <button 
                type='submit' 
                className='bg-[#5C2414] text-white font-semibold text-[15px] sm:text-[16px] py-3 rounded-lg hover:bg-[#4a1d0f] transition-colors mt-2 w-full'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;