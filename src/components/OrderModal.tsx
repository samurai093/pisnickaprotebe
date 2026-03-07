import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, Music, Video, Star, Gift } from 'lucide-react'

// Dummy steps
const STEPS = ['Příležitost', 'Příběh a Detaily', 'Hudební Žánr', 'Doplňky', 'Shrnutí']

export default function OrderModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [currentStep, setCurrentStep] = useState(0)
    const [orderType, setOrderType] = useState('song') // song, video, kids
    const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null)

    if (!isOpen) return null

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1))
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }} onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="glass-panel"
                style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '80vh', display: 'flex', overflow: 'hidden', background: 'var(--bg-color)', border: '1px solid var(--glass-border)' }}
            >
                {/* Left Sidebar - Progress */}
                <div style={{ width: '250px', background: 'rgba(255,255,255,0.02)', borderRight: '1px solid var(--glass-border)', padding: '32px' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Music size={20} className="text-gradient" /> Objednávka
                    </h3>

                    <div className="flex flex-col" style={{ gap: '24px' }}>
                        {STEPS.map((step, idx) => (
                            <div key={idx} className="flex items-center" style={{ gap: '12px', opacity: currentStep >= idx ? 1 : 0.4, transition: 'var(--transition)' }}>
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: currentStep > idx ? 'var(--primary-light)' : (currentStep === idx ? 'var(--accent)' : 'var(--bg-card)'), border: `2px solid ${currentStep >= idx ? 'transparent' : 'var(--glass-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
                                    {currentStep > idx ? <CheckCircle2 size={16} color="white" /> : <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>{idx + 1}</span>}
                                </div>
                                <span style={{ fontSize: '0.875rem', fontWeight: currentStep === idx ? 600 : 400, color: currentStep === idx ? 'white' : 'inherit' }}>{step}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '64px' }}>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Máte dotaz? <br /><a href="#" className="text-gradient">Podpora 24/7</a></p>
                    </div>
                </div>

                {/* Right Content Area */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px' }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '2rem' }}>{STEPS[currentStep]}</h2>
                        <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.5rem' }}>&times;</button>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', paddingRight: '16px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {currentStep === 0 && (
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Vyberte typ produktu pro vaši příležitost.</p>
                                        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                            <div
                                                onClick={() => setOrderType('song')}
                                                className="glass-panel"
                                                style={{ padding: '24px', cursor: 'pointer', border: orderType === 'song' ? '2px solid var(--primary-light)' : '1px solid var(--glass-border)', transition: 'var(--transition)' }}
                                            >
                                                <Music size={32} color="var(--primary-light)" style={{ marginBottom: '16px' }} />
                                                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Jen Píseň</h4>
                                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Originální hudba a text v MP3.</p>
                                            </div>
                                            <div
                                                onClick={() => setOrderType('video')}
                                                className="glass-panel"
                                                style={{ padding: '24px', cursor: 'pointer', border: orderType === 'video' ? '2px solid var(--accent)' : '1px solid var(--glass-border)', transition: 'var(--transition)' }}
                                            >
                                                <Video size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
                                                <h4 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Píseň + Klip</h4>
                                                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Animované dětské nebo estetické lyric video.</p>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '32px' }}>
                                            <h4 style={{ marginBottom: '16px' }}>Příležitost</h4>
                                            <div className="flex flex-wrap" style={{ gap: '12px' }}>
                                                {['Narozeniny', 'Dětská párty', 'Svatba', 'Výročí', 'Ukolébavka'].map(o => (
                                                    <button
                                                        key={o}
                                                        onClick={() => setSelectedOccasion(o)}
                                                        className={`btn ${selectedOccasion === o ? 'btn-primary' : 'btn-outline'}`}
                                                        style={{ padding: '8px 16px', fontSize: '0.875rem' }}
                                                    >
                                                        {o}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {currentStep === 1 && (
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Řekněte nám vše, co má v písni zaznít.</p>
                                        <textarea
                                            className="glass-panel w-full"
                                            style={{ height: '200px', padding: '16px', color: 'white', fontFamily: 'inherit', resize: 'none', border: '1px solid var(--glass-border)' }}
                                            placeholder="Pro koho to je? Jaká je jejich oblíbená hračka/zvíře? Nějaké interní vtipy nebo silné vzpomínky? Čím víc detailů, tím lepší píseň bude."
                                        />
                                    </div>
                                )}
                                {currentStep > 1 && currentStep < 4 && (
                                    <div className="flex items-center justify-center flex-col h-full" style={{ opacity: 0.5 }}>
                                        <Star size={48} className="text-gradient" style={{ marginBottom: '16px' }} />
                                        <p>Tento krok by obsahoval výběr žánru, hlasu a doplňků (tisk PDF).</p>
                                    </div>
                                )}
                                {currentStep === 4 && (
                                    <div className="text-center">
                                        <Gift size={64} className="text-gradient" style={{ margin: '0 auto 24px auto' }} />
                                        <h3>Vše je připraveno!</h3>
                                        <p style={{ color: 'var(--text-muted)', margin: '16px 0 32px 0' }}>Během 24 hodin obdržíte kouzelný dárek do emailu.</p>
                                        <div className="glass-panel" style={{ padding: '24px', textAlign: 'left', marginBottom: '32px' }}>
                                            <div className="flex justify-between" style={{ marginBottom: '12px' }}><span>Základní Píseň</span> <span>490 Kč</span></div>
                                            {orderType === 'video' && <div className="flex justify-between" style={{ color: 'var(--accent)' }}><span>+ Animovaný klip</span> <span>290 Kč</span></div>}
                                            <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '16px 0' }} />
                                            <div className="flex justify-between" style={{ fontSize: '1.25rem', fontWeight: 700 }}><span>Celkem</span> <span className="text-gradient">{orderType === 'video' ? '780' : '490'} Kč</span></div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-between" style={{ marginTop: '32px', borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
                        <button className="btn btn-outline" onClick={prevStep} style={{ opacity: currentStep === 0 ? 0 : 1, pointerEvents: currentStep === 0 ? 'none' : 'auto' }}>
                            Zpět
                        </button>
                        <button className="btn btn-primary" onClick={nextStep}>
                            {currentStep === STEPS.length - 1 ? 'Zaplatit a Odeslat' : 'Další krok'} <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
