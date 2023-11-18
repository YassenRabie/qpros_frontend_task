import React from "react";
import Layout from "@/components/common/layout";
import {TaskContextType} from "@/types/task";
import TaskSummary from "@/components/common/task/TaskSummary";
import {TaskContext} from "@/context/tasksContext";
import {useRouter} from "next/router";

const PAGE_DESCRIPTION = "Get a quick overview of task details with the Task Summary. Access title, due date, assignee, and related documents.";

export default function TaskPage() {
    const { query } = useRouter();

    const { tasks } = React.useContext(TaskContext) as TaskContextType;

    const task = tasks.find((task) => task.id === query.id);

    if (!task)
        return <span>Something went wrong!</span>

    return (
        <Layout
            title={"Task Summary"}
            content={PAGE_DESCRIPTION}
        >
            <TaskSummary task={task} />
        </Layout>
    )
}
