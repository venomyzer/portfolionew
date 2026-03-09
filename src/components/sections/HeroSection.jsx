import { InteractiveGridPattern } from "../ui/interactive-grid-pattern"
import authorImage from "../../assets/photos/author.jpg"

function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
        {/*Background*/}
        <div
            className="absolute inset-0"
            style={{
                maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            }}
        >
            <InteractiveGridPattern />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-center items-center pointer-events-none">
            <div className="flex gap-12 items-center">
                {/* Hero Image */}
                <div className="relative rounded-3xl bg-white/90 shadow-xl shadow-black/10 p-3 border border-gray-200/80 -rotate-3 overflow-hidden">
                    <img
                        src={authorImage}
                        alt="Portrait of Bibek"
                        className="h-72 w-56 rounded-2xl object-cover"
                    />
                </div>
                {/* Hero Text */}
                <div className="text-box flex flex-col gap-4">
                    <h1 className="text-6xl font-bold">Hi, I am Bibek</h1>
                    <h2 className="text-3xl font-semibold">
                        Also known as Venomyzer. <br />
                        Sometimes Cheeezzy. <br />
                        Always an Artist.
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection