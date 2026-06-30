import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-textPrimary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <Image
                src="/logo-horizontal.png"
                alt="EXELSUS Oncología Clínica"
                width={200}
                height={70}
                className="w-40 md:w-44 lg:w-48 h-auto"
              />
            </div>
            <p className="text-secondary mb-4">
              Excelencia médica con enfoque humano en oncología clínica.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="mb-2">Balcarce 648, San Miguel de Tucumán</p>
            <Link href="https://wa.me/5493813582356?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20EXELSUS%20Oncología%20Clínica." className="text-accent hover:underline">
              WhatsApp: +54 9 381 358-2356
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociales</h3>
            <div className="space-y-2">
              <Link href="https://instagram.com/exelsus.oncologia" className="block text-secondary hover:text-accent">Instagram</Link>
              <Link href="https://facebook.com/Exelsus Oncología" className="block text-secondary hover:text-accent">Facebook</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary mt-8 pt-8 text-center">
          <p className="text-secondary">&copy; 2024 EXELSUS Oncología Clínica. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}