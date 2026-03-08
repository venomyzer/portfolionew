import { useState } from "react"
import { Calendar } from "../ui/calendar"

export function BCalender() {
    const [selected, setSelected] = useState(undefined)

    // October 2003 — month is 0-indexed, so 9 = October
    const fixedMonth = new Date(2003, 9, 1)
    const birthday = new Date(2003, 9, 15)

    return (
        <Calendar
            mode="single"
            // Locks the calendar to October 2003
            month={fixedMonth}
            // Removes the < > navigation arrows entirely
            disableNavigation
            // Allows clicking other dates
            selected={selected}
            onSelect={setSelected}
            // Tags Oct 15 with a custom "birthday" modifier
            modifiers={{ birthday }}
            // Styles the birthday date — ! overrides shadcn's default styles
            modifiersClassNames={{
                birthday: "!bg-blue-400 !text-white !rounded-full !font-bold",
            }}
            // Overrides internal class names for more generous spacing
            classNames={{
                head_cell:
                    "text-muted-foreground rounded-md w-12 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "h-12 w-12 text-center text-sm p-0 relative",
                day: "h-12 w-12 p-0 font-normal hover:bg-accent hover:text-accent-foreground rounded-full inline-flex items-center justify-center cursor-pointer",
                day_selected:
                    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground rounded-full",
                day_today: "bg-accent text-accent-foreground rounded-full",
                day_outside: "text-muted-foreground opacity-50",
            }}
            className="rounded-lg"
        />
    )
}