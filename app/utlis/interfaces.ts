// utils/interfaces.ts
export interface User {
    id: string;
    name: string;
    email: string;
    photo: string;
    provider: string;
    total_tasks: number;
    completed_tasks: number;
    preferences: {
        task_generation_notifications: boolean;
        notify_prompt: boolean;
        prompt_period: string | null; // "one_day", "one_week", "two_weeks"
        overdue_task_notifications: boolean;
        theme: string; // "light" | "dark"
    };
    timezone: string; 
}



export interface UserFormData {
    name: string;
    oldpassword: string;
    newpassword: string;
    preferences: {
        task_generation_notifications: boolean;
        notify_prompt: boolean;
        prompt_period: string | null;
        overdue_task_notifications: boolean;
        theme: string;
    };
    timezone: string;
    photo?: File | null;
    photoUrl?: string | null;
}

export interface Asset {
    id: number;
    name: string;
    category: string;

    manufacturer?: string;
    model?: string;
    serial_number?: string;
    location?: string;
    purchase_date?: string | null;
    warranty_expiry?: string | null;
    status?: string;
    photo_url?: string | null;
    notes?: string | null;
    user_id?: number | null;
    last_completed_task_name?: string | null;
    last_completed_task_date?: string | null;
    next_upcoming_task_name?: string | null;
    next_upcoming_task_date?: string | null;
    pending_tasks_count?: number;
    completed_tasks_count?: number;
    overdue_tasks_count?: number;
    total_scheduled_tasks?: number;
    created_at?: string;
    updated_at?: string;
}


export interface ScheduleFormData {
    name: string;
    linked_asset: string;
    frequency: string;
    start_date: string;
    end_date: string;
    status: "active" | "paused";
    notes: string;
}

export interface TaskFormData {
    asset_id: number | null,
    task_name: string,
    scheduled_date: string,
    status: string,
    notes: string,
}

export interface Schedule {
    id: number;
    asset_id: number;
    asset_model: string;
    schedule_name: string;
    frequency: string;
    start_date: string | null;  // ISO string (can be null)
    end_date: string | null;
    notes: string;
    created_at: string;
    updated_at: string;
    status: string;
    user_id: number;
    asset_name: string;
}

export interface Task {
    id: number;
    asset_id: number;
    asset_name?: string;
    asset_model: string;
    schedule_id?: number;
    task_name: string;
    scheduled_date: string;
    completed_date?: string;
    status: "active" | "overdue" | "completed" | "skipped";
    notes?: string;
    updated_at: string;
}


