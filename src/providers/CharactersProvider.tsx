import { createContext, useCallback, useEffect, useState } from "react";
import { CharactersContextType, Props, CharacterData } from "./types/CharactercontextTypes";
import api from "../services/api";
import axios from "axios";
import md5 from "md5";

export const CharactersContext = createContext<CharactersContextType>({
    characters: [{
        imgURL: '',
        name: '',
        comics: 0,
        series: 0,
    }],
    getCharacters: async (name) => {}
});

const CharactersProvider = ({ children }: Props) => {
    const [charactersState, setCharactersState] = useState([]);
    
    const getCharacters = async (characterName: string) => {
        const [publicKey, privateKey] = ['e2cbd746444006c4c9ad2286ee93a9ca', '974a0e2bc6b0590617452b27b2e5cf1aa40af92e'];
        const time = Number(new Date());
        const hash = md5(time + privateKey + publicKey);
        const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}&ts=${time}&apikey=${publicKey}&hash=${hash}`);

        const characters = response.data.data.results;
        setCharactersState(characters.map((character:CharacterData) => ({
            name: character.name,
            imgURL: `${character.thumbnail.path}.${character.thumbnail.extension}`,
            comics: character.comics.available,
            series: character.series.available
          })));

        console.log(charactersState);
    }

    useEffect(() => {
        getCharacters('doctor');
    }, []);

    const contextValue = {
        characters: charactersState,
        getCharacters: useCallback((characterName: string) => getCharacters(characterName), [])
    }

    return(
        <CharactersContext.Provider value={contextValue}>
            {children}
        </CharactersContext.Provider>
    );
}

export default CharactersProvider;