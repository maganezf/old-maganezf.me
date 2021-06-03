import styled, { css } from 'styled-components';

import { RiChatSmile2Fill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { BsPersonFill } from 'react-icons/bs';

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

  overflow: hidden;

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

  @media (min-width: 1000px) {
    background-image: url('/waves-backgrounds/wave-background-desktop.svg');
  }

  @media (min-width: 400px) {
    overflow: hidden;
  }

  @media (width: 375px) and (max-height: 815px) {
    height: 80rem;
    overflow: hidden;
  }

  @media (max-width: 375px) and (max-height: 670px) {
    height: 75rem;
  }

  @media (max-width: 320px) and (max-height: 570px) {
    height: 75rem;
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

  @media (max-width: 360px) {
    margin-bottom: 0;
  }

  @media (max-width: 320px) {
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
    margin-bottom: 2.5rem;
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

    @media (width: 375px) {
      margin-bottom: 0;
    }

    @media (max-width: 280px) {
      margin: 0 0 0 0.5rem;
    }

    // desktop layout
    @media (min-width: 1000px) {
      position: relative;
      top: 2.5rem;
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

    margin: 0 0 2.5rem 2.5rem;

    font-size: 2.2rem;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    @media (min-width: 280px) and (max-width: 320px) {
      font-size: 2.1rem;
    }

    // tablet and desktop layout
    @media (min-width: 800px) {
      margin-bottom: 5rem;
      text-align: center;
    }
  }
`;

const iconsCSS = css`
  fill: ${(props) => props.theme.iconsTextColor};

  transition: 0.3s;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  width: 3rem;
  height: 3rem;

  // desktop layout
  @media (min-width: 1000px) {
    width: 4rem;
    height: 4rem;
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
