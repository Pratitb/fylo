import React from "react";
import clsx from "clsx";
import type { InputType } from "../utils/types";

const Input: React.FC<InputType> = ({ label, placeholder = "", type = "text", value, onChange, error, disabled = false, className }) => {
    return (
        <div className="flex flex-col w-full mb-4">
            {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} className={clsx("w-full px-3 py-2 border rounded-full outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan-500 disabled:bg-gray-100 disabled:cursor-not-allowed", error ? "border-red-500 focus:ring-red-400" : "border-gray-300", className)} />
            {error && <span className="mt-1 text-xs text-red-500">{error}</span>}
        </div>
    );
};

export default Input;
