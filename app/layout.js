import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'EXELSUS Oncología Clínica - Oncología Clínica en Tucumán',
  description: 'Clínica oncológica en San Miguel de Tucumán con enfoque humano y tecnología avanzada. Oncólogos líderes, salas individuales de quimioterapia y PAXMAN para cuidado capilar. Turnos por WhatsApp.',
  keywords: 'oncología clínica Tucumán, clínica oncológica San Miguel de Tucumán, oncólogos Tucumán, quimioterapia Tucumán, PAXMAN Tucumán, turnos oncología Tucumán',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans bg-background text-textPrimary">
        {children}
      </body>
    </html>
  )
}
