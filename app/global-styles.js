import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .font-S-20 {
     font-size: 20px;
  }
  .word-break-all{
    word-break: break-word;;
  }
  .w-100{
    width: 100%;
  }
   .label-header {
    text-align: start;
    font-size: 20px;
    font-weight: 500;
    margin: 1.75rem 0;
    color: #48465b;
  } 
 
  .err-label-item {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.8rem;
      color: #646c9a;
    }
`;

export default GlobalStyle;
