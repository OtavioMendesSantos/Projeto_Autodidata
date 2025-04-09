import React, { useRef } from "react"
import Vendas from "./sections/Vendas"
import Video from "./sections/Video";
import useFetch from "./hook/useFetch";

type Produto = {
  id: string,
  nome: string,
  preco: number,
  quantidade: number,
  descricao: string,
  internacional: boolean

}

const App = () => {
  const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos')
  const produto = useFetch<Produto>('https://data.origamid.dev/produtos/p001')

  React.useEffect(() => {
    console.log('data', produtos.data)
    console.log('loading', produtos.loading)
    console.log('error', produtos.error)
  }, [produtos])

  React.useEffect(() => {
    console.log('produto', produto)
  }, [produto])

  return (
    <div>
      {/* <Vendas /> */}
      {/* <Video /> */}
    </div>
  )
}

export default App