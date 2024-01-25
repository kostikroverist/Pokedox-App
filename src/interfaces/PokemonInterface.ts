export interface IndexedPokemon {
    name: string,
    url: string,
}

export interface PokemonListResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: IndexedPokemon[],
}

export interface IndexedType {
    name: string,
    url: string,
    color: string,
}

export interface ListPokemon {
    id: number;
    name: string;
    url: string;
    image: string;
    pokedexNumber: number;
    types: PokemonType[];
    base_experience: number;
    stats: PokemonStat[];
    weight: number;
    moves: PokemonMove[];
}

export interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
}

export interface PokemonMove {
    move: {
        name: string;
        url: string;
    };
    version_group_details: {
        level_learned_at: number;
        move_learn_method: {
            name: string;
            url: string;
        };
        version_group: {
            name: string;
            url: string;
        };
    }[];
}