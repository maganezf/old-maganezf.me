import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-around;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  width: 100vw;
  height: 100vh;

  padding: 2rem 1.5rem 0 1.5rem;

  border-radius: 3rem 3rem 0 0;

  background: ${(props) => props.theme.backgroundColor};

  background-image: url('/waves-backgrounds/wave-background-mobile.svg');
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;

  overflow: hidden;
  overflow-y: scroll;

  @media (min-width: 1000px) {
    background-image: url('/waves-backgrounds/wave-background-desktop.svg');
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 0.4rem;
      height: 0.4rem;

      background: ${(props) => props.theme.primaryColor};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 2rem;
      -webkit-border-radius: 2rem;

      background: ${(props) => props.theme.selectionTextColor};

      box-shadow: 0 0.8rem 2.4rem 0.15rem ${(props) => props.theme.shadowColor};
      -webkit-box-shadow: 0 0.8rem 2.4rem 0.15rem
        ${(props) => props.theme.shadowColor};
    }
  }

  @media (width: 375px) and (max-height: 815px) {
    height: 80rem;
    justify-content: center;
  }

  @media (max-width: 375px) and (max-height: 670px) {
    height: 75rem;
    justify-content: center;
  }

  @media (max-width: 320px) and (max-height: 570px) {
    height: 76rem;
  }

  @media (max-width: 320px) and (max-height: 480px) {
    height: 74rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;

  flex-shrink: 0;

  justify-content: center;

  margin: 0 1.5rem 10vh 1.5rem;

  z-index: 2;

  @media (min-width: 320px) and (max-width: 360px) {
    margin-bottom: 2rem;
  }

  // tablet layout
  @media (min-width: 750px) and (max-width: 999px) {
    align-items: center;
    margin-bottom: 20vh;
  }

  // desktop layout
  @media (min-width: 1000px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const ImageProfile = styled.div`
  > img {
    width: 15rem;
    height: 15rem;

    border-radius: 50%;
    border: 0.25rem solid ${(props) => props.theme.tertiaryColor};

    margin: 0 1rem;

    transition: 0.3s;

    &:active {
      opacity: 0.5;
    }

    @media (max-width: 280px) {
      width: 12.5rem;
      height: 12.5rem;

      margin: 0;
    }
  }
`;

export const DescriptionProfile = styled.div`
  > h1 {
    text-align: left;

    padding: 0.4rem;

    color: ${(props) => props.theme.iconsTextColor};
    background-color: ${(props) => props.theme.borderProfileColor};

    font-size: 2.4rem;

    font-weight: 700;

    border-radius: 0.6rem;
    margin-right: 1rem;
    margin-bottom: 5rem;

    flex-shrink: 0;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    @media (max-width: 280px) {
      margin-left: 0.5rem;
    }

    // desktop layout
    @media (min-width: 1000px) {
      position: relative;
      top: 2.5rem;
    }
  }
`;

const sectionStyles = css`
  > p {
    padding: 0.6rem;

    color: ${(props) => props.theme.iconsTextColor};
    background-color: ${(props) => props.theme.borderProfileColor};

    border-radius: 0 0.5rem 0.5rem 0.5rem;

    font-size: 2.2rem;

    > a {
      color: ${(props) => props.theme.primaryColor};

      text-decoration: none;
      font-weight: bold;
    }
  }
`;

const buttonStyles = css`
  > button {
    display: flex;

    padding: 0 0.7rem;

    color: ${(props) => props.theme.iconsTextColor};
    background-color: ${(props) => props.theme.borderProfileColor};

    border-radius: 0.5rem 0.5rem 0.5rem 0;

    transition: 0.25s ease-in-out;

    &:hover,
    &:active {
      transform: scale(1.04);
      opacity: 0.8;
    }

    > h2 {
      font-size: 2.2rem;
      font-weight: 700;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  margin-bottom: 10rem;

  ${sectionStyles}

  @media (min-width: 1000px) {
    margin-bottom: 6rem;
  }
`;

export const FromContent = styled.section`
  ${buttonStyles}
  ${sectionStyles}

  margin-bottom: .5rem;
`;

export const HobbiesContainer = styled.section`
  ${buttonStyles}
  ${sectionStyles}
  margin-bottom: .5rem;
`;

export const ProgrammingJourneyContainer = styled.section`
  ${buttonStyles}
  ${sectionStyles}
`;

export const ImagesContainer = styled.div`
  display: flex;

  justify-content: space-evenly;
  align-items: center;

  margin-top: 2rem;

  @media (min-width: 600px) and (max-width: 1100px) {
    flex-direction: column;
  }

  > img {
    width: auto;
    height: 20rem;

    border-radius: 0.5rem;

    transition: 0.25s ease-in-out;
    &:hover {
      opacity: 0.8;

      transform: scale(1.03);
    }

    &::first-child {
    }

    &::last-child {
    }

    a {
      height: 5rem;
      display: none;

      font-size: 3.5rem;
      text-align: center;
      text-decoration: none;

      color: ${(props) => props.theme.headerFooterColor};

      margin: auto;

      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      cursor: pointer;
    }

    @media (max-width: 540px) {
      width: 18rem;
      height: 18rem;
    }
  }
`;
