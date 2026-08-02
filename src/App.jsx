import { useEffect, useMemo,useRef, useState } from 'react'

import academiaVerde from './assets/academiaverde.svg'
import INICIOFO from './assets/INICIOFO.webp'
import logo from "./assets/logohojas.svg";
import acostadospies from './assets/acostadospies.webp'
import bailando from './assets/bailando.webp'
import principal from "./assets/principal.jpg";
import manosbyn from './assets/manosbyn.webp'
import difuminada from './assets/difuminada.webp'
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
import acostadosfoto from './assets/acostadosfoto.webp'
import iniciomanos from "./assets/iniciomanos.jpg";
import inicioacostados from "./assets/inicioacostados.jpg";
import inicioaca from "./assets/inicioaca.jpg";
import tomadosmanos from "./assets/SAVE SADAI Y JAIR-4.jpg";
import vuelta from "./assets/SAVE SADAI Y JAIR-8.jpg";
import mirada  from "./assets/SAVE SADAI Y JAIR-9.jpg";
import difuminadalarga  from "./assets/difuminadalarga.jpg";
import besolarga  from "./assets/besolarga.jpg";
import besolargabyn from './assets/besolargabyn.webp'
import academiaLateral from "./assets/SAVE SADAI Y JAIR-4.jpg";
import vestido from "./assets/vestido.svg";
import traje from "./assets/traje.svg";
import sobre from './assets/sobre.png'
import sobrefoto1 from "./assets/SAVE SADAI Y JAIR-29.jpg";
import sobrefoto2 from "./assets/SAVE SADAI Y JAIR-89.jpg";
import division2 from "./assets/division2.jpg";
import libro from "./assets/libro.jpg";
import regalo from "./assets/regalo.svg";

const galleryModules = import.meta.glob('./assets/galeria/*.jpg', { eager: true })
const galleryThumbModules = import.meta.glob('./assets/galeria/thumbs/*.jpg', { eager: true })

const galleryPhotos = Object.entries(galleryModules)
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/-(\d+)\.jpg$/)[1], 10)
    const numB = parseInt(pathB.match(/-(\d+)\.jpg$/)[1], 10)
    return numA - numB
  })
  .map(([path, mod]) => {
    const filename = path.split('/').pop()
    const thumb = galleryThumbModules[`./assets/galeria/thumbs/${filename}`]?.default

    return {
      full: mod.default,
      thumb: thumb ?? mod.default,
    }
  })

const weddingDate = new Date('2026-11-14T17:00:00')

const sections = [
  { id: 'inicio', label: 'Nuestra Boda' },
  { id: 'presentacion', label: 'El Gran Día' },
  { id: 'dresscode', label: 'Codigo de vestimenta' },
  { id: 'galeria', label: 'Nuestra Galeria' },
  { id: 'rsvp', label: 'Tu Presencia' },
  { id: 'regalos', label: 'Un Gran Detalle' },
]

const itinerary = [
  { time: '5:30', label: 'Ceremonia', icon: anillos },
  { time: '6:45', label: 'Coctel de Bienvenida', icon: cocteles },
  { time: '7:30', label: 'Recepción', icon: mesa },
  { time: '8:00', label: 'Banquete', icon: plato },
  { time: '9:00', label: 'Primer Baile', icon: baileicono },
  { time: '9:15', label: '¡A Bailar, se abre la pista!', icon: bola },
  { time: '12:30', label: 'Trasnochado', icon: snack },
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

function useInViewFade(threshold = 0) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(weddingDate))
  const [menuOpen, setMenuOpen] = useState(false)
  const [signatureVisible, setSignatureVisible] = useState(false)
  const signatureRef = useRef(null)
  const [academiaVisible, setAcademiaVisible] = useState(false)
  const academiaRef = useRef(null)
  const mainRef = useRef(null)
  const buildingRef = useRef(null)
  const [parallaxOffset, setParallaxOffset] = useState(0)
  const [itinerarioVisible, setItinerarioVisible] = useState(false)
  const itinerarioRef = useRef(null)
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const selectedPhoto = selectedPhotoIndex === null ? null : galleryPhotos[selectedPhotoIndex]
  const [contadorTitleRef, contadorTitleVisible] = useInViewFade()
  const [dividerLogoRef, dividerLogoVisible] = useInViewFade()
  const [dresscodeRef, dresscodeVisible] = useInViewFade()
  const [galeriaTitleRef, galeriaTitleVisible] = useInViewFade()
  const [rsvpRef, rsvpVisible] = useInViewFade()
  const [regalosRef, regalosVisible] = useInViewFade()
  const dividerPhotos = [acostados, besolarga, besolargabyn]
const [dividerIndex, setDividerIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setDividerIndex((i) => (i + 1) % dividerPhotos.length)
  }, 3000)
  return () => clearInterval(interval)
}, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      console.log('Firma visible:', entry.isIntersecting, 'ratio:', entry.intersectionRatio)
      if (entry.isIntersecting) {
        setSignatureVisible(true)
        observer.disconnect()
      }
    },
    { threshold: 0 }
  )

  if (signatureRef.current) {
    observer.observe(signatureRef.current)
  }

  return () => observer.disconnect()
}, [])

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setAcademiaVisible(true)
        observer.disconnect()
      }
    },
    { threshold: 0 }
  )

  if (academiaRef.current) {
    observer.observe(academiaRef.current)
  }

  return () => observer.disconnect()
}, [])

useEffect(() => {
  if (selectedPhotoIndex === null) return

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      setSelectedPhotoIndex(null)
    }

    if (event.key === 'ArrowLeft') {
      setSelectedPhotoIndex((currentIndex) =>
        currentIndex === null ? currentIndex : (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length
      )
    }

    if (event.key === 'ArrowRight') {
      setSelectedPhotoIndex((currentIndex) =>
        currentIndex === null ? currentIndex : (currentIndex + 1) % galleryPhotos.length
      )
    }
  }

  window.addEventListener('keydown', handleKeyDown)

  return () => window.removeEventListener('keydown', handleKeyDown)
}, [selectedPhotoIndex])

useEffect(() => {
  const scrollContainer = mainRef.current
  if (!scrollContainer) return

  let ticking = false

  const handleScroll = () => {
    if (ticking) return
    ticking = true

    requestAnimationFrame(() => {
      if (buildingRef.current) {
        const rect = buildingRef.current.getBoundingClientRect()
        const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2
        setParallaxOffset(distanceFromCenter * 0.08)
      }
      ticking = false
    })
  }

  scrollContainer.addEventListener('scroll', handleScroll)
  handleScroll()

  return () => scrollContainer.removeEventListener('scroll', handleScroll)
}, [])

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setItinerarioVisible(true)
        observer.disconnect()
      }
    },
    { threshold: 0 }
  )

  if (itinerarioRef.current) {
    observer.observe(itinerarioRef.current)
  }

  return () => observer.disconnect()
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
  <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:justify-center md:gap-6">
    {/* Menú horizontal - solo escritorio */}
    <div className="hidden md:flex md:items-center md:gap-6">
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`} className="text-sm font-semibold transition hover:text-wedding-rose">
          {section.label}
        </a>
      ))}
    </div>

    {/* Botón hamburguesa - solo móvil */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex flex-col gap-1.5 p-2 md:hidden"
      aria-label="Abrir menú"
    >
      <span className={`h-0.5 w-6 bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
      <span className={`h-0.5 w-6 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
      <span className={`h-0.5 w-6 bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
    </button>
  </nav>

 {/* Menú desplegable - solo móvil, cuando está abierto */}
{menuOpen && (
  <div className="flex flex-col items-center gap-4 border-t border-white/30 bg-white/95 py-6 md:hidden">
    {sections.map((section) => (
      <a
        key={section.id}
        href={`#${section.id}`}
        onClick={() => setMenuOpen(false)}
        className="text-sm font-semibold transition hover:text-wedding-rose"
      >
        {section.label}
      </a>
    ))}
  </div>
)}
</header>

      <main ref={mainRef} className="scroll-wrapper pt-14 md:pt-16">

        <section
           id="inicio"
  className="section relative flex items-start justify-center bg-cover bg-center px-6 pt-24 text-center md:pt-32"
  style={{
             backgroundImage: `linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url(${INICIOFO})`,
}}
        >

            <h1 className="flex flex-col items-center text-center font-normal text-[#f8f6f1] opacity-0 animate-[fadeIn_1.2s_ease-out_forwards]">
            
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

          <p className="font-cormorant absolute bottom-16 text-2xl font-medium tracking-[0.18em] text-[#f8f6f1] md:bottom-[80px] md:text-3xl">
          14-<span className="text-[0.82em]">NOV</span>-2026
        </p>

{/* Botón scroll - Nuestra historia */}

  <a href="#presentacion"
  className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[#f8f6f1] transition hover:opacity-80 md:bottom-6"
>
  <span className="font-cormorant text-[10px] uppercase tracking-[0.2em] md:text-sm">Nuestra historia</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 animate-bounce md:h-5 md:w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
</a>
          
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
          <p className="font-cormorant uppercase text-2xl tracking-[0.2em] text-[#71794A] md:text-4xl md:tracking-[0.3em]">
            Para nuestros más cercanos
          </p>

          {/* Mensaje - centrado vertical y horizontalmente en el resto del espacio */}
          <div className="flex flex-1 items-center justify-center">
            <div className="flex flex-col items-center md:-translate-y-10">
              <div className="font-cormorant flex flex-col space-y-4 text-xl leading-snug text-[#71794A] md:text-3xl">
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
                      <p
                  ref={signatureRef}
                  className={`font-bemdayni mt-10 w-full px-2 py-4 text-center text-3xl leading-relaxed text-[#71794A] md:mt-14 md:py-6 md:text-6xl md:leading-[1.4] ${
                    signatureVisible ? 'signature-write' : 'signature-hidden'
                  }`}
                >
                  Jair y Sadai
          </p>


            </div>
          </div>
          </div>

          {/* Imágenes - derecha */}
          <div
            className="relative flex min-h-[45vh] items-center justify-center px-6 py-8 md:min-h-screen md:px-10 md:py-12"
            style={{ backgroundColor: '#F5F2EB' }}
          >
            <div className="relative h-[100%] w-full md:h-[95%]">
              {/* Imagen 1: de 10% a 49% (ancho = 39%) */}
          <div
            className="absolute left-[10%] right-[49%] top-0 bottom-[35%] z-10 bg-cover outline outline-4 md:outline-8 md:left-[8%] md:right-[52%] md:top-0 md:bottom-[35%]"
            style={{
              backgroundImage: `url(${acostadosfoto})`,
              backgroundPosition: 'center',
              outlineColor: '#F5F2EB',
            }}
          />
          {/* Imagen 2: de 51% a 90% (ancho = 39%) */}
          <div
            className="absolute left-[51%] right-[10%] top-[40%] bottom-0 bg-cover md:left-[45%] md:right-[15%] md:top-[35%] md:bottom-0"
            style={{
              backgroundImage: `url(${bailando})`,
              backgroundPosition: 'center',
              transform: 'translate(-10px, -30px)',
            }}
          />
            </div>
          </div>
</section>

<section id="Division" className="relative min-h-[30vh] overflow-hidden md:min-h-[50vh]">
      {dividerPhotos.map((photo, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${photo})`, opacity: i === dividerIndex ? 1 : 0 }}
        />
      ))}
</section>


  <section id="academia"
          ref={academiaRef}
          className="section texture-paper flex flex-col items-center justify-center overflow-hidden px-6 py-10 text-center"
          style={{ backgroundColor: '#F5F2EB' }}
        >
          

          <div className={`leading-none text-[#71794A] ${academiaVisible ? 'opacity-100' : 'opacity-0'} transition-opacity delay-200 duration-[1200ms]`}>
            <p className="font-cormorant text-4xl md:text-6xl">
              SAVE THE <span className="font-bemdayni text-[1.3em]">D</span>ATE
            </p>
            <p className="font-cormorant mt-2 text-xl tracking-wide md:text-3xl">14 DE NOVIEMBRE DE 2026</p>
          </div>

          <img
          src={academiaVerde}
          alt="Academia Renacimiento Trinitate"
          ref={buildingRef}
          loading="lazy"
          decoding="async"
          className={`my-6 w-full max-w-5xl md:my-8 academia-reveal ${academiaVisible ? 'academia-reveal-active' : ''}`}
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />

          <div className={`leading-none text-[#71794A] ${academiaVisible ? 'opacity-100' : 'opacity-0'} transition-opacity delay-[400ms] duration-[1200ms]`}>
            <p className="font-cormorant text-xl md:text-3xl">ACADEMIA RENACIMIENTO TRINITATE</p>
            <p className="font-cormorant mt-1 text-sm uppercase tracking-[0.2em] text-[#71794A]/70 md:text-base">
              León, Guanajuato
            </p>
            <p className="font-bemdayni mt-3 text-2xl md:text-4xl">Cinco treinta de la tarde</p>
          </div>

          {/* Botones */}
          <div className={`mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 ${academiaVisible ? 'opacity-100' : 'opacity-0'} transition-opacity delay-[500ms] duration-[1200ms]`}>
            
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20de%20Sadai%20y%20Jair&dates=20261114T170000/20261114T220000&details=Academia%20Renacimiento%20Trinitate%20Filarmonica&location=Academia%20Renacimiento%20y%20Trinitate%20Philharmonia%2C%20Leon%2C%20Guanajuato"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#71794A] px-6 py-3 font-cormorant text-sm uppercase tracking-wide text-[#71794A] transition hover:bg-[#71794A] hover:text-[#f8f6f1] md:text-base"
            >
              Agregar a Google Calendar
            </a>
            
            <a href="https://www.google.com/maps?q=Academia+Renacimiento+y+Trinitate+Philharmonia"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#71794A] px-6 py-3 font-cormorant text-sm uppercase tracking-wide text-[#71794A] transition hover:bg-[#71794A] hover:text-[#f8f6f1] md:text-base"
            >
              Ver ubicación
            </a>
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
<div
  ref={itinerarioRef}
  className="px-6 py-16 md:px-14 md:py-20"
  style={{ backgroundColor: '#3d4024' }}
>
  <div
    className={`mx-auto grid max-w-7xl grid-cols-3 gap-x-4 gap-y-14 transition-all duration-[1200ms] md:grid-cols-4 ${
      itinerarioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    {itinerary.map((item, index) => (
      <div
        key={item.label}
        className={`flex flex-col items-center text-center text-[#f8f6f1] transition-all duration-700 ${
          itinerarioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: `${index * 120}ms` }}
      >
        <img src={item.icon} alt={item.label} loading="lazy" decoding="async" className="mb-3 h-16 w-16 md:h-20 md:w-20" />

        <div className="flex w-full items-center">
          {/* Línea izquierda */}
          <span className="h-px flex-1 bg-[#f8f6f1]/40" />

          {/* Punto */}
          <span className="mx-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#f8f6f1]" />

          {/* Línea derecha */}
          <span className="h-px flex-1 bg-[#f8f6f1]/40" />
        </div>

        <p className="font-cormorant mt-2 text-base md:text-xl">{item.time}</p>
        <p className="font-cormorant mt-1 text-sm uppercase tracking-wide md:text-base">{item.label}</p>
      </div>
    ))}
  </div>
</div>
        </section>


  
    <section id="contador" className="font-cormorant relative min-h-[60vh] md:min-h-[55vh]">
            <img
              src={acostadospies}
              alt="Fondo contador"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: '75% 30%' }}
            />
         <div className="absolute inset-0 flex items-center justify-center bg-black/25 px-6 text-center">
             <div className="w-full max-w-4xl text-[#f8f6f1]">
                  <h2 className="font-cormorant text-3xl uppercase md:text-6xl">¡El gran día!</h2>
                  <h2 className="font-fortalesia text-3xl md:text-6xl">Faltan:</h2>
                {timeLeft.isDone ? (
                  <p className="font-cormorant mt-8 text-2xl uppercase">Hoy es el gran día</p>
                ) : (
                  <div className="mt-6 grid grid-cols-2 gap-4 md:mt-8 md:grid-cols-4 md:gap-6">
                    <TimeBox value={timeLeft.days} label="Días" />
                    <TimeBox value={timeLeft.hours} label="Horas" />
                    <TimeBox value={timeLeft.minutes} label="Minutos" />
                    <TimeBox value={timeLeft.seconds} label="Segundos" />
           </div>
    )}
  </div>
</div>
</section>

    {/* Divisor entre Contador y Dress Code */}
    <section className="flex min-h-[12vh] items-center justify-center px-6 md:min-h-[16vh]" style={{ backgroundColor: '#71794A' }}>
      <div className="flex items-center gap-4 md:gap-6">
            <span className="h-px w-16 bg-[#F5F2EB]/50 md:w-28" />
            <img
              src={logo}
              alt="Monograma Sadaí y Jair"
              loading="lazy"
              decoding="async"
              className="h-16 w-auto md:h-28"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="h-px w-16 bg-[#F5F2EB]/50 md:w-28" />
      </div>
    </section>

  <section id="dresscode" className="section grid bg-white md:grid-cols-2">
          {/* Imagen - izquierda, la que ya tenías */}
          <div
            className="min-h-[40vh] bg-cover bg-center md:min-h-screen"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${difuminada})`,
            }}
          />

          {/* Contenido - derecha */}
          <div className="flex items-center justify-center px-8 py-14 text-center md:px-14">
                  <div className="w-full max-w-md md:max-w-xl">
              <p className="font-cormorant text-sm uppercase tracking-[0.3em] text-[#71794A] md:text-lg">Código de vestimenta</p>
              <h2 className="font-cormorant mt-2 text-4xl text-[#71794A] md:text-7xl">Etiqueta</h2>

              {/* Íconos con etiquetas */}
              <div className="mt-10 flex items-start justify-center gap-12 md:mt-16 md:gap-24">
                <div className="flex flex-col items-center">
                  <img src={vestido} alt="Vestido largo de gala" loading="lazy" decoding="async" className="h-28 w-auto md:h-48" />
                  <p className="font-cormorant mt-5 uppercase text-lg leading-snug text-[#71794A] md:mt-6 md:text-2xl">
                    Ellas:<br />vestido largo <br></br> de gala
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img src={traje} alt="Traje" loading="lazy" decoding="async" className="h-28 w-auto md:h-48" />
                  <p className="font-cormorant uppercase mt-5 text-lg leading-snug text-[#71794A] md:mt-6 md:text-2xl">
                    Ellos:<br />traje
                  </p>
                </div>
              </div>

      {/* Paleta de colores a evitar */}
          <div className="mt-10 md:mt-16">
            <p className="font-cormorant text-sm uppercase tracking-[0.2em] text-[#71794A] md:text-2xl">Colores de las damas de honor:</p>
            <div className="mt-4 flex justify-center gap-2 md:mt-6 md:gap-3">
              {['#75784D', '#8C9440', '#A3A869', '#C5D098', '#E7EACB'].map((color) => (
                <span
                  key={color}
                  className="h-16 w-10 md:h-24 md:w-16"
                  style={{
                    backgroundColor: color,
                    borderRadius: '999px 999px 8px 8px',
                  }}
                />
              ))}
            </div>
            <br></br>
            <p className="font-cormorant text-sm uppercase tracking-[0.2em] text-[#71794A] md:text-2xl">Colores de los caballeros de honor:</p>
            <div className="mt-4 flex justify-center gap-2 md:mt-6 md:gap-3">
              {['#632c18', '#f2e3c7'].map((color) => (
                <span
                  key={color}
                  className="h-16 w-10 md:h-24 md:w-16"
                  style={{
                    backgroundColor: color,
                    borderRadius: '999px 999px 8px 8px',
                  }}
                />
              ))}
            </div>
            <br></br>
            <p className="font-cormorant text-sm uppercase tracking-[0.2em] text-[#71794A] md:text-xl">te pedimos respetuosamente, mujeres no vestir colores de las damas de honor y hombres no vestir colores de los caballeros de honor</p>
          </div>
    </div>
  </div>
</section>

<section id="galeria" className="section px-6 py-16 md:px-10 md:py-20 lg:px-16" style={{ backgroundColor: '#F5F2EB' }}>
        <div className="mb-10 text-center md:mb-14">
          <p className="font-cormorant text-xl uppercase tracking-[0.3em] text-[#71794A] md:text-2xl">Momentos</p>
          <h2 className="font-fortalesia mt-2 text-5xl text-[#71794A] md:text-7xl">Nuestra Galería</h2>
        </div>

     <div className="mx-auto max-w-[1600px] columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
          {galleryPhotos.map((photo, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedPhotoIndex(index)}
              className="mb-4 block w-full break-inside-avoid cursor-zoom-in overflow-hidden rounded-sm bg-[#71794A]/10 text-left md:mb-6"
              aria-label={`Ver foto ${index + 1} en tamaño completo`}
            >
              <img
                src={photo.thumb}
                alt={`Foto ${index + 1}`}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="w-full transition duration-500 hover:scale-[1.02]"
              />
            </button>
          ))}
        </div> 
        
</section>

<section id= "Division"
          className="min-h-[30vh] bg-cover bg-center md:min-h-[50vh]"
          style={{
            backgroundImage: `url(${division2})`,
          }}
        />

<section id="rsvp" className="section flex flex-col items-center justify-center px-6 py-16 text-center" style={{ backgroundColor: '#71794A' }}>
  <p className="font-cormorant text-lg uppercase tracking-[0.3em] text-[#f8f6f1] md:text-2xl">Confirma tu asistencia</p>
  <h2 className="font-fortalesia mt-2 text-5xl text-[#f8f6f1] md:text-7xl">Tu Presencia</h2>

  {/* Composición del sobre */}
<div className="relative mt-12 w-full max-w-md md:max-w-3xl">
  <img src={sobre} alt="Sobre de invitación" loading="lazy" decoding="async" className="w-full" />

  {/* Foto 1 - arriba a la izquierda */}
  <img
    src={sobrefoto1}
    alt="Foto 1"
    loading="lazy"
    decoding="async"
    className="absolute left-[8%] top-[10%] w-[32%] -rotate-6 rounded-sm border-4 border-white shadow-lg"
  />

  {/* Foto 2 - abajo a la derecha */}
  <img
      src={sobrefoto2}
      alt="Foto 2"
      loading="lazy"
      decoding="async"
      className="absolute bottom-[2%] right-[4%] w-[32%] rotate-6 rounded-sm border-4 border-white shadow-lg"
/>
</div>

  {/* Botón WhatsApp */}
  
    <a href="https://wa.me/5214791016327?text=%C2%A1Hola!%20Quiero%20confirmar%20mi%20asistencia%20a%20la%20boda%20de%20Sadai%20y%20Jair%20%F0%9F%92%9A"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#f8f6f1] px-8 py-3 font-cormorant text-sm uppercase tracking-wide text-[#71794A] transition hover:bg-white md:text-base"
  >
    Confirmar por WhatsApp
  </a>
</section>

<section id="regalos" className="section grid md:grid-cols-2">
  {/* Imagen - izquierda */}
  <div
    className="min-h-[40vh] bg-cover bg-center md:min-h-screen"
    style={{
      backgroundImage: `url(${libro})`,
    }}
  />

  {/* Contenido - derecha */}
  <div className="texture-paper flex flex-col items-center justify-center px-8 py-14 text-center md:px-14" style={{ backgroundColor: '#F5F2EB' }}>
    {/* Ícono de regalo */}
    <img src={regalo} alt="Regalo" loading="lazy" decoding="async" className="h-28 w-auto md:h-48" />

    <p className="font-cormorant mt-4 text-sm uppercase tracking-[0.3em] text-[#71794A] md:mt-6 md:text-xl">Con cariño</p>
    <h2 className="font-fortalesia mt-2 text-5xl text-[#71794A] md:mt-4 md:text-8xl">Mesa de Regalos</h2>

    <p className="font-cormorant mt-6 max-w-md text-lg leading-snug text-[#71794A] md:mt-8 md:max-w-xl md:text-2xl">
      Su presencia es nuestro mejor regalo. Si además desean obsequiarnos algo,
      dejamos estas opciones con mucho cariño.
    </p>

    {/* Botones de tiendas */}
    <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-12 md:gap-8">
      
        <a href="https://www.amazon.com.mx/wedding/share/jairysadaimesaregalosam"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#71794A] px-8 py-3 font-cormorant text-sm uppercase tracking-wide text-[#71794A] transition hover:bg-[#71794A] hover:text-[#f8f6f1] md:px-12 md:py-5 md:text-xl"
      >
        Amazon
      </a>
      
        <a href="https://mesaderegalos.liverpool.com.mx/gestiondeeventos/listaderegalos/60011695"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#71794A] px-8 py-3 font-cormorant text-sm uppercase tracking-wide text-[#71794A] transition hover:bg-[#71794A] hover:text-[#f8f6f1] md:px-12 md:py-5 md:text-xl"
      >
        Liverpool 
      </a>
    </div>

    <p className="font-cormorant mt-6 max-w-md text-lg leading-snug text-[#71794A] md:mt-8 md:max-w-xl md:text-2xl">Numero de mesa Liverpool 60011695</p>
    {/* Nota sobre efectivo */}
    <div className="mt-10 border-t border-[#71794A]/20 pt-8 md:mt-16 md:pt-12">

      <p className="font-cormorant mt-2 text-base text-[#71794A]/80 md:mt-3 md:text-xl">
        Si prefieren un regalo en efectivo, con gusto lo recibimos el día del evento.
      </p>
    </div>
  </div>
</section>
      
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Foto en tamaño completo"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#71794A]"
            aria-label="Cerrar foto"
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedPhotoIndex((currentIndex) =>
                currentIndex === null ? currentIndex : (currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length
              )
            }}
            className="absolute bottom-5 left-[calc(50%-3.5rem)] flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#71794A] md:bottom-auto md:left-6 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2"
            aria-label="Ver foto anterior"
          >
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <img
            src={selectedPhoto.full}
            alt="Foto en tamaño completo"
            className="max-h-[90vh] max-w-[92vw] rounded-sm object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setSelectedPhotoIndex((currentIndex) =>
                currentIndex === null ? currentIndex : (currentIndex + 1) % galleryPhotos.length
              )
            }}
            className="absolute bottom-5 right-[calc(50%-3.5rem)] flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#71794A] md:bottom-auto md:right-6 md:top-1/2 md:h-12 md:w-12 md:-translate-y-1/2"
            aria-label="Ver foto siguiente"
          >
            <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
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
