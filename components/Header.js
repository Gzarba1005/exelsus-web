'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      const top = element.getBoundingClientRect().top + window.scrollY - headerHeight - 24
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          <div className="flex items-center">
            <Image
              src="/logo-horizontal.png"
              alt="EXELSUS Oncología Clínica"
              width={240}
              height={80}
              className="h-14 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-textPrimary">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">Quiénes Somos</button>
            <button onClick={() => scrollToSection('differentiators')} className="hover:text-primary transition-colors">Qué Nos Diferencia</button>
            <button onClick={() => scrollToSection('paxman')} className="hover:text-primary transition-colors">Tecnología PAXMAN</button>
            <button onClick={() => scrollToSection('team')} className="hover:text-primary transition-colors">Equipo Médico</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contacto</button>
          </nav>
          <div className="hidden md:block">
            <a href="https://wa.me/5493813582356?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20EXELSUS%20Oncología%20Clínica." className="btn-primary">
              Sacar Turno
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-primary/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-textPrimary hover:text-primary">Inicio</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-textPrimary hover:text-primary">Quiénes Somos</button>
              <button onClick={() => scrollToSection('differentiators')} className="block w-full text-left px-3 py-2 text-textPrimary hover:text-primary">Qué Nos Diferencia</button>
              <button onClick={() => scrollToSection('paxman')} className="block w-full text-left px-3 py-2 text-textPrimary hover:text-primary">Tecnología PAXMAN</button>
              <button onClick={() => scrollToSection('team')} className="block w-full text-left px-3 py-2 text-textPrimary hover:text-primary">Equipo Médico</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-textPrimary hover:text-primary">Contacto</button>
              <a href="https://wa.me/5493813582356?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20EXELSUS%20Oncología%20Clínica." className="block w-full px-3 py-2 btn-primary text-center">
                Sacar Turno
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}