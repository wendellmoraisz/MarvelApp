import styled from "styled-components";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 4rem;
        margin: 25px 0;
        background: #F0131E;
        color: #fff;
        padding: 5px;
    }
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
`;