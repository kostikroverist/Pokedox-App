import { IndexedType } from "../interfaces/PokemonInterface";

export const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2'
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon/`
export const POKEMON_IMAGES_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

export const POKEMON_TYPES: IndexedType[] = [
    {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
        color: "#D2B48C", // brown[100]
    },
    {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/",
        color: "#FF1A1A", // red[800]
    },
    {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
        color: "#7E57C2", // purple[300]
    },
    {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
        color: "#9C27B0", // purple[500]
    },
    {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
        color: "#8D6E63", // brown[300]
    },
    {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/",
        color: "#795548", // brown[500]
    },
    {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
        color: "#CDDC39", // lime[500]
    },
    {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/",
        color: "#673AB7", // deepPurple[700]
    },
    {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/",
        color: "#9E9E9E", // grey[500]
    },
    {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
        color: "#FF5722", // orange[500]
    },
    {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
        color: "#2196F3", // blue[500]
    },
    {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
        color: "#4CAF50", // green[500]
    },
    {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
        color: "#FFC107", // yellow[700]
    },
    {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/",
        color: "#E91E63", // pink[600]
    },
    {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/",
        color: "#00BCD4", // cyan[500]
    },
    {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/",
        color: "#673AB7", // deepPurple[500]
    },
    {
        name: "dark",
        url: "https://pokeapi.co/api/v2/type/17/",
        color: "#424242", // grey[800]
    },
    {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/",
        color: "#E91E63", // pink[300]
    },
];
