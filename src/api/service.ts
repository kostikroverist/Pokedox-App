import axios, { AxiosInstance } from "axios";
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from "../Constants/url";
import { IndexedPokemon } from "../interfaces/PokemonInterface";

const client: AxiosInstance = axios.create();

export const getDetails = async (query: IndexedPokemon) => {
    const detailedResponse = await axios.get(query.url);
    const pokedexNumber = detailedResponse.data.id;

    return {
        id: pokedexNumber,
        name: query.name,
        url: query.url,
        image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
        pokedexNumber,
        types: detailedResponse.data.types,
        base_experience: detailedResponse.data.base_experience,
        stats: detailedResponse.data.stats,
        weight: detailedResponse.data.weight,
        moves: detailedResponse.data.moves
    };
}

export const getData = async (url: string) => {
    try {
        const response = await client.get(url, {
            params: {
                limit: 12,
            },
        });
        const listPokemonPromises = response.data.results.map(getDetails)
        const listPokemon = await Promise.all(listPokemonPromises);
        return {
            ...response.data,
            results: listPokemon,
        }
    } catch (error) {
        console.error(`GET Request to ${POKEMON_API_POKEMON_URL} failed:`, error);
        throw error;
    }
};

