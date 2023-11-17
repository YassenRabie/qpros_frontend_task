import React from "react";
import Layout from "@/components/common/layout";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import EmptyList from "@/components/home/EmptyList";
import TaskCard from "@/components/common/task/TaskCard";
import Link from "next/link";
import {TaskContext} from "@/context/tasksContext";
import {TaskContextType} from "@/types/task";
import TasksList from "@/components/home/TasksList";

const PAGE_DESCRIPTION = "This app helps you track your tasks by creating a list of tasks with assigns and task timeframe and other details.";

export default function HomePage() {
    const { tasks } = React.useContext(TaskContext) as TaskContextType;

    return (
        <Layout
            title={"Tasks App"}
            content={PAGE_DESCRIPTION}
        >
            <div className={"flex flex-col items-center"}>
                <Link className={"ml-auto"} href={"task/new"}>
                    <Button>
                        New Task <Plus className={"ml-2"} />
                    </Button>
                </Link>

                {tasks.length === 0 && <EmptyList/>}

                {tasks.length > 0 && <TasksList tasks={tasks} />}

            </div>
        </Layout>
    )
}
