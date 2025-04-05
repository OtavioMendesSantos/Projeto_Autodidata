import React from "react"
import Button from "./Button"
import Input from "./Input"
import Checkbox from "./Checkbox"

const App = () => {
  const [total, setTotal] = React.useState(0)
  const [nome, setNome] = React.useState("")

  function increment() {
    setTotal(total + 1)
  }
  function decrement() {
    setTotal(total - 1)
  }

  return (
    <div>
      <p>{total}</p>
      <div className="flex">
        <Button onClick={() => setTotal(0)}>Zerar</Button>
        <Button onClick={decrement}>Decrementar</Button>
        <Button onClick={increment}>Incrementar</Button>
      </div>
      {nome}
      <Input
        type="text"
        id="nome"
        label="Nome"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Checkbox label={'Termos e condições'}/>
    </div>
  )
}

export default App