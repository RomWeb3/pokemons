import { useState, useEffect } from "react";
import PokemonService from "../services/pokemon-service";
import Pokemon from "../models/pokemon";

const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        PokemonService.getPokemons().then(pokemons => setPokemons(pokemons))
}, []);

    return pokemons;
}

export default usePokemons;