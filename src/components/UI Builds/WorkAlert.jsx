import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export function WorkAlert() {
    return (
        <Alert className="max-w-md flex items-center justify-between gap-8">
            <div>
                <AlertTitle className="text-base"> 🟢 Bibek is now available</AlertTitle>
                <AlertDescription className="mt-1">
                    Want some work done? Connect Now
                </AlertDescription>
            </div>
            <Button size="sm" variant="default" className="cursor-none">
                Connect
            </Button>
        </Alert>
    )
}
