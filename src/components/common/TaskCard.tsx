import React from "react";
import {Calendar, Clock, Trash, User} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaskCardType } from "@/entities/task";

const TaskCard = () => {
    const taskDetails: TaskCardType[] = [
        {
            Icon: Calendar,
            label: "Start - End Date",
            value: "11/02/2023 - 11/20/2023",
        },
        {
            Icon: Clock,
            label: "Duration",
            value: "5 Hours",
        },
        {
            Icon: User,
            label: "User",
            value: "Jon Doe",
        },
    ];

    return (
        <div className={"flex w-full columns-3 items-center shadow-md rounded-md px-6 py-4 border"}>
            <div className={"flex-1"}>
                <p className={"text-xl font-[500]"}>Task title here</p>

                <p className={"text-sm text-gray-500"}>Task subtitle, here Lorem ipsum dolor sit amet.</p>

                <div className={"flex flex-col mt-4 gap-1"}>
                    {taskDetails.map(({ Icon, label, value }) =>
                        <div className={"flex items-center gap-1.5"}>
                            <Icon className={"text-gray-400 w-4"} />

                            <p className={"text-gray-400 text-xs"}>{`${label}:`}</p>

                            <p className={"text-gray-500 text-sm"}>{value}</p>
                        </div>
                    )}
                </div>
            </div>

            <Button variant={"outline"} className={"ml-8"}>
                <Trash />
            </Button>
        </div>
    )
}

export default TaskCard;