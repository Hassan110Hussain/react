import React, { useId } from "react";

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-4 py-2.5 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400
                    focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50
                    transition-all duration-200 ${className}`}
                ref={ref}
                id={id}
                {...props}
            />
        </div>
    )
})

export default Input
