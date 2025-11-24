// UserProfileDropdown.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { User } from "../utlis/interfaces";

interface Props {
    user: User;
}

const UserProfileDropdown: React.FC<Props> = ({ user }) => {
    const router = useRouter();

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                {user.photo ?
                    <div className="w-10 rounded-full">
                        <img src={user.photo} alt={user.name} />
                    </div> :
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                        <span>👤</span>
                    </div>
                }
            </label>

            <div
                tabIndex={0}
                className="mt-3 p-4 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80"
            >
                <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        {user.photo ? (<img src={user.photo} alt={user.name} className="w-full h-full object-cover" />) :
                            (<div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                                {/* DaisyUI default person icon */}
                                <span>👤</span>
                            </div>)
                        }
                    </div>
                    <h3 className="text-lg font-bold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>

                    <button
                        className="btn btn-sm btn-primary mt-2 w-full"
                        onClick={() => router.push("/home/settings")}
                    >
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserProfileDropdown;
