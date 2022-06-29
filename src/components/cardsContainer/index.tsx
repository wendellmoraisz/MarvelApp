import { useContext } from "react";
import { CharactersContext } from "../../providers/CharactersProvider";
import Card from "../card";
import * as S from "./styles";

const CardsContainer = () => {

    const { characters } = useContext(CharactersContext);

    return (
        <S.Container>
            {characters.map(character => (
                <Card
                    characterName={character.name}
                    imgSRC={character.imgURL}
                    comics={character.comics}
                    series={character.series}
                />
            ))}
        </S.Container>
    );
}

export default CardsContainer;