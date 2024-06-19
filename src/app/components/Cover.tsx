import Image from "next/image";
import CoverImg from "/public/coverimg.png";
import Logo from "/public/Logo.png";

export default function Cover() {
  return (
    <div className="relative">
      <div>
        <Image
          className="object-cover"
          src={CoverImg}
          alt="cityscape"
          priority
        />
      </div>
      <div className="absolute inset-0 w-2/3 bg-gradient-to-r from-[#0F375A] opacity-60"></div>
      <div className="my-8 flex mx-36 absolute top-0 w-auto flex-col justify-start">
        <div className="flex justify-between items-center">
          <Image src={Logo} alt="company-logo" className="w-1/5 h-4/5" />
          <button className="font-poppins font-semibold text-xs tracking-wide border-2 border-[#17ABFF] p-3 px-10 text-[#13abff] rounded-md transition duration-300 ease-in-out transform hover:bg-[#13abff] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#13abff] focus:ring-opacity-50 active:bg-[#0f9ae0]">
            ENQUIRE NOW
          </button>
        </div>
        <div className="flex justify-between">
          <div className="w-[60%] ">
            <div className="mt-24">
              <p className="font-oswald w-2/3 text-white font-medium tracking-wide leading-snug text-5xl uppercase mb-4">
                Harbour Lights de
                <span className="text-[#17abff]"> GRESOGONO</span>
              </p>
              <p className="font-poppins text-white w-5/6 font-semibold text-2xl">
                1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City
              </p>
            </div>
            <div className="w-fit">
              <div className="mt-12 mb-2 p-2 border-l-[3px] bg-[rgba(17,24,39,0.4)] backdrop-blur-[5px] border-[#17abff]">
                <span className="text-slate-200 text-sm font-light font-poppins">
                  Rental Returns of
                  <span className="font-semibold"> UPTO 11%**</span>
                </span>
              </div>
              <div className="mt-2 p-2 pr-8 border-l-[3px] bg-[rgba(17,24,39,0.4)] backdrop-blur-[5px] border-[#17abff]">
                <span className="text-slate-200 font-light text-sm font-normal font-poppins">
                  Capital Appreciation of
                  <span className="font-semibold"> UPTO 32%**</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[28%] overflow-hidden">
            <div className="mt-24 p-6 py-8 flex flex-col bg-[rgba(12,74,110,0.25)] gap-4 rounded-t-2xl border-b border-[#2b3541] backdrop-blur-[8px]">
              <p className="text-xs text-white font-light tracking-widest">
                PRICING STARTS FROM
              </p>
              <p className="text-5xl font-medium text-white font-oswald">
                $ 425,000
              </p>
              <p className="text-2xl font-normal text-white font-oswald tracking-wide">
                AED 1.3 Million
              </p>
              <button className="p-4 px-6 text-white font-poppins font-semibold tracking-wider text-xs bg-sky-500 rounded transition duration-300 ease-in-out transform hover:bg-sky-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 active:bg-sky-700">
                GET A PRESENTATION
              </button>
            </div>
            <div className="p-3 px-6 flex flex-col bg-[rgba(12,74,110,0.4)] gap-5 border border-[#3D4C5D] rounded-b-2xl backdrop-blur-[8px]">
              <p className="font-poppins text-[#98c5e8] font-extralight text-xs">
                Get an Expert’s Presentation of Real Estate in Dubai for Life
                and investment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
