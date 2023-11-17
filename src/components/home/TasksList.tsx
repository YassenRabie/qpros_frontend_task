import TaskCard from "@/components/common/TaskCard";
import React from "react";
import {ITask} from "@/types/task";

type TasksListProps = {
    tasks: ITask[];
}

const TasksList = ({ tasks } : TasksListProps) => {

    return (
        <div className={"w-full flex flex-col mt-16 gap-3"}>
            {tasks.map((task) => <TaskCard task={task} />)}
        </div>
    )
}

export default TasksList