'use client'

import Image from 'next/image'
import { BriefcaseBusiness, GraduationCap, ShieldCheck, ScanSearch } from 'lucide-react'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-zinc-200 bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
            About
          </p>
          <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Aspiring Software Developer / Cybersecurity Enthusiast
          </h2>
          <p className="max-w-xl text-base leading-8 text-zinc-600">
            A fresh BS Information Technology graduate, Majoring in Network Technology at Batangas State
            University - TNEU. My work centers on practical software delivery, clean documentation, and a
            growing specialization in cybersecurity, networking, and reliable web tooling.
          </p>

          <div className="grid gap-4 border border-zinc-200 bg-zinc-50 p-5">
            <div className="flex items-start gap-3">
              <ScanSearch className="mt-0.5 h-4 w-4 text-zinc-700" />
              <p className="text-sm leading-7 text-zinc-600">
                I approach projects like systems diagrams: define the inputs, protect the boundary,
                and keep the output readable.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-zinc-700" />
              <p className="text-sm leading-7 text-zinc-600">
                Cybersecurity is part of the design language, not an afterthought.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden border border-zinc-200 bg-zinc-50">
            <Image
              src="/images/picpro.png"
              alt="Rhenz Peligan portrait"
              width={800}
              height={1000}
              className="h-full w-full object-cover grayscale"
              priority
            />
          </div>

          <div className="space-y-4">
            <div className="border border-zinc-200 p-5">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-4 w-4 text-zinc-700" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-950">
                  Education
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                BS Information Technology, Major in Network Technology, Batangas State University - TNEU.
              </p>
            </div>

            <div className="border border-zinc-200 p-5">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-4 w-4 text-zinc-700" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-950">
                  Focus
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Software development, automation, and cybersecurity & networking fundamentals 
              </p>
            </div>

            <div className="border border-zinc-200 p-5">
              <div className="flex items-center gap-3">
                <ScanSearch className="h-4 w-4 text-zinc-700" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-950">
                  Career Goal
                </h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                To contribute learned skills, while continuously improving and expanding my knowledge in professional settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
