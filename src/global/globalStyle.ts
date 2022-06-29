import { createGlobalStyle } from "styled-components";
import Marvel from "../assets/fonts/Marvel.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Marvel';
        src: url(${Marvel});
    }

    * {
        margin: 0;
        padding: 0;
        background-color: #1e1e1e;
        font-family: 'Marvel', sans-serif;
        text-transform: uppercase;
    }

    body {
        background-color: #1e1e1e;
    }
`;