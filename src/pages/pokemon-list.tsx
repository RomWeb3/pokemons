import { FunctionComponent } from "react";
import PokemonCard from "../components/pokemon-card";
import usePokemons from "../hooks/pokemon.hook";
import { useNavigate } from "react-router-dom";
import PokemonSearch from "../components/pokemon-search";

const PokemonList: FunctionComponent = () => {
  const pokemons = usePokemons();
  const navigate = useNavigate();

  const handleAddPokemon = () => {
    navigate("/pokemons/add");
  };

  return (
    <div>
      <h1 className="center"></h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        <div className="add-pokemon">
          <button
            onClick={handleAddPokemon}
            className="btn-floating btn-large waves-effect waves-light red z-depth-3"
            style={{ position: "fixed", bottom: "25px", right: "25px" }}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
