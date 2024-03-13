import React, { useCallback, useState } from "react";

const LoginAndSignup = () => {
  const [email, setEmail] = useState(""); 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onGoogleLoginContainerClick = useCallback(() => {
    window.open("https://myaccount.google.com/");
  }, []);

  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-start text-left text-sm text-white font-ibm-plex-sans">
      <div className="w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-black flex flex-row items-center justify-between p-2 box-border z-[5]">
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
              <div className="relative leading-[160%] font-semibold">
                Sign In
              </div>
            </div>
          </div>
          <div className="rounded bg-darkorchid flex flex-row items-center justify-center py-3 px-5 text-center">
            <div className="flex flex-row items-center justify-center py-0 px-1">
              <div className="relative leading-[160%] font-semibold">
                Book Stay
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col items-center justify-center py-40 px-4 gap-[40px_0px] z-[4] text-77xl font-inter">
        <div className="w-full flex flex-col items-center justify-center gap-[40px_0px] max-w-[1024px]">
          <b className="self-stretch relative text-48xl tracking-[-0.02em] leading-[104%]">
            Seamless Booking Steps
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-8 px-0 gap-[40px] border-b-[1px] border-solid border-aquamarine">
            <b className="flex-1 relative tracking-[-0.02em] leading-[100%] inline-block min-w-[96px] max-w-[280px]">
              1
            </b>
            <div className="flex-1 flex flex-col items-center justify-center gap-[16px_0px] min-w-[220px] text-lg">
              <div className="self-stretch relative leading-[140%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                Sign Up And Login
              </div>
              <div className="self-stretch relative text-3xl leading-[130%] text-seagreen">{`Sign Up With Your Details `}</div>
            </div>
          </div>
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
        <div className="w-full rounded-13xl bg-gray-400 flex flex-col items-center justify-center p-8 box-border gap-[16px_0px] max-w-[480px] text-center text-sm text-whitesmoke-200 font-space-grotesk">
          <div className="self-stretch flex flex-col items-center justify-center gap-[8px_0px] text-19xl">
            <img
              className="w-24 relative rounded-[200px] h-24 overflow-hidden shrink-0 object-cover"
              alt=""
              src="/image--lummi@2x.png"
            />
            <b className="self-stretch relative tracking-[-0.02em] leading-[118%]">
              Register
            </b>
            <div className="self-stretch relative text-lg leading-[140%] text-white">
              Start Your Journey!
            </div>
          </div>
          <div
            className="self-stretch rounded-lg bg-darkslategray-100 flex flex-row items-center justify-center py-4 px-2 gap-[0px_12px] cursor-pointer border-[1px] border-solid border-dimgray"
            onClick={onGoogleLoginContainerClick}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/google-icon.svg"
            />
            <b className="relative leading-[150%]">Signup via Google</b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[0px_24px] text-xs text-white">
            <div className="flex-1 relative bg-dimgray h-px overflow-hidden" />
            <b className="relative leading-[160%]">or</b>
            <div className="flex-1 relative bg-dimgray h-px overflow-hidden" />
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px_0px] text-left">
        <div className="self-stretch rounded-lg flex flex-col items-start justify-start gap-[4px_0px]">
          <b className="self-stretch relative leading-[150%]">Email Address</b>
          <div className="self-stretch rounded bg-gray-400 flex flex-row items-center justify-start p-4 text-white border-[1px] border-solid border-dimgray">
            <input
              type="email"
              value={email} 
              onChange={handleEmailChange} 
              className="flex-1 relative leading-[150%] overflow-hidden text-ellipsis whitespace-nowrap bg-transparent border-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
            <div className="self-stretch rounded-lg bg-darkcyan flex flex-row items-center justify-center py-4 px-6 text-center text-white">
              <div className="flex-1 h-[21px] flex flex-row items-center justify-center py-0 px-1 box-border">
                <b className="flex-1 relative leading-[150%]">
                  Proceed with Email
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-xs leading-[160%] text-white">
            Accepting terms confirms your consent.
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-col items-center justify-center py-40 px-4 gap-[40px_0px] z-[3] text-center text-32xl text-whitesmoke-200 font-space-grotesk">
        <div className="w-full flex flex-col items-center justify-center min-w-[304px] max-w-[720px]">
          <div className="self-stretch flex flex-col items-start justify-center gap-[16px_0px]">
            <b className="self-stretch relative tracking-[-0.02em] leading-[120%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              Seamless Integration
            </b>
            <div className="self-stretch relative text-3xl leading-[130%] text-white">
              A quick guide to our futuristic approach.
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap items-start justify-center gap-[40px] max-w-[1200px] text-xs text-lightseagreen">
          <div className="flex-1 flex flex-col items-start justify-center gap-[16px_0px] min-w-[280px] max-w-[360px]">
            <img
              className="self-stretch relative rounded-13xl max-w-full overflow-hidden h-56 shrink-0 object-cover"
              alt=""
              src="/image--lummi@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-center gap-[8px_0px]">
              <b className="self-stretch relative leading-[160%]">Step 1</b>
              <b className="self-stretch relative text-3xl leading-[130%] text-whitesmoke-200 overflow-hidden text-ellipsis whitespace-nowrap">
                Create Profile
              </b>
              <div className="self-stretch relative text-sm leading-[150%] text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Set up your digital identity in moments.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[16px_0px] min-w-[280px] max-w-[360px]">
            <img
              className="self-stretch relative rounded-13xl max-w-full overflow-hidden h-56 shrink-0 object-cover"
              alt=""
              src="/image--lummi@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-center gap-[8px_0px]">
              <b className="self-stretch relative leading-[160%]">Step 2</b>
              <b className="self-stretch relative text-3xl leading-[130%] text-whitesmoke-200 overflow-hidden text-ellipsis whitespace-nowrap">
                Select Preferences
              </b>
              <div className="self-stretch relative text-sm leading-[150%] text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Customize your stay with advanced AI.
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-center gap-[16px_0px] min-w-[280px] max-w-[360px]">
            <img
              className="self-stretch relative rounded-13xl max-w-full overflow-hidden h-56 shrink-0 object-cover"
              alt=""
              src="/image--lummi@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-center gap-[8px_0px]">
              <b className="self-stretch relative leading-[160%]">Step 3</b>
              <b className="self-stretch relative text-3xl leading-[130%] text-whitesmoke-200 overflow-hidden text-ellipsis whitespace-nowrap">
                Enjoy Luxury
              </b>
              <div className="self-stretch relative text-sm leading-[150%] text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                Immerse in unparalleled comfort and style.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black flex flex-row flex-wrap items-start justify-center z-[2] text-lg text-whitesmoke-200 font-space-grotesk">
        <img
          className="flex-1 max-w-full overflow-hidden h-[803px] object-cover min-w-[320px]"
          alt=""
          src="/benefits-image--lummi@2x.png"
        />
        <div className="flex-1 h-[803px] flex flex-row items-center justify-center py-20 px-4 box-border min-w-[320px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[40px_0px] min-w-[320px] max-w-[416px]">
            <div className="self-stretch flex flex-row items-start justify-start py-2 px-6 text-19xl">
              <b className="flex-1 relative tracking-[-0.02em] leading-[118%]">
                Exclusive Offers
              </b>
            </div>
            <div className="self-stretch rounded-13xl bg-darkslategray-100 flex flex-col items-start justify-start py-4 px-6 gap-[4px_0px]">
              <b className="self-stretch relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                Digital Key Access
              </b>
              <div className="self-stretch relative text-sm leading-[150%] text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                Unlock rooms with a secure blockchain key.
              </div>
            </div>
            <div className="self-stretch rounded-13xl bg-darkslategray-100 flex flex-col items-start justify-start py-4 px-6 gap-[4px_0px]">
              <b className="self-stretch relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                Custom Itineraries
              </b>
              <div className="self-stretch relative text-sm leading-[150%] text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                AI curates personalized experiences for you.
              </div>
            </div>
            <div className="self-stretch rounded-13xl bg-darkslategray-100 flex flex-col items-start justify-start py-4 px-6 gap-[4px_0px]">
              <b className="self-stretch relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                Robotic Service
              </b>
              <div className="self-stretch relative text-sm leading-[150%] text-white [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                Enjoy 24/7 service from our robotic staff.
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

export default LoginAndSignup;
