import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --black: #232323;
    --white: #fefefe;
    --grey: #B3B3B3;
    --grey-light: #F5F5F5;
    --accent: #20D0A4;
    --blue-main: #27AAFF;
    --blue-dark-1: #257CB6;
    --blue-dark-2: #4E738D;
    --blue-light-1: #EFF7FB;
    --blue-light-2: #AFD5ED;
    --dark-shade-1: #4D5C66;
    --dark-shade-2: #2B3033;

  }
  html {
    scrollbar-color: var(--blue-dark-1) var(--white);
  }
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.8px;
    line-height: 1.5;
  }

  * {
    box-sizing: border-box;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 16px;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue-main) ;
    border-radius: 8px;
    border: 3px solid var(--white);
  }

/* Typography */
  h1, .h1 {
    font-size: 82px;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 48px;
    }
  }
  h2, .h2 {
    font-size: 48px;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 32px;
      font-weight: 600;
    }
  }
  h3, .h3 {
    font-size: 32px;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 26px;
    }
  }
  h4, .h4 {
    font-size: 24px;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  h5, .h5 {
    font-size: 18px;
    
    @media (max-width: 768px) {
      font-size: 16px;
      font-weight: 600;
    }   
  }
  .subtitle {
    font-size: 18px;
    font-weight: 300;
  }


/* Buttons */
  button {
    padding: 15px 25px;
    border-radius: 8px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    background-color: var(--white);
    transition: all 0.3s ease-in-out;
    &:focus-visible {
      outline: 1px solid var(--black);
    }
      @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 600;
      }
    &.primary {
      background-color: var(--blue-dark-1);
      color: var(--white);
      &:hover {
        background-color: var(--blue-dark-2);  
      }
    }
    &.secondary{
      background-color: var(--white);
      color: var(--blue-dark-1);
      border: 1px solid var(--blue-dark-1);
      &:hover {
        background-color: var(--blue-light-1);  
        color: var(--blue-dark-2);  
        border-color: var(--blue-dark-2);  
      }
    }
  }s
`;

export default GlobalStyles;