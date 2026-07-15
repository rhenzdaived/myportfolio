'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

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
        'A web-based dashboard for real-time tracking and operational visibility in the capstone workflow.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase'],
      image: '/images/eggsight.png',
      github: 'https://github.com/rhenzdaived/Egg_Dashboard',
      demo: 'https://eggsight.online',
    },
    {
      title: 'Renta Juan',
      description:
        'A car rental management system designed around CRUD operations and admin-facing workflows.',
      techStack: ['React', 'JavaScript', 'Node.js', 'Firebase'],
      image: '/images/rentajuan.png',
      github: 'https://github.com/rhenzdaived/RentaJuan',
      demo: '',
    },
    {
      title: 'IoT-Based Rotten Egg Sorting Device Script',
      description:
        'Python automation used to run the IoT-based sorting device deployed on Raspberry Pi hardware.',
      techStack: ['Python', 'Raspberry Pi', 'GPIO', 'OpenCV'],
      image: '/images/script.png',
      github: 'https://github.com/rhenzdaived/EggSight-Script',
      demo: '',
    },
    {
      title: 'Ecocraft Employee Management System',
      description:
        'Employee management system built with Django and a straightforward CRUD flow.',
      techStack: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      image: '/images/ecocraft.png',
      github: 'https://github.com/rhenzdaived/EcoCraft-Employee-Management-System',
      demo: '',
    },
  ]

  return (
    <section id="projects" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-950 px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-400">
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
            Selected work that shows product thinking, not just code output.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const hasImage = !!project.image && project.image.trim().length > 0
            const hasGithub = !!project.github && project.github.trim().length > 0
            const hasDemo = !!project.demo && project.demo.trim().length > 0

            return (
              <div
                key={index}
                className="group overflow-hidden border border-white/15 bg-white text-zinc-950 transition hover:-translate-y-1 hover:border-white"
              >
                <div className="relative h-56 overflow-hidden border-b border-zinc-200 bg-zinc-100">
                  {hasImage ? (
                    <Image
                      src={project.image!}
                      alt={project.title}
                      fill
                      className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-zinc-200">
                      <span className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-600">
                        Project image placeholder
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/0" />

                  <div className="absolute right-4 top-4 flex gap-2">
                    {hasGithub ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center border border-white/80 bg-white text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
                        aria-label={`Open ${project.title} on GitHub`}
                      >
                        <Github size={18} className="text-black" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="flex h-10 w-10 cursor-not-allowed items-center justify-center border border-white/40 bg-white/40"
                        aria-label="GitHub link not added"
                        title="Add your GitHub repo link"
                        disabled
                      >
                        <Github size={18} className="text-zinc-500" />
                      </button>
                    )}

                    {hasDemo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center border border-white/80 bg-white text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <ExternalLink size={18} className="text-black" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="flex h-10 w-10 cursor-not-allowed items-center justify-center border border-white/40 bg-white/40"
                        aria-label="Demo link not added"
                        title="Add a demo link (optional)"
                        disabled
                      >
                        <ExternalLink size={18} className="text-zinc-500" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950 transition-colors group-hover:text-zinc-700">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700"
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
