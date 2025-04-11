import React from 'react'
import { useData } from '../context/DataContext';

interface MesBtnProps {
    n: number
}

const MesBtn: React.FC<MesBtnProps> = ({ n }) => {
    const { setInicio, setFinal } = useData();

    function getMonthName(n: number) {
        const date = new Date();
        date.setMonth(date.getMonth() + n);
        return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
    }

        function formatDate(date: Date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${year}-${month}-${day}`
    }
    
    function setMonth(n: number) {
        const date = new Date();
        date.setMonth(date.getMonth() + n);
        
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        
        setInicio(formatDate(firstDay));
        setFinal(formatDate(lastDay));
    }

    const monthName = getMonthName(n)

    return (
        <button
            onClick={() => setMonth(n)}
            style={style}
        >
            {monthName}
        </button>
    )
}

const style: React.CSSProperties = {
    padding: 'var(--gap) var(--gap-s)',
    backgroundColor: 'var(--color-3)',
    border: 'none',
    borderRadius: 'var(--gap)',
    cursor: 'pointer',
    color: 'var(--color-2)',
    fontWeight: '600',
    textTransform: 'capitalize',
}

export default MesBtn