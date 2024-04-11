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
    input {
        &:hover {
            border-bottom: 1px solid lightgray;
        }
        &:focus {
            border-bottom: 1px solid orange;
    }
`;

export default GlobalStyle;
