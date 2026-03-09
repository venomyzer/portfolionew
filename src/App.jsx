import { useState } from "react"
import { SmoothCursor } from "@/components/ui/smooth-cursor.jsx"
import { WorkAlert } from "@/components/UI Builds/WorkAlert.jsx"
import { ConnectDrawer } from "@/components/UI Builds/ConnectDrawer.jsx"
import { AIworkflow } from "@/components/UI Builds/AIworkflow.jsx"

import HeroSection from "./components/sections/HeroSection"

function App() {
    const [showAlert, setShowAlert] = useState(false)
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <div className="cursor-none">

            {/*POINTER*/}
            <SmoothCursor />

            {/*ALERT*/}
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
            ${showAlert
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"
                }`}
                onMouseEnter={() => setShowAlert(true)}
            >
                <WorkAlert onConnect={() => setShowDrawer(true)} />
            </div>
            {/*Alert HElPER*/}
            <div
                className="relative h-screen w-full overflow-hidden"
                onMouseEnter={() => setShowAlert(true)}
                onMouseLeave={() => setShowAlert(false)}
            >
                <HeroSection />
            </div>

            {/*DRAWER*/}
            <ConnectDrawer
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
            />

            <div className="relative h-screen w-full overflow-hidden px-40">
                <AIworkflow />
            </div>


        </div>
    )
}

export default App