import React from "react";


function useLocalStorage(key: string, initial: string) {
    const [state, setState] = React.useState(() => {
        const local = window.localStorage.getItem(key);
        return local ?? initial;
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state, key]);

    //? Por que usar o `as const` no retorno da função?;
    // `as const` transforma a tupla [state, setState] em uma tupla imutável no TypeScript
    // Isso significa que o TypeScript mantém os tipos exatos dos elementos no array, ao invés de inferir um array mais genérico `((string | React.Dispatch<...>)[])`.
    // Sem as const, o retorno seria tratado como um array mutável, podendo ser alterado.
    return [state, setState] as const;
}

export default useLocalStorage;