'use client'

import { Code2, Globe, Cloud, Shield, Wrench } from 'lucide-react'

type SkillCategory = {
  title: string
  subtitle: string
  icon: React.ReactNode
  skills: string[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      subtitle: 'Core languages I use to build and automate',
      icon: <Code2 className="h-5 w-5" />,
      skills: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Web Development',
      subtitle: 'Modern frameworks and runtime tools',
      icon: <Globe className="h-5 w-5" />,
      skills: ['Next.js', 'React.js', 'Node.js'],
    },
    {
      title: 'Cloud',
      subtitle: 'Cloud fundamentals and real-time backend services',
      icon: <Cloud className="h-5 w-5" />,
      skills: ['AWS Cloud Fundamentals', 'Firebase'],
    },
    {
      title: 'Networking & Security',
      subtitle: 'Foundations for secure and reliable networks',
      icon: <Shield className="h-5 w-5" />,
      skills: [
        'Routing & Switching Fundamentals',
        'TCP/IP',
        'Network Defense Basics',
        'Cybersecurity Principles',
        'Basic Hardware/Software Troubleshooting',
      ],
    },
    {
      title: 'Tools',
      subtitle: 'Daily tools I’m comfortable with',
      icon: <Wrench className="h-5 w-5" />,
      skills: ['Git/GitHub', 'VS Code', 'AWS Academy Labs', 'Packet Tracer'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500">
            Skills 
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            A quick view of what I use across development, cloud, and networking/security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-sm transition hover:border-green-500/40"
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-green-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-green-400">
                  {cat.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{cat.subtitle}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-gray-200 transition hover:border-green-500/40 hover:text-green-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
