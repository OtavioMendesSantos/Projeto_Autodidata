import React from 'react'
import { useUserContext } from '../context/UserContext'

const Content = () => {
    const { data, loading, error } = useUserContext();

    return (
        <div>
            {loading
                ? <p>Carregando...</p>
                : error
                    ? <p>{error}</p>
                    : <div>
                        <p>Preferências:</p>
                        <ul>
                            <li>playback:{data?.preferencias.playback}</li>
                            <li>qualidade: {data?.preferencias.qualidade}</li>
                            <li>volume: {data?.preferencias.volume}</li>
                        </ul>
                    </div>
            }
        </div>
    )
}

export default Content