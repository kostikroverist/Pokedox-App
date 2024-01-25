import { FC } from "react";
import { ListPokemon, PokemonType } from "../interfaces/PokemonInterface";
import { FirstCharToUpperCase } from "../Constants/functions";

type Props = {
  pokemonDetails?: ListPokemon;
  cancel: (url: string) => void
};

const PokemonCardDetails: FC<Props> = ({ pokemonDetails, cancel }) => {

  if (!pokemonDetails) {
    return null;
  }
  return (
    <div className=" w-[220px] sm:w-[220px] md:w-[250px] lg:w-[300px] xl:w-[350px]  border-2 p-5 flex flex-col text-center font-bold border-black  shadow-xl">
      <button className="text-2xl flex justify-end -m-3 mb-1" onClick={() => cancel('')}>X</button>
      <div className="mt-1">
        <img className="border" src={`${pokemonDetails.image}`} title={pokemonDetails.name} />
      </div>
      <div>
        <h4 className="text-[28px] m-2">{FirstCharToUpperCase(pokemonDetails.name)} #{pokemonDetails.id}</h4>
      </div>
      <table className="table-auto">
        <tbody>
          <tr>
            <td className="border-2  border-black px-4 py-2">Type</td>
            <td className="border-2  border-black px-4 py-2">
              {pokemonDetails.types.map((type: PokemonType) => (
                <p key={type.type.name}>
                  {type.type.name}
                </p>
              ))}
            </td>
          </tr>

          {pokemonDetails.stats.map(statsPok =>
            <tr key={statsPok.stat.name}>
              <td className="border-2  border-black px-4 py-2">{FirstCharToUpperCase(statsPok.stat.name)}</td>
              <td className="border-2   border-black px-4 py-2">{statsPok.base_stat}</td>
            </tr>)}
          <tr>
            <td className="border-2  border-black px-4 py-2">Weight</td>
            <td className="border-2  border-black px-4 py-2">{pokemonDetails.weight}</td>
          </tr>
          <tr>
            <td className="border-2  border-black px-4 py-2">Total moves</td>
            <td className="border-2  border-black px-4 py-2">{pokemonDetails.moves.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonCardDetails;
