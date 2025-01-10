'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Project, toolProjects } from '@/app/data/project-data'






const ToolProjects = () => {
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

  const projectVariants = {
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

  return (
    <section className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-4 "
      >
        <div className="text-left">
          <h2 className="text-3xl md:text-5xl font-medium"><span className='text-primary'>Tools</span> Website I have built 💫</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="bg-foreground/10 rounded-lg overflow-hidden border border-foreground/10 hover:border-foreground/20 transition-all duration-300 flex flex-col "
            >
              <div className="relative h-48 overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              <div className="p-6 flex flex-col gap-4 justify-between items-start ">
                <div className='flex flex-col'>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-foreground/70 text-sm">{project.description}</p>
                </div>
                
                <div className='flex flex-col gap-2'>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 bg-foreground/5 rounded-full text-foreground/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2 ">
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="text-sm px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-md transition-colors duration-200"
                    >
                      Live Demo
                    </Link>
                  )}
                  {project.code && (
                    <Link
                      href={project.code}
                      target="_blank"
                      className="text-sm px-4 py-2 bg-foreground/10 hover:bg-foreground/20 rounded-md transition-colors duration-200"
                    >
                      View Code
                    </Link>
                  )}
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ToolProjects
