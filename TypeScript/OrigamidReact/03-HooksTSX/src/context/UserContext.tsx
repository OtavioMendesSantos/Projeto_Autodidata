import React from "react";
import useFetch from "../hook/useFetch";

// Utilize a API: https://data.origamid.dev/usuarios/1
// 1 - Crie um UserContext
// 2 - Use o useFetch dentro do UserContext para esportar data, loading e error
// 3 - Crie dois componentes: Header.tsx e Content.tsx e adicine ambos ao App.tsx
// 4 - Mostre o nome da pessoa em Header.tsx e as preferências em Content.tsx

interface User {
    id: number;
    nome: string;
    idade: number;
    aulas: number;
    cursos: number;
    preferencias: {
        playback: number;
        volume: number;
        qualidade: 'baixa' | 'media' | 'alta';
    };
}

type IUserContext = {
    data: User | null;
    loading: boolean;
    error: string | null
};

const UserContext = React.createContext<IUserContext | null>(null);

const useUserContext = () => {
    const context = React.useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    };
    return context;
}

const UserContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const user = useFetch<User>('https://data.origamid.dev/usuarios/1');
    console.log(user)
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContextProvider, UserContext, useUserContext }
