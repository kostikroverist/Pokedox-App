import { IndexedType } from "../interfaces/PokemonInterface";
import { POKEMON_TYPES } from "./url";

export const FirstCharToUpperCase = (name: string) => {
    return name.replace(name[0], name[0].toLocaleUpperCase());
}
export const getTypeColor = (typeName: string): string | undefined => {
    const foundType = POKEMON_TYPES.find((type: IndexedType) => type.name === typeName);
    return foundType ? foundType.color : undefined;
};