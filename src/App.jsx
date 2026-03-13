import { useState } from "react"
import { SmoothCursor } from "@/components/ui/smooth-cursor.jsx"
import { WorkAlert } from "@/components/UI Builds/WorkAlert.jsx"
import { ConnectDrawer } from "@/components/UI Builds/ConnectDrawer.jsx"


import HeroSection from "./components/sections/HeroSection"
import AIworkflow  from "./components/sections/AIworkflow"
import Details from "./components/sections/Details"
import CertiSection from "./components/sections/CertiSection"
import ProjectSection from "./components/sections/ProjectSection"

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



            {/*DRAWER*/}
            <ConnectDrawer
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
            />




            {/*HERO SECTION*/}
            <div
                className="relative h-screen w-full overflow-hidden"
                onMouseEnter={() => setShowAlert(true)}
                onMouseLeave={() => setShowAlert(false)}
            >
                <HeroSection />
            </div>
            {/*HERO SECTION*/}



            {/*AI WORKFLOW*/}
            <div className="relative h-screen w-full overflow-hidden px-40">
                <AIworkflow />
            </div>
            {/*AI WORKFLOW*/}



            {/*SKILLS*/}
            <div className="relative h-screen w-full overflow-hidden px-40">
                <Details />
            </div>
            {/*SKILLS*/}



            {/*CERTIFICATION*/}
            <div className="relative h-screen w-full overflow-hidden px-40">
                <CertiSection />
            </div>
            {/*CERTIFICATION*/}


            <div className="relative h-screen w-full overflow-hidden px-40">
                <ProjectSection />
            </div>


        </div>
    )
}

export default App