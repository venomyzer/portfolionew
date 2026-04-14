import { useState, useEffect } from "react"
import { cn } from "@/lib/utils.js"

export function Carousel({ slides = [], interval = 3000 }) {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimating(true)
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % slides.length)
                setAnimating(false)
            }, 300)
        }, interval)
        return () => clearInterval(timer)
    }, [slides.length, interval])

    const slide = slides[current]
    if (!slide) return null

    return (
        <div className="flex flex-col justify-between w-full h-full rounded-3xl border border-border/60 p-8 shadow-sm">

            {/* Slide content */}
            <div
                className={cn(
                    "flex flex-col gap-4 transition-all duration-300",
                    animating ? "-translate-x-4 opacity-0" : "translate-x-0 opacity-100"
                )}
            >
                <span className="text-6xl font-black text-foreground leading-none">{slide.number}</span>
                <h3 className="text-2xl font-bold leading-snug">{slide.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{slide.description}</p>

                {/* Optional tool icons */}
                {slide.icons && slide.icons.length > 0 && (
                    <div className="flex gap-2 mt-1">
                        {slide.icons.map((icon, i) => (
                            <div key={i} className="h-8 w-8 rounded-full border border-border flex items-center justify-center p-1.5 bg-background">
                                <img src={icon} alt="" className="h-full w-full object-contain" />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 justify-center">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300 cursor-none",
                            i === current ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/30"
                        )}
                    />
                ))}
            </div>
        </div>
    )
}