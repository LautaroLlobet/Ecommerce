import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetailsContainer } from "./components/ItemDetailsContainer.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { Menu } from "./components/NavBar.jsx";
function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailsContainer />} />
        <Route path="*" element={"Error 404"} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
