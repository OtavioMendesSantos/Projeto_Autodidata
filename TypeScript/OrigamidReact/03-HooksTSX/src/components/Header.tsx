import React from 'react'
import { UiContext, useUi } from '../context/UiContext'
import { useUserContext } from '../context/UserContext';

const Header = () => {
    const { data, loading, error } = useUserContext();
    const { dark, setDark } = useUi();

    return (
        <header className='flex'>
            <h1>Olá, {data?.nome}</h1>
            <button onClick={() => setDark(!dark)}>{dark ? '🌞' : '🌜'}</button>
        </header>
    )
}

export default Header