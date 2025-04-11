import React from 'react'
import { IVenda } from '../context/DataContext'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface GraficoVendasProps {
    data: IVenda[]
}

const GraficoVendas: React.FC<GraficoVendasProps> = ({ data }) => {
    return (
        <ResponsiveContainer height={400} width='99%'>
            <LineChart data={data}>
                <XAxis dataKey={'data'} />
                <YAxis />
                <Legend />
                <Tooltip />
                <Line type='monotone' dataKey={'vendas'} stroke='#A36AF9' strokeWidth={3} />
                <Line type='monotone' dataKey={'vendas'} stroke='#FBCB21' strokeWidth={3} />
                <Line type='monotone' dataKey={'vendas'} stroke='#000000' strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default GraficoVendas