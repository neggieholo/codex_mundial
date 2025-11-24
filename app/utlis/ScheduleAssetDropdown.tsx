"use client";

import React, { useState } from "react";
import { Asset } from "./interfaces";
import { ScheduleFormData } from "./interfaces";

interface Props {
    assets: Asset[];
    formData: ScheduleFormData;
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>;
}


export default function SearchableAssetDropdown({ assets, formData, setFormData }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const filtered = assets.filter((a) =>
        a.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative">
            {/* Fake select button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="input input-bordered w-full text-left"
            >
                {formData.linked_asset
                    ? assets.find((a) => String(a.id) === formData.linked_asset)?.name
                    : "Select an asset"}
            </button>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full bg-base-100 shadow-lg rounded-lg p-2 max-h-64 overflow-y-auto">
                    {/* Search box inside dropdown */}
                    <input
                        type="text"
                        placeholder="Search assets..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="input input-bordered w-full mb-2"
                    />

                    {filtered.map((a) => (
                        <div
                            key={a.id}
                            onClick={() => {
                                setFormData((prev) => ({ ...prev, linked_asset: a.id.toString() }));
                                setIsOpen(false);
                            }}
                            className="p-2 rounded hover:bg-base-200 cursor-pointer"
                        >
                            <strong className="block">{a.name.toUpperCase()}</strong>
                            <small className="block text-xs text-gray-500">
                                {a.manufacturer?.toUpperCase() || "UNKNOWN"} ({a.model || "No model"})
                            </small>
                        </div>
                    ))}

                    {filtered.length === 0 && (
                        <p className="text-center text-sm text-gray-500 p-2">No assets found</p>
                    )}
                </div>
            )}
        </div>
    );
}

