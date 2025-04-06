import React from 'react'
import Error from './Error';

interface InputProps extends React.ComponentProps<'input'> {
    label?: string;
    error?: boolean;
    helperText?: string | null;
};

const Input = ({
    label,
    id,
    error,
    helperText,
    ...props
}: InputProps
) => {
    return (
        <div style={{ marginBottom: '1rem' }}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                {...props}
            />
            {error && <Error> {helperText}</Error>}
        </div>
    )
}

export default Input