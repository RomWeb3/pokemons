import { FunctionComponent, useState, useEffect } from "react";
import PokemonForm from "../components/pokemons-form";
import Pokemon from "../models/pokemon";
import PokemonService from "../services/pokemon-service";
import Loader from "../components/loader";
import { useParams } from "react-router-dom";

type Params = { id: string };

const PokemonEdit: FunctionComponent = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const id: number | undefined = parseInt(useParams<{ id: string }>().id!);

  useEffect(() => {
    PokemonService.getPokemon(id).then((pokemon) => setPokemon(pokemon!));
  }, [id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
};

export default PokemonEdit;
