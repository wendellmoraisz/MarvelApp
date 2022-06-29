import { useContext } from "react";
import { CharactersContext } from "../../providers/CharactersProvider";
import * as S from "./styles"

const Header = () => {
    const { getCharacters } = useContext(CharactersContext);

    return (
        <S.Wrapper>
            <S.TitleWrapper>
                <S.MarvelTitle>Marvel</S.MarvelTitle>
                <h1>App</h1>
            </S.TitleWrapper>
            <S.Input
                type="text"
                placeholder="Search your favorite character =D"
                onChange={e => getCharacters(e.target.value)}
            />
        </S.Wrapper>
    );
}

export default Header;