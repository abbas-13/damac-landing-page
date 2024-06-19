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
      <p className="font-poppins w-1/2 mb-8 font-light tracking-wide text-[#343434] text-center">
        Harbour Lights beautifully honours maritime voyages while embracing an
        opulent seafront lifestyle. Its maritime-inspired amenities provide an
        unmatched seaside experience, offering a life of tranquility and bliss.
      </p>
      <div
        className="flex justify-around w-4/5"
        style={{ position: "relative", height: "auto" }}
      >
        {featureShow.map((feature) => {
          return (
            <div
              className="flex flex-col min-h-max items-center relative"
              style={{ paddingBottom: "100px" }}
            >
              <div className="relative">
                <div className="absolute z-0 h-[190px] -right-[5px] -bottom-[5px] w-[190px] bg-[#EAEAEA] rounded-full"></div>
                <div className="relative z-10">{feature.img}</div>
              </div>
              <div className="w-52 absolute flex flex-col top-[90px] justify-end h-40 bg-white rounded-2xl shadow-[0_30px_40px_-10px_rgb(229,232,225)] z-5">
                <p className="text-[#00357B] w-full h-1/4 mb-4 font-poppins font-medium text-center z-10">
                  {feature.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-4/5 flex mb-8 mr-12 justify-end">
        <p className="font-poppins text-xs font-light text-gray-400">
          *T&Cs apply | ** Based on similar branded projects in the last 2
          years. <a>Source 1</a> | <a>Source 2</a>
        </p>
      </div>
    </div>
  );
}
