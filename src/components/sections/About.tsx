'use client'

import Image from 'next/image'
import { GraduationCap, Code2, Target } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.15),_transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent,_#000000)]" />

      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
          About <span className="text-green-500">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: BIG profile image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Green glow */}
              <div className="absolute -inset-4 rounded-3xl bg-green-500/20 blur-2xl" />

              {/* Image */}
              <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Rhenz profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="space-y-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <GraduationCap className="text-green-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Education
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  BS Information Technology major in Network Technology at Batangas State University.
                  Currently seeking an internship to gain hands-on experience
                  in real-world settings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Code2 className="text-green-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Technical Interests
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Interested in networking and cybersecurity, while also open to exploring various IT domains to broaden technical skills. Motivated to apply theoretical knowledge in practical settings and continuously learn from real-world projects.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Target className="text-green-500" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Career Goals
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To work as an IT intern where I can contribute to real projects,
                  learn from experienced professionals, and develop strong
                  problem-solving, documentation, and technical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
