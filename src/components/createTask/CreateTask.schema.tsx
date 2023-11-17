import * as z from "zod";
import {differenceInDays} from "date-fns";

const CreateTaskSchema = z.object({
    title: z.string().min(3, {
        message: "Title must be at least 3 characters",
    }),
    subtitle: z.string().min(1, {
        message: "Required"
    }),
    description: z.string().min(1, {
        message: "Required"
    }).max(150, {
        message: "Duration must be less than 30",
    }),
    startDate: z.date(),
    endDate: z.date(),
    taskTime: z.string(),
    durationInHours: z.number().min(1, {
        message: "Duration must be greater than 1",
    }).max(30, {
        message: "Duration must be less than 30",
    }),
    assignedTo: z.string()
}).refine((data) => differenceInDays(data.endDate, data.startDate) < 6, {
    message: "The range between start and end dates must be less than 6 days",
    path: ["endDate"]
}).refine((data) => data.endDate > data.startDate, {
    message: "Due date can't be earlier than start date",
    path: ["endDate"]
});

export default CreateTaskSchema;