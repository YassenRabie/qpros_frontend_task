import React from "react";
import {Calendar, Clock, Trash, User} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {ITask, TaskContextType, TaskDetails} from "@/types/task";
import {format} from "date-fns";
import {TaskContext} from "@/context/tasksContext";

type TaskCardProps = {
    task: ITask;
}

const TaskCard = ({ task }: TaskCardProps) => {
    const { deleteTask } = React.useContext(TaskContext) as TaskContextType;

    const taskDetails: TaskDetails[] = [
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

    const onDeleteClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        deleteTask(task.id);
    }

    return (
        <div className={"flex w-full items-center shadow-md rounded-md px-4 py-4 border hover:bg-gray-100 flex-col lg:flex-row lg:px-6"}>
            <div className={"flex-1 w-full"}>
                <h3 className={"font-[500] text-base lg:text-xl"}>{task.title}</h3>

                <p className={"text-xs text-gray-500 lg:text-sm"}>{task.subtitle}</p>

                <div className={"flex flex-col mt-4 gap-1"}>
                    {taskDetails.map(({ Icon, label, value }) =>
                        <div className={"flex items-center gap-1.5"}>
                            <Icon className={"text-gray-400 w-4"} />

                            <p className={"text-gray-400 text-xs hidden lg:block"}>{`${label}:`}</p>

                            <p className={"text-gray-500 text-sm"}>{value}</p>
                        </div>
                    )}
                </div>
            </div>

            <Button onClick={onDeleteClick} variant={"outline"} className={"ml-auto mt-4"}>
                <Trash />
            </Button>
        </div>
    )
}

export default TaskCard;