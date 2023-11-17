import Layout from "@/components/common/layout";
import CreateTaskForm from "@/components/createTask/CreateTaskForm";
import {useState} from "react";

const PAGE_DESCRIPTION = "This app helps you track your tasks by creating a list of tasks with assigns and task timeframe and other details.";

export default function NewTask() {
    const [task, setTask] = useState(null);

    return (
        <Layout
            title={"Create Task"}
            content={PAGE_DESCRIPTION}
        >
            <p className={"text-gray-400 mb-1"}>{task ? 2 : 1}/2</p>

            <div className={"flex flex-col items-center"}>
                <CreateTaskForm />
            </div>
        </Layout>
    )
}
