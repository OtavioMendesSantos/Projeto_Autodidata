import React, { useRef } from "react"
import Vendas from "./sections/Vendas"
import Video from "./sections/Video";
import Produtos from "./sections/Produtos";
import { UiContextProvider } from "./context/UiContext";
import Header from "./components/Header";
import { UserContextProvider } from "./context/UserContext";
import Content from "./sections/Content";
import Form from "./components/Form";

const App = () => {
  return (
    <UiContextProvider>
      <UserContextProvider>
        <div>
          {/* <Header />
          <Content /> */}
          <Form />
          {/* <Vendas /> */}
          {/* <Video /> */}
          {/* <Produtos /> */}
        </div>
      </UserContextProvider>
    </UiContextProvider>
  )
}

export default App