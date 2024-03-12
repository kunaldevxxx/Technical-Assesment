const Payment = () => {
    return (
      <div className="w-full relative bg-colors-neutral-white flex flex-col items-center justify-start text-left text-sm text-colors-neutral-white font-ibm-plex-sans">
        <div className="w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] bg-black flex flex-row items-center justify-between p-2 box-border z-[3]">
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
            <div className="rounded box-border h-[43px] flex flex-row items-center justify-center py-3 px-5 text-center border-[1px] border-solid border-colors-neutral-white">
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
        <div className="self-stretch bg-black flex flex-col items-center justify-center py-40 px-4 gap-[40px_0px] z-[2] text-48xl font-inter">
          <div className="w-full flex flex-col items-center justify-center max-w-[1024px]">
            <b className="self-stretch relative tracking-[-0.02em] leading-[104%]">
              Payment Method
            </b>
          </div>
          <div className="w-[1012px] relative bg-black h-[812px] overflow-hidden shrink-0 text-xl font-abeezee">
            <div className="absolute top-[130px] left-[0px] w-[375px] h-[88px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
              <div className="absolute h-[0.57%] w-[100.13%] top-[99.77%] right-[-0.08%] bottom-[-0.34%] left-[-0.05%] box-border border-t-[0.5px] border-solid border-divider-light-1px-60" />
              <img
                className="absolute h-[31.82%] w-[7.47%] top-[34.09%] right-[3.57%] bottom-[34.09%] left-[88.96%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/chevronschevronright.svg"
              />
              <div className="absolute w-[33.79%] top-[35.8%] left-[22.13%] leading-[25px] flex items-center">
                Visa
              </div>
              <img
                className="absolute h-[54.55%] w-[12.8%] top-[22.73%] right-[81.87%] bottom-[22.73%] left-[5.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/money--visa.svg"
              />
            </div>
            <div className="absolute top-[233px] left-[0px] w-[375px] h-[88px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
              <div className="absolute h-[0.57%] w-[100.13%] top-[99.77%] right-[-0.08%] bottom-[-0.34%] left-[-0.05%] box-border border-t-[0.5px] border-solid border-divider-light-1px-60" />
              <img
                className="absolute h-[31.82%] w-[7.47%] top-[34.09%] right-[3.57%] bottom-[34.09%] left-[88.96%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/chevronschevronright.svg"
              />
              <div className="absolute w-[33.79%] top-[35.8%] left-[22.13%] leading-[25px] flex items-center">
                MasterCard
              </div>
              <img
                className="absolute h-[54.55%] w-[12.8%] top-[22.73%] right-[81.87%] bottom-[22.73%] left-[5.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/money--mastercard.svg"
              />
            </div>
            <div className="absolute top-[336px] left-[0px] w-[375px] h-[88px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
              <div className="absolute h-[0.57%] w-[100.13%] top-[99.77%] right-[-0.08%] bottom-[-0.34%] left-[-0.05%] box-border border-t-[0.5px] border-solid border-divider-light-1px-60" />
              <img
                className="absolute h-[31.82%] w-[7.47%] top-[34.09%] right-[3.57%] bottom-[34.09%] left-[88.96%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/chevronschevronright.svg"
              />
              <div className="absolute top-[35.8%] left-[22.13%] leading-[25px]">
                American Express
              </div>
              <img
                className="absolute h-[54.55%] w-[12.8%] top-[22.73%] right-[81.87%] bottom-[22.73%] left-[5.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/money--amex.svg"
              />
            </div>
            <div className="absolute top-[439px] left-[0px] w-[375px] h-[88px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
              <div className="absolute h-[0.57%] w-[100.13%] top-[99.77%] right-[-0.08%] bottom-[-0.34%] left-[-0.05%] box-border border-t-[0.5px] border-solid border-divider-light-1px-60" />
              <img
                className="absolute h-[31.82%] w-[7.47%] top-[34.09%] right-[3.57%] bottom-[34.09%] left-[88.96%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/chevronschevronright.svg"
              />
              <div className="absolute w-[33.79%] top-[35.8%] left-[22.13%] leading-[25px] flex items-center">
                PayPal
              </div>
              <img
                className="absolute h-[54.55%] w-[12.8%] top-[22.73%] right-[81.87%] bottom-[22.73%] left-[5.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/money--paypal.svg"
              />
            </div>
            <div className="absolute top-[542px] left-[0px] w-[375px] h-[88px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-black" />
              <div className="absolute h-[0.57%] w-[100.13%] top-[99.77%] right-[-0.08%] bottom-[-0.34%] left-[-0.05%] box-border border-t-[0.5px] border-solid border-divider-light-1px-60" />
              <img
                className="absolute h-[31.82%] w-[7.47%] top-[34.09%] right-[3.57%] bottom-[34.09%] left-[88.96%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/chevronschevronright.svg"
              />
              <div className="absolute w-[33.79%] top-[35.8%] left-[22.13%] leading-[25px] flex items-center">
                Diners
              </div>
              <img
                className="absolute h-[54.55%] w-[12.8%] top-[22.73%] right-[81.87%] bottom-[22.73%] left-[5.33%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/money--diners.svg"
              />
            </div>
            <div className="absolute top-[198px] left-[602px] w-[325px] h-[364px] text-smi text-gainsboro">
              <div className="absolute w-[46.15%] top-[56.87%] left-[53.85%] text-2xs leading-[13px] text-colors-neutral-gray-3 inline-block opacity-[0.7] mix-blend-normal">
                3 or 4 digits usually found on the signature strip
              </div>
              <div className="absolute h-[13.74%] w-full top-[0%] right-[0%] bottom-[86.26%] left-[0%] overflow-hidden">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-8xs bg-black box-border h-[50px] border-[1px] border-solid border-divider-light-1px-60" />
                <i className="absolute top-[16px] left-[20px] leading-[18px] flex items-center w-[285px]">
                  Name on Card
                </i>
              </div>
              <div className="absolute h-[13.74%] w-[47.69%] top-[35.71%] right-[52.31%] bottom-[50.55%] left-[0%] overflow-hidden">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-8xs bg-black box-border h-[50px] border-[1px] border-solid border-divider-light-1px-60" />
                <img
                  className="absolute top-[calc(50%_-_14.1px)] right-[9.7px] w-7 h-7 overflow-hidden"
                  alt=""
                  src="/chevronschevrondown.svg"
                />
                <i className="absolute top-[16px] left-[20px] leading-[18px] flex items-center w-[285px]">
                  Month
                </i>
              </div>
              <div className="absolute h-[13.74%] w-[47.69%] top-[35.71%] right-[0%] bottom-[50.55%] left-[52.31%] overflow-hidden">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-8xs bg-black box-border h-[50px] border-[1px] border-solid border-divider-light-1px-60" />
                <img
                  className="absolute top-[calc(50%_-_14.1px)] right-[9.7px] w-7 h-7 overflow-hidden"
                  alt=""
                  src="/chevronschevrondown.svg"
                />
                <i className="absolute top-[16px] left-[20px] leading-[18px] flex items-center w-[285px]">
                  Year
                </i>
              </div>
              <div className="absolute h-[13.74%] w-full top-[17.86%] right-[0%] bottom-[68.41%] left-[0%] overflow-hidden">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-8xs bg-black box-border h-[50px] border-[1px] border-solid border-divider-light-1px-60" />
                <i className="absolute top-[16px] left-[20px] leading-[18px] flex items-center w-[285px]">
                  Card Number
                </i>
              </div>
              <div className="absolute h-[13.74%] w-[47.69%] top-[53.57%] right-[52.31%] bottom-[32.69%] left-[0%] overflow-hidden">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-8xs bg-black box-border h-[50px] border-[1px] border-solid border-divider-light-1px-60" />
                <i className="absolute top-[16px] left-[20px] leading-[18px] flex items-center w-[285px]">
                  CVC
                </i>
              </div>
              <div className="absolute h-[13.74%] w-full top-[86.13%] right-[0%] bottom-[0.14%] left-[0%] shadow-[0px_4px_4px_rgba(50,_50,_71,_0.08),_0px_4px_8px_rgba(50,_50,_71,_0.06)] text-center text-base text-colors-neutral-white">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle.svg"
                />
                <i className="absolute w-full top-[28%] left-[0%] leading-[22px] flex items-center justify-center">
                  Add now
                </i>
              </div>
              <div className="absolute top-[75.14%] left-[19.38%] text-2xs leading-[13px] text-colors-neutral-white">
                SET AS DEFAULT
              </div>
              <div className="absolute h-[7.69%] w-[14.77%] top-[72.88%] right-[85.23%] bottom-[19.42%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-dimgray-100 shadow-[0px_4px_4px_rgba(50,_50,_71,_0.08),_0px_4px_8px_rgba(50,_50,_71,_0.06)]" />
                </div>
                <img
                  className="absolute h-[85.71%] w-6/12 top-[7.14%] right-[45.63%] bottom-[7.14%] left-[4.38%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/oval.svg"
                />
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
              <div className="w-[612px] flex flex-row items-center justify-end gap-[0px_16px] text-sm text-colors-neutral-white">
                <div className="relative leading-[150%]">Legal Info</div>
                <div className="relative leading-[150%]">Data Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Payment;
  