import { FC } from "react";
import { ListPokemon } from "../interfaces/PokemonInterface"
import PokemonCard from "./PokemonCard";

type PokemonListProps = {
    pokemon: ListPokemon[];
}

const PokemonList: FC<PokemonListProps> = ({ pokemon }) => {
    return (
        <div className="flex flex-wrap">
            {pokemon.length > 0 ? pokemon.map(poke => <PokemonCard key={poke.name} pokemon={poke} />) : null}
        </div>
    )
}

export default PokemonList
