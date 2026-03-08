import * as React from "react"

export function custom-cursor({ color = "#3b82f6", size = 20, active }) {
    const [pos, setPos] = React.useState({ x: 0, y: 0 })

    React.useEffect(() => {
        const move = (e) => setPos({ x: e.clientX, y: e.clientY })
        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [])

    if (!active) return null

    return (
        <div
            className="fixed z-[9999] pointer-events-none"
            style={{
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
            }}
        >
            <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
                <path
                    d="M2 2L18 9L10 11L7 18L2 2Z"
                    fill={color}
                    stroke="white"
                    strokeWidth="1"
                />
            </svg>
        </div>
    )
}