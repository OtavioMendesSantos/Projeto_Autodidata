import React, { useEffect } from "react"

function returnUser() {
  return {
    name: 'Lucas',
    age: 28,
    email: 'lucas@origamid.com'
  }
}

type User = ReturnType<typeof returnUser>

const App = () => {
  const [user, setUser] = React.useState<User | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setUser(returnUser())
    }, 1000)
  }, [])

  return (
    <div>
      <h1>{user?.name}</h1>
      <h2>{user?.age}</h2>
      <h3>{user?.email}</h3>
    </div>
  )
}

export default App