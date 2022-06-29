import { useContext } from "react";
import { CharactersContext } from "../../providers/CharactersProvider";
import * as S from "./styles"

const Header = () => {
    const { getCharacters } = useContext(CharactersContext);

    return (
        <S.Wrapper>
            <h1>Marvel App</h1>
            <S.Input
                type="text"
                placeholder="Search your favorite character =D"
                onChange={e => getCharacters(e.target.value)}
            />
        </S.Wrapper>
    );
}

export default Header;