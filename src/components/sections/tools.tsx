'use client'
import { forProductIn, thingsICreate, toolsIUse } from '@/app/data/tools-data'
import { motion } from 'framer-motion'

const Tools = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const listItemVariants = {
    hidden: { 
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      }
    }
  }

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className='section'>
        <motion.div 
          className='pb-24 md:pb-32 flex flex-col items-center justify-center md:gap-12 gap-8'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div 
              className="text"
              variants={headerVariants}
            >
                <h2 className='text-3xl md:text-5xl font-medium text-center max-w-lg mx-auto leading-none'>
                  You&apos;ll catch me doing a combo of these:
                </h2>
            </motion.div>

            <div className='w-full flex flex-col md:flex-row gap-4 items-start md:justify-center'>
                <motion.div 
                  className='md:w-[300px] w-full rounded-md border-[1px] border-tertiary/5 flex flex-col justify-between bg-foreground/10'
                  variants={cardVariants}
                >
                    <div className='bg-chart-1 text-background font-medium rounded-t-md p-2'>
                        <h3 className='text-md text-center'>Things I Create</h3>
                    </div>
                    <ul className='flex flex-col'>
                        {thingsICreate.map((tool) => (
                            <motion.li 
                              key={tool.id} 
                              className={`py-2 px-3 text-foreground/90 ${tool.id !== thingsICreate.length ? 'border-b-[1px] border-primary/5' : ''}`}
                              variants={listItemVariants}
                            >
                                <h3 className='text-xl'>{tool.name}</h3>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                  className='mt-4 md:w-[300px] w-full rounded-md border-[1px] border-tertiary/5 flex flex-col justify-between bg-foreground/10'
                  variants={cardVariants}
                >
                    <div className='bg-chart-2 text-background font-medium rounded-t-md p-2'>
                        <h3 className='text-md text-center'>For Product In</h3>
                    </div>
                    <ul className='flex flex-col'>
                        {forProductIn.map((tool) => (
                            <motion.li 
                              key={tool.id} 
                              className={`py-2 px-3 ${tool.id !== forProductIn.length ? 'border-b-[1px] border-primary/5 text-foreground/90' : 'text-foreground/70'}`}
                              variants={listItemVariants}
                            >
                                <h3 className='text-xl'>{tool.name}</h3>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div 
                  className='md:w-[300px] w-full rounded-md border-[1px] border-tertiary/5 flex flex-col justify-between bg-foreground/10'
                  variants={cardVariants}
                >
                    <div className='bg-chart-3 text-background font-medium rounded-t-md p-2'>
                        <h3 className='text-md text-center'>Tools I Use</h3>
                    </div>
                    <ul className='flex flex-col'>
                        {toolsIUse.map((tool) => (
                            <motion.li 
                              key={tool.id} 
                              className={`py-2 px-3 text-foreground/90 ${tool.id !== toolsIUse.length ? 'border-b-[1px] border-primary/5' : ''}`}
                              variants={listItemVariants}
                            >
                                <h3 className='text-xl'>{tool.name}</h3>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Tools
