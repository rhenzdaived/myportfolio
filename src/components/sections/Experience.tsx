const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Center for AI and Smart Technologies',
    period: 'Feb 2026 - May 2026',
    summary:
      'Supported full-stack delivery through code review, test automation, and security testing across the SDLC.',
    bullets: [
      'Conducted formal code reviews, applying industry-standard practices such as nits, suggestions, and blockers while collaborating through peer programming to resolve issues.',
      'Built automated test scripts for backend and frontend workflows, translating manual test cases into repeatable automation and expanding coverage beyond initial requirements.',
      'Performed penetration testing and vulnerability assessments using Kali Linux, OWASP ZAP, Nmap, Nikto, and Burp Suite, including SQL injection, IDOR, and privilege escalation testing.',
      'Assisted in developing and maintaining full-stack web applications across all SDLC phases.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-zinc-200 bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Internship experience in software engineering and security testing
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
              <div className="flex flex-col gap-3 border-b border-zinc-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-zinc-950">{experience.role}</p>
                  <p className="mt-1 text-sm uppercase tracking-[0.22em] text-zinc-500">
                    {experience.company}
                  </p>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
                  {experience.period}
                </p>
              </div>

              <p className="mt-4 max-w-4xl text-sm leading-7 text-zinc-600">
                {experience.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-700">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-zinc-950" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}