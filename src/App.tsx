import { useState } from "react";
import "./App.css";
import PokemonCardDetails from "./components/PokemonCardDetails";
import PokemonList from "./components/PokemonList";
import { usePokemonContext } from "./context/PokemonContext";
import usePokemon from "./hooks/usePokemon";
import usePokemonDetails from "./hooks/usePokemonDetails";
import { ListPokemon, PokemonType } from "./interfaces/PokemonInterface";
import Select from "./components/SelectComponent/Select";

function App() {
  const [filterType, setFilterType] = useState('');
  const { pokemonUrl, pokemonName, setPokemonUrl } = usePokemonContext();
  const { data, fetchNextPage, isLoading } = usePokemon();
  const { detailsPokemon } = usePokemonDetails(pokemonUrl!, pokemonName!);

  const filterPokemon = data && (filterType === ''
    ? data
    : data.filter((pokemon: ListPokemon) =>
      pokemon.types && pokemon.types.some((type: PokemonType) => type.type.name === filterType)
    )
  );

  return (
    <>
      <header className="">
        <h1 className="text-center text-5xl font-bold border-2 ">POKEDEX</h1>
        <Select selectType={setFilterType} />
      </header>
      <div className="flex flex-col p-5">
        <div className="flex justify-center">
          <div className="w-[90%]">
            <PokemonList pokemon={filterPokemon || []} />
          </div>
          <div className="w-[50%] ">
            <div className="sticky top-7">
              <PokemonCardDetails pokemonDetails={detailsPokemon} cancel={setPokemonUrl} />
            </div>
          </div>
        </div>
        <button
          className={isLoading
            ? 'px-8 py-3 text-white bg-blue-300 rounded focus:outline-none'
            : `bg-blue-600 text-white text-center w-72 h-10 mx-auto m-4`}
          onClick={() => fetchNextPage()}
          disabled={isLoading}>
          Load More
        </button>

      </div>
    </>

  );
}

export default App;
