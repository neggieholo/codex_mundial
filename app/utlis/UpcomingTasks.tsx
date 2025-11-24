import React from "react";
import { Task } from "./interfaces"; // adjust path if needed

interface Props {
    tasks: Task[];
}

const UpcomingTasks: React.FC<Props> = ({ tasks }) => {
    const now = new Date();

    // ✅ Only show ACTIVE tasks scheduled for a future date
    const upcoming = tasks
        .filter(
            (t) =>
                t.status === "active" &&
                new Date(t.scheduled_date) > now
        )
        .sort(
            (a, b) =>
                new Date(a.scheduled_date).getTime() -
                new Date(b.scheduled_date).getTime()
        )
        .slice(0, 3);

    const formatRelativeDate = (dateStr: string) => {
        const date = new Date(dateStr);
        const diffDays = Math.ceil(
            (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (diffDays <= 1) return { text: "Tomorrow", color: "badge-warning" };
        if (diffDays <= 3) return { text: `In ${diffDays} days`, color: "badge-info" };
        if (diffDays <= 7) return { text: "Next week", color: "badge-success" };
        return {
            text: date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
            }),
            color: "badge-neutral",
        };
    };

    if (upcoming.length === 0) {
        return (
            <p className="text-center text-gray-500 py-3">
                No upcoming tasks.
            </p>
        );
    }

    return (
        <ul className="divide-y divide-base-300">
            {upcoming.map((task) => {
                const { text, color } = formatRelativeDate(task.scheduled_date);
                return (
                    <li
                        key={task.id}
                        className="py-2 flex justify-between items-center"
                    >
                        <span className="font-semibold">{task.task_name}</span>
                        <span className={`badge ${color}`}>{text}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default UpcomingTasks;
