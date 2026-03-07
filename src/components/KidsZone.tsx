import { Play, Sparkles, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function KidsZone() {
    return (
        <section id="detska-zona" className="section" style={{ background: 'var(--kids-bg)', color: 'var(--kids-text)', position: 'relative' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '64px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(236, 72, 153, 0.1)', color: 'var(--kids-primary)', borderRadius: 'var(--radius-full)', fontWeight: 700, marginBottom: '16px' }}>
                        <Star size={18} fill="currentColor" /> Dětská Zóna
                    </span>
                    <h2 style={{ fontSize: '3rem', color: 'var(--kids-primary)', marginBottom: '16px' }}>
                        Kouzlo ožívá ve videu
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', color: '#475569' }}>
                        Udělejte dětem radost písničkou se jménem a animovaným klipem, kde vystupuje jejich oblíbená hračka.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {/* Feature 1 */}
                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ background: 'white', borderColor: 'rgba(0,0,0,0.05)', padding: '32px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <div style={{ width: '80px', height: '80px', background: 'var(--kids-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'white' }}>
                            <Play size={32} fill="currentColor" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Animované Klipy</h3>
                        <p style={{ color: '#64748b' }}>
                            Písnička doprovázená zábavnou animací. Vyberte zviřátko, hrdinu nebo nahrajte fotku oblíbené hračky.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ background: 'white', borderColor: 'rgba(0,0,0,0.05)', padding: '32px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                        <div style={{ width: '80px', height: '80px', background: 'var(--kids-accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', color: 'white' }}>
                            <Sparkles size={32} fill="currentColor" />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Personalizovaný hit</h3>
                        <p style={{ color: '#64748b' }}>
                            Text na míru s jménem dítěte, jeho zvyky a oblíbenými věcmi. Skvělé jako ukolébavka nebo na oslavu.
                        </p>
                    </motion.div>
                </div>

                <div className="text-center" style={{ marginTop: '64px' }}>
                    <button className="btn" style={{ background: 'var(--kids-primary)', color: 'white', padding: '16px 48px', fontSize: '1.25rem', boxShadow: '0 10px 25px rgba(236, 72, 153, 0.4)' }}>
                        Vytvořit dětskou písničku 🚀
                    </button>
                </div>
            </div>

            {/* Decor */}
            <div style={{ position: 'absolute', top: '10%', right: '5%', fontSize: '4rem', opacity: 0.2, transform: 'rotate(15deg)' }} className="animate-float">🎈</div>
            <div style={{ position: 'absolute', bottom: '20%', left: '10%', fontSize: '4rem', opacity: 0.2, transform: 'rotate(-10deg)', animationDelay: '2s' }} className="animate-float">🧸</div>
        </section>
    )
}
