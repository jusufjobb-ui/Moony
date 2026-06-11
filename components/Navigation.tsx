'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  {
    label: 'Kollektioner',
    href: '/kollektioner',
    dropdown: [
      { label: 'Alla produkter', href: '/kollektioner' },
      { label: 'Doftljus', href: '/kollektioner#doftljus' },
      { label: 'Vaxsmältare', href: '/kollektioner#vaxsmaltare' },
      { label: 'Personliga Presenter', href: '/kollektioner#personliga' },
    ],
  },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'FAQ', href: '/fragor' },
  { label: 'Blogg', href: '/blogg' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-brand-ink text-white/60 text-center py-2.5 px-4 text-xs font-sans tracking-[0.15em] uppercase">
        Fri frakt på beställningar över 500 kr &nbsp;·&nbsp; Handgjort i Sverige
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-card'
            : 'bg-brand-bg/95 backdrop-blur-sm'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-2xl md:text-3xl italic text-brand-text tracking-wide hover:text-brand-primary transition-colors"
              aria-label="Moony Flames – Startsida"
            >
              Moony Flames
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Huvudnavigering">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="font-sans text-sm uppercase tracking-widest text-brand-text hover:text-brand-primary transition-colors py-2 flex items-center gap-1"
                  >
                    {link.label}
                    {link.dropdown && (
                      <svg
                        className={`w-3 h-3 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-brand-card py-2 z-50 animate-fade-in">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-5 py-2.5 text-sm font-sans text-brand-text hover:text-brand-primary hover:bg-brand-bg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side */}
            <div className="hidden md:flex items-center gap-4">
              <button
                className="font-sans text-xs uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors"
                aria-label="Byt språk"
              >
                SV / EN
              </button>
              <Link
                href="/kollektioner"
                className="btn-primary text-xs py-2.5 px-6"
                aria-label="Gå till butiken"
              >
                Shoppa nu
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-brand-card transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 bg-brand-text rounded transition-all duration-300 ${
                    mobileOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-brand-text rounded transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 bg-brand-text rounded transition-all duration-300 ${
                    mobileOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border-t border-brand-card px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 font-sans text-sm uppercase tracking-widest text-brand-text hover:text-brand-primary transition-colors border-b border-brand-card/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 pb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm font-sans text-brand-muted hover:text-brand-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/kollektioner"
                className="btn-primary text-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Shoppa nu
              </Link>
              <button className="font-sans text-xs uppercase tracking-widest text-brand-muted hover:text-brand-primary transition-colors text-center py-2">
                SV / EN
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
