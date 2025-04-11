import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { DataContextProvider } from "./context/DataContext";
import Resumo from "./pages/Resumo";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Header />
        <main>
          <SideNav />
          <Resumo />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
