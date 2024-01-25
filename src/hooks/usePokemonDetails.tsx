import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../api/service";
import { ListPokemon } from "../interfaces/PokemonInterface";

const usePokemonDetails = (url: string, name: string) => {
    const { data, isLoading } = useQuery<ListPokemon>({
        queryKey: ['pokemonDetails', url],
        queryFn: () => getDetails({ name: name, url: url }),
        enabled: !!url,
    });

    const detailsPokemon = data;

    return { detailsPokemon, isLoading };
};

export default usePokemonDetails;