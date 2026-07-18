'use client'

import Image from 'next/image'
import { Github } from 'lucide-react'
import { IconType } from 'react-icons'
import {
  SiPhp,
  SiLaravel,
  SiTailwindcss,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiFirebase,
  SiPython,
  SiRaspberrypi,
  SiOpencv,
  SiDjango,
  SiMysql,
  SiBootstrap,
} from 'react-icons/si'
import { Cpu } from 'lucide-react'

type Project = {
  title: string
  description: string
  techStack: string[]
  image?: string
  github?: string
}

// Maps a tech stack label to its icon. Falls back to a generic Cpu icon
// if no dedicated logo exists (e.g. GPIO).
const techIconMap: Record<string, IconType> = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  TailwindCSS: SiTailwindcss,
  PostgreSQL: SiPostgresql,
  React: SiReact,
  JavaScript: SiJavascript,
  'Node.js': SiNodedotjs,
  Firebase: SiFirebase,
  Python: SiPython,
  'Raspberry Pi': SiRaspberrypi,
  GPIO: Cpu,
  OpenCV: SiOpencv,
  Django: SiDjango,
  MySQL: SiMysql,
  Bootstrap: SiBootstrap,
}

function TechBadge({ tech }: { tech: string }) {
  const Icon = techIconMap[tech] ?? Cpu

  return (
    <span className="flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-700 transition-colors group-hover:border-zinc-300">
      <Icon size={13} className="shrink-0 text-zinc-950" />
      {tech}
    </span>
  )
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Recruitr - Job Portal System',
      description:
        'A role-based recruitment platform streamlining the job search, hiring workflow, and administrative management in a single responsive web application.',
      techStack: ['PHP', 'Laravel', 'TailwindCSS', 'PostgreSQL'],
      image: '/images/recruitr.png',
      github: 'https://github.com/rhenzdaived/Recruitr---Job-Portal-System.git',
    },
    {
      title: 'Renta Juan',
      description:
        'A car rental management system designed around CRUD operations and admin-facing workflows.',
      techStack: ['React', 'JavaScript', 'Node.js', 'Firebase'],
      image: '/images/rentajuan.png',
      github: 'https://github.com/rhenzdaived/RentaJuan',
    },
    {
      title: 'IoT-Based Rotten Egg Sorting Device Script',
      description:
        'Python automation used to run the IoT-based sorting device deployed on Raspberry Pi hardware.',
      techStack: ['Python', 'Raspberry Pi', 'GPIO', 'OpenCV'],
      image: '/images/script.png',
      github: 'https://github.com/rhenzdaived/EggSight-Script',
    },
    {
      title: 'Ecocraft Employee Management System',
      description:
        'Employee management system built with Django and a straightforward CRUD flow.',
      techStack: ['Python', 'Django', 'MySQL', 'Bootstrap'],
      image: '/images/ecocraft.png',
      github: 'https://github.com/rhenzdaived/EcoCraft-Employee-Management-System',
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
                        <Github size={18} />
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
                      <TechBadge key={tech} tech={tech} />
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