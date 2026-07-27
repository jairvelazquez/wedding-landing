import { useEffect, useMemo, useState } from 'react'

import academiaVerde from './assets/academiaverde.svg'
import INICIOFO from "./assets/INICIOFO.jpg";
import logo from "./assets/path3-5-0.png";
import acostadospies from "./assets/acostadospies.jpg";
import bailando from "./assets/bailando.jpg";
import principal from "./assets/principal.jpg";
import manosbyn from "./assets/manosbyn.jpg";
import difuminada from "./assets/difuminada.jpg";
import anillos from "./assets/anillos.svg";
import cocteles from "./assets/cocteles.svg";
import mesa from "./assets/mesa.svg";
import baileicono from "./assets/baileicono.svg";
import plato from "./assets/plato.svg";
import bola from "./assets/bola.svg";
import snack from "./assets/snack.svg";
import auto from "./assets/auto.svg";
import besobyn from "./assets/besobyn.jpg";
import acostados from "./assets/acostados.jpg";
import acostadosfoto from "./assets/acostadosfoto.jpg";
import iniciomanos from "./assets/iniciomanos.jpg";
import inicioacostados from "./assets/inicioacostados.jpg";
import inicioaca from "./assets/inicioaca.jpg";
import baile from "./assets/SAVE SADAI Y JAIR-16 acos.jpg";
import tomadosmanos from "./assets/SAVE SADAI Y JAIR-4.jpg";
import vuelta from "./assets/SAVE SADAI Y JAIR-8.jpg";
import mirada  from "./assets/SAVE SADAI Y JAIR-9.jpg";
import difuminadalarga  from "./assets/difuminadalarga.jpg";
import besolarga  from "./assets/besolarga.jpg";
import besolargabyn  from "./assets/besolargabyn.jpg";
import academiaLateral from "./assets/SAVE SADAI Y JAIR-4.jpg";


const weddingDate = new Date('2026-11-14T17:00:00')

const sections = [
  { id: 'inicio', label: 'Nuestra Boda' },
  { id: 'presentacion', label: 'El Gran Día' },
  { id: 'contador', label: 'Cuenta regresiva' },
  { id: 'confirmacion', label: 'Tu Presencia' },
  { id: 'ubicacion', label: 'Un Gran Detalle' },
]

const itinerary = [
  { time: '5:30', label: 'Ceremonia', icon: anillos },
  { time: '6:15', label: 'Coctel de Bienvenida', icon: cocteles },
  { time: '7:00', label: 'Recepción', icon: mesa },
  { time: '7:30', label: 'Primer Baile', icon: baileicono },
  { time: '8:00', label: 'Cena', icon: plato },
  { time: '9:00', label: '¡A Bailar!', icon: bola },
  { time: '11:00', label: 'Trasnochado', icon: snack },
  { time: '2:00', label: '¡Nos Vamos!', icon: auto },
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



        <section id="presentacion"
  className="section grid md:grid-cols-2"
>
 {/* Mensaje - izquierda, fondo claro */}
<div
  className="flex min-h-[50vh] flex-col px-8 pb-14 pt-16 text-center md:min-h-screen md:px-16 md:pt-24"
  style={{ backgroundColor: '#F5F2EB' }}
>
  {/* Título - arriba, separado del borde */}
  <p className="font-cormorant uppercase text-3xl  tracking-[0.3em] text-[#71794A] md:text-4xl sm:text-xs">
    Para nuestros más cercanos
  </p>

 {/* Mensaje - centrado vertical y horizontalmente en el resto del espacio */}
<div className="flex flex-1 items-center justify-center">
  <div className="flex flex-col items-center" style={{ transform: 'translateY(-40px)' }}>
    <div className="font-cormorant flex flex-col space-y-4 text-2xl leading-snug text-[#71794A] sm:text-xs md:text-3xl">
      <p>
        Hay personas que no solo acompañan una historia, sino que se vuelven parte de ella. Ustedes han sido
        testigos de nuestro camino, de los buenos días y de aquellos que nos enseñaron a crecer, y han visto cómo,
        poco a poco, encontramos un hogar en el otro.
      </p>
      <p>
        Hoy celebramos nuestra unión de la manera más sagrada y no podríamos imaginar este instante sin quienes
        han sido parte de nuestra historia y, con cariño, deseamos que también formen parte de todo lo que está por
        escribirse.
      </p>
    </div>
    <p className="font-bemdayni mt-10 w-full text-center text-2xl text-[#71794A] md:mt-14 md:text-6xl">
      Jair y Sadai
    </p>
  </div>
</div>
</div>

 {/* Imágenes - derecha */}
<div
  className="relative flex min-h-[50vh] items-center justify-center px-6 py-8 md:min-h-screen md:px-10 md:py-12"
  style={{ backgroundColor: '#F5F2EB' }}
>
  {/* Contenedor intermedio que agrupa ambas imágenes */}
  <div className="relative h-[95%] w-full">
    {/* Imagen 1 - arriba, izquierda, AL FRENTE */}
    <div
      className="absolute left-[8%] right-[52%] top-0 bottom-[35%] z-10 bg-cover outline outline-8 md:left-[8%] md:right-[52%] md:top-0 md:bottom-[35%]"
      style={{
        backgroundImage: `url(${acostadosfoto})`,
        backgroundPosition: 'center',
        outlineColor: '#F5F2EB',
      }}
    />
    {/* Imagen 2 - abajo, derecha */}
    <div
      className="absolute left-[45%] right-[15%] top-[40%] bottom-0 bg-cover md:left-[45%] md:right-[15%] md:top-[35%] md:bottom-0"
      style={{
        backgroundImage: `url(${bailando})`,
        backgroundPosition: 'center',
        transform: 'translate(-30px, -110px)',
      }}
    />
  </div>
</div>
</section>

<section id= "Division"
  className="min-h-[30vh] bg-cover bg-center md:min-h-[50vh]"
  style={{
    backgroundImage: `url(${besolargabyn})`,
  }}
/>

<section id="academia"
        className="section flex flex-col items-center justify-center overflow-hidden px-6 py-10 text-center" style={{ backgroundColor: '#F5F2EB' }}>
          <div className="leading-none text-[#71794A]">
            <p className="font-cormorant text-4xl md:text-6xl">
              SAVE THE <span className="font-bemdayni text-[1.3em]">D</span>ATE
            </p>
            <p className="font-cormorant mt-2 text-xl tracking-wide md:text-3xl">14 DE NOVIEMBRE DE 2026</p>
          </div>
          <img src={academiaVerde} alt="Academia Renacimiento Trinitate" className="my-6 w-full max-w-5xl md:my-8" />
          <div className="leading-none text-[#71794A]">
            <p className="font-cormorant text-xl md:text-3xl">ACADEMIA RENACIMIENTO TRINITATE</p>
            <p className="font-bemdayni mt-1 text-2xl md:text-4xl">Cinco treinta de la tarde</p>
          </div>
        </section>
        
 <section id="itinerario" className="section flex flex-col">
                  {/* Foto de fondo con título */}
        <div
          className="relative flex min-h-[45vh] items-start justify-center bg-cover bg-center px-6 pt-10 text-center md:min-h-[55vh] md:pt-16"
          style={{
            backgroundImage: `url(${manosbyn})`,
          }}
        >
          <div className="text-[#f8f6f1]">
            <p className="font-cormorant text-4xl uppercase tracking-[0.25em] md:text-6xl">La Fiesta</p>
            <p className="font-fortalesia -mt-4 -translate-x-6 text-4xl md:-mt-8 md:-translate-x-10 md:text-6xl">Itinerario</p>
          </div>
        </div>
              {/* Línea de tiempo */}
              <div className="px-6 py-12 md:px-14 md:py-16" style={{ backgroundColor: '#3d4024' }}>
                <div className="mx-auto flex max-w-7xl flex-wrap items-start justify-between gap-x-4 gap-y-14">
                  {itinerary.map((item, index) => (
                    <div key={item.label} className="flex min-w-[110px] flex-1 flex-col items-center text-center text-[#f8f6f1]">
                      <img src={item.icon} alt={item.label} className="mb-3 h-16 w-16 md:h-20 md:w-20" />

                      <div className="flex w-full items-center">
                        <span className={`h-px flex-1 ${index === 0 ? 'opacity-0' : 'bg-[#f8f6f1]/40'}`} />
                        <span className="mx-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#f8f6f1]" />
                        <span className={`h-px flex-1 ${index === itinerary.length - 1 ? 'opacity-0' : 'bg-[#f8f6f1]/40'}`} />
                      </div>

                      <p className="font-cormorant mt-2 text-base md:text-xl">{item.time}</p>
                      <p className="font-cormorant mt-1 text-sm uppercase tracking-wide md:text-base">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
        </section>


  <section id="contador" className="font-cormorant relative">
  <img
    src={acostadospies}
    alt="Fondo contador"
    className="w-full"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/25 px-6 text-center">
    <div className="w-full max-w-4xl text-[#f8f6f1]">
      <h2 className="text-3xl font-cormorant uppercase md:text-5xl">¡El gran día!</h2>
      <h2 className="text-3xl font-fortalesia md:text-5xl">Faltan:</h2>
      {timeLeft.isDone ? (
        <p className="mt-8 text-2xl font-cormorant uppercase">Hoy es el gran día</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          <TimeBox value={timeLeft.days} label="Días" />
          <TimeBox value={timeLeft.hours} label="Horas" />
          <TimeBox value={timeLeft.minutes} label="Minutos" />
          <TimeBox value={timeLeft.seconds} label="Segundos" />
        </div>
      )}
    </div>
  </div>
</section>


  <section id="confirmacion" className="section grid bg-white md:grid-cols-2">
          <div
            className="min-h-[40vh] bg-cover bg-center md:min-h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${difuminada})`,
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
    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur-sm md:p-6">
      <p className="text-3xl font-bold text-[#f8f6f1] md:text-5xl">{String(value).padStart(2, '0')}</p>
      <p className="mt-1 text-sm uppercase tracking-wider text-[#f8f6f1] md:text-base">{label}</p>
    </div>
  )
}
