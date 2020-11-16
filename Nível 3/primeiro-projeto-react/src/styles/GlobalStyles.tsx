import { createGlobalStyle } from 'styled-components'
import GithubBackground from '../assets/github-background.svg'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #E5E5E5 url(${GithubBackground}) no-repeat 70% top;
    -webkit-font-smoothiing: antialiazed
  }

  body,input {
    font-size: 16px;
    font-family: sans-serif;
  }
  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
  }

  button{
    cursor: pointer;
  }

`;