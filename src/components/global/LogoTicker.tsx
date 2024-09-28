import React from 'react';
import Image from 'next/image';

export const LogoTicker: React.FC = () => {
  // Define the logo paths directly as strings
  const logos = [
    '/logo-acme.png',
    '/logo-apex.png',
    '/logo-celestial.png',
    '/logo-quantum.png',
    '/logo-pulse.png',
    '/logo-echo.png'
  ];

  return (
    <section className='py-4 md:py-6 bg-foreground rounded-b-2xl overflow-hidden mx-auto'>
        <div className='mx-auto relative'>
          <div className='LogoeConatiner overflow-hidden flex items-center justify-start border-none'>
            <div className='absolute z-[10] top-0 left-[-2px] w-28 h-full bg-gradient-to-r from-foreground to-transparent'></div>
            <div className='absolute z-[10] top-0 right-[-2px] w-28  h-full bg-gradient-to-l from-foreground to-transparent'></div>
            <div className='logoSilder flex flex-none'>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo} 
                  width={900}
                  height={900}
                  alt={`Logo ${index + 1}`}
                  className='hh-4 w-auto mx-4'
                />
              ))}
            </div>
            <div className='logoSilder flex flex-none'>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo} 
                  width={900}
                  height={900}
                  alt={`Logo ${index + 1}`}
                  className='hh-4 w-auto mx-4'
                />
              ))}
            </div>
            <div className='logoSilder flex flex-none'>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo} 
                  width={900}
                  height={900}
                  alt={`Logo ${index + 1}`}
                  className='hh-4 w-auto mx-4'
                />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};