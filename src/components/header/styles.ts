import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleWrapper = styled.div`
    display: flex;
    
    h1 {
        font-size: 4rem;
        letter-spacing: 4px;
        margin: 25px 0;
        color: #fff;
        padding: 5px;
    }
`;

export const MarvelTitle = styled.h1`
    background: #F0131E;
`;

export const Input = styled.input`
    width: 400px;
    padding: 10px;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    box-shadow: 1px 1px 12px 1px #151515;
    outline: 0;
    color: #fff;

    @media (max-width: 430px) {
        width: 80vw;
    }
`;