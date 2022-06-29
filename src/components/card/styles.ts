import styled from "styled-components";

export const CardWrapper = styled.div`
    background: #1e1e1e;
    color:  #fff;
    margin-bottom: 30px;
    margin: 10px 0;
    width: 250px;
    height: 400px;
    overflow: hidden;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    transition: all .2s ease;
    text-align: center;

    &:hover{
        box-shadow: 0px 10px 20px 2px rgba(255, 0, 0, 0.25); 
        transform: translateY(-8px);
    }

    span {
        margin: 0 5px;
    }

    img {
        height: 280px;
        width: 100%;
    }
`;

export const CharacterName = styled.p`
    font-size: 1.3rem;
    font-weight: bold;
    margin: 15px 0;
`;