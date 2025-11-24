export default function calculateTaskDates(startDate: Date, frequency: string): {
    last_task_date: Date;
    next_task_date: Date;
} {
    const now = new Date();

    // Helper: add exact calendar intervals
    const addFrequency = (date: Date, freq: string): Date => {
        const d = new Date(date);
        switch (freq) {
            case "Daily":
                d.setDate(d.getDate() + 1);
                break;
            case "Weekly":
                d.setDate(d.getDate() + 7);
                break;
            case "Every 2 Weeks":
                d.setDate(d.getDate() + 14);
                break;
            case "Monthly":
                d.setMonth(d.getMonth() + 1);
                break;
            case "Quarterly":
                d.setMonth(d.getMonth() + 3);
                break;
            case "Yearly":
                d.setFullYear(d.getFullYear() + 1);
                break;
            default:
                break;
        }
        return d;
    };

    // If frequency not recognized, just return startDate
    if (
        !["Daily", "Weekly", "Every 2 Weeks", "Monthly", "Quarterly", "Yearly"].includes(frequency)
    ) {
        return { last_task_date: startDate, next_task_date: startDate };
    }

    // Find the most recent occurrence before now
    let last = new Date(startDate);
    while (addFrequency(last, frequency).getTime() <= now.getTime()) {
        last = addFrequency(last, frequency);
    }

    // Next one after that
    const next = addFrequency(last, frequency);

    return { last_task_date: last, next_task_date: next };
}


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function updateScheduleStatus(id: number, status: "active" | "paused") {
    try {
        const res = await fetch(`${baseUrl}/api/schedules/${id}/status`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ status }),
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || "Failed to update schedule status");
        }

        return await res.json();
    } catch (error: any) {
        console.error("❌ Error updating schedule status:", error.message);
        throw error;
    }
}

export async function deleteSchedule(id: number) {
    try {
        const res = await fetch(`${baseUrl}/api/schedules/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || "Failed to delete schedule");
        }

        return await res.json();
    } catch (error: any) {
        console.error("❌ Error deleting schedule:", error.message);
        throw error;
    }
}
