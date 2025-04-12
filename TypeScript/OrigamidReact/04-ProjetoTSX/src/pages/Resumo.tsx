import React from 'react'
import { useData } from '../context/DataContext'
import GraficoVendas from '../components/GraficoVendas';
import Loading from '../components/Loading';

const Resumo = () => {
  const { data, loading } = useData();

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <section>
      <div className='flex mb resumo'>
        <div className='box'>
          <h2>Vendas</h2>
          <span>
            {data
              .filter((item) => item.status !== 'falha')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className='box'>
          <h2>Recebido</h2>
          <span>
            {data
              .filter((item) => item.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className='box'>
          <h2>Processando</h2>
          <span>
            {data
              .filter((item) => item.status === 'pago')
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <GraficoVendas data={data}	 />
      </div>
    </section>
  )
}

export default Resumo