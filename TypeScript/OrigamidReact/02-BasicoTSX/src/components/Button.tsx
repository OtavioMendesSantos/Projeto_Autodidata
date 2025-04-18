import React from 'react'

type ButtonProps = React.PropsWithChildren & React.ComponentProps<'button'> & {}

// {
//     total: number;
//     setTotal: React.Dispatch<React.SetStateAction<number>>
// }

const Button = ({ children, onClick, disabled, ...props }: ButtonProps): React.JSX.Element => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button