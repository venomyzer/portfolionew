import {BCalender} from "@/components/UI Builds/BCalender.jsx";
import {ChartRadarDots} from "@/components/UI Builds/ChartRadarDots.jsx";


function Details() {
    return (
        <div className="relative">

            {/* BACKGROUND */}
            <div
                className="absolute w-full h-screen bg-lime-400 z-0"
                style={{
                    clipPath: "ellipse(105% 100% at 50% 100%)"
                }}
            />

            {/* CONTENT */}
            <div className="relative z-10">
                <div>
                    <h1 className="text-6xl font-bold pt-50 pb-20 pl-20">
                        Something About
                        <span className="bg-white px-5 pb-2 ml-6 rounded-lg ">Myself</span>
                    </h1>
                </div>

                <div className="flex gap-10 justify-around px-100">
                    <div>
                        <BCalender />
                    </div>
                    <div className="w-[400px]">
                        <ChartRadarDots />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Details
