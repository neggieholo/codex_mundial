import { UserFormData } from "./interfaces";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const saveProfile = async ({ formData, setFormData, toast, setSavingProfile }:
    { formData: UserFormData; setFormData: React.Dispatch<React.SetStateAction<UserFormData>>; toast: any; setSavingProfile: React.Dispatch<React.SetStateAction<boolean>> }) => {

    setSavingProfile(true);
    const payload = new FormData();
    payload.append("name", formData.name);
    if (formData.photo) payload.append("photo", formData.photo);
    if (formData.oldpassword) payload.append("oldpassword", formData.oldpassword);
    if (formData.newpassword) payload.append("newpassword", formData.newpassword);

    try {
        const res = await fetch(`${baseUrl}/api/settings/profile`, {
            method: "POST",
            body: payload,
            credentials: "include"
        });
        if (res.ok) {
            const data = await res.json();
            toast.success("Profile updated successfully!");

            setFormData((prev) => ({
                ...prev,
                name: data.user.name,
                photo: null,
                photoUrl: data.user.photo,
                oldpassword: "",
                newpassword: "",
            }));
        } else {
            const error = await res.json();
            toast.error(error?.error || "Failed to update profile.");
        }
    } catch (err) {
        console.error(err);
        toast.error("Error updating profile.");
    } finally {
        setSavingProfile(false);
    }
};

export const savePreferences = async ({ formData, setFormData, toast, setSavingPreferences }:
    { formData: UserFormData; setFormData: React.Dispatch<React.SetStateAction<UserFormData>>; toast: any; setSavingPreferences: React.Dispatch<React.SetStateAction<boolean>> }) => {

    setSavingPreferences(true);
    const payload = {
        task_generation_notifications: formData.preferences.task_generation_notifications,
        notify_prompt: formData.preferences.notify_prompt,
        prompt_period: formData.preferences.notify_prompt ? formData.preferences.prompt_period || "one_day" : null,
        overdue_task_notifications: formData.preferences.overdue_task_notifications,
        theme: formData.preferences.theme,
    };

    try {
        const res = await fetch(`${baseUrl}/api/settings/preferences`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "include",
        });

        const data = await res.json();
        if (res.ok) {
            toast.success("Preferences updated successfully!");

            // ✅ Update formData with the new preferences from backend
            setFormData((prev) => ({
                ...prev,
                preferences: data.user.preferences,
            }));
        } else {
            toast.error(data.error || "Failed to update preferences.");
        }
    } catch (err) {
        console.error(err);
        toast.error("Error updating preferences.");
    } finally {
        setSavingPreferences(false);
    }
};

export const saveAppearance = async ({ formData, setFormData, toast, setSavingAppearance }:
    { formData: UserFormData; setFormData: React.Dispatch<React.SetStateAction<UserFormData>>; toast: any; setSavingAppearance: React.Dispatch<React.SetStateAction<boolean>> }) => {
    setSavingAppearance(true);
    const payload = { theme: formData.preferences.theme };

    try {        
        const res = await fetch(`${baseUrl}/api/settings/appearance`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "include"
        });
        const data = await res.json();

        if (res.ok) {
            toast.success("Appearance updated successfully!");
            setFormData((prev) => ({
                ...prev,
                preferences: data.user.preferences, // replace full preferences object
            }));
        } else {
            toast.error(data?.error || "Failed to update appearance.");
        }
    } catch (err) {
        console.error(err);
        toast.error("Error updating appearance.");
    } finally {
        setSavingAppearance(false);
    }
};

export const saveTimezone = async ({ formData, setFormData, toast, setSavingTimezone }:
    { formData: UserFormData; setFormData: React.Dispatch<React.SetStateAction<UserFormData>>; toast: any; setSavingTimezone: React.Dispatch<React.SetStateAction<boolean>> }) => {

    setSavingTimezone(true);
    const payload = { timezone: formData.timezone };   

    try {
        const res = await fetch(`${baseUrl}/api/settings/timezone`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            credentials: "include"
        });
        const data = await res.json();

        if (res.ok) {
            toast.success("Timezone updated successfully!");
            setFormData((prev) => ({
                ...prev,
                timezone: data.user.timezone, // update timezone from backend
            }));
        } else {
            toast.error(data?.error || "Failed to update timezone.");
        }
    } catch (err) {
        console.error(err);
        toast.error("Error updating timezone.");
    } finally {
        setSavingTimezone(false);
    }
};
