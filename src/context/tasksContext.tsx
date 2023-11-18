import * as React from 'react';
import {ITask, TaskContextType} from "@/types/task";
import {addDays} from "date-fns";
import {TASKS_INITIAL_STATE} from "@/constant/dummyData";

export const TaskContext = React.createContext<TaskContextType | null>(null);

interface ITaskProviderProps {
    children: React.ReactNode;
}

const TaskProvider = ({ children } : ITaskProviderProps) => {
    const [tasks, setTasks] = React.useState<ITask[]>(TASKS_INITIAL_STATE);

    const saveTask = (task: ITask) => {
        setTasks([...tasks, task]);
    }

    const deleteTask = (id: string) => {
        const newTasks = tasks.filter((task: ITask) => task.id !== id);

        setTasks(newTasks);
    }

    return <TaskContext.Provider value={{ tasks, saveTask, deleteTask }}>
        {children}
    </TaskContext.Provider>;
};

export default TaskProvider;