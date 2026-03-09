import { useEffect, useMemo, useState } from 'react'

const weddingDate = new Date('2027-03-20T17:00:00')

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'presentacion', label: 'Presentación' },
  { id: 'contador', label: 'Cuenta regresiva' },
  { id: 'itinerario', label: 'Itinerario' },
  { id: 'ubicacion', label: 'Ubicación' },
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
          className="section relative flex items-center justify-center bg-cover bg-center px-6 text-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.28), rgba(0,0,0,0.28)), url('https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="max-w-3xl rounded-2xl bg-black/30 p-8 text-white backdrop-blur-sm">
            <p className="mb-3 text-sm uppercase tracking-[0.25em]">Nuestra Boda</p>
            <h1 className="text-4xl font-semibold md:text-6xl">Andrea & Daniel</h1>
            <p className="mt-4 text-base md:text-lg">Te invitamos a celebrar con nosotros este día tan especial.</p>
          </div>
        </section>

        <section
          id="presentacion"
          className="section relative flex items-center justify-center bg-cover bg-center px-6"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,38,48,0.58), rgba(90,38,48,0.58)), url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80')",
          }}
        >
          <div className="max-w-3xl text-center text-white">
            <h2 className="text-3xl font-semibold md:text-5xl">Con mucho amor</h2>
            <p className="mt-6 text-lg leading-relaxed md:text-2xl">
              "Después de caminar juntos, llegó el día de decir sí para siempre. Queremos compartir este momento contigo."
            </p>
            <p className="mt-8 text-xl font-medium capitalize md:text-2xl">{formattedDate}</p>
          </div>
        </section>

        <section id="contador" className="section flex items-center justify-center bg-wedding-blush px-6">
          <div className="w-full max-w-4xl rounded-3xl bg-white p-8 text-center shadow-xl md:p-12">
            <h2 className="text-3xl font-semibold md:text-5xl">Faltan...</h2>
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
                  <p className="font-semibold">4:30 PM - Recepción</p>
                  <p className="text-sm opacity-80">Bienvenida y registro de invitados</p>
                </li>
                <li className="border-l-2 border-wedding-rose pl-4">
                  <p className="font-semibold">5:00 PM - Ceremonia</p>
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
                src="https://www.google.com/maps?q=Palacio+de+Bellas+Artes+CDMX&output=embed"
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
