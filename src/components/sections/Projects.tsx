'use client'

import Image from 'next/image'
import { ExternalLink, Github, ImageIcon } from 'lucide-react'

type Project = {
  title: string
  description: string
  techStack: string[]
  image?: string
  github?: string
  demo?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'EggSight Dashboard',
      description:
        'A Custom web-based dashboard for real-time tracking of eggs inspected integrated on capstone project.',
      techStack: ['Nextjs', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase'],
      image: '/images/eggsight.png',
      github: 'https://github.com/rhenzdaived/Egg_Dashboard',
      demo: 'https://eggsight.online',
    },
    {
      title: 'Renta Juan',
      description:
        'A car rental management system with full CRUD functionality.',
      techStack: ['Reactjs', 'Javascript', 'Node.js', 'Firebase'],
      image: '/images/rentajuan.png',
      github: 'https://github.com/rhenzdaived/RentaJuan',
      demo: '',
    },
    {
      title: 'IoT-Based Rotten Egg Sorting Device Script',
      description:
        'Main Script to run the IoT-Based Rotten Egg Sorting Device deployed on Raspberry Pi.',
      techStack: ['Python', 'RaspberryPi', 'GPIO', 'OpenCV'],
      image: '/images/script.png', 
      github: 'https://github.com/rhenzdaived/EggSight-Script',
      demo: '',
    },
    {
      title: 'Ecocraft Employee Management System',
      description:
        'Employee Management System that used CRUD operations using Django Framework.',
      techStack: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      image: '/images/ecocraft.png', // ok now
      github: 'https://github.com/rhenzdaived/EcoCraft-Employee-Management-System',
      demo: '',
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-green-500">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-14 max-w-2xl mx-auto">
          Selected projects that demonstrate my skills and hands-on experience.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => {
            const hasImage = !!project.image && project.image.trim().length > 0
            const hasGithub = !!project.github && project.github.trim().length > 0
            const hasDemo = !!project.demo && project.demo.trim().length > 0

            return (
              <div
                key={index}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500/40 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-56 overflow-hidden">
                  {hasImage ? (
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <ImageIcon className="h-5 w-5" />
                        <span className="text-sm">Add project image</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                  {/* ACTION BUTTONS */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    {hasGithub ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center"
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <Github size={18} className="text-black" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center cursor-not-allowed"
                        aria-label="GitHub link not added"
                        title="Add your GitHub repo link"
                        disabled
                      >
                        <Github size={18} className="text-black/60" />
                      </button>
                    )}

                    {hasDemo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <ExternalLink size={18} className="text-black" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center cursor-not-allowed"
                        aria-label="Demo link not added"
                        title="Add a demo link (optional)"
                        disabled
                      >
                        <ExternalLink size={18} className="text-black/60" />
                      </button>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
