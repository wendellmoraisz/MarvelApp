import { ReactNode } from "react"

export interface Character {
    imgURL: string
    name: string
    comics: number
    series: number
}

export interface CharacterData {
    name: string
    thumbnail: {
        extension: string
        path: string
    }
    comics: {
        available: number
    }
    series: {
        available: number
    }
}

export interface CharactersContextType {
    characters: Character[],
    getCharacters: (CharacterName: string) => Promise<void>
}

export interface Props {
    children: ReactNode
}