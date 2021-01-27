import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  button {
    cursor: pointer;
  }

  :root {
    --primary-color: #101D42;
    --secondary-color:#E1E6E9;
    --tertiary-color: #6189FF;

    --border-profile-color: rgba(97, 137, 255, 0.35);

    --background-color-dark-theme: #454655;
    --background-color-light-theme: #E1E6E9;

    --icons-and-text-color-dark-theme: rgba(248, 248, 255, 0.9);
    --icons-and-text-color-light-theme: rgba(37, 41, 51, 0.9);

    --header-and-footer-text-color: #F8F8FF;

  }
`;
