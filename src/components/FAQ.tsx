import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
    {
        question: 'Jak dlouho trvá vytvoření písničky a videoklipu?',
        answer: 'Vaši písničku i s personalizovaným klipem vám připravíme a odešleme do 24 hodin od objednávky. Klademe důraz na nejvyšší kvalitu výsledku, který vás nadchne.'
    },
    {
        question: 'Připravujete i animované klipy a dětské písničky?',
        answer: 'Ano, to je naše specialita! Můžete si nechat vytvořit animovaný dětský klip s oblíbenou hračkou, nebo např. ukolébavku přímo se jménem vašeho dítěte. K písničkám pro dospělé zase tvoříme profi estetická "lyric" videa.'
    },
    {
        question: 'Co všechno dostanete po dokončení objednávky?',
        answer: 'Na e-mail vám zašleme hotovou skladbu v křišťálově čistém MP3 formátu a zároveň výsledný videoklip ve formátu MP4, který si můžete navždy stáhnout na jakékoliv zařízení.'
    },
    {
        question: 'Co když budu chtít něco změnit?',
        answer: 'Vaše radost je náš cíl. Pokud dojdete k závěru, že by písničce nebo klipu prospěla nějaká změna, nabízíme vám jednu úpravu zcela zdarma, abyste byli stoprocentně spokojeni.'
    },
    {
        question: 'Z jakých hudebních stylů si mohu vybrat?',
        answer: 'Pokrýváme široké spektrum. Ať už jde o dětské rytmické říkanky, pop, rock, folk, zamilovaný jazz, nebo dokonce hip-hop – ve formuláři si stačí vybrat váš vysněný žánr a zbytek necháte na nás.'
    },
    {
        question: 'Kde mohu písničku a klip všude využít?',
        answer: 'Po zakoupení máte plné i neomezené právo na osobní užití. Klipy můžete volně promítat a přehrávat na narozeninách, oslavách, svatbách, i je bez obav nahrát na vlastní sociální sítě.'
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="section" id="faq">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="text-center" style={{ marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Často kladené otázky</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
                        Vše, co potřebujete vědět o naší službě
                    </p>
                </div>

                <div className="flex flex-col" style={{ gap: '16px' }}>
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index
                        return (
                            <div
                                key={index}
                                className="glass-panel"
                                style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex justify-between items-center w-full"
                                    style={{ padding: '24px', background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', textAlign: 'left', fontSize: '1.125rem', fontWeight: 600 }}
                                >
                                    {faq.question}
                                    {isOpen ? <ChevronUp size={20} className="text-gradient" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div style={{ padding: '0 24px 24px 24px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
