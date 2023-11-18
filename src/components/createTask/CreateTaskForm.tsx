"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/Button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import {Textarea} from "@/components/ui/TextArea";
import {TimePicker} from "@/components/ui/TimePicker";
import {DatePicker} from "@/components/ui/DatePicker";
import {useFetchUsers} from "@/hooks/useFetchUsers";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/Select";
import {ChevronRight} from "lucide-react";
import CreateTaskSchema from "@/components/createTask/CreateTask.schema";
import React from "react";
import {TaskContext} from "@/context/tasksContext";
import {ITask, TaskContextType} from "@/types/task";

type CreateTaskFormProps = {
    setTask: (task: ITask) => void;
}

function CreateTaskForm({ setTask }: CreateTaskFormProps) {
    const { saveTask } = React.useContext(TaskContext) as TaskContextType;
    const { users }  = useFetchUsers();

    const form = useForm<z.infer<typeof CreateTaskSchema>>({
        resolver: zodResolver(CreateTaskSchema),
    })

    function onSubmit(data: z.infer<typeof CreateTaskSchema>) {
        const task = { ...data, id: Date.now().toString() };

        saveTask(task);

        setTask(task);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <FormTitle text={"Please fill with your Task details"} />

                <div className={"columns-1 space-6 space-y-6 lg:columns-2"}>
                    {/* Title Field */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Title" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Subtitle Field */}
                    <FormField
                        control={form.control}
                        name="subtitle"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Subtitle" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Description TextArea*/}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    maxLength={150}
                                    placeholder="Description"
                                    className="resize-none"
                                    rows={6}
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormTitle text={"Please fill with the request"} />

                <div className={"columns-1 space-6 space-y-6 lg:columns-2"}>
                    {/* Start Date Picker */}
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-1 flex-col">
                                <DatePicker
                                    label={"Start Date"}
                                    value={field.value}
                                    onChange={field.onChange}
                                    disabled={(date) => date < new Date()}
                                />

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* End Date Picker */}
                    <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-1 flex-col">
                                <DatePicker
                                    label={"End Date"}
                                    value={field.value}
                                    onChange={field.onChange}
                                    disabled={(date) => date < new Date()}
                                />

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className={"flex space-x-6"}>
                    {/* Task Time Picker */}
                    <FormField
                        control={form.control}
                        name="taskTime"
                        render={({ field }) => (
                            <FormItem className="flex flex-1 flex-col">
                                <TimePicker
                                    label={"Task Time"}
                                    value={field.value}
                                    onChange={field.onChange}
                                />

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Duration Input */}
                    <FormField
                        control={form.control}
                        name="durationInHours"
                        render={({ field }) => (
                            <FormItem className={"flex-1"}>
                                <FormControl>
                                    <Input
                                        placeholder="Duration/h"
                                        type={"number"}
                                        min={0}
                                        max={30}
                                        {...field}
                                        onChange={event => field.onChange(+event.target.value)}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* User Select */}
                <FormField
                    control={form.control}
                    name="assignedTo"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Assign To" />
                                    </SelectTrigger>
                                </FormControl>

                                <SelectContent>
                                    {users.map((user) =>
                                        <SelectItem value={user.name}>{user.name}</SelectItem>
                                    )}
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className={"flex"}>
                    <Button className={"ml-auto"} type="submit">
                        Submit
                        <ChevronRight className={"ml-2"} />
                    </Button>
                </div>
            </form>
        </Form>
    )
}

const FormTitle = ({ text }: { text: string }) =>
    <h4 className={"text-lg lg:text-2xl"}>{text}</h4>

export default CreateTaskForm