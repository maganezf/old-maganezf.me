import styled, { css } from 'styled-components';

import { RiChatSmile2Fill } from 'react-icons/ri';
import { MdLocationOn } from 'react-icons/md';
import { SiGithub } from 'react-icons/si';
import { BsPersonFill } from 'react-icons/bs';

import { WaveBackgroundImgDesktop } from '../src/styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  overflow: hidden;

  padding: 0 15px;

  align-items: center;
  justify-content: center;

  border-radius: 30px 30px 0 50px;

  background: var(--background-color-dark-theme);

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
    border: 2.5px solid var(--tertiary-color);

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
  > h2 {
    text-align: left;

    padding: 0 5px;

    color: var(--icons-and-text-color-dark-theme);
    background-color: var(--border-profile-color);

    /* font-family: Ubuntu; */

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
      margin: 0 0 0px 5px;
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

  color: var(--icons-and-text-color-dark-theme);

  > a {
    height: 0;
    transition: 0.3s;

    &:hover,
    &:active {
      opacity: 0.5;
    }
  }

  > p {
    text-align: end;

    margin: 0 0 25px 25px;

    font-size: 22px;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    /* font-family: Ubuntu; */
    /* font-weight: 400; */
  }

  // desktop layout
  @media (min-width: 1000px) {
    > p {
      margin-bottom: 50px;
      text-align: center;
    }
  }
`;

export const WaveBackground = styled(WaveBackgroundImgDesktop)`
  border-radius: 0px 0px 0px 50px;

  width: auto;
  height: 100vh;

  position: absolute;

  top: 65px;
  left: 0px;
  bottom: 0;
  right: 0;

  transition: 0.3s;
  &:active {
    opacity: 0.8;
  }

  @media (min-width: 1000px) {
    width: 100vw;
  }

  @media (min-width: 1024px) and (max-width: 1100px) {
    top: 20vh;
  }

  @media (min-width: 750px) and (max-width: 1000px) {
    top: 9vh;
  }

  @media (max-width: 411px) {
    top: 5.5vh;
  }

  @media (max-width: 375px) {
    top: 5vh;
    left: -3vw;
  }

  @media (max-width: 320px) {
    top: 46.5vh;
    left: -59vw;
  }

  @media (max-width: 280px) {
    top: 8vh;
  }
`;

const iconsCSS = css`
  fill: var(--icons-and-text-color-dark-theme);

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
