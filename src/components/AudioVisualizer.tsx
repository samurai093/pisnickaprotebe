import { useState } from 'react'
import { PlayCircle, PauseCircle, Music, Video } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AudioVisualizer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [activeTab, setActiveTab] = useState('audio')

    return (
        <section id="ukazky" className="section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Poslechněte si ukázky</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
                        Profesionální kvalita zpracování. Vyberte si přesně styl, který sedí obdarovanému.
                    </p>
                </div>

                <div className="flex justify-center" style={{ marginBottom: '32px', gap: '16px' }}>
                    <button
                        onClick={() => setActiveTab('audio')}
                        className="btn glass-panel"
                        style={{ padding: '12px 24px', background: activeTab === 'audio' ? 'rgba(124, 58, 237, 0.5)' : 'var(--bg-card)', borderColor: activeTab === 'audio' ? 'var(--primary-light)' : 'var(--glass-border)' }}
                    >
                        <Music size={18} /> Audio ukázky
                    </button>
                    <button
                        onClick={() => setActiveTab('video')}
                        className="btn glass-panel"
                        style={{ padding: '12px 24px', background: activeTab === 'video' ? 'rgba(124, 58, 237, 0.5)' : 'var(--bg-card)', borderColor: activeTab === 'video' ? 'var(--primary-light)' : 'var(--glass-border)' }}
                    >
                        <Video size={18} /> Video & Lyric ukázky
                    </button>
                </div>

                {activeTab === 'audio' ? (
                    <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', borderRadius: 'var(--radius-lg)' }}>
                        <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Ukázka: Zamilovaný Pop</h3>
                                <p style={{ color: 'var(--accent)' }}>K výročí, Ženský hlas</p>
                            </div>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                style={{ background: 'transparent', border: 'none', color: 'var(--primary-light)', cursor: 'pointer', transition: 'var(--transition)' }}
                            >
                                {isPlaying ? <PauseCircle size={64} /> : <PlayCircle size={64} />}
                            </button>
                        </div>

                        {/* Faux Visualizer */}
                        <div className="flex items-center justify-between" style={{ height: '60px', gap: '4px' }}>
                            {Array.from({ length: 40 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={isPlaying ? { height: ['10%', '100%', '30%', '80%', '10%'] } : { height: '10%' }}
                                    transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: "easeInOut" }}
                                    style={{
                                        width: '4px',
                                        height: '10%',
                                        background: i % 5 === 0 ? 'var(--accent)' : 'var(--primary-light)',
                                        borderRadius: '2px',
                                        opacity: isPlaying ? 1 : 0.3
                                    }}
                                />
                            ))}
                        </div>

                        <div className="flex justify-between" style={{ marginTop: '16px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                            <span>0:00</span>
                            <span>0:30 (Ukázka)</span>
                        </div>
                    </div>
                ) : (
                    <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '16px', borderRadius: 'var(--radius-lg)' }}>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                            <iframe
                                src="https://www.youtube.com/embed/1PFR8y5DUKc?list=RD1PFR8y5DUKc"
                                title="YouTube video player"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div style={{ marginTop: '16px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '4px' }}>Ukázka: Dětská zóna</h3>
                            <p style={{ color: 'var(--kids-primary)' }}>Animovaný klip na míru</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
