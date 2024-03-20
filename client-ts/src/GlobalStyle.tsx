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
<<<<<<< HEAD
        background-color:lightgray;
=======
        background-color:lavender;
>>>>>>> 28211f6 (Refactor: 현재까지 코드 TS로 리팩토링)
    }

    a {
        text-decoration:none;
        color:black;
    }
<<<<<<< HEAD

    ul {
        list-style-type: none; 
        padding: 0;
        margin: 0; 
    }

    li {
        list-style-type: none;
    }
=======
>>>>>>> 28211f6 (Refactor: 현재까지 코드 TS로 리팩토링)
`;

export default GlobalStyle;