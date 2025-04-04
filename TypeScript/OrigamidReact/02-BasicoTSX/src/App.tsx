import React from "react"

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
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={() => setTotal(0)}>Zerar</button>
      </div>
    </div>
  )
}

export default App