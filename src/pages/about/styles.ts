import styled from 'styled-components';

import { WaveBackgroundImgDesktop } from '../../styles/Icons';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  padding: 20px 15px 0 15px;

  border-radius: 30px 30px 0 0;

  background: ${(props) => props.theme.backgroundColor};

  background-size: cover;
  background-position: center;

  position: absolute;
  top: 60px;
  left: 0px;

  @media (min-width: 400px) {
    overflow: hidden;
  }

  @media (width: 375px) and (max-height: 815px) {
    height: 800px;
    overflow: hidden;
  }

  @media (max-width: 375px) and (max-height: 670px) {
    height: 750px;
    overflow: hidden;
  }

  @media (max-width: 360px) {
    overflow-y: scroll;
  }

  @media (max-width: 320px) and (max-height: 570px) {
    height: 760px;
    overflow: hidden;
  }

  @media (max-width: 320px) and (max-height: 480px) {
    height: 740px;
  }
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

  > section {
    > p {
      > h2 {
        font-size: 24px;
        font-weight: 700;

        transition: 0.3s;
        &:active {
          opacity: 0.5;
        }
      }

      padding: 6px;

      margin: 0 25px;

      color: ${(props) => props.theme.iconsTextColor};
      background-color: ${(props) => props.theme.borderProfileColor};

      border-radius: 5px;

      font-size: 22px;

      > a {
        color: ${(props) => props.theme.primaryColor};

        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export const ImagesContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  @media (max-width: 540px) {
    flex-direction: column;
  }

  > img {
    width: 400px;
    height: 300px;

    border-radius: 5px;

    transition: 0.3s;
    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 540px) {
      width: 180px;
      height: 180px;
    }
  }
`;

export const TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  margin-bottom: 50px;

  font-size: 21px;

  > section {
    > p {
      > h2 {
        font-size: 24px;
        font-weight: 700;

        transition: 0.3s;
        &:active {
          opacity: 0.5;
        }
      }

      padding: 6px;

      margin: 0 25px;

      color: ${(props) => props.theme.iconsTextColor};
      background-color: ${(props) => props.theme.borderProfileColor};

      border-radius: 5px;

      font-size: 22px;

      > a {
        color: ${(props) => props.theme.primaryColor};

        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export const WaveBackground = styled(WaveBackgroundImgDesktop)`
  width: auto;
  height: 115vh;

  z-index: 0;

  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;

  transition: 0.3s;
  &:active {
    opacity: 0.85;
  }

  @media (max-width: 320px) and (max-height: 570px) {
    top: 30vh;
  }

  @media (max-width: 320px) and (max-height: 480px) {
    top: 57vh;
  }
`;
