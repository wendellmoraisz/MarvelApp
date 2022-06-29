import * as S from "./styles"

const Card = () => {

    return (
        <S.CardWrapper>
            <img src="http://i.annihil.us/u/prod/marvel/i/mg/c/60/4fce7a4d900f4.jpg"></img>
            <S.CharacterName>Spider-Man</S.CharacterName>
            <span>Comics: 3</span>
            <span>Series: 2</span>
        </S.CardWrapper>
    );
}

export default Card;