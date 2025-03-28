import React from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/CUF.svg", alt: "Logo 1" },
  { src: "/logos/kebony.svg", alt: "Logo 2" },
  { src: "/logos/maldegem.svg", alt: "Logo 3" },
  { src: "/logos/NEXGEN.svg", alt: "Logo 4" },
  { src: "/logos/Sangoma.svg", alt: "Logo 5" },
  { src: "/logos/VIB.svg", alt: "Logo 6" },
  { src: "/logos/Webbeds.svg", alt: "Logo 7" },
];

const LogoSlider = () => {
  return (
    <div className="slider overflow-hidden relative py-6 ml-20 mr-20">
      <div className="slide-track flex animate-scroll">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="slide flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={50}
              className="object-contain w-[150px] h-[60px]"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoSlider