import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    ::selection {
      background: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.selectionTextColor};

      &:focus {
        outline: 0;
      }
    }
  }



  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    background: ${(props) => props.theme.backgroundColor};

    // desktop layout
    @media (min-width: 1000px) {
      width: 100%;
      height: 100%;
    }

    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;

      background: ${(props) => props.theme.primaryColor};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 20px;
      -webkit-border-radius: 20px;


      background: ${(props) => props.theme.selectionTextColor};

      box-shadow: 0px 8px 24px .15px ${(props) => props.theme.shadowColor};
      -webkit-box-shadow: 0px 8px 24px .15px ${(props) =>
        props.theme.shadowColor};
    }
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif, Ubuntu, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  button {
    cursor: pointer;

    background: none;
  }

  @media (max-width: 1080px) {
    html {
      //15px
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      //14px
      font-size: 87.5%;
    }
  }

  body {
    /* Firefox */
    /* scrollbar-width: none; */

    /* Chrome */
    ::-webkit-scrollbar {
      /* display: none; */
    }

    overflow-x: hidden;
  }

  @keyframes loadAnimation {

    0% {
      opacity: 0.99;
      transform: scale(1.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
