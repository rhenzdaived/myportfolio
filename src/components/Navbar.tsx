'use client'

import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'

type NavLink = { name: string; href: string }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll() // set initial state on load
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (!el) return

    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)

    // update URL hash without jumping
    history.replaceState(null, '', href)
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-zinc-300 bg-white/95 backdrop-blur-sm'
          : 'border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => onNavClick(e, '#home')}
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-zinc-950 transition-opacity hover:opacity-70"
          >
            <span className="font-mono text-[10px] tracking-[0.4em] text-zinc-500">RP</span>
            <span>Dabed</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500 transition-colors hover:text-zinc-950"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center border border-zinc-950 px-3 py-2 text-zinc-950 transition hover:bg-zinc-950 hover:text-white md:hidden"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-b border-zinc-200 bg-white transition-[max-height] duration-300 md:hidden ${
          isOpen ? 'max-h-[32rem]' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="space-y-2 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              className="block border-b border-zinc-100 py-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="mt-3 inline-flex items-center gap-2 border border-zinc-950 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-950"
            onClick={() => setIsOpen(false)}
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  )
}
