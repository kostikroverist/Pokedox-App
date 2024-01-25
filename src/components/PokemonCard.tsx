import { FC } from "react";
import { ListPokemon, PokemonType } from "../interfaces/PokemonInterface"
import { usePokemonContext } from "../context/PokemonContext";
import { FirstCharToUpperCase, getTypeColor } from "../Constants/functions";

type PokemonCardProps = {
    pokemon: ListPokemon;
}

const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
    const { setPokemonUrl, setPokemonName } = usePokemonContext();

    const handleSetPokemonName = (url: string, name: string) => {
        setPokemonUrl(url);
        setPokemonName(name);
    };

    return (
        <div className="w-44 h-72 sm:w-44 lg:-52 lg:w-64 xl:w-72  sm:h-72 xl:h-96  lg:h-80  border-2 border-black mr-8 mb-8   p-5 shadow-xl text-center" onClick={() => handleSetPokemonName(pokemon.url, pokemon.name)}>
            <div className="border ">
                <img src={`${[pokemon.image]}`} title={pokemon.name} className="w-64 " />
            </div>
            <p className="font-bold">
                {FirstCharToUpperCase(pokemon.name)}
            </p>
            <div className="flex">
                {pokemon.types.map((type: PokemonType) => (
                    <div className="w-20 mr-1 rounded border text-white" style={{ backgroundColor: `${getTypeColor(type.type.name)}` }} key={type.type.name}>
                        <span>{type.type.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PokemonCard
