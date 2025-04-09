// Crie um custom hook chamado useFetch.

import { useEffect, useRef, useState } from "react";

// 1 - Este hook deve retornar a interface:
interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

// Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.

// 2 - data, loading e error são estados reativos (useState).

// 3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).

// 4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.

// 5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.

// 6 - Teste o Hook com a api: https://data.origamid.dev/produtos

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit): FetchState<T> {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    // É definido apenas uma vez e fica armazenado na memória;
    const optionsRef = useRef(options);
    optionsRef.current = options;

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;

        async function handleRequest() {
            try {
                setLoading(true);
                setError(null);
                setData(null);

                const response = await fetch(url, {
                    signal,
                    ...optionsRef.current
                });

                if (!response.ok) {
                    throw new Error(`Erro: ${response.status}`)
                };

                const json = await response.json() as T;
                if (!signal.aborted) return; setData(json)
            } catch (error: unknown) {
                if (signal.aborted) return;

                if (error instanceof Error) {
                    setError(error.message)
                } else {
                    setError('Erro desconhecido')
                }
            } finally {
                if (!signal.aborted) setLoading(false)
            }
        };

        handleRequest();

        return () => controller.abort();
    }, [url])

    return { data, loading, error };
}

export default useFetch