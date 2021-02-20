import styled from 'styled-components';

import { WaveBackgroundImgDesktop } from '../../src/styles/Icons';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  padding: 0 15px;

  align-items: center;
  justify-content: center;

  border-radius: 30px 30px 0 50px;

  background: ${(props) => props.theme.backgroundColor};

  background-size: cover;
  background-position: center;

  position: absolute;
  top: 60px;
  left: 0px;

  @media (max-width: 420px) {
    height: 103vh;
  }

  @media (max-width: 320px) {
    height: 750px;
  }

  @media (max-width: 280px) {
    height: 750px;
  }

  /* // desktop layout
  @media (min-width: 1000px) {
    overflow: hidden;

    max-width: 100vw;
  } */
`;

export const ProfileContainer = styled.div`
  display: flex;

  flex-shrink: 0;

  justify-content: center;

  margin: 0 15px 10vh 15px;

  z-index: 2;

  @media (min-width: 320px) and (max-width: 360px) {
    margin-bottom: 20px;
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
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 2.5px solid ${(props) => props.theme.tertiaryColor};

    margin: 0 10px;

    transition: 0.3s;

    &:active {
      opacity: 0.5;
    }

    @media (max-width: 280px) {
      width: 125px;
      height: 125px;

      margin: 0;
    }

    // desktop layout
    @media (min-width: 1000px) {
    }
  }
`;

export const DescriptionProfile = styled.div`
  > h1 {
    text-align: left;
    padding: 4px;

    color: ${(props) => props.theme.iconsTextColor};
    background-color: ${(props) => props.theme.borderProfileColor};

    font-size: 24px;
    font-weight: 700;

    border-radius: 6px;
    margin: 0 10px 50px 0;

    flex-shrink: 0;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    @media (max-width: 280px) {
      margin-left: 5px;
    }

    // desktop layout
    @media (min-width: 1000px) {
      position: relative;
      top: 25px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  margin-bottom: 50px;

  font-size: 21px;

  > section {
    > p {
      padding: 6px;

      color: ${(props) => props.theme.iconsTextColor};
      background-color: ${(props) => props.theme.borderProfileColor};

      border-radius: 5px;

      font-size: 22px;

      transition: 0.3s;
      &:active {
        opacity: 0.5;
      }

      > a {
        color: ${(props) => props.theme.primaryColor};

        text-decoration: none;
        font-weight: bold;
      }
    }
  }

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const WaveBackground = styled(WaveBackgroundImgDesktop)`
  border-radius: 0px 0px 0px 50px;

  width: auto;
  height: 100vh;

  z-index: 0;

  overflow: hidden;

  display: block;
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  transition: 0.3s;
  &:active {
    opacity: 0.85;
  }

  @media (min-width: 1000px) {
    width: auto;
  }

  @media (min-width: 1024px) and (max-height: 1366px) {
    width: auto;
  }

  @media (min-width: 750px) and (max-width: 1000px) {
    top: 9vh;
  }

  @media (max-width: 411px) {
    top: 5.5vh;
  }

  @media (max-width: 375px) {
    top: 5vh;
  }

  @media (max-width: 320px) {
    top: 46vh;
    left: -15vw;
  }

  @media (max-width: 280px) {
    top: 8vh;
  }
`;
