'use client'
import testimonialData from '@/app/data/testimonial-data';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {}

function Testimonial({}: Props) {
  // Track card positions for drag handling
  const [positions, setPositions] = useState(
    testimonialData.map(item => ({
      id: item.id,
      x: 0, 
      y: 0,
    }))
  );

  const handleDrag = (id: number, e: any, info: any) => {
    setPositions(prev =>
      prev.map(pos =>
        pos.id === id ? { ...pos, x: info.point.x, y: info.point.y } : pos
      )
    );
  };

  // Create a ref for the drag container
  const dragAreaRef = useRef<HTMLDivElement>(null);

  return (
    <section className='section mx-auto section-my'>
      <div>
        <div className=' gap-6 justify-between '>
          {/* Left side: Text */}
          <div id="text" className='  '>
            <h2 className='text-3xl font-semibold'>
              What Our Clients Say
            </h2>
            <p className='text-card-foreground text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>

          {/* Right side: Draggable cards inside a bounded area */}
          <div 
          id="draggable-cards" 
          className='bg-tertiary relative h-[450px] rounded-xl overflow-hidden ' 
          ref={dragAreaRef}
          style={{
            // boxShadow: 'inset 0 0 2px 0 rgba(0, 0, 0, 0.1)'
          }}>
            {testimonialData.map((item, index) => (
              <motion.div
                key={item.id}
                drag
                dragConstraints={dragAreaRef} // Restrict cards to the drag area
                onDrag={(e, info) => handleDrag(item.id, e, info)}
                className={`max-w-[350px] absolute  rounded-md border-[1px] border-tertiary/5 cursor-grab ${item.initialPosition}`}
                style={{ x: positions[index].x, y: positions[index].y }} // Use state for position
              >
                <div className='bg-primary   rounded-lg  p-4'>
                  <div id="img" className='relative rounded-xl'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className='w-24 h-24 object-contain rounded-xl'
                    />
                    <div className='absolute bottom-0 left-0 bg-gradient-to-t from-primary to-transparent w-full h-1/3 rounded-xl'></div>
                  </div>
                  <div id="text">
                    <h3 className='text-xl'>{item.name}</h3>
                    <p className='text-card-foreground text-sm'>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
