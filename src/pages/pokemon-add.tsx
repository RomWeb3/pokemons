import PokemonForm from "../components/pokemons-form";
import Pokemon from "../models/pokemon";
import { useState } from "react";

function PokemonAdd() {
  const [id] = useState<number>(new Date().getTime());
  const [pokemon] = useState<Pokemon>(new Pokemon(id));

  return (
    <div className="row">
      <h2 className="header center">Ajouter un Pokémon</h2>
      <PokemonForm pokemon={pokemon} isEditForm={false} />
    </div>
  );
}

export default PokemonAdd;
