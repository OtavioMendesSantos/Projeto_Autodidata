import React, { useEffect } from "react"
import Button from "./components/Button";
import Input from "./components/Input";

interface Venda {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: number | null;
  data: string;
}

const App = () => {
  // Interface da API: https://data.origamid.dev/vendas/
  // <!-- Essa API possui dados de hoje até 90 dias atrás -->
  // 1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  // 2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
  // 3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
  // 4 - Crie 3 estados reativos em App.tsx: data, inicio, final
  // 5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
  // 6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
  // 7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado

  const [data, setData] = React.useState<Venda[] | null>(null)
  const [inicio, setInicio] = React.useState<string>('')
  const [final, setFinal] = React.useState<string>('')
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [vendas, setVendas] = React.useState<Venda[]>([])

  const [errorDataInicio, setErrorDataInicio] = React.useState<string | null>(null)
  const [errorDataFinal, setErrorDataFinal] = React.useState<string | null>(null)

  const url = `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`;
  const options = { method: 'GET' };

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados')
      }
      const data = await response.json() as Venda[]
      setVendas(data)
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Erro desconhecido')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleFetchData = () => {
    setErrorDataInicio(null);
    setErrorDataFinal(null);
    if (inicio && final) {
      if (inicio) {
        const [ano, mes, dia] = inicio.split('-');
        const dataInicio = new Date(Number(ano), Number(mes) - 1, Number(dia))

        if (isNaN(dataInicio.getTime())) {
          setErrorDataInicio('Data inicial inválida');
        } else if (dataInicio > new Date()) {
          setErrorDataInicio('Data inicial não pode ser maior que a data atual');
        } else if ((dataInicio.getTime() - Date.now()) > 90 * 24 * 60 * 60 * 1000) {
          setErrorDataInicio('Data inicial não pode ser maior que 90 dias atrás');
        } else {
          fetchData();
        }
      }
    } else {
      if (!inicio) setErrorDataInicio('Data inicial inválida');
      if (!final) setErrorDataFinal('Data final inválida');
    }
  }

  useEffect(() => {
    if (vendas.length > 0) {
      setData(vendas)
    }
  }, [vendas])

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <Input
          type="date"
          value={inicio}
          onChange={(e) => setInicio(e.currentTarget.value)}
          label='Data Inicial'
          error={!!errorDataInicio}
          helperText={errorDataInicio}
        />
        <Input
          type="date"
          value={final}
          onChange={(e) => setFinal(e.currentTarget.value)}
          label='Data Final'
          error={!!errorDataFinal}
          helperText={errorDataFinal}
        />
        <Button onClick={handleFetchData}>Buscar Informações</Button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading
        ? <p>Loading...</p>
        : data && data.length > 0 && (
          <ul>
            {data.map((venda) => (
              <li key={venda.id}>
                <p>Nome: {venda.nome}</p>
                <p>Status: {venda.status}</p>
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default App