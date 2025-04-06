import React from 'react'

interface ErrorProps extends React.PropsWithChildren { }

const Error = ({ children }: ErrorProps) => {
    return (
        <p style={{ color: 'red' }}>{children}</p>
    )
}

export default Error