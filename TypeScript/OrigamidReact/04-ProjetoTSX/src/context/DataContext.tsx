import React from "react";
import useFetch from "../hooks/useFetch";

interface IVenda {
    id: BigIntToLocaleStringOptions;
    nome: string;
    preco: number;
    status: "pago" | "processando" | "falha";
    pagamento: "boleto" | "cartao" | "pix";
    data: string;
    parcelas: number | null;
}

interface IDataContext {
    loading: boolean;
    error: string | null;
    data: IVenda[] | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
    const context = React.useContext(DataContext);
    if (context === null) throw new Error('useData must be used within a DataContextProvider');
    return context
}

export const DataContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { data, loading, error } = useFetch<IVenda[]>('https://data.origamid.dev/vendas/');

    return (
        <DataContext.Provider value={{
            data,
            loading,
            error
        }}>
            {children}
        </DataContext.Provider>
    )
}
