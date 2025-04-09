import React from 'react'

interface DateInputProps extends React.ComponentProps<'input'> {
    label: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, ...props }) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="date" id={label} name={label} {...props} />
        </div>
    )
}

export default DateInput