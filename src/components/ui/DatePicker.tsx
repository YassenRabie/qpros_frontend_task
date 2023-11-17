"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/Popover"
import {FormControl} from "@/components/ui/Form";

interface DatePickerProps {
    value: Date | null;
    onChange: any;
    label: string;
    disabled: (date: Date) => boolean;
}

export function DatePicker({ value, onChange, label, disabled } : DatePickerProps) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "pl-3 text-left font-normal text-gray-400",
                            value && "text-muted-foreground"
                        )}
                    >
                        {value ? (
                            format(value, "PPP")
                        ) : (
                            <span>{label}</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                    mode="single"
                    selected={value as any}
                    onSelect={onChange}
                    disabled={disabled}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
