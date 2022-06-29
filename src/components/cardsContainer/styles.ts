import styled from "styled-components";

export const Container = styled.main`
    width: 80vw;
    height: 70vh;
    padding: 15px;
    margin: 30px auto;
    background: #222;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    overflow-y: scroll;

    &::-webkit-scrollbar{
        background-color: #151515;
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f0131e;
    }

    h2  {
        background-color: transparent;
        color: #fff;
    }
`;