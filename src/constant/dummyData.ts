import {addDays} from "date-fns";

export const TASKS_INITIAL_STATE = [
    {
        id: "id-1",
        title: "Frontend Performance Boost",
        subtitle: "Frontend Performance Boost",
        description: "Our web application has been experiencing slower load times, affecting user experience. The task involves optimizing the frontend to improve performance and reduce page load times. Identify and implement best practices for code splitting, lazy loading, and image optimization. Ensure a smooth and responsive user interface.",
        startDate: addDays(new Date(), 4),
        endDate: addDays(new Date(), 8),
        taskTime: "02:45",
        durationInHours: 12,
        assignedTo: "Frontend Development Team",
    },
    {
        id: "id-2",
        title: "Strengthen Database Security",
        subtitle: "Upgrade Database Infrastructure",
        description: "The database infrastructure is due for a security upgrade. The task involves implementing the latest security patches, configuring firewalls, and reviewing user access controls. Additionally, explore and implement encryption for sensitive data at rest.",
        startDate: addDays(new Date(), 2),
        endDate: addDays(new Date(), 6),
        taskTime: "01:00",
        durationInHours: 6,
        assignedTo: "Database Administration Team",
    },
    {
        id: "id-3",
        title: "Implement Third-Party API",
        subtitle: "Integration for New Feature",
        description: "We are introducing a new feature that requires integration with a third-party API. The task involves studying the API documentation, implementing the necessary endpoints, and handling data synchronization. Ensure error handling and create comprehensive documentation for future maintenance. Conduct thorough testing to guarantee seamless functionality.",
        startDate: addDays(new Date(), 12),
        endDate: addDays(new Date(), 15),
        taskTime: "09:00",
        durationInHours: 7,
        assignedTo: "Backend Development Team",
    },
];