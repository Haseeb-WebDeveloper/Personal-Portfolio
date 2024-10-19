import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Haseeb Ahmed Raza Khan",
    "alternateName": "Haseeb Ahmed",
    "description": "Frontend Website Developer specializing in React, Next.js, and WordPress",
    "url": "https://haseebkhan.online",
    "sameAs": [
      "https://www.upwork.com/freelancers/~01b8c927b6fa311757",
      "https://www.instagram.com/haseeb.ahmed.raza.khan/",
      "https://pk.linkedin.com/in/haseeb-ahmed-raza-khan",
      "https://github.com/Haseeb-WebDeveloper/"
    ],
    "jobTitle": "Frontend Website Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "knowsLanguage": ["en", "ur", "hi"],
    "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "WordPress","Gsap", "Frontend Development"],
    "image": "haseeb.webp", 
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Pakistan"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
