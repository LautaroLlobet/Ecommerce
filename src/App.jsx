import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { Menu } from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <Menu />
      <ItemListContainer saludo="Bienvenido" />
    </>
  );
}

export default App;
