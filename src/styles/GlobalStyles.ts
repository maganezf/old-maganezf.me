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

    transition: color .2s ease-in-out;
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
  }

  html {
    overflow-x: hidden;
    overflow-y: scroll;

     ::-webkit-scrollbar {
      // Remove scrollbar space
      width: 0;

      // Optional: just make scrollbar invisible
      background: transparent;
    }
  }

  body {
    // set to 16px - default body font-size
    font-size: 1.6rem;
  }

  // desktop animations
  @media (min-width: 1100px){
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
  }

  // mobile animations
  @media (max-width: 1100px){
    @keyframes loadAnimation {
      0% {
        opacity: 0.98;
      }

      100% {
        opacity: 1;
      }
    }
  }
`;
