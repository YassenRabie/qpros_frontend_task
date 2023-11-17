import React from "react";
import Layout from "@/components/common/layout";
import {TaskContextType} from "@/types/task";
import TaskSummary from "@/components/common/task/TaskSummary";
import {TaskContext} from "@/context/tasksContext";
import {useRouter} from "next/router";

const PAGE_DESCRIPTION = "This app helps you track your tasks by creating a list of tasks with assigns and task timeframe and other details.";

export default function TaskPage() {
    const { query } = useRouter();

    const { tasks } = React.useContext(TaskContext) as TaskContextType;

    const task = tasks.find((task) => task.id === query.id);

    if (!task)
        return <span>Something went wrong!</span>

    return (
        <Layout
            title={"Create Task"}
            content={PAGE_DESCRIPTION}
        >
            <TaskSummary task={task} />
        </Layout>
    )
}
