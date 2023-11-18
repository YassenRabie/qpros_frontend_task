import * as React from "react"

import { cn } from "@/lib/utils"
import {Button} from "@/components/ui/Button";
import {Minus, Plus} from "lucide-react";
import {useRef} from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }) => {
        const inputRef = useRef(null);

        const onPlusClick = (e) => {
            e.preventDefault();

            e.target.value = Number(inputRef.current.value) + 1;

            props.onChange(e);
        }

        const onMinusClick = (e) => {
            e.preventDefault();

            e.target.value = Number(inputRef.current.value) - 1;

            props.onChange(e);
        }

        return (
            <div className={"relative flex items-center"}>
                <input
                    type={type}
                    className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        className
                    )}
                    ref={inputRef}
                    {...props}
                />

                {type === "number" &&
                    <div className={"absolute right-1"}>
                      <Button onClick={onPlusClick} size={"sm"} variant={"text"}>
                        <Plus size={18} />
                      </Button>

                      <Button onClick={onMinusClick} size={"sm"} variant={"text"}>
                        <Minus size={18} />
                      </Button>
                    </div>
                }
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
