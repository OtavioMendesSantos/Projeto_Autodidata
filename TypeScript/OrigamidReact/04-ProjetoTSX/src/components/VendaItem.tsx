import React from 'react'
import { IVenda } from '../context/DataContext'
import { NavLink } from 'react-router-dom';

interface VendaItemProps {
    venda: IVenda;
}

const VendaItem: React.FC<VendaItemProps> = ({
    venda
}) => {
    return (
        <div className='venda box'>
            <NavLink
                to={`/vendas/${venda.id}`}
                style={{ fontFamily: 'monospace' }}
            >
                {venda.id}
            </NavLink>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        </div>
    )
}

export default VendaItem