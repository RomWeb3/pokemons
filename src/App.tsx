import PokemonList from "./pages/pokemon-list";
import PokemonDetail from "./pages/pokemon-details";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit";
import PokemonAdd from "./pages/pokemon-add";
import Pokemon from "./models/pokemon";
import Login from "./pages/login";
import PrivateRoute from "./Private-route";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  return (
    <Router>
      <div>
        {/* <nav> */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <PokemonList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/pokemons"
            element={
              <PrivateRoute>
                <PokemonList />
              </PrivateRoute>
            }
          />
          <Route
            path="/pokemons/edit/:id"
            element={
              <PrivateRoute>
                <PokemonEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/pokemons/add"
            element={
              <PrivateRoute>
                <PokemonAdd />
              </PrivateRoute>
            }
          />
          <Route
            path="/pokemons/:id"
            element={
              <PrivateRoute>
                <PokemonDetail />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
