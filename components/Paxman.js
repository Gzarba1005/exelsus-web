import Image from 'next/image'

export default function Paxman() {
  return (
    <section id="paxman" className="bg-[#3f4f5a] text-white pt-8 pb-12 px-4 md:px-8 lg:px-16 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-[32px] bg-[#51616E]/95 p-6 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm text-white mb-4">
                Tecnología exclusiva en Tucumán
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">PAXMAN: cuidado capilar especializado para pacientes oncológicos</h2>
              <p className="text-base text-white/90 mb-4 leading-relaxed">
                En EXELSUS somos la única clínica en Tucumán con tecnología PAXMAN.
                Este sistema, aprobado por ANMAT, FDA y EMA, ayuda a reducir la caída del cabello
                durante ciertos tratamientos, brindando mayor bienestar y tranquilidad al paciente.
              </p>
              <p className="text-base text-white/80 mb-6 leading-relaxed">
                El valor de esta tecnología está en ofrecer un apoyo real para la experiencia
                del paciente, sumando confort y esperanza sin promesas exageradas.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Aprobado por ANMAT • FDA • EMA
              </div>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-lg">
              <Image
                src="/paxman-foto.jpg"
                alt="Tecnología PAXMAN en EXELSUS"
                width={600}
                height={420}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
