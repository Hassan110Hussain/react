function Button({
    children,
    type = 'button',
    bgColor = 'bg-indigo-600 hover:bg-indigo-500',
    textColor = 'text-white',
    className = '',
    disabled = false,
    ...props
}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200
                ${bgColor} ${textColor}
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
