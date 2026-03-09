import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert.jsx"
import { Button } from "@/components/ui/button.jsx"

export function WorkAlert({ onConnect }) {
    return (
        // ✅ select-none prevents text selection
        <Alert className="max-w-md flex items-center justify-between gap-8 select-none">
            <div>
                <AlertTitle className="text-base">🟢 Bibek is now available</AlertTitle>
                <AlertDescription className="mt-1">
                    Want some work done? Connect Now
                </AlertDescription>
            </div>
            {/* ✅ cursor-none stops cursor flicker */}
            {/* ✅ onPointerDown fires before any mouse leave events */}
            <Button
                size="sm"
                variant="default"
                className="cursor-none"
                onPointerDown={onConnect}
            >
                Connect
            </Button>
        </Alert>
    )
}
