import { createGlobalStyle } from "styled-components";
import './fonts.css';

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: #f9f9f9;
        --gray: #9b9b9e;
        --gray-2: #CACACA;
        --gray-3: #A8A9AD;
        --gray-4: #D9CFCC;
        --gray-5: #7A7E82;
        --gray-6: #C6C6C6;
        --background: #040714;
        --background-2: #1A1D29;
        --blue-1: #0063E5;
        --blue-2: #0483EE;
        --blue-3: #0072D2;
        --blue-4: #068DFF;
        --blue-5: #94D0FF;
        --black-1: #000000;
        --black-2: #00000099;
        --black-3: #31343E;
        --black-4: #191D21;

        --font-roman: 'Avenir Roman';
        --font-heavy: 'Avenir Heavy';
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
        font-family: var(--font-roman), sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: var(--background);
        color: var(--white);
        font-size: 16px;
    }

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px var(--black-3) inset !important;
        box-shadow: 0 0 0 1000px var(--black-3) inset !important;
        -webkit-text-fill-color: white !important;
    }
`;
