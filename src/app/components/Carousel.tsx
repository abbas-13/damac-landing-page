import { useEffect, useState } from "react";
import Image from "next/image";

import Image1 from "/public/image1.jpg";
import Image2 from "/public/image2.jpg";
import Image3 from "/public/image3.jpg";
import Image4 from "/public/image4.jpg";
import Image5 from "/public/image5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

interface LightboxProps {
  src: any;
  onClose: () => void;
}

export const Lightbox = ({ src, onClose }: LightboxProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <Image
        className="max-h-full rounded-2xl max-w-full transition-transform duration-300 transform hover:scale-105"
        src={src}
        alt="Enlarged"
      />
    </div>
  );
};

export default function Carousel() {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string>("");

  const openLightbox = (src: any) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc("");
  };

  const handleClick = (image: any) => {
    setSelectedImage(image);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="w-full relative mx-auto rounded-2xl mt-8">
        <Image
          src={selectedImage}
          alt="Selected"
          className="w-full rounded-xl cursor-pointer transition-transform duration-300 transform hover:scale-105"
          onClick={() => openLightbox(selectedImage)}
        />
        <button
          className="absolute z-50 left-4 top-1/2 bg-white text-[#00357B] rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-transform duration-300 transform hover:scale-105"
          onClick={handlePrev}
        >
          {"<"}
        </button>

        <button
          className="absolute z-50 right-4 top-1/2  bg-white text-[#00357B] rounded-full w-10 h-10 flex items-center justify-center focus:outline-none transition-transform duration-300 transform hover:scale-105"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
      <div className="flex w-full justify-around gap-4 mt-8">
        {images.map((image, index) => {
          if (image !== selectedImage) {
            return (
              <div
                key={index}
                onClick={() => handleClick(image)}
                className="cursor-pointer transition-transform duration-300 transform hover:scale-105"
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="rounded-xl"
                />
              </div>
            );
          }
        })}
      </div>
      {lightboxOpen && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
    </div>
  );
}
