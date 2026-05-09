import React, { useId } from "react";

function Select({ options, label, className = '', ...props }, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">
                    {label}
                </label>
            )}
            <select
                {...props}
                ref={ref}
                id={id}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50
                    transition-all duration-200 ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option} className="bg-slate-800">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
