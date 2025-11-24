"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import localforage from "localforage";
import { User } from "../utlis/interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    // 🔁 Fetch or restore user on mount
    useEffect(() => {
        const loadUser = async () => {
            const cached = await localforage.getItem<User>("user");
            if (cached) setUser(cached);
            else await refreshUser();
        };
        loadUser();
    }, []);

    const refreshUser = async () => {
        try {
            const res = await fetch(`${BASE_URL}/api/auth/user`, {
                credentials: "include",
            });
            if (!res.ok) throw new Error("Not authenticated");
            const data: User = await res.json();
            setUser(data);
            await localforage.setItem("user", data);
        } catch (err) {
            console.error(err);
            setUser(null);
        }
    };

    return (
        <UserContext.Provider value={{ user, setUser, refreshUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error("useUser must be used inside a UserProvider");
    return ctx;
};
