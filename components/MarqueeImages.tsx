"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const logos = [
  "/assets/nasaImage.png",
  "/assets/appleImage.png",
  "/assets/amazon_PNG5.png",
  "/assets/bdoImage.png",
  "/assets/facebookImage.png",
  "/assets/googleImage.png",
  "/assets/microsoftImage.png",
];

const MarqueeLogos = () => {
  return (
    <div className="w-full bg-white py-4 overflow-hidden"> {/* Ensure full width & same bg color */}
      <Marquee 
        speed={50} 
        gradient={true}  
        gradientWidth={250}  // Stronger fade effect
        gradientColor={[255, 255, 255]}  // Match background color
      >
        {logos.map((src, index) => (
          <div key={index} className="mx-6 flex items-center">
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeLogos;
