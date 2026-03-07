import { useState } from 'react'
import { Music } from 'lucide-react'
import Hero from './components/Hero'
import AudioVisualizer from './components/AudioVisualizer'
import KidsZone from './components/KidsZone'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import OrderModal from './components/OrderModal'
import FloatingBackground from './components/FloatingBackground'
import './index.css'

function App() {
  const [isKidsZone, setIsKidsZone] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={`min-h-screen ${isKidsZone ? 'kids-theme' : ''}`} style={{ position: 'relative' }}>
      <FloatingBackground isKidsZone={isKidsZone} />

      {/* Header */}
      <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <div className="container flex items-center justify-between" style={{ height: '80px' }}>
          <div className="logo flex items-center" style={{ gap: '12px', cursor: 'pointer' }} onClick={() => setIsKidsZone(false)}>
            <div style={{ background: 'var(--primary-light)', padding: '10px', borderRadius: '12px', display: 'flex' }}>
              <Music color="white" size={24} />
            </div>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
              PísničkaProTebe<span className="text-gradient">.cz</span>
            </span>
          </div>

          <nav className="flex items-center" style={{ gap: '32px', display: window.innerWidth > 768 ? 'flex' : 'none' }}>
            <a href="#jak-to-funguje" style={{ fontWeight: 500, opacity: 0.9, transition: 'opacity 0.2s' }}>Jak to funguje</a>
            <a href="#ukazky" style={{ fontWeight: 500, opacity: 0.9, transition: 'opacity 0.2s' }}>Ukázky</a>
            <button
              onClick={() => {
                const newValue = !isKidsZone;
                setIsKidsZone(newValue);
                setTimeout(() => {
                  if (newValue) {
                    document.getElementById('detska-zona')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 100);
              }}
              style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#f472b6', border: '1px solid rgba(236, 72, 153, 0.3)', padding: '8px 16px', borderRadius: 'var(--radius-full)', fontWeight: 600, cursor: 'pointer', transition: 'var(--transition)' }}
            >
              {isKidsZone ? 'Zpět pro dospělé' : 'Dětská zóna 🎈'}
            </button>
          </nav>

          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            Vytvořit písničku
          </button>
        </div>
      </header>

      <main>
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        <section id="jak-to-funguje" className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
          <div className="container text-center">
            <h2 style={{ fontSize: '3rem', marginBottom: '48px' }}>Píseň za méně než 24 hodin</h2>
            <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
              <div>
                <div style={{ width: '64px', height: '64px', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--primary-light)', borderRadius: '50%', margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid rgba(124, 58, 237, 0.3)' }}>1</div>
                <h3>Zadejte detaily</h3>
                <p style={{ color: 'var(--text-muted)' }}>Řekněte nám pro koho to je a jaké vzpomínky chcete v písni zachytit.</p>
              </div>
              <div>
                <div style={{ width: '64px', height: '64px', background: 'rgba(250, 204, 21, 0.1)', color: 'var(--accent)', borderRadius: '50%', margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid rgba(250, 204, 21, 0.3)' }}>2</div>
                <h3>Výběr žánru</h3>
                <p style={{ color: 'var(--text-muted)' }}>Preferujete pohádkovou dětskou píseň, pop nebo zamilovaný jazz?</p>
              </div>
              <div>
                <div style={{ width: '64px', height: '64px', background: 'rgba(124, 58, 237, 0.1)', color: 'var(--primary-light)', borderRadius: '50%', margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', border: '1px solid rgba(124, 58, 237, 0.3)' }}>3</div>
                <h3>Hotovo!</h3>
                <p style={{ color: 'var(--text-muted)' }}>MP3 a animovaný klip letí přímo do vašeho emailu.</p>
              </div>
            </div>
          </div>
        </section>

        <AudioVisualizer />

        <Testimonials />

        <FAQ />

        {isKidsZone && <KidsZone />}
      </main>

      <footer style={{ padding: '64px 0', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', textAlign: 'center' }}>
        <div className="container">
          <p>&copy; 2026 PísničkaProTebe.cz - Originální hudební klipy.</p>
        </div>
      </footer>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
