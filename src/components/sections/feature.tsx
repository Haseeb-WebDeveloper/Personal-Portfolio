import React from 'react'
import Image from 'next/image'
import feature from '@/app/data/feature-data'
type Props = {
    feature: typeof feature
}

const Feature = ( {feature}: Props) => {
  return (
    <section className='section mx-auto section-my'>
        <div id='text' className=' flex flex-col items-center justify-center gap-8'>
            <div className='w-full h-full flex flex-col items-center justify-center'>
            <h2 className=' text-3xl font-semibold text-center max-w-md mx-auto'>
                Why Our Unique Features Make All the Difference
            </h2>
            </div>
            <div id='banto-cards-layout' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-content-center'>
                {feature.map((item) => (
                    <div key={item.id} className={`relative bg-card rounded-md border-[1px] border-tertiary/5 p-4 flex flex-col gap-2 justify-between`}>
                    <div id="img" className='relative rounded-xl '>
                        <Image src={item.image} alt={item.title} width={200} height={200} className='w-24 h-24 object-contain rounded-xl' />
                        <div className='absolute bottom-0 left-0 bg-gradient-to-t from-card to-transparent w-full h-1/3 rounded-xl'></div>
                    </div>
                    <div id="text">
                        <h3 className='text-xl'>{item.title}</h3>
                        <p className='text-card-foreground text-sm'>{item.description}</p>
                    </div>  
                    {item.new && <div className='absolute top-4 right-4 rounded-md px-2.5 py-0.5 text-sm bg-primary text-primary-foreground flex items-center justify-center border-secondary/[8%] border-[1px] shadow-sm'><span className='text-xs font-semibold'>New</span></div> }
                </div>  
                ))}
            </div>
        </div>
    </section>
  )
}

export default Feature