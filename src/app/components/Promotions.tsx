import Image from "next/image";
import Area from "/public/area .png";
import Book from "/public/book.png";
import Handover from "/public/handover.png";
import Plan from "/public/plan.png";

export default function Promotions() {
  return (
    <div>
      <div className=" flex justify-around h-auto w-full p-8 bg-[#F4F9FF]">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src={Book}
            alt="building"
            width={60}
            className="transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg"
          />
          <div className="transition flex flex-col items-center duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-xl">
            <p className="font-poppins mt-2 text-[#00357B]">BOOK WITH</p>
            <p className="font-oswald font-medium tracking-widest text-2xl text-[#00357B]">
              ONLY 20%
            </p>
          </div>
        </div>
        <div className="flex flex-col group items-center cursor-pointer">
          <Image
            src={Plan}
            alt="percentage"
            width={60}
            className="transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg"
          ></Image>
          <div className="transition flex flex-col items-center duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-xl">
            <p className="font-poppins mt-2 text-[#00357B]">PAYMENT PLAN</p>
            <p className="font-oswald font-medium tracking-widest text-2xl text-[#00357B]">
              EASY 70/30
            </p>
          </div>
        </div>
        <div className="flex flex-col group items-center cursor-pointer">
          <Image
            src={Handover}
            alt="keys in hand"
            width={60}
            className="transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg"
          ></Image>
          <div className="transition flex flex-col items-center duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-xl">
            <p className="font-poppins mt-2 text-[#00357B]">HANDOVER ON</p>
            <p className="font-oswald font-medium tracking-widest text-2xl text-[#00357B]">
              Q2 2027
            </p>
          </div>
        </div>
        <div className="flex flex-col group items-center cursor-pointer">
          <Image
            src={Area}
            alt="ruler"
            width={60}
            className="transition duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-lg"
          ></Image>
          <div className="transition flex flex-col items-center duration-300 ease-in-out transform group-hover:scale-110 group-hover:drop-shadow-xl">
            <p className="font-poppins mt-2 text-[#00357B]">AREA STARTS FROM</p>
            <p className="font-oswald font-medium tracking-widest text-2xl text-[#00357B]">
              700 SQMT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
