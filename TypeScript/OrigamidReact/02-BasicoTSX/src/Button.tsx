import React from 'react'

type ButtonProps = React.PropsWithChildren & React.ComponentProps<'button'> & {}

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