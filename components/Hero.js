'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  { src: '/hero-foto-1.jpg', alt: 'Espacios de la clínica EXELSUS' },
  { src: '/hero-foto-2.jpg', alt: 'Instalaciones EXELSUS Oncología Clínica' },
  { src: '/hero-foto-3.jpg', alt: 'Consultorio EXELSUS Oncología Clínica' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="pt-24 bg-background section-padding animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-primary mb-4">EXELSUS Oncología Clínica</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textPrimary leading-tight mb-6">
              Atención oncológica con <span className="text-primary">calidez humana</span> y rigor médico.
            </h1>
            <p className="text-lg text-secondary mb-8 leading-relaxed">
              Un equipo médico cercano, salas de quimioterapia individuales y un acompañamiento real
              para que el paciente y su familia se sientan seguros en cada paso del tratamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5493813582356?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20EXELSUS%20Oncología%20Clínica." className="btn-primary text-center">
                Sacar Turno por WhatsApp
              </a>
              <a href="#about" className="btn-secondary text-center">
                Conocé nuestro enfoque
              </a>
            </div>
          </div>

          {/* Slider */}
          <div className="relative rounded-[32px] overflow-hidden border border-primary/10 shadow-soft aspect-[700/520]">
            {slides.map((slide, i) => (
              <div
                key={slide.src}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === current ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir a foto ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
