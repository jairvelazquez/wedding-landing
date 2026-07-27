import { useEffect, useMemo, useState } from 'react'

import academiaVerde from './assets/academiaverde.png'
import INICIOFO from "./assets/INICIOFO.jpg";
import logo from "./assets/path3-5-0.png";
import solopies from "./assets/acostadospies.jpg";
import bailando from "./assets/bailando.jpg";
import principal from "./assets/principal.jpg";
import papelimage from "./assets/papelimage.jpg";

const weddingDate = new Date('2026-11-14T17:00:00')

const sections = [
  { id: 'inicio', label: 'Nuestra Boda' },
  { id: 'presentacion', label: 'El Gran Día' },
  { id: 'contador', label: 'Cuenta regresiva' },
  { id: 'itinerario', label: 'Tu Presencia' },
  { id: 'ubicacion', label: 'Un Gran Detalle' },
]

function getTimeLeft(targetDate) {
  const now = new Date().getTime()
  const diff = targetDate.getTime() - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isDone: true }
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  return { days, hours, minutes, seconds, isDone: false }
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formattedDate = useMemo(() => {
    return weddingDate.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }, [])

  return (
    <div className="relative text-wedding-wine">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-3 text-xs font-semibold md:gap-6 md:text-sm">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="transition hover:text-wedding-rose">
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="scroll-wrapper pt-14 md:pt-16">
        <section
           id="inicio"
  className="section relative flex items-start justify-center bg-cover bg-center px-6 pt-24 text-center md:pt-32"
  style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url(${INICIOFO})`,
}}
        >
          
        
          

            <h1 className="flex flex-col items-center text-center font-normal text-[#f8f6f1]"
    style={{ transform: 'translateY(80px)' }}
  >
            
            <span className="font-fortalesia text-7xl leading-[0.72] md:text-[8rem]">Sadaí</span>
            <span className="flex translate-x-5 items-center justify-center md:translate-x-7">
              <span
                className="font-cormorant relative -top-3 mr-1 text-4xl tracking-[0.1em] md:-top-5 md:mr-2 md:text-5xl"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                AND
              </span>
              <span className="font-playfair relative -top-2 translate-x-1 text-5xl leading-none md:-top-4 md:translate-x-2 md:text-8xl">JAIR</span>
            </span>
            
          </h1>
          <p className="font-cormorant absolute bottom-10 text-2xl font-medium tracking-[0.18em] text-[#f8f6f1] md:bottom-16 md:text-3xl">
            14-<span className="text-[0.82em]">NOV</span>-2026
          </p>
          
        </section>

        <section
  id="presentacion"
  className="grid md:grid-cols-2"
>
  {/* Texto */}
  <div
    className="flex flex-col justify-center bg-[#F5F2EB] px-6 py-14 md:min-h-screen md:px-16"
  >
    <p className="font-cormorant text-center uppercase tracking-[0.25em] text-[#71794A]
                  text-xl sm:text-2xl md:text-4xl">
      Para nuestros más cercanos
    </p>

    <div className="mt-10 max-w-2xl self-center">
      <div className="font-cormorant space-y-6 text-center text-base leading-relaxed text-[#71794A]
                      sm:text-lg md:text-2xl md:leading-snug">
        <p>
          Hay personas que no solo acompañan una historia, sino que se vuelven
          parte de ella. Ustedes han sido testigos de nuestro camino, de los
          buenos días y de aquellos que nos enseñaron a crecer, y han visto
          cómo, poco a poco, encontramos un hogar en el otro.
        </p>

        <p>
          Hoy celebramos nuestra unión de la manera más sagrada y no podríamos
          imaginar este instante sin quienes han sido parte de nuestra historia
          y, con cariño, deseamos que también formen parte de todo lo que está
          por escribirse.
        </p>
      </div>

      <p
        className="font-bemdayni mt-10 text-center text-3xl text-[#71794A]
                   md:mt-14 md:text-6xl"
      >
        Jair y Sadai
      </p>
    </div>
  </div>

  {/* Imágenes */}
  <div
    className="flex items-center justify-center bg-[#F5F2EB] px-6 py-10 md:min-h-screen"
  >
    {/* Móvil */}
    <div className="flex flex-col gap-6 md:hidden w-full max-w-sm">
      <img
        src={principal}
        alt="Jair y Sadai"
        className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
      />

      <img
        src={bailando}
        alt="Jair y Sadai bailando"
        className="aspect-[4/5] w-full rounded-sm object-cover shadow-xl"
      />
    </div>

    {/* Escritorio */}
    <div className="relative hidden h-[85%] w-full md:block">
      <div
        className="absolute left-[8%] top-0 h-[65%] w-[42%] bg-cover bg-center outline outline-8"
        style={{
          backgroundImage: `url(${principal})`,
          outlineColor: "#F5F2EB",
        }}
      />

      <div
        className="absolute bottom-[2%] right-[10%] h-[55%] w-[40%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bailando})`,
        }}
      />
    </div>
  </div>
</section>

<section

        className="section flex flex-col items-center justify-center overflow-hidden px-6 py-10 text-center" style={{ backgroundColor: '#f0ece0' }}>
          <div className="leading-none text-[#71794A]">
            <p className="font-cormorant text-4xl md:text-6xl">
              SAVE THE <span className="font-bemdayni text-[1.3em]">D</span>ATE
            </p>
            <p className="font-cormorant mt-2 text-xl tracking-wide md:text-3xl">14 DE NOVIEMBRE DE 2026</p>
          </div>
          <img src={academiaVerde} alt="Academia Renacimiento Trinitate" className="my-6 w-full max-w-4xl md:my-8" />
          <div className="leading-none text-[#71794A]">
            <p className="font-cormorant text-xl md:text-3xl">ACADEMIA RENACIMIENTO TRINITATE</p>
            <p className="font-bemdayni mt-1 text-2xl md:text-4xl">Cinco treinta de la tarde</p>
          </div>
        </section>
        <section aria-hidden="true" className="section" style={{ backgroundColor: '#71794A' }} />

        <section id="contador" className="font-cormorant section flex items-center justify-center bg-wedding-blush px-6">
          <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
            <h2 className="text-3xl font-semibold md:text-5xl">SE LLEGA EL DIA</h2>
            {timeLeft.isDone ? (
              <p className="mt-8 text-2xl font-semibold text-wedding-rose">Hoy es el gran día</p>
            ) : (
              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                <TimeBox value={timeLeft.days} label="Días" />
                <TimeBox value={timeLeft.hours} label="Horas" />
                <TimeBox value={timeLeft.minutes} label="Minutos" />
                <TimeBox value={timeLeft.seconds} label="Segundos" />
              </div>
            )}
          </div>
        </section>

        <section id="itinerario" className="section grid bg-white md:grid-cols-2">
          <div
            className="min-h-[40vh] bg-cover bg-center md:min-h-screen"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="flex items-center justify-center px-8 py-14 md:px-14">
            <div className="w-full max-w-md">
              <h2 className="text-3xl font-semibold md:text-4xl">Itinerario</h2>
              <ul className="mt-8 space-y-5 text-base md:text-lg">
                <li className="border-l-2 border-wedding-rose pl-4">
                  <p className="font-semibold">5:30 PM - Ceremonia religiosa</p>
                  <p className="text-sm opacity-80">Bienvenida y registro de invitados</p>
                </li>
                <li className="border-l-2 border-wedding-rose pl-4">
                  <p className="font-semibold">6:15 PM - Ceremonia</p>
                  <p className="text-sm opacity-80">Intercambio de votos</p>
                </li>
                <li className="border-l-2 border-wedding-rose pl-4">
                  <p className="font-semibold">6:30 PM - Brindis y cena</p>
                  <p className="text-sm opacity-80">Celebración con familia y amigos</p>
                </li>
                <li className="border-l-2 border-wedding-rose pl-4">
                  <p className="font-semibold">8:00 PM - Fiesta</p>
                  <p className="text-sm opacity-80">Baile y música toda la noche</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ubicacion" className="section bg-wedding-cream px-6 py-10 md:px-10 md:py-16">
          <div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
            <h2 className="mb-6 text-center text-3xl font-semibold md:mb-8 md:text-4xl">Ubicación</h2>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <iframe
                title="Ubicación de la boda"
                src="https://www.google.com/maps?q=Academia+Renacimiento+y+Trinitate+Philharmonia&output=embed"
                className="h-[60vh] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function TimeBox({ value, label }) {
  return (
    <div className="rounded-2xl bg-wedding-cream p-4 md:p-6">
      <p className="text-3xl font-bold md:text-5xl">{String(value).padStart(2, '0')}</p>
      <p className="mt-1 text-sm uppercase tracking-wider md:text-base">{label}</p>
    </div>
  )
}
