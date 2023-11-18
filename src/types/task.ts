import {LucideIcon} from "lucide-react";

export interface ITask {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    startDate: Date;
    endDate: Date;
    taskTime: string;
    durationInHours: number;
    assignedTo: string;
}

export type TaskContextType = {
    tasks: ITask[];
    saveTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
};

export type TaskDetails = {
    Icon: LucideIcon;
    label: string;
    value: string;
}