import React from "react";
import {Calendar, Clock, LucideIcon, Trash, User} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {ITask, TaskContextType} from "@/types/task";
import {format} from "date-fns";
import {TaskContext} from "@/context/tasksContext";

type TaskCardProps = {
    task: ITask;
}

type TaskDetaislType = {
    Icon: LucideIcon;
    label: string;
    value: string;
}

const TaskCard = ({ task }: TaskCardProps) => {
    const { deleteTask } = React.useContext(TaskContext) as TaskContextType;

    const taskDetails: TaskDetaislType[] = [
        {
            Icon: Calendar,
            label: "Start - End Date",
            value: `${format(task.startDate, "yyy MMM dd")} - ${format(task.endDate, "yyy MMM dd")}`,
        },
        {
            Icon: Clock,
            label: "Duration",
            value: `${task.durationInHours} Hours`,
        },
        {
            Icon: User,
            label: "User",
            value: task.assignedTo,
        },
    ];

    return (
        <div className={"flex w-full columns-3 items-center shadow-md rounded-md px-6 py-4 border"}>
            <div className={"flex-1"}>
                <p className={"text-xl font-[500]"}>{task.title}</p>

                <p className={"text-sm text-gray-500"}>{task.subtitle}</p>

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

            <Button onClick={() => deleteTask(task.id)} variant={"outline"} className={"ml-8"}>
                <Trash />
            </Button>
        </div>
    )
}

export default TaskCard;