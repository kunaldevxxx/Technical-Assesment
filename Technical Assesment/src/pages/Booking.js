import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
    return (
      <div className="w-full relative bg-white flex flex-col items-center justify-start text-left text-sm text-white font-ibm-plex-sans">
         <div className="w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-black flex flex-row items-center justify-between p-2 box-border z-[7] text-sm">
        <div className="flex flex-row items-center justify-start py-0 px-2 gap-[0px_8px]">
          <img className="w-6 relative h-6" alt="" src="/icon.svg" />
          <div className="relative leading-[150%] font-semibold">
            ReserveOcean LTD.
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end gap-[0px_12px] text-xs">
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] font-semibold">Explore</div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] font-semibold">
              Services
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-0 px-4">
            <div className="relative leading-[160%] font-semibold">
              About Us
            </div>
          </div>
          <div className="rounded box-border h-[43px] flex flex-row items-center justify-center py-3 px-5 text-center border-[1px] border-solid border-white">
            <div className="flex flex-row items-center justify-center py-0 px-1">
            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
              Sign In
            </Link>
            </div>

          </div>
          <div className="rounded bg-darkorchid flex flex-row items-center justify-center py-3 px-5 text-center">
            <div className="flex flex-row items-center justify-center py-0 px-1">
            <Link to="/booking" style={{ textDecoration: 'none', color: 'inherit' }}>
              Book Stay
            </Link>
            </div>
          </div>
        </div>
      </div>
        <div className="self-stretch bg-black flex flex-col items-center justify-center py-40 px-4 gap-[40px_0px] z-[2] text-77xl font-inter">
          <div className="w-full flex flex-col items-center justify-center gap-[40px_0px] max-w-[1024px]">
            <b className="self-stretch relative text-48xl tracking-[-0.02em] leading-[104%]">
              Step 2
            </b>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-8 px-0 gap-[40px] border-b-[1px] border-solid border-aquamarine">
              <b className="flex-1 relative tracking-[-0.02em] leading-[100%] inline-block min-w-[96px] max-w-[280px]">
                2
              </b>
              <div className="flex flex-col items-center justify-center gap-[16px_0px] min-w-[220px] text-lg">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Choose Your Dates
                </div>
                <div className="self-stretch relative text-3xl leading-[130%] text-seagreen">
                  Select desired check-in and check-out.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-8 px-0 gap-[40px] border-b-[1px] border-solid border-aquamarine">
              <b className="flex-1 relative tracking-[-0.02em] leading-[100%] inline-block min-w-[96px] max-w-[280px]">
                3
              </b>
              <div className="flex-1 flex flex-col items-center justify-center gap-[16px_0px] min-w-[220px] text-lg">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Confirm Guest Details
                </div>
                <div className="self-stretch relative text-3xl leading-[130%] text-seagreen">
                  Specify the number of occupants.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-8 px-0 gap-[40px] border-b-[1px] border-solid border-aquamarine">
              <b className="flex-1 relative tracking-[-0.02em] leading-[100%] inline-block min-w-[96px] max-w-[280px]">
                4
              </b>
              <div className="flex-1 flex flex-col items-center justify-center gap-[16px_0px] min-w-[220px] text-lg">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Secure Your Reservation
                </div>
                <div className="self-stretch relative text-3xl leading-[130%] text-seagreen">
                  Finalize your room booking with ease.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-13xl bg-gray-400 flex flex-col items-center justify-center p-8 box-border gap-[16px_0px] max-w-[480px] text-center text-19xl text-whitesmoke-200 font-space-grotesk">
            <div className="self-stretch flex flex-col items-center justify-center">
              <b className="self-stretch relative tracking-[-0.02em] leading-[118%]">
               Enter Date
              </b>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px_0px] text-left text-sm">
            <div className="self-stretch rounded-lg flex flex-col items-start justify-center gap-[8px_0px]">
        <b className="self-stretch relative leading-[150%]">Date</b>
        <input
  type="date"
  value={selectedDate}
  onChange={handleDateChange}
  className="self-stretch rounded bg-gray-400 flex flex-row items-center justify-start p-4 text-white border-[1px] border-solid border-dimgray"
  required 
/>

      </div>
      <div className="self-stretch rounded-lg flex flex-col items-start justify-center gap-[8px_0px]">
        <b className="self-stretch relative leading-[150%]">Time</b>
        <input
  type="time"
  value={selectedTime}
  onChange={handleTimeChange}
  className="self-stretch rounded bg-gray-400 flex flex-row items-center justify-start p-4 text-white border-[1px] border-solid border-dimgray"
  required 
/>
      </div>
              <div className="self-stretch rounded-lg bg-darkcyan flex flex-row items-center justify-center py-4 px-6 text-center text-white">
                <div className="flex-1 h-[21px] flex flex-row items-center justify-center py-0 px-1 box-border">
                  <b className="flex-1 relative leading-[150%]">Proceed</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-whitesmoke-100 flex flex-col items-center justify-center py-40 px-4 gap-[40px_0px] z-[1] text-center text-32xl text-gray-300">
          <div className="w-full flex flex-col items-center justify-start gap-[12px_0px] max-w-[800px]">
            <b className="self-stretch relative tracking-[-0.02em] leading-[120%]">
              Exquisite Comfort
            </b>
            <div className="self-stretch relative text-sm leading-[150%] text-gray-200">
              Where design meets technology
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-[1200px] text-left text-lg">
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_16px] min-w-[272px] max-w-[400px]">
              <img className="w-8 relative h-8" alt="" src="/icon--icon.svg" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Smart Check-in
                </div>
                <div className="self-stretch relative text-sm leading-[150%] text-gray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Walk in and settle down instantly with our blockchain-powered
                  smart check-in.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_16px] min-w-[272px] max-w-[400px]">
              <img className="w-8 relative h-8" alt="" src="/icon--icon.svg" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Decentralized Payments
                </div>
                <div className="self-stretch relative text-sm leading-[150%] text-gray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Pay with crypto, enjoy unparalleled benefits and security.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_16px] min-w-[272px] max-w-[400px]">
              <img className="w-8 relative h-8" alt="" src="/icon--icon.svg" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Virtual Concierge
                </div>
                <div className="self-stretch relative text-sm leading-[150%] text-gray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  24/7 assistance via our AI-driven virtual concierge service.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_16px] min-w-[272px] max-w-[400px]">
              <img className="w-8 relative h-8" alt="" src="/icon--icon.svg" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Eco Smart Rooms
                </div>
                <div className="self-stretch relative text-sm leading-[150%] text-gray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Stay sustainably with our energy-efficient,
                  blockchain-integrated room controls.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_16px] min-w-[272px] max-w-[400px]">
              <img className="w-8 relative h-8" alt="" src="/icon--icon.svg" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Robotic Room Service
                </div>
                <div className="self-stretch relative text-sm leading-[150%] text-gray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Experience prompt delivery service by our friendly robot staff.
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[0px_16px] min-w-[272px] max-w-[400px]">
              <img className="w-8 relative h-8" alt="" src="/icon--icon.svg" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Immersive VR Tours
                </div>
                <div className="self-stretch relative text-sm leading-[150%] text-gray-200 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  Explore destinations before visiting with our virtual reality
                  room experiences.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start p-2 z-[0]">
          <div className="self-stretch rounded-3xl bg-black flex flex-col items-start justify-start py-8 px-10 gap-[32px_0px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-between">
              <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[248px]">
                <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                  <img className="w-8 relative h-8" alt="" src="/icon1.svg" />
                  <div className="relative leading-[150%] font-semibold">
                    ReserveOcean LTD
                  </div>
                </div>
                <div className="relative text-lg leading-[140%]">
                  Beyond Ordinary Stays
                </div>
              </div>
              <div className="flex-1 flex flex-row flex-wrap items-start justify-end gap-[40px] min-w-[280px]">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[108px]">
                  <div className="relative leading-[150%] font-semibold">
                    Company
                  </div>
                  <div className="relative leading-[150%]">About</div>
                  <div className="relative leading-[150%]">Careers</div>
                  <div className="relative leading-[150%]">Newsroom</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[108px]">
                  <div className="relative leading-[150%] font-semibold">
                    Blockchain Benefits
                  </div>
                  <div className="relative leading-[150%]">
                    Instant Transactions
                  </div>
                  <div className="relative leading-[150%]">Smart Contracts</div>
                  <div className="relative leading-[150%]">Latest Insights</div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[108px]">
                  <div className="relative leading-[150%] font-semibold">
                    Social
                  </div>
                  <div className="relative leading-[150%]">Twitter</div>
                  <div className="relative leading-[150%]">Instagram</div>
                  <div className="relative leading-[150%]">Threads</div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative bg-gray-200 h-px" />
            <div className="self-stretch flex flex-row items-center justify-between text-xs text-lightgray">
              <div className="relative leading-[160%]">© 2024</div>
              <div className="w-[612px] flex flex-row items-center justify-end gap-[0px_16px] text-sm text-white">
                <div className="relative leading-[150%]">Legal Info</div>
                <div className="relative leading-[150%]">Data Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Booking;
  