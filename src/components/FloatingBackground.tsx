import { Music, Gift, Heart, Star, Mic, Headphones } from 'lucide-react'
import { useEffect, useState } from 'react'
import './FloatingBackground.css'

const ICONS = [Music, Gift, Heart, Star, Mic, Headphones]

export default function FloatingBackground({ isKidsZone }: { isKidsZone: boolean }) {
    const [elements, setElements] = useState<{ id: number; Icon: any; left: string; delay: string; duration: string; size: number }[]>([])

    useEffect(() => {
        // Generate random positions and animations for the icons
        const newElements = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 5}s`,
            duration: `${10 + Math.random() * 15}s`,
            size: 16 + Math.random() * 24
        }))
        setElements(newElements)
    }, [isKidsZone]) // Re-render when theme changes to adjust colors if needed

    return (
        <div className="floating-background" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
            {elements.map((el) => {
                const Icon = el.Icon
                return (
                    <div
                        key={el.id}
                        className={`floating-icon ${isKidsZone ? 'kids' : 'adult'}`}
                        style={{
                            left: el.left,
                            animationDelay: el.delay,
                            animationDuration: el.duration,
                        }}
                    >
                        <Icon size={el.size} />
                    </div>
                )
            })}
        </div>
    )
}
