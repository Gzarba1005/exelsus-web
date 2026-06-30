export default function Contact() {
  return (
    <section id="contact" className="section-alt pt-8 pb-20 px-4 md:px-8 lg:px-16 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-textPrimary text-center mb-12">Contacto y Turnos</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6">Información de Contacto</h3>
            <div className="space-y-4 text-secondary">
              <p><strong>Dirección:</strong> Balcarce 648, San Miguel de Tucumán, Tucumán, Argentina</p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/5493813582356?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20EXELSUS%20Oncología%20Clínica." className="text-primary hover:underline">+54 9 381 358-2356</a></p>
              <p><strong>Email:</strong> <a href="mailto:exelsus.srl@gmail.com" className="text-primary hover:underline">exelsus.srl@gmail.com</a></p>
              <p><strong>Horarios:</strong> Lunes a viernes de 8:00 a 16:00</p>
              <p><strong>Instagram:</strong> <a href="https://instagram.com/exelsus.oncologia" className="text-primary hover:underline">@exelsus.oncologia</a></p>
              <p><strong>Facebook:</strong> <a href="https://facebook.com/exelsus.oncologia" className="text-primary hover:underline">Exelsus Oncología</a></p>
            </div>
            <div className="mt-8">
              <a href="https://wa.me/5493813582356?text=Hola,%20quisiera%20consultar%20por%20un%20turno%20en%20EXELSUS%20Oncología%20Clínica." className="btn-primary text-center block">
                Sacar Turno por WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-textPrimary mb-6">Ubicación</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://maps.google.com/maps?q=Balcarce%20648%2C%20San%20Miguel%20de%20Tucumán%2C%20Tucumán%2C%20Argentina&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}