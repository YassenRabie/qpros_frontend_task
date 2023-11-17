import * as React from 'react';
import {ITask, TaskContextType} from "@/types/task";
import {addDays} from "date-fns";

export const TaskContext = React.createContext<TaskContextType | null>(null);

interface ITaskProviderProps {
    children: React.ReactNode;
}

const TaskProvider = ({ children } : ITaskProviderProps) => {
    const [tasks, setTasks] = React.useState<ITask[]>([
        {
            id: "string 1",
            title: "This is a test task",
            subtitle: "I'm a subtitle",
            description: "lorem20",
            startDate: addDays(new Date(), 4),
            endDate: addDays(new Date(), 8),
            taskTime: "01:00",
            durationInHours: 6,
            assignedTo: "Jon Do",
        },
        {
            id: "string 3",
            title: "This is a test task 2",
            subtitle: "I'm a subtitle",
            description: "lorem20",
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 3),
            taskTime: "01:00",
            durationInHours: 6,
            assignedTo: "Jon Do",
        },
    ]);

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