import React from 'react'

interface CheckboxProps {
    label?: string;
}

const Checkbox = ({ label }: CheckboxProps) => {
    const [value, setValue] = React.useState(false)

    // const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => { setValue(e.currentTarget.checked) }

    return (
        <label style={{
            padding: '1rem',
            border: value ? '2px solid green' : '2px solid red',
        }}>
            <input
                type='checkbox'
                checked={value}
                onChange={({ currentTarget }) => { setValue(currentTarget.checked) }}
            />
            {label}
        </label>
    )
}

export default Checkbox