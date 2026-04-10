import { MagicCard } from "@/components/ui/magic-card"

// ── Local icon imports ────────────────────────────────────────────────────────
import googleCloudLogo from "@/assets/icons/googlecloud.svg"
import mongodbLogo from "@/assets/icons/mongodb.svg"
import adobeLogo from "@/assets/icons/adobe.svg"
import googleLogo from "@/assets/icons/google.svg"
import f1Logo from "@/assets/icons/f1.svg"

// ── Cert data ─────────────────────────────────────────────────────────────────
// eslint-disable-next-line react-refresh/only-export-components
export const CERTS = [
    {
        id: 1,
        title: "F1 Race Report",
        description: "Full-stack web app that fetches Formula 1 data via APIs, processes it with a Spring Boot backend, and visualizes race insights using a React frontend—showcasing REST APIs, data handling, and interactive UI.",
        stack: "Springboot, PostgreSQL, React",
        logo: f1Logo,
        logoSize: "w-50 h-50",
        logoPosition: "bottom-2 right-24",
        gradientFrom: "#ff0000",
        gradientTo: "#ff0442",
    },
    {
        id: 2,
        title: "RFID Student Attendance System",
        description: "A system that automates student attendance using RFID, reducing manual effort and enabling real-time, accurate tracking for 200+ users",
        stack: "C/C++,Node.js, Firebase",
        logo: mongodbLogo,
        logoSize: "w-60 h-60",
        logoPosition: "bottom-6 -right-18",
        gradientFrom: "#34ff00",
        gradientTo: "#00b072",
    },
    {
        id: 3,
        title: "DevBadges",
        description: "A gamified developer platform for daily DSA & SQL challenges—earn XP, level up, and showcase progress with embeddable GitHub README badges.",
        stack: "Springboot, PostgreSQL, React",
        logo: adobeLogo,
        logoSize: "w-36 h-36",
        logoPosition: "bottom-8 right-5",
        gradientFrom: "#FF0000",
        gradientTo: "#ff4400",
    },
    {
        id: 4,
        title: "Google AI Essentials",
        description: "Explored core AI concepts, prompt engineering techniques and practical applications of Google's AI tools.",
        stack: "Google",
        logo: googleLogo,
        logoSize: "w-34 h-34",
        logoPosition: "bottom-8 right-5",
        gradientFrom: "#4285F4",
        gradientTo: "#77f600",
    },
]

// ── Cert Card — exported so CertiSection can use it ───────────────────────────
export function ProjectCard({ cert }) {
    return (
        <MagicCard
            className="h-full w-full rounded-2xl cursor-none"
            gradientFrom={cert.gradientFrom}
            gradientTo={cert.gradientTo}
            gradientSize={250}
            gradientOpacity={0.06}
        >
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-background px-5 py-3 flex flex-col justify-between">

                {/* Text content */}
                <div className="flex flex-col gap-2 z-10 max-w-[65%]">
                    <h3 className="text-2xl font-bold leading-snug">{cert.title}</h3>
                    <p className="text-md text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>

                {/* Issuer */}
                <div className="z-10">
                    <p className="text-xs text-muted-foreground">Stack:</p>
                    <p className="text-sm text-muted-foreground font-semibold">{cert.stack}</p>
                </div>

                {/* Logo — position + size controlled per card in CERTS data */}
                <div className={`absolute ${cert.logoPosition} translate-x-4 translate-y-4
                                transition-all duration-300 ease-out opacity-50 scale-150
                                group-hover:scale-180 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-100`}>
                    <img
                        src={cert.logo}
                        alt={cert.stack}
                        className={`${cert.logoSize} object-contain select-none`}
                        draggable={false}
                    />
                </div>

            </div>
        </MagicCard>
    )
}