import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      letter-spacing: 0.05rem;
      font-size: 62.5%;
    }
    #root{
      margin:0 auto;
      background: linear-gradient(90deg,#f7f8bf,#f7f7f5 35%,#e2f1f5) no-repeat;
      min-height: 100vh;
    }
    
    h1 {
      font-size:2.6rem;
    }
    h2 {
      font-size:2rem;
    }
    a {
      cursor: pointer;
      font-size:1.6rem;
    }
    button {
      cursor:pointer;
      border: none;
      background: transparent;
    }
 `
