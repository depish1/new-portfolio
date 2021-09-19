import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html, body {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }
    a, button {
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;