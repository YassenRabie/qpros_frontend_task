import React, {FormEvent, useState} from "react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/Popover";
import {FormControl} from "@/components/ui/Form";
import {Button} from "@/components/ui/Button";
import {cn} from "@/lib/utils";

type TimePickerProps = {
    value: string | null;
    onChange: (string: String) => void;
    label: string;
}

const HOURS = Array.from({ length: 24 }, (_, i) =>
    i.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping:false }));

const MINUTES = ["00", "05", "10", "15", "30", "45", "60"];

export function TimePicker({ value, onChange, label } : TimePickerProps) {
    const [time, setTime] = useState<string | null>(value);

    const handleTimeChange = (e: FormEvent<HTMLSelectElement>) => {
        let newTime;

        let hour = !time ? "00" : time.split(":")[0];
        let minute = !time ? "00" : time.split(":")[1];

        const value = e.currentTarget.value;

        if (e.currentTarget.name === "hours") {
            hour = value;
        }

        if (e.currentTarget.name === "minutes") {
            minute = value;
        }

        newTime = `${hour}:${minute}`;

        setTime(newTime);

        onChange(newTime);
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "pl-3 font-normal text-gray-400 justify-start",
                            value && "text-muted-foreground"
                        )}
                    >
                        {value ? (
                            value
                        ) : (
                            <span>{label}</span>
                        )}
                    </Button>
                </FormControl>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
                <div className="py-2 px-4 bg-white rounded-lg shadow-md">
                    <div className="flex">
                        <select
                            name="hours"
                            className="bg-transparent appearance-none outline-none"
                            onChange={handleTimeChange}
                            value={time?.split(":")[0]}
                        >
                            {HOURS.map((item) => <option value={item}>{item}</option>)}
                        </select>

                        <span className="text-xl mr-1">:</span>

                        <select
                            name="minutes"
                            className="bg-transparent appearance-none outline-none"
                            onChange={handleTimeChange}
                            value={time?.split(":")[1]}
                        >
                            {MINUTES.map((item) => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}