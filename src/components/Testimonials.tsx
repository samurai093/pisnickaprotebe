import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const REVIEWS = [
    { name: 'Jana K.', occasion: 'Narozeniny', text: 'Písnička pro tatínka k 60. narozeninám byla naprosto dokonalá. Celá rodina brečela dojetím!', rating: 5 },
    { name: 'Petr a Lucie', occasion: 'Svatební dar', text: 'Dostali jsme píseň + video jako dar od svědků. Nejlepší a nejoriginálnější věc, co jsme kdy viděli. Krásný hlas.', rating: 5 },
    { name: 'Markéta V.', occasion: 'Dětská zóna', text: 'Klip s dinosaurem pro našeho Filípka pouštíme každý večer před spaním. Je z něj nadšený, že tam zpívají jeho jméno!', rating: 5 }
]

export default function Testimonials() {
    return (
        <section className="section" style={{ background: 'var(--bg-color)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Co říkají naši zákazníci</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
                        Tisíce dojatých oslavenců a rodičů mluví za vše.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {REVIEWS.map((review, i) => (
                        <motion.div
                            key={i}
                            className="glass-panel"
                            whileHover={{ y: -5 }}
                            style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}
                        >
                            <div className="flex" style={{ gap: '4px', color: 'var(--accent)', marginBottom: '16px' }}>
                                {[...Array(review.rating)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                            </div>
                            <p style={{ fontSize: '1.125rem', marginBottom: '24px', fontStyle: 'italic' }}>
                                "{review.text}"
                            </p>
                            <div className="flex justify-between items-center" style={{ marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '16px' }}>
                                <span style={{ fontWeight: 600 }}>{review.name}</span>
                                <span style={{ fontSize: '0.875rem', color: 'var(--primary-light)' }}>{review.occasion}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
