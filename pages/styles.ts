import styled, { css } from 'styled-components';

import { RiChatSmile2Fill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { BsPersonFill } from 'react-icons/bs';

import { WaveBackgroundImgDesktop } from '../src/styles/Icons';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  padding: 20px 15px 0 15px;

  align-items: center;
  justify-content: center;

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
  }

  @media (max-width: 320px) and (max-height: 570px) {
    height: 750px;
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

  @media (max-width: 280px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 360px) {
    margin-bottom: 0;
  }

  @media (max-width: 320px) {
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
    margin-right: 10px;
    margin-bottom: 50px;

    flex-shrink: 0;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    @media (width: 375px) {
      margin-bottom: 0;
    }

    @media (max-width: 280px) {
      margin: 0 0 0 5px;
    }

    // desktop layout
    @media (min-width: 1000px) {
      position: relative;
      top: 25px;
    }
  }
`;

export const TextContainer = styled.div`
  display: grid;

  grid-template-columns: 0.1fr 3fr;

  grid-template-areas: 'IconGrid' 'IconTextGrid';

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  overflow: hidden;

  > a {
    height: 0;
    transition: 0.3s;

    &:hover,
    &:active {
      opacity: 0.5;
    }
  }

  .hello::before {
    content: 'Hello! ';

    @media (max-width: 799px) {
      display: block;
    }
  }

  > p {
    text-align: left;

    margin: 0 0 25px 25px;

    font-size: 22px;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      font-size: 21px;
    }

    // tablet and desktop layout
    @media (min-width: 800px) {
      margin-bottom: 50px;
      text-align: center;
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

  @media (max-width: 280px) {
    top: 10vh;
  }
`;

const iconsCSS = css`
  fill: ${(props) => props.theme.iconsTextColor};

  transition: 0.3s;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  width: 30px;
  height: 30px;

  // desktop layout
  @media (min-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`;

export const HappyIcon = styled(RiChatSmile2Fill)`
  ${iconsCSS};
`;

export const LocationIcon = styled(MdLocationOn)`
  ${iconsCSS};
`;

export const GitHubIcon = styled(SiGithub)`
  ${iconsCSS};
`;

export const AboutMeIcon = styled(BsPersonFill)`
  ${iconsCSS};
`;
