import React, { createContext, ReactNode, useContext, useState } from 'react';

interface PokemonContextProps {
    pokemonUrl: string | null;
    pokemonName: string | null;
    setPokemonUrl: (url: string | null) => void;
    setPokemonName: (name: string | null) => void;

}

const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [pokemonUrl, setPokemonUrl] = useState<string | null>(null);
    const [pokemonName, setPokemonName] = useState<string | null>(null);

    return (
        <PokemonContext.Provider value={{ pokemonUrl, setPokemonUrl, pokemonName, setPokemonName }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemonContext = () => {
    const context = useContext(PokemonContext);

    if (!context) {
        throw new Error('usePokemonContext must be used within a PokemonProvider');
    }

    return context;
};
