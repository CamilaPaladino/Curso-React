import NavBar from "./assets/components/NavBar/NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greatings="Todos los productos"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
