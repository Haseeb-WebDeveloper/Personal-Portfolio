import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Star: React.FC = () => {
  const starRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      starRef.current,
      {
        scale: 0.5,
        rotation: 0,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 360,
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#displaySection",
          start: "top 120%", // Trigger animation when the SVG enters 80% of the viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <svg
      ref={starRef}
      className="coolshapes star-8"
      fill="none"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#cs_clip_1_star-8)">
        <mask
          height="200"
          id="cs_mask_1_star-8"
          style={{ maskType: "alpha" }}
          width="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path
            d="M100 0c12.424 62.382 37.256 87.456 100 100-62.759 12.544-87.591 37.618-100 100-12.424-62.382-37.256-87.471-100-100C62.758 87.456 87.591 62.382 100 0z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#cs_mask_1_star-8)">
          <path d="M200 0H0v200h200V0z" fill="#fff" />
          <path
            d="M200 0H0v200h200V0z"
            fill="url(#paint0_linear_star-8)"
            fillOpacity="0.55"
          />
          <g filter="url(#filter0_f_748_star-8)">
            <path d="M213 69H93v141h120V69z" fill="#06F" />
          </g>
        </g>
      </g>
      <g style={{ mixBlendMode: "overlay" }} mask="url(#cs_mask_1_star-8)">
        <path
          d="M200 0H0v200h200V0z"
          fill="gray"
          stroke="transparent"
          filter="url(#cs_noise_1_star-8)"
        />
      </g>
      <defs>
        <filter
          height="266"
          id="filter0_f_748_star-8"
          width="245"
          x="30.5"
          y="6.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="BackgroundImageFix" floodOpacity="0" />
          <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
          <feGaussianBlur
            result="effect1_foregroundBlur_748_star-8"
            stdDeviation="31.25"
          />
        </filter>
        <linearGradient
          id="paint0_linear_star-8"
          gradientUnits="userSpaceOnUse"
          x1="162"
          x2="49.5"
          y1="38"
          y2="150.5"
        >
          <stop stopColor="#FF1F00" />
          <stop offset="1" stopColor="#FF58E4" />
        </linearGradient>
        <clipPath id="cs_clip_1_star-8">
          <path d="M0 0H200V200H0z" fill="#fff" />
        </clipPath>
      </defs>
      <defs>
        <filter
          height="100%"
          id="cs_noise_1_star-8"
          width="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
        >
          <feBlend result="out3" in="SourceGraphic" in2="out2" />
        </filter>
      </defs>
    </svg>
  );
};
