import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;

    }

    :root {
        --white: #ECECEC;
        --blue: #275FB3;
        --baby-blue: #70A3F1;
        --light-blue: #7FC1CF;
        --matte-black: #444444;
        --black: #000000;
        --gray: #444444;
        --red: #ca0b0b;
    }

    body {
        background-color: var(---white);
        color: var(---black);
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
