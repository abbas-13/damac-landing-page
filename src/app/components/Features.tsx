import Image from "next/image";
import Logo2 from "/public/harbourlightslogo.png";
import FloatingPool from "/public/pictures.png";
import Cabins from "/public/pictures-2.png";
import SwimmingPool from "/public/pictures-3.png";
import Gym from "/public/pictures-4.png";

export const featureShow = [
  {
    text: "Floating Pools",
    img: <Image width={180} src={FloatingPool} alt="floating pool"></Image>,
  },
  {
    text: "Spacious Cabins Like Rooms",
    img: <Image width={180} src={Cabins} alt="living rooms"></Image>,
  },
  {
    text: "Sea Facing Swimming Pools",
    img: <Image width={180} src={SwimmingPool} alt="swimming pool"></Image>,
  },
  {
    text: "Gymnasium & Fitness",
    img: <Image width={180} src={Gym} alt="gymnasium"></Image>,
  },
];

export default function Features() {
  return (
    <div className="flex flex-col justify-around min-h-max items-center">
      <Image
        src={Logo2}
        width={175}
        className="mt-12"
        alt="harbour lights de grisogono by geneveve"
      ></Image>
      <p className="font-oswald mt-8 mb-4 text-4xl font-medium tracking-wide text-[#00357B]">
        FEATURES & AMENITIES
      </p>
      <p className="font-poppins w-11/12 sm:w-1/2 mb-8 font-light tracking-wide text-[#343434] text-center">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      <div
        className="flex flex-wrap justify-around sm:w-full md:w-4/5"
        style={{ position: "relative", height: "auto" }}
      >
        {featureShow.map((feature) => {
          return (
            <div
              className="flex flex-col sm:min-h-max items-center mx-4 relative"
              style={{ paddingBottom: "100px" }}
            >
              <div className="relative">
                <div className="absolute z-0 h-[124px] w-[124px] md:h-[190px] md:w-[190px] -bottom-[3px] -right-[4px] md:-bottom-[5px] bg-[#EAEAEA] rounded-full"></div>
                <div className="relative z-10 h-[117px] w-[117px] md:h-[180px] md:w-[180px]">
                  {feature.img}
                </div>
              </div>
              <div className="w-[145px] h-[102px] md:w-52 md:h-40 absolute flex flex-col top-[70px] md:top-[90px] justify-end items-center bg-white rounded-2xl shadow-[0_30px_40px_-10px_rgb(229,232,225)] z-5">
                <p className="text-[#00357B] w-3/4 md:w-2/3 h-1/4 mb-4 font-poppins text-xs md:text-sm font-medium text-center z-10">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-11/12 md:w-4/5 flex mb-8 sm:mr-12 justify-center md:justify-end">
        <p className="font-poppins text-xs text-center font-light text-gray-400">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. <a>Source 1</a> | <a>Source 2</a>
        </p>
      </div>
    </div>
  );
}
