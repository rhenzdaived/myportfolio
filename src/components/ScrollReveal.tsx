'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  yOffset?: number
}

export default function ScrollReveal({ children, className, delay = 0, yOffset = 28 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const element = rootRef.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={rootRef}
      className={`reveal-section ${isVisible ? 'is-visible' : ''} ${className ?? ''}`.trim()}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-y': `${yOffset}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}