import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-zinc-200 bg-zinc-950 px-4 pt-24 text-white sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.09),_transparent_45%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center py-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.38em] text-zinc-400">
            Software Developer | Cybersecurity Enthusiast
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[7rem]">
            Rhenz Peligan
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            I build disciplined, security-minded web experiences with a focus on secure interfaces,
            dependable systems, and clear technical communication.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-zinc-300">
            <span className="border border-white/15 px-3 py-2">peliganrhenzdaived@gmail.com</span>
            <span className="border border-white/15 px-3 py-2">github.com/rhenzdaived</span>
            <span className="border border-white/15 px-3 py-2">linkedin.com/in/rhenzdaived</span>
            <span className="border border-white/15 px-3 py-2">Batangas, Philippines</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-white bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-950 transition hover:bg-transparent hover:text-white"
            >
              <Download size={14} />
              Download Resume (PDF)
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white hover:bg-white hover:text-zinc-950"
            >
              View Selected Work
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="mt-14 lg:mt-0">
          <div className="border border-white/15 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-400">
              Profile Snapshot
            </p>
            <dl className="mt-6 grid gap-5">
              <div className="border-b border-white/10 pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Focus
                </dt>
                <dd className="mt-2 text-lg text-white">Secure web apps, automation, and network fundamentals</dd>
              </div>
              <div className="border-b border-white/10 pb-4">
                <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Strengths
                </dt>
                <dd className="mt-2 text-lg text-white">Building systems, Python tooling, and practical security awareness</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                  Availability
                </dt>
                <dd className="mt-2 text-lg text-white">Open to junior roles focusing on development and security</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
