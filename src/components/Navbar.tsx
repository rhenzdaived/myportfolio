'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

type NavLink = { name: string; href: string }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => onNavClick(e, '#home')}
            className="text-xl font-bold hover:opacity-80 transition-colors"
          >
            <span className="text-green-500">{'</'}</span>
            <span className="text-white">Dabed</span>
            <span className="text-green-500">{'>'}</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="text-gray-300 hover:text-green-500 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-gray-300 hover:text-green-500 transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-b border-zinc-800 bg-zinc-900 transition-[max-height] duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => onNavClick(e, link.href)}
              className="block w-full text-left text-gray-300 hover:text-green-500 transition-colors py-2 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
