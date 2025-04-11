import React from 'react'
import { IVenda } from '../context/DataContext'

interface VendaItemProps {
    venda: IVenda;
}

const VendaItem: React.FC<VendaItemProps> = ({
    venda
}) => {
    return (
        <div className='venda box'>
            <a href='' style={{ fontFamily: 'monospace' }}>{venda.id}</a>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        </div>
    )
}

export default VendaItem