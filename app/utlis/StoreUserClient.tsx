// app/dashboard/StoreUserClient.tsx
"use client";

import { useEffect } from "react";
import localforage from "localforage";
import { toast } from "react-toastify";

interface Props {
    name: string;
    email: string;
}

export default function StoreUserClient({ name, email }: Props) {
    useEffect(() => {
        const storeUser = async () => {
            await localforage.setItem("user", { name, email });
            toast.success(`Welcome, ${name}!`);
        };

        storeUser();
    }, [name, email]);

    return null; // No UI
}
