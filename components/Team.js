'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

const team = [
  {
    name: 'Dr. Juan José Zarbá',
    specialty: 'Oncología clínica',
    placeholder: 'JJZ',
    photo: '/team-juanjose.jpg',
    bio: `Especialista en Oncología Clínica formado en el Servicio de Oncología del Dr. Chacón (Buenos Aires) y en el Institut Gustave Roussy (París, Francia), uno de los centros oncológicos de referencia mundial.

Con 25 años de trayectoria en investigación clínica, se desempeñó como investigador principal en más de 100 estudios clínicos internacionales y dirige el Curso de Investigación en Oncología de la AAOC. Fue presidente de la Asociación de Oncología Clínica de Tucumán y de la Asociación de Mastología de Tucumán, y es miembro de la Comisión Directiva de la Asociación Argentina de Oncología Clínica.

Su práctica está especializada en tumores ginecológicos, genitourinarios, mama y pulmón.`,
  },
  {
    name: 'Dr. Martín Zarbá',
    specialty: 'Medicina interna y oncología clínica',
    placeholder: 'MZ',
    photo: '/team-martin.jpg',
    bio: `Formado en el Hospital Italiano de Buenos Aires, el Instituto Alexander Fleming y el Arthur J.E. Child Comprehensive Cancer Center (Alberta, Canadá).

Su práctica se centra en tumores genitourinarios y torácicos, con actividad en investigación clínica y publicaciones internacionales en cáncer renal metastásico. Tiene especial interés en inmunoterapia, biomarcadores y medicina basada en evidencia.`,
  },
  {
    name: 'Dra. Micaela Rigesti',
    specialty: 'Oncología clínica',
    placeholder: 'MR',
    photo: '/team-micaela.jpg',
  },
  {
    name: 'Dr. José Bulacio',
    specialty: 'Oncología clínica',
    placeholder: 'JB',
    photo: '/team-chemi.jpg',
    bio: `Médico egresado de la Facultad de Medicina de la Universidad Nacional de Tucumán, con especialidad en Oncología Clínica y residencia en el Hospital Zenón J. Santillán.

Se desempeña como oncólogo clínico en Exelsus, Jefe de Residentes de Oncología Clínica en el Hospital Zenón J. Santillán e Instructor de la Cátedra de Oncología Clínica de la UNT. Participa como subinvestigador en protocolos de investigación oncológica y es miembro del Comité Joven de la Asociación Argentina de Oncología Clínica.

Su perfil integra asistencia médica, docencia universitaria e investigación clínica, con un fuerte compromiso humano hacia cada paciente.`,
  },
  {
    name: 'Dr. Joaquín Chemi',
    specialty: 'Cirujano urólogo especializado en oncología',
    placeholder: 'JC',
    photo: '/team-bulacio.jpg',
    bio: `Formado en el Hospital Churruca Visca (Buenos Aires), con Fellowship en Urooncología y Cirugía Oncológica en el Instituto Alexander Fleming y estancia formativa en la Fundación Puigvert (Barcelona, España).

Su práctica se especializa en tumores genitourinarios, con actividad en investigación clínica y publicaciones en revistas internacionales.`,
  },
  {
    name: 'Lic. Silvia Rivera',
    specialty: 'Psicooncología',
    placeholder: 'SR',
    photo: '/team-silvia.jpg',
    bio: `Psicóloga con formación de posgrado en el Instituto Nacional del Cáncer (INC), especializada en el acompañamiento de pacientes oncológicos y sus familias.

Su trabajo se centra en brindar escucha, contención y apoyo integral durante el proceso oncológico, con la convicción de que el cuidado de la salud mental es un pilar fundamental del tratamiento.`,
  },
]

export default function Team() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="team" className="bg-background section-padding animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-12">Equipo Médico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => member.bio && setSelected(member)}
              className={`rounded-3xl border border-primary/10 bg-white p-6 shadow-soft transition-transform duration-200 ${member.bio ? 'cursor-pointer hover:scale-[1.02] hover:shadow-md' : ''}`}
            >
              <div className="flex items-center justify-center mb-6">
                {member.photo ? (
                  <div className="h-20 w-20 rounded-full overflow-hidden relative">
                    <Image src={member.photo} alt={member.name} fill className="object-contain scale-[1.15]" />
                  </div>
                ) : (
                  <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-semibold">
                    {member.placeholder}
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-2">{member.name}</h3>
              <p className="text-secondary leading-relaxed">{member.specialty}</p>
              {member.bio && (
                <p className="mt-3 text-sm text-primary font-medium">Ver perfil →</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl shadow-xl max-w-lg w-full p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-secondary hover:text-textPrimary hover:bg-primary/10 transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              {selected.photo ? (
                <div className="h-20 w-20 rounded-full overflow-hidden relative shrink-0">
                  <Image src={selected.photo} alt={selected.name} fill className="object-cover object-[center_20%]" />
                </div>
              ) : (
                <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-semibold shrink-0">
                  {selected.placeholder}
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-textPrimary">{selected.name}</h3>
                <p className="text-primary text-sm font-medium">{selected.specialty}</p>
              </div>
            </div>

            <div className="space-y-4">
              {selected.bio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-secondary leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
