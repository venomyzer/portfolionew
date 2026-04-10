import { useState } from "react"
import { cn } from "@/lib/utils"

// ── Icon imports ──────────────────────────────────────────────────────────────
import figmaIcon from "@/assets/icons/figma.svg"
import photoshopIcon from "@/assets/icons/photoshop.svg"
import illustratorIcon from "@/assets/icons/illustrator.svg"
import reactIcon from "@/assets/icons/react.svg"
import javascriptIcon from "@/assets/icons/javascript.svg"
import tailwindIcon from "@/assets/icons/tailwind.svg"
import claudeIcon from "@/assets/icons/claudecolor.svg"
import chatgptIcon from "@/assets/icons/chatgpt.svg"
import cursorIcon from "@/assets/icons/cursor.svg"
import zapierIcon from "@/assets/icons/zapier.svg"
import geminiIcon from "@/assets/icons/gemini.svg"
import notionIcon from "@/assets/icons/notion.svg"
import n8nIcon from "@/assets/icons/n8n.svg"
import webflowIcon from "@/assets/icons/webflow.svg"
import framerIcon from "@/assets/icons/framer.svg"
import javaIcon from "@/assets/icons/java.svg"
import pythonIcon from "@/assets/icons/python.svg"
import cplusplusIcon from "@/assets/icons/cplusplus.svg"
import mailchimpIcon from "@/assets/icons/mailchimp.svg"
import mongodbIcon from "@/assets/icons/mongodb.svg"
import springbootIcon from "@/assets/icons/spring.svg"
import postgresqlIcon from "@/assets/icons/postgresql.svg"

// ── Sections data ─────────────────────────────────────────────────────────────
const SECTIONS = [
    {
        id: "dev",
        label: "Development",
        description: "Building fast, scalable and maintainable web applications with a strong foundation in modern frontend, backend and core computer science principles.",
        categories: [
            {
                title: "Full Stack Development",
                capabilities: ["Responsive UI", "Component Architecture", "REST API", "OAuth", "Serverless Functions"],
                skills: [
                    { name: "React", icon: reactIcon },
                    { name: "Tailwind", icon: tailwindIcon },
                    { name: "MongoDB", icon: mongodbIcon },
                    { name: "Springboot", icon: springbootIcon },
                    { name: "Postgresql", icon: postgresqlIcon },
                ],
            },
            {
                title: "Languages & Concepts",
                capabilities: ["Data Structures", "Algorithm Design", "Database Design", "Object Oriented Systems"],
                skills: [
                    { name: "Java", icon: javaIcon },
                    { name: "JavaScript", icon: javascriptIcon },
                    { name: "Python", icon: pythonIcon },
                    { name: "C++", icon: cplusplusIcon },
                ],
            },
        ],
    },

    {
        id: "design",
        label: "Graphic & Brand Design",
        description: "Crafting visual identities and digital experiences that communicate clearly and leave a lasting impression — from logo systems to full brand guidelines and UI design.",
        categories: [
            {
                title: "UI & UX Design",
                capabilities: ["Prototyping", "Web Design", "Wireframing", "Design Systems", "User Research"],
                skills: [
                    { name: "Figma", icon: figmaIcon },
                    { name: "Webflow", icon: webflowIcon },
                    { name: "Framer", icon: framerIcon },
                ],
            },
            {
                title: "Graphic & Brand Design",
                capabilities: ["Brand Identity Design", "Social Media Design", "Packaging Design", "Typography"],
                skills: [
                    { name: "Photoshop", icon: photoshopIcon },
                    { name: "Illustrator", icon: illustratorIcon },
                ],
            },
        ],
    },

    {
        id: "ai",
        label: "Production & Shipping",
        description: "Using AI tools to compress development cycles, automate repetitive workflows, and ship production-ready products faster than traditional methods.",
        categories: [
            {
                title: "AI Assistants",
                capabilities: ["Research", "Debugging", "Test Case Generation", "Documentation", "Security Analysis"],
                skills: [
                    { name: "Claude", icon: claudeIcon },
                    { name: "ChatGPT", icon: chatgptIcon },
                    { name: "Cursor", icon: cursorIcon },
                    { name: "Gemini", icon: geminiIcon },
                ],
            },
            {
                title: "Automation",
                capabilities: ["Workflow Automation", "No-Code Pipelines", "Team Communication", "Rapid Prototyping"],
                skills: [
                    { name: "Zapier", icon: zapierIcon },
                    { name: "MailChimp", icon: mailchimpIcon },
                    { name: "Notion", icon: notionIcon },
                    { name: "n8n", icon: n8nIcon },
                ],
            },
        ],
    },
]

// ── Capability Pill ───────────────────────────────────────────────────────────
function CapabilityPill({ name }) {
    return (
        <span className="px-3 py-1 rounded-full text-xs border border-border text-muted-foreground whitespace-nowrap">
            {name}
        </span>
    )
}

// ── Skill Chip ────────────────────────────────────────────────────────────────
function SkillChip({ name, icon, index }) {
    return (
        <div
            className="flex items-center gap-4 px-10 py-5 rounded-xl border border-border bg-background
                       hover:border-foreground/30 hover:bg-accent transition-all duration-200 cursor-none
                       opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
        >
            {icon
                ? <img src={icon} alt={name} className="h-8 w-8 object-contain" />
                : <span className="h-5 w-5 flex items-center justify-center font-black text-muted-foreground">#</span>
            }
            <span className="font-medium whitespace-nowrap select-none">{name}</span>
        </div>
    )
}

// ── Main Component ────────────────────────────────────────────────────────────
export function SkillsPanel() {
    const [active, setActive] = useState("dev")

    const section = SECTIONS.find(s => s.id === active)

    return (
        <div className="flex flex-col gap-6 w-1/2 h-full justify-center select-none">

            {/* Tab buttons */}
            <div className="flex gap-2 flex-wrap">
                {SECTIONS.map(s => (
                    <button
                        key={s.id}
                        onClick={() => setActive(s.id)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-none",
                            active === s.id
                                ? "bg-foreground text-background border-foreground"
                                : "bg-transparent text-foreground border-border hover:border-foreground/50"
                        )}
                    >
                        {s.label}
                    </button>
                ))}
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed">
                {section.description}
            </p>

            {/* Skill categories */}
            <div className="flex flex-col gap-6">
                {section.categories.map((cat, ci) => {
                    const offset = section.categories
                        .slice(0, ci)
                        .reduce((acc, c) => acc + c.skills.length, 0)

                    return (
                        <div key={cat.title} className="flex flex-col gap-3">

                            {/* Category title */}
                            <h4 className="text-2xl font-bold">{cat.title}</h4>

                            {/* Capability pills */}
                            <div className="flex flex-wrap gap-2">
                                {cat.capabilities.map(cap => (
                                    <CapabilityPill key={cap} name={cap} />
                                ))}
                            </div>

                            {/* Tech stack chips */}
                            <div className="flex flex-wrap gap-2 mt-1">
                                {cat.skills.map((skill, i) => (
                                    <SkillChip
                                        key={skill.name}
                                        name={skill.name}
                                        icon={skill.icon}
                                        index={offset + i}
                                    />
                                ))}
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}