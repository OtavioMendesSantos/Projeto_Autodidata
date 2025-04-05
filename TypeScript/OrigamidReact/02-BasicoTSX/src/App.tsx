import React from "react"
import Button from "./Button"

const App = () => {
  const [total, setTotal] = React.useState(0)

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
    </div>
  )
}

export default App