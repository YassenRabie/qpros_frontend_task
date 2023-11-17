import Layout from "@/components/common/layout";
import CreateTaskForm from "@/components/createTask/CreateTaskForm";
import {useState} from "react";
import {ITask} from "@/types/task";
import TaskSummary from "@/components/common/task/TaskSummary";

const PAGE_DESCRIPTION = "This app helps you track your tasks by creating a list of tasks with assigns and task timeframe and other details.";

export default function NewTaskPage() {
    const [task, setTask] = useState<ITask | null>(null);

    return (
        <Layout
            title={"Create Task"}
            content={PAGE_DESCRIPTION}
        >
            <p className={"text-gray-400 mb-1"}>{task ? 2 : 1}/2</p>

            <div className={"flex flex-col items-center"}>
                {task && <TaskSummary task={task} />}

                {!task && <CreateTaskForm setTask={setTask} />}
            </div>
        </Layout>
    )
}
