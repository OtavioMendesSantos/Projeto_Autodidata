import React from 'react'

interface DateInputProps extends React.ComponentProps<'input'> {
    label: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, ...props }) => {
    return (
        <div>
            <label
                style={labelStyle}
                htmlFor={label}
            >
                {label}
            </label>
            <input
                type="date"
                style={inputStyle}
                id={label}
                name={label}
                {...props}
            />
        </div>
    )
}

const generalStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: 'var(--color-2)',
    padding: 'var(--gap-s) .75rem',
    background: 'var(--color-4)',
    borderRadius: 'var(--gap)'
}

const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: 'var(--gap-s)',
    fontWeight: '600',
    ...generalStyle
}

const inputStyle: React.CSSProperties = {
    border: 'none',
    fontFamily: '600',
    fontSize: 'monospace',
    ...generalStyle
}

export default DateInput