import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, Music, Video, Gift } from 'lucide-react'

// Dummy steps
const STEPS = ['Příležitost', 'Příběh a Detaily', 'Hudební Žánr', 'Doplňky', 'Shrnutí']

export default function OrderModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    const [currentStep, setCurrentStep] = useState(0)
    const [orderType, setOrderType] = useState('song') // song, video, kids
    const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null)
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null)
    const [selectedAddons, setSelectedAddons] = useState<string[]>([])

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
                                                {['Narozeniny', 'Dětská párty', 'Svatba', 'Výročí', 'Ukolébavka', 'Jiné'].map(o => (
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
                                {currentStep === 2 && (
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Vyberte styl, který nejlépe vystihuje váš příběh.</p>
                                        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' }}>
                                            {[
                                                { id: 'pop', name: 'Moderní Pop', sub: 'Chytlavé a veselé' },
                                                { id: 'rock', name: 'Rock / Akustika', sub: 'Energické a živé' },
                                                { id: 'rap', name: 'Rap / Hip-Hop', sub: 'Vtipné a rytmické' },
                                                { id: 'folk', name: 'Lidový styl', sub: 'Tradiční a milé' },
                                                { id: 'lullaby', name: 'Ukolébavka', sub: 'Jemné a uklidňující' },
                                                { id: 'edm', name: 'EDM / Dance', sub: 'Party a energie' }
                                            ].map(g => (
                                                <div
                                                    key={g.id}
                                                    onClick={() => setSelectedGenre(g.id)}
                                                    className="glass-panel"
                                                    style={{
                                                        padding: '20px',
                                                        cursor: 'pointer',
                                                        border: selectedGenre === g.id ? '2px solid var(--primary-light)' : '1px solid var(--glass-border)',
                                                        textAlign: 'center',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <h5 style={{ fontSize: '1rem', marginBottom: '4px' }}>{g.name}</h5>
                                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{g.sub}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Vylaďte svůj dárek k dokonalosti.</p>
                                        <div className="flex flex-col" style={{ gap: '16px' }}>
                                            {[
                                                { id: 'express', name: 'Expresní doručení (do 12h)', price: 190, desc: 'Dostanete píseň ještě dnes.' },
                                                { id: 'pdf', name: 'Certifikát s věnováním (PDF)', price: 90, desc: 'Krásně zpracovaný dokument připravený k tisku.' },
                                                { id: 'mastering', name: 'Extra Master & Mix', price: 150, desc: 'Prémiová kvalita zvuku od studiového inženýra.' }
                                            ].map(addon => (
                                                <div
                                                    key={addon.id}
                                                    onClick={() => {
                                                        if (selectedAddons.includes(addon.id)) {
                                                            setSelectedAddons(prev => prev.filter(a => a !== addon.id))
                                                        } else {
                                                            setSelectedAddons(prev => [...prev, addon.id])
                                                        }
                                                    }}
                                                    className="glass-panel flex justify-between items-center"
                                                    style={{
                                                        padding: '20px',
                                                        cursor: 'pointer',
                                                        border: selectedAddons.includes(addon.id) ? '2px solid var(--accent)' : '1px solid var(--glass-border)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    <div className="flex items-center" style={{ gap: '16px' }}>
                                                        <div style={{
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '6px',
                                                            border: '2px solid var(--glass-border)',
                                                            background: selectedAddons.includes(addon.id) ? 'var(--accent)' : 'transparent',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}>
                                                            {selectedAddons.includes(addon.id) && <CheckCircle2 size={16} color="white" />}
                                                        </div>
                                                        <div>
                                                            <h5 style={{ fontSize: '1rem' }}>{addon.name}</h5>
                                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{addon.desc}</p>
                                                        </div>
                                                    </div>
                                                    <span style={{ fontWeight: 600 }}>+{addon.price} Kč</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {currentStep === 4 && (
                                    <div className="text-center">
                                        <Gift size={64} className="text-gradient" style={{ margin: '0 auto 24px auto' }} />
                                        <h3>Vše je připraveno!</h3>
                                        <p style={{ color: 'var(--text-muted)', margin: '16px 0 32px 0' }}>Během brzké doby obdržíte kouzelný dárek do emailu.</p>
                                        <div className="glass-panel" style={{ padding: '24px', textAlign: 'left', marginBottom: '32px' }}>
                                            <div className="flex justify-between" style={{ marginBottom: '12px' }}>
                                                <span>{orderType === 'song' ? 'Základní Píseň' : 'Píseň + Animovaný klip'}</span>
                                                <span>{orderType === 'song' ? 490 : 780} Kč</span>
                                            </div>
                                            {selectedAddons.includes('express') && <div className="flex justify-between" style={{ marginBottom: '8px', fontSize: '0.875rem' }}><span>+ Expresní doručení</span> <span>190 Kč</span></div>}
                                            {selectedAddons.includes('pdf') && <div className="flex justify-between" style={{ marginBottom: '8px', fontSize: '0.875rem' }}><span>+ PDF Certifikát</span> <span>90 Kč</span></div>}
                                            {selectedAddons.includes('mastering') && <div className="flex justify-between" style={{ marginBottom: '8px', fontSize: '0.875rem' }}><span>+ Extra Master & Mix</span> <span>150 Kč</span></div>}
                                            <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '16px 0' }} />
                                            <div className="flex justify-between" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                                                <span>Celkem</span>
                                                <span className="text-gradient">
                                                    {(orderType === 'song' ? 490 : 780) +
                                                        (selectedAddons.includes('express') ? 190 : 0) +
                                                        (selectedAddons.includes('pdf') ? 90 : 0) +
                                                        (selectedAddons.includes('mastering') ? 150 : 0)} Kč
                                                </span>
                                            </div>
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
