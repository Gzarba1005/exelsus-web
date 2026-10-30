# EXELSUS Oncología Clínica — Sitio web institucional

Sitio institucional de **EXELSUS Oncología Clínica** (Tucumán, Argentina), diseñado y desarrollado de punta a punta: estructura, diseño responsive, contenido y despliegue en producción.

🔗 **En producción:** [exelsus.com.ar](https://www.exelsus.com.ar/)

## Secciones

- **Hero** con galería de imágenes
- **Nosotros** y **diferenciales** de la clínica
- **Servicios** oncológicos
- **Equipo** médico
- **Acompañamiento al paciente** y tecnología **Paxman** (prevención de la alopecia por quimioterapia)
- **Contacto** con mapa y botón flotante de **WhatsApp**

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| UI | React 18, Tailwind CSS |
| Íconos | Lucide React |
| Deploy | Vercel |

## Estructura

```
app/          Layout, página principal y estilos globales
components/   Secciones del sitio (Hero, Services, Team, Contact, ...)
public/       Logos e imágenes
```

## Correr localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

## Autor

Desarrollado por Gonzalo Zarbá ([@Gzarba1005](https://github.com/Gzarba1005)).
