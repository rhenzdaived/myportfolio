'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, BadgeCheck, ExternalLink } from 'lucide-react'

type Certification = {
  name: string
  issuer: string
  date: string
  url: string
  image?: string
}

const certifications: Certification[] = [
  {
    name: 'AWS - Cloud Foundation Badge',
    issuer: 'AWS Academy',
    date: 'May 2025',
    url: 'https://www.credly.com/badges/831590b9-333c-43ad-95a0-18575517919b/public_url',
    image: '/certificates/awscf.png',
  },
  {
    name: 'AWS -  Cloud Security Foundation Badge',
    issuer: 'AWS Academy',
    date: 'Dec 2025',
    url: 'https://www.credly.com/badges/5c6f9d9d-8109-4164-bcba-16a80baa27b6/public_url',
    image: '/certificates/awscsf.png',
  },
  {
    name: 'Introduction to Cybersecurity Badge',
    issuer: 'Cisco Networking Academy',
    date: 'April 2025',
    url: 'https://www.credly.com/badges/436bb433-615b-4d24-a711-ec67eb548d8f/public_url',
    image: '/certificates/ciscocyber.png',
  },
  {
    name: 'Network Defense Badge',
    issuer: 'Cisco Networking Academy',
    date: 'May 2025',
    url: 'https://www.credly.com/badges/df3ff85b-ae52-40a7-82b7-3c1532c20422/public_url',
    image: '/certificates/cisconetd.png',
  },
  {
    name: 'IT Customer Support Basics Badge',
    issuer: 'Cisco Networking Academy',
    date: 'May 2025',
    url: 'https://www.credly.com/badges/39cb5b84-be41-4b64-beef-7801303abe14/public_url',
    image: '/certificates/ciscosb.png',
  },
]

export default function Certifications() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const updateControls = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const frame = window.requestAnimationFrame(updateControls)
    emblaApi.on('reInit', updateControls)
    emblaApi.on('select', updateControls)

    return () => {
      window.cancelAnimationFrame(frame)
      emblaApi.off('reInit', updateControls)
      emblaApi.off('select', updateControls)
    }
  }, [emblaApi, updateControls])

  useEffect(() => {
    if (!emblaApi || isHovered) return

    const timer = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 4500)

    return () => window.clearInterval(timer)
  }, [emblaApi, isHovered])

  return (
    <section id="certifications" className="scroll-mt-24 border-b border-zinc-200 bg-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-zinc-500">
              Certifications
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Verified expertise in cloud, networking, and cybersecurity.
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              className="inline-flex h-11 w-11 items-center justify-center border border-zinc-950 text-zinc-950 transition hover:bg-zinc-950 hover:text-white disabled:cursor-not-allowed disabled:border-zinc-200 disabled:text-zinc-300"
              aria-label="Previous certification"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              className="inline-flex h-11 w-11 items-center justify-center border border-zinc-950 text-zinc-950 transition hover:bg-zinc-950 hover:text-white disabled:cursor-not-allowed disabled:border-zinc-200 disabled:text-zinc-300"
              aria-label="Next certification"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div
          className="mt-12 overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex touch-pan-y items-stretch gap-4">
            {certifications.map((certification) => (
              <div key={certification.name} className="min-w-0 h-full flex-[0_0_86%] sm:flex-[0_0_60%] lg:flex-[0_0_38%]">
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col border border-zinc-200 bg-zinc-50 p-5 transition hover:border-zinc-950 hover:bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                          Certificate
                        </p>
                        <p className="mt-2 min-h-[3.4rem] overflow-hidden text-lg font-semibold tracking-[-0.03em] text-zinc-950 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                          {certification.name}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 border border-zinc-200 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-600 transition group-hover:border-zinc-950 group-hover:text-zinc-950">
                      <BadgeCheck size={12} />
                      Credly
                    </span>
                  </div>

                  <div className="mt-5 border border-zinc-200 bg-white p-4">
                    <div className="relative aspect-16/10 overflow-hidden border border-zinc-200 bg-zinc-100 grayscale transition group-hover:grayscale-0">
                      {certification.image ? (
                        <Image
                          src={certification.image}
                          alt={`${certification.name} certificate`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#0a0a0a_0%,#1a1a1a_50%,#fafafa_50%,#fafafa_100%)] p-5 text-white">
                          <div className="flex h-full w-full flex-col justify-between border border-white/15 p-4">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/70">
                              <span>{certification.issuer}</span>
                              <span>{certification.date}</span>
                            </div>
                            <div>
                              <p className="text-2xl font-semibold tracking-[-0.04em]">
                                {certification.name}
                              </p>
                              <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">
                                Insert a certificate screenshot or badge image in the `image` field.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/70 px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-white">
                        <span>{certification.issuer}</span>
                        <span>{certification.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between border-t border-zinc-200 pt-4 text-xs uppercase tracking-[0.24em] text-zinc-500">
                    <span>{certification.issuer}</span>
                    <span className="inline-flex items-center gap-2 text-zinc-700">
                      View on Credly
                      <ExternalLink size={12} />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}