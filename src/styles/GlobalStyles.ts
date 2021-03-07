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

  *, button, input, select, textarea {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif, Ubuntu, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  button {
    cursor: pointer;
    background: none;
  }

  a {
    text-decoration: none;
  }

  html,
  :root {
    // 10px based
    font-size: 62.5%;
  }

  html, body {
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

  body {
    overflow-x: hidden;

    // set to 16px - default body font-size
    font-size: 1.6rem;
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
