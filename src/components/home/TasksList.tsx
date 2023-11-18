import TaskCard from "@/components/common/task/TaskCard";
import React from "react";
import {ITask} from "@/types/task";
import Link from "next/link";

type TasksListProps = {
    tasks: ITask[];
}

const TasksList = ({ tasks } : TasksListProps) => {

    return (
        <div className={"w-full flex flex-col mt-8 gap-3 lg:mt-16"}>
            {tasks.map((task) =>
                <Link href={`/task/${task.id}`}>
                    <TaskCard task={task} />
                </Link>
            )}
        </div>
    )
}

export default TasksList