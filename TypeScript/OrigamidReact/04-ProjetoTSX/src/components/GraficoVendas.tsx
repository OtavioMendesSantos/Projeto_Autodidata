import React from 'react'
import { IVenda } from '../context/DataContext'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface GraficoVendasProps {
    data: IVenda[]
};

interface VendaDia {
    data: string
    pago: number
    processando: number
    falha: number
};

const GraficoVendas: React.FC<GraficoVendasProps> = ({ data }) => {
    function transformaData(data: IVenda[]): VendaDia[] {
        const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
            const [dia] = item.data.split(' ');
            if (!acc[dia]) {
                acc[dia] = {
                    data: dia,
                    pago: 0,
                    falha: 0,
                    processando: 0
                };
            }
            acc[dia][item.status] += item.preco;
            return acc;
        }, {});

        return Object.values(dias).map((dia) => ({ ...dia, data: dia.data.substring(5) }));
    }

    const transformedData = transformaData(data);

    return (
        <ResponsiveContainer height={400} width='99%'>
            <LineChart data={transformedData}>
                <XAxis dataKey={'data'} />
                <YAxis />
                <Legend />
                <Tooltip />
                <Line type='monotone' dataKey={'pago'} stroke='#A36AF9' strokeWidth={3} />
                <Line type='monotone' dataKey={'processando'} stroke='#FBCB21' strokeWidth={3} />
                <Line type='monotone' dataKey={'falha'} stroke='#000000' strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default GraficoVendas