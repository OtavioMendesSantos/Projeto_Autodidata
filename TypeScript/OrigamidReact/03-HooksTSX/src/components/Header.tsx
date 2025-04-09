import React from 'react'
import { UiContext, useUi } from '../context/UiContext'

const Header = () => {

    const { dark, setDark } = useUi();

    return (
        <header className='flex'>
            <h1>Header</h1>
            <button onClick={() => setDark(!dark)}>{dark ? '🌞' : '🌜'}</button>
        </header>
    )
}

export default Header