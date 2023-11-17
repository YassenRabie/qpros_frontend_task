import React from "react";
import {Calendar, Clock, LucideIcon, User} from "lucide-react";
import {ITask} from "@/types/task";
import {format} from "date-fns";

type TaskCardProps = {
    task: ITask;
}

type TaskDetailsType = {
    Icon: LucideIcon;
    label: string;
    value: string;
}

const TaskSummary = ({ task }: TaskCardProps) => {
    const taskDetails: TaskDetailsType[] = [
        {
            Icon: Calendar,
            label: "Start - End Date",
            value: `${format(task.startDate, "yyy MMM dd")} - ${format(task.endDate, "yyy MMM dd")}`,
        },
        {
            Icon: Clock,
            label: "Task Time",
            value: `${task.taskTime}`,
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
        <div className={"flex flex-col w-full"}>
            <p className={"text-xl font-[500]"}>{task.title}</p>

            <p className={"text-sm text-gray-500"}>Subtitle: {task.subtitle}</p>

            <div className={"mt-5"}>
                <p className={"text-sm text-gray-500"}>Description</p>

                <p className={"text-sm text-gray-800"}>{task.description}</p>
            </div>

            <hr className="mt-6 mb-2 h-0.5 border-t-0 bg-gray-100" />

            <div className={"flex-1"}>
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
        </div>
    )
}

export default TaskSummary;