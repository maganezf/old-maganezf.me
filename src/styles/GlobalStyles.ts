import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

    ::selection {
      background-color: ${(props) => props.theme.primaryColor};
      color: ${(props) => props.theme.selectionTextColor};

      &:focus {
        outline: 0;
      }
    }
  }

  html, body, #root {
    max-width: 100vw;
    max-height: 100vh;

    // desktop layout
    @media (min-width: 1000px) {
      width: 100%;
      height: 100%;
    }

    /* Firefox */
    scrollbar-width: none;
    /* Chrome */
    ::-webkit-scrollbar {
      display: none;
    }
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  button {
    cursor: pointer;

    background: none;
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
