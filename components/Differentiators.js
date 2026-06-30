import { Heart, Users, ShieldCheck, Award } from 'lucide-react'

const differentiators = [
  {
    icon: Heart,
    title: 'Trato humano y cercano',
    description: 'Acompañamos con empatía real para el paciente y su familia en cada paso del tratamiento.'
  },
  {
    icon: Users,
    title: 'Médicos líderes',
    description: 'Especialistas en oncología clínica con trayectoria, conocimiento y vocación de cuidado.'
  },
  {
    icon: ShieldCheck,
    title: 'Salas individuales',
    description: 'Espacios privados de quimioterapia con confort, privacidad y lugar para acompañantes.'
  },
  {
    icon: Award,
    title: 'PAXMAN exclusivo',
    description: 'La única clínica en Tucumán con esta tecnología aprobada por ANMAT, FDA y EMA.'
  }
]

export default function Differentiators() {
  return (
    <section id="differentiators" className="section-alt section-padding animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-12">Qué Nos Diferencia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="group rounded-3xl border border-primary/10 bg-background p-7 text-center shadow-soft transition hover:-translate-y-1">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-3">{item.title}</h3>
              <p className="text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}