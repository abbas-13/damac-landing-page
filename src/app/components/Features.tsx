import Image from "next/image";
import Logo2 from "/public/harbourlightslogo.png";
import FloatingPool from "/public/pictures.png";
import Cabins from "/public/pictures-2.png";
import SwimmingPool from "/public/pictures-3.png";
import Gym from "/public/pictures-4.png";

// Array of feature objects, each containing text and an image

export const featureShow = [
  {
    text: "Floating Pools",
    img: <Image width={180} src={FloatingPool} alt="floating pools" />,
  },
  {
    text: "Cabins",
    img: <Image width={180} src={Cabins} alt="cabins" />,
  },
  {
    text: "Swimming Pools",
    img: <Image width={180} src={SwimmingPool} alt="swimming pools" />,
  },
  {
    text: "Gym",
    img: <Image width={180} src={Gym} alt="gym" />,
  },
];

/**
 * Features component renders a section showcasing various features of the property.
 * It includes a logo, descriptive text, and a list of feature items with images.
 *
 * @returns {JSX.Element} The features section of the homepage.
 */

export default function Features() {
  return (
    <div className="relative overflow-hidden bg-[#F4F9FF] pt-24 pb-16">
      <div className="flex justify-center">
        <Image width={200} src={Logo2} alt="Harbour Lights Logo" />
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2 mb-12">
        <p className="font-oswald tracking-widest text-2xl text-[#00357B]">
          HARBOUR LIGHTS
        </p>
        <p className="font-poppins text-sm text-slate-600">
          A Nautical-Inspired Seafront Residence
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {featureShow.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 transition duration-300 ease-in-out transform hover:scale-105 hover:drop-shadow-xl"
          >
            {feature.img}
            <p className="font-poppins tracking-wide text-slate-600">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
