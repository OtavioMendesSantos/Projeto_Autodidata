import React from 'react'

interface InputProps extends React.ComponentProps<'input'> {
    label?: string;
};

const Input = ({ label, id, ...props }: InputProps) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                {...props}
            />
        </div>
    )
}

export default Input