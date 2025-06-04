import { BrowserRouter, Routes, Route } from "react-router";
import { PokemonList } from "./components/Organisms/PokemonList/PokemonList";
import { MainLayout } from "./components/Templates/MainLayout/MainLayout";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout leftContent={<h1>Dragon ball</h1>} rightContent={<PokemonList/>}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
