import { Sparkles, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(124, 58, 237, 0.2)', color: '#c4b5fd', borderRadius: 'var(--radius-full)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                            ✨ Píseň a video do 24 hodin
                        </span>
                        <h1 style={{ fontSize: '4rem', marginBottom: '24px' }}>
                            Darujte <span className="text-gradient">originální emoce</span>, které nikdy nezmizí
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
                            Vytvoříme pro vás unikátní hudební hit a ohromující videoklip přesně na míru vašemu příběhu. K narozeninám, výročí nebo jen tak z lásky.
                        </p>
                        <div className="flex justify-center" style={{ gap: '16px', flexWrap: 'wrap' }}>
                            <button className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.125rem' }} onClick={onOpenModal}>
                                Vytvořit hit na míru <Sparkles size={20} />
                            </button>
                            <a href="#ukazky" className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '1.125rem' }}>
                                Přehrát ukázky <PlayCircle size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-light)', filter: 'blur(150px)', opacity: 0.3, zIndex: -1, borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'var(--accent)', filter: 'blur(180px)', opacity: 0.15, zIndex: -1, borderRadius: '50%' }} />
        </section>
    )
}
