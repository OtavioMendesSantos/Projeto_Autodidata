import React, { useRef } from "react"
import Vendas from "./sections/Vendas"
import Video from "./sections/Video";
import Produtos from "./sections/Produtos";
import { UiContextProvider } from "./context/UiContext";
import Header from "./components/Header";

const App = () => {
  return (
    <UiContextProvider>
      <div>
        <Header />
        {/* <Vendas /> */}
        {/* <Video /> */}
        {/* <Produtos /> */}
      </div>
    </UiContextProvider>
  )
}

export default App