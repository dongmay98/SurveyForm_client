import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    body {
        width: 700px;
        height: 100vh;
        margin: auto;
        background-color:lavender;
    }

    a {
        text-decoration:none;
        color:black;
    }
`;

export default GlobalStyle;