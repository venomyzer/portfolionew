import { Marquee } from "@/components/ui/marquee"

import chatgptIcon from "@/assets/icons/chatgpt.svg"
import claudeIcon from "@/assets/icons/claudecolor.svg"
import geminiIcon from "@/assets/icons/gemini.svg"
import cursorIcon from "@/assets/icons/cursor.svg"
import slackIcon from "@/assets/icons/slack.svg"
import zapierIcon from "@/assets/icons/zapier.svg"
import notionIcon from "@/assets/icons/notion.svg"
import googlesheetsIcon from "@/assets/icons/googlesheets.svg"
import googledocsIcon from "@/assets/icons/googledocs.svg"
import googledriveIcon from "@/assets/icons/googledrive.svg"
import vercelIcon from "@/assets/icons/vercel.svg"
import postmanIcon from "@/assets/icons/postman.svg"
import adobefireFlyIcon from "@/assets/icons/adobefirefly.svg"

const TOOLS = [
    { name: "ChatGPT", icon: chatgptIcon },
    { name: "Claude", icon: claudeIcon },
    { name: "Gemini", icon: geminiIcon },
    { name: "Cursor", icon: cursorIcon },
    { name: "Slack", icon: slackIcon },
    { name: "Zapier", icon: zapierIcon },
    { name: "Notion", icon: notionIcon },
    { name: "Google Sheets", icon: googlesheetsIcon },
    { name: "Google Docs", icon: googledocsIcon },
    { name: "Google Drive", icon: googledriveIcon },
    { name: "Vercel", icon: vercelIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Adobe Firefly", icon: adobefireFlyIcon },
]

function ToolCard({ name, icon }) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-background px-5 py-3 shadow-sm mx-2">
            <img src={icon} alt={name} className="h-6 w-6 object-contain" />
            <span className="text-sm font-medium whitespace-nowrap">{name}</span>
        </div>
    )
}

export function AITechStack() {
    return (
        <div className="w-full">
            {/* Label */}
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-6 mb-6">
                AI & Automation Stack
            </p>

            {/* Row 1 — left to right */}
            <Marquee pauseOnHover className="[--duration:30s] [--gap:0.5rem]">
                {TOOLS.map(tool => (
                    <ToolCard key={tool.name} {...tool} />
                ))}
            </Marquee>

            {/* Row 2 — right to left */}
            {/*<Marquee reverse pauseOnHover className="[--duration:30s] [--gap:0.5rem] mt-3">*/}
            {/*    {[...TOOLS].reverse().map(tool => (*/}
            {/*        <ToolCard key={tool.name} {...tool} />*/}
            {/*    ))}*/}
            {/*</Marquee>*/}
        </div>
    )
}