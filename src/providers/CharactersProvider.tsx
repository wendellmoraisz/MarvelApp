import { createContext, useCallback, useState } from "react";
import { CharactersContextType, Props, CharacterData } from "./types/CharactercontextTypes";
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
        const [publicKey, privateKey] = [process.env.REACT_APP_VERCEL_PUBLIC_API_KEY, process.env.REACT_APP_VERCEL_PRIVATE_API_KEY as string];
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
    }

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