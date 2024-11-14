import React from 'react'

const Button = ({ children, className = "", maxWidth = true, ...props }) => {
    return (
        <button
            className={`btn btn-primary py-2 align-items-center ${className}`}
            style={{ width: maxWidth ? "100%" : "fit-content" }}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button