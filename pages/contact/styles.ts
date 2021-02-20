import styled, { css } from 'styled-components';

import { IoIosMail } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter, SiInstagram } from 'react-icons/si';

import { WaveBackgroundImgDesktop } from '../../src/styles/Icons';

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

  > section {
    flex-wrap: wrap;
    color: ${(props) => props.theme.iconsTextColor};

    font-size: 21px;

    margin: 1.5rem 0 2.5rem 0;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    z-index: 2;
  }

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

  margin: 15rem 15px 0 15px;

  z-index: 2;

  @media (min-width: 530px) and (max-width: 700px) {
    margin-top: 10rem;
  }

  @media (min-width: 400px) and (max-width: 500px) {
    margin-top: 6rem;
  }

  @media (max-width: 375px) {
    margin-top: 10rem;
  }

  @media (max-width: 320px) {
    margin-top: 10rem;
  }

  @media (max-width: 280px) {
    margin-top: 8rem;
  }

  // tablet layout
  @media (min-width: 750px) and (max-width: 1024px) {
    align-items: center;
    margin-top: 0rem;
  }

  // desktop layout
  @media (min-width: 1025px) {
    align-items: center;

    margin: 1rem 15px 1rem 15px;
    /* margin: 10rem 15px 1rem 15px; */
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
      margin: 0 0 0px 5px;
    }

    // desktop layout
    @media (min-width: 1000px) {
      position: relative;
      top: 25px;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;

  z-index: 2;

  align-content: center;
  justify-content: space-evenly;

  margin-bottom: 10vh;

  > a {
    margin-right: 15vw;

    transition: 0.3s;
    &:active,
    &:hover {
      opacity: 0.5;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const SendEmailContainer = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  margin-bottom: 4.5rem;

  font-size: 21px;

  > section {
    font-size: 22px;
    text-align: center;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }
  }

  // desktop layout
  @media (min-width: 1000px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) and (max-width: 1100px) {
    margin-bottom: 0;
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

  @media (max-width: 360px) {
    top: 10vh;
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

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  width: 30px;
  height: 30px;

  // desktop layout
  @media (min-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`;

export const EmailIcon = styled(IoIosMail)`
  ${iconsCSS}
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
  ${iconsCSS}
`;

export const TwitterIcon = styled(SiTwitter)`
  ${iconsCSS}
`;

export const InstagramIcon = styled(SiInstagram)`
  ${iconsCSS}
`;
