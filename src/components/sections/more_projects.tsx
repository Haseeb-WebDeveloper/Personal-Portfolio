'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Define the project type
type Project = {
  id: number
  title: string
  description: string
  image: string
  tools: string[]
  live?: string
  code?: string
}

// Sample project data
const recentProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A modern dashboard for managing online store operations with real-time analytics and inventory management.",
    image: "/ecommerce-dashboard.webp",
    tools: ["React", "TypeScript", "Tailwind", "Redux"],
    live: "https://dashboard-demo.com",
    code: "https://github.com/username/dashboard"
  },
  {
    id: 2,
    title: "AI Chat Interface",
    description: "A sleek chat interface powered by AI, featuring real-time responses and conversation history.",
    image: "/ai-chat.webp",
    tools: ["Next.js", "OpenAI", "Tailwind", "Firebase"],
    live: "https://ai-chat-demo.com"
  },
  {
    id: 3,
    title: "Portfolio Generator",
    description: "A tool that helps developers create professional portfolios with customizable templates.",
    image: "/portfolio-gen.webp",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    code: "https://github.com/username/portfolio-gen"
  }
]

const MoreProjects = () => {
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
    <section className="section py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-12"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">More Recent Work</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some other projects I've worked on recently. Each one presented unique challenges and opportunities for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className="bg-foreground/10 rounded-lg overflow-hidden border border-foreground/10 hover:border-foreground/20 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6 flex flex-col gap-4">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 bg-foreground/5 rounded-full text-foreground/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2">
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default MoreProjects
