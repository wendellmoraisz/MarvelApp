import * as S from "./styles";

interface Props {
    imgSRC: string
    characterName: string
    comics: number
    series: number
}

const Card = ({imgSRC, characterName, comics, series}:Props) => {

    return (
        <S.CardWrapper>
            <img src={imgSRC}></img>
            <S.CharacterName>{characterName}</S.CharacterName>
            <span>Comics: {comics}</span>
            <span>Series: {series}</span>
        </S.CardWrapper>
    );
}

export default Card;