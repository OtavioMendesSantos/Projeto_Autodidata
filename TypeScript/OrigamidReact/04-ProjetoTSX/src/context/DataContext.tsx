import React from "react";
import useFetch from "../hooks/useFetch";

export interface IVenda {
    id: string;
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
    inicio: string;
    setInicio: React.Dispatch<React.SetStateAction<string>>;
    final: string;
    setFinal: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
    const context = React.useContext(DataContext);
    if (context === null) throw new Error('useData must be used within a DataContextProvider');
    return context
}

export const DataContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [inicio, setInicio] = React.useState<string>(getDate(30));
    const [final, setFinal] = React.useState<string>(getDate(0));
    const { data, loading, error } = useFetch<IVenda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`);

    function getDate(n: number){
        const date = new Date();
        date.setDate(date.getDate() - n);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`
    }

    return (
        <DataContext.Provider value={{
            data,
            loading,
            error,
            inicio, 
            setInicio,
            final,
            setFinal
        }}>
            {children}
        </DataContext.Provider>
    )
}
