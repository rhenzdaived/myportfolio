'use client'

import { Code2, Cloud, Shield, Wrench, ServerCog, TerminalSquare } from 'lucide-react'
import {
  Database,
  Bug,
  Radar,
  ShieldAlert,
  Network,
  Route,
  ShieldCheck,
  Search,
  CloudCog,
} from 'lucide-react'
import { IconType } from 'react-icons'
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiNodedotjs,
  SiTailwindcss,
  SiKalilinux,
  SiWireshark,
  SiOwasp,
  SiFirebase,
  SiGit,
  SiGithub,
} from 'react-icons/si'

type SkillCategory = {
  title: string
  subtitle: string
  icon: React.ReactNode
  skills: string[]
}

// Maps a skill label to its icon. Branded tools use their real logo
// (react-icons/si); tools without a dedicated logo fall back to a
// neutral lucide-react icon that best represents the concept.
const skillIconMap: Record<string, IconType | React.ComponentType<{ className?: string }>> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  PHP: SiPhp,
  SQL: Database,
  'Next.js': SiNextdotjs,
  React: SiReact,
  Laravel: SiLaravel,
  'Node.js': SiNodedotjs,
  'Tailwind CSS': SiTailwindcss,
  'Kali Linux': SiKalilinux,
  Wireshark: SiWireshark,
  'Burp Suite': Bug,
  'OWASP ZAP': SiOwasp,
  Nmap: Radar,
  Nikto: ShieldAlert,
  'AWS Cloud': CloudCog,
  Firebase: SiFirebase,
  'TCP/IP': Network,
  'Routing & Switching': Route,
  'Network Defense Basics': ShieldCheck,
  Troubleshooting: Search,
  Git: SiGit,
  GitHub: SiGithub,
}

function SkillBadge({ skill }: { skill: string }) {
  const Icon = skillIconMap[skill] ?? Code2

  return (
    <span className="inline-flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-zinc-700 transition group-hover:border-zinc-950 group-hover:text-zinc-950">
      <Icon className="h-3.5 w-3.5 shrink-0" />
      {skill}
    </span>
  )
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      subtitle: 'Core languages I use to build and automate',
      icon: <Code2 className="h-5 w-5" />,
      skills: ['Python', 'JavaScript', 'PHP', 'SQL'],
    },
    {
      title: 'Frameworks',
      subtitle: 'Modern web stacks and UI systems',
      icon: <TerminalSquare className="h-5 w-5" />,
      skills: ['Next.js', 'React', 'Laravel', 'Node.js', 'Tailwind CSS'],
    },
    {
      title: 'Security Tools',
      subtitle: 'Practical tooling for labs and analysis',
      icon: <Shield className="h-5 w-5" />,
      skills: ['Kali Linux', 'Wireshark', 'Burp Suite', 'OWASP ZAP', 'Nmap', 'Nikto'],
    },
    {
      title: 'Cloud / Infra',
      subtitle: 'Infrastructure and backend fundamentals',
      icon: <Cloud className="h-5 w-5" />,
      skills: ['AWS Cloud', 'Firebase'],
    },
    {
      title: 'Networking',
      subtitle: 'Security-aware networking fundamentals',
      icon: <ServerCog className="h-5 w-5" />,
      skills: ['TCP/IP', 'Routing & Switching', 'Network Defense Basics', 'Troubleshooting'],
    },
    {
      title: 'Tools',
      subtitle: 'Daily engineering habits that keep work moving',
      icon: <Wrench className="h-5 w-5" />,
      skills: ['Git', 'GitHub'],
    },
  ]

  return (
    <section id="skills" className="scroll-mt-24 border-b border-zinc-200 bg-zinc-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Practical skills for building, automating, and securing systems.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group border border-zinc-200 bg-white p-6 transition hover:border-zinc-950"
            >
              <div className="flex items-start gap-3 border-b border-zinc-100 pb-4">
                <div className="flex h-10 w-10 items-center justify-center border border-zinc-950 bg-zinc-950 text-white">
                  {cat.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-zinc-950">{cat.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">{cat.subtitle}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}