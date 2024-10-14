// Import Spline and other dependencies
import Spline from '@splinetool/react-spline/next';
// import Image from 'next/image';
import React, { useState, useEffect } from 'react';

// Define the component without async, and add a loading state
export default function Ai() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Once the component is mounted, set loading to false
    setIsLoading(false);
  }, []);

  return (
    <main>
      {isLoading ? (
        <>
         
        </>
      ) : (
        <Spline
          scene="https://prod.spline.design/X0nPXuw7E9SmtLwc/scene.splinecode"
          onLoad={() => setIsLoading(false)} // Handle once fully loaded
        />
      )}
    </main>
  );
}
