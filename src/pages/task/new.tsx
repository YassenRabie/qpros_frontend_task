import Layout from "@/components/common/layout";
import CreateTaskForm from "@/components/createTask/CreateTaskForm";
import {useState} from "react";
import {ITask} from "@/types/task";
import TaskSummary from "@/components/common/task/TaskSummary";

const PAGE_DESCRIPTION = "Initiate tasks effortlessly with the \"Create Task\" feature. Input details and delegate responsibilities. A streamlined process for prompt task definition and delegation within your team.";

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
