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
        background-color:lightgray;
    }

    a {
        text-decoration:none;
        color:black;
    }

    ul {
        list-style-type: none; 
        padding: 0;
        margin: 0; 
    }

    li {
        list-style-type: none;
    }
`;

export default GlobalStyle;