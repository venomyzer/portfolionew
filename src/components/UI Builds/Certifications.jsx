import { MagicCard } from "@/components/ui/magic-card"

// ── Local icon imports ────────────────────────────────────────────────────────
import googleCloudLogo from "@/assets/icons/googlecloud.svg"
import mongodbLogo from "@/assets/icons/mongodb.svg"
import adobeLogo from "@/assets/icons/adobe.svg"
import googleLogo from "@/assets/icons/google.svg"

// ── Cert data ─────────────────────────────────────────────────────────────────
export const CERTS = [
    {
        id: 1,
        title: "Generative AI Leader",
        description: "Learned to design, deploy and evaluate generative AI systems for real-world workflows and products, applying prompt engineering techniques and integrating large language models into practical applications.",
        issuer: "Google Cloud",
        logo: googleCloudLogo,
        logoSize: "w-50 h-50",
        logoPosition: "bottom-2 right-6",
        gradientFrom: "#4285F4",
        gradientTo: "#ffcc00",
    },
    {
        id: 2,
        title: "Introduction to MongoDB",
        description: "Covered document modeling, CRUD operations, aggregation pipelines and indexing strategies for scalable NoSQL databases.",
        issuer: "MongoDB",
        logo: mongodbLogo,
        logoSize: "w-60 h-60",
        logoPosition: "bottom-6 -right-18",
        gradientFrom: "#34ff00",
        gradientTo: "#00b072",
    },
    {
        id: 3,
        title: "Adobe Graphic Designer",
        description: "Mastered visual communication, layout principles, and production workflows across the Adobe Creative Suite.",
        issuer: "Adobe",
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
        issuer: "Google",
        logo: googleLogo,
        logoSize: "w-34 h-34",
        logoPosition: "bottom-8 right-5",
        gradientFrom: "#4285F4",
        gradientTo: "#77f600",
    },
]

// ── Cert Card — exported so CertiSection can use it ───────────────────────────
export function CertCard({ cert }) {
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
                    <p className="text-xs text-muted-foreground">Issued by:</p>
                    <p className="text-sm text-muted-foreground font-semibold">{cert.issuer}</p>
                </div>

                {/* Logo — position + size controlled per card in CERTS data */}
                <div className={`absolute ${cert.logoPosition} translate-x-4 translate-y-4
                                transition-all duration-300 ease-out opacity-50 scale-150
                                group-hover:scale-180 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-100`}>
                    <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className={`${cert.logoSize} object-contain select-none`}
                        draggable={false}
                    />
                </div>

            </div>
        </MagicCard>
    )
}