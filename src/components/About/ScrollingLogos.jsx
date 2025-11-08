import React from "react";
import "./ScrollingLogos.css";

const ScrollingLogos = () => {
  const logos = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
  ];

  return (
    <div className="scrolling-logos-section">
      <div className="scrolling-logos-track">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="scrolling-logo"
          />
        ))}
        {/* duplicate for smooth infinite loop */}
        {logos.map((logo, index) => (
          <img
            key={`dup-${index}`}
            src={logo}
            alt={`Logo duplicate ${index + 1}`}
            className="scrolling-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
