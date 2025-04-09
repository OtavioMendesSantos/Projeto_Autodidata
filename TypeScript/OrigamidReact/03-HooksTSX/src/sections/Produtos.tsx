import React from 'react'
import useFetch from '../hook/useFetch'
import Button from '../components/Button'

type Produto = {
    id: string,
    nome: string,
    preco: number,
    quantidade: number,
    descricao: string,
    internacional: boolean
}

const Produtos = () => {
    const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos')

    const [id, setId] = React.useState<string>('p001')

    const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`)

    const { data, loading, error } = produtos;

    return (
        <div>
            <section className="flex">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {loading
                        ? <p>Carregando...</p>
                        : error
                            ? <p>{error}</p>
                            : data?.map(produto => (
                                <Button
                                    key={produto.id}
                                    onClick={() => setId(produto.id)}
                                >
                                    {produto.nome}
                                </Button>
                            ))}
                </div>
                <div>
                    {produto.loading
                        ? <p>Carregando...</p>
                        : produto.error
                            ? <p>{produto.error}</p>
                            : produto.data && (
                                <div>
                                    <h1>{produto.data.nome}</h1>
                                    <ul>
                                        <li>Preço: R${produto.data.preco}</li>
                                        <li>Quantidade: {produto.data.quantidade}</li>
                                        <li>Descrição: {produto.data.descricao}</li>
                                        <li>Internacional: {produto.data.internacional ? 'Internacional' : 'Nacional'}</li>
                                    </ul>
                                </div>
                            )
                    }
                </div>
            </section>
        </div>
    )
}

export default Produtos