import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



*, ::before,::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
    font-size: 62.5%;
    
   
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    height: 100vh;
    width: 100%;
    overflow-X: hidden;
    font-family: 'Advent Pro', sans-serif;
    
  }




`;

export default GlobalStyle;
