import styled, { css } from 'styled-components';

import { IoIosMail } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter, SiInstagram } from 'react-icons/si';

import { WaveBackgroundImgDesktop } from '../../src/styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  /* overflow-x: hidden; */
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

  > label {
    flex-wrap: wrap;
    color: var(--icons-and-text-color-dark-theme);
    font-size: 21px;

    margin: 1.5rem 0 2.5rem 0;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    z-index: 2;
  }

  @media (min-width: 750px) and (max-width: 1100px) {
    overflow: hidden;
  }

  @media (max-width: 420px) {
    height: 103vh;
  }

  @media (max-width: 320px) {
    height: 750px;
  }

  @media (max-width: 280px) {
    height: 750px;
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;

  color: var(--icons-and-text-color-dark-theme);

  margin-bottom: 4.5rem;

  font-size: 21px;

  /* font-family: Ubuntu; */
  /* font-weight: 400; */

  > label {
    font-size: 22px;

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
  border-radius: 0px 0px 0px 50px;

  width: auto;
  height: 100vh;

  position: absolute;

  /* top: 8.8rem; */
  top: 65px;
  left: 0;
  bottom: 0;
  right: 0;

  > svg {
    transition: 0.3s;
    &:active {
      opacity: 0.7;
    }
  }

  @media (min-width: 1000px) {
    width: 100vw;
  }

  @media (min-width: 1024px) and (max-width: 1100px) {
    top: 30rem;
  }

  @media (min-width: 750px) and (max-width: 1000px) {
    /* top: 9vh; */
  }

  @media (max-width: 411px) {
    /* top: 5.5vh; */
  }

  @media (max-width: 375px) {
    /* top: 5vh; */
  }

  @media (max-width: 320px) {
    /* top: 46.5vh; */
    left: -15vw;
  }

  @media (max-width: 280px) {
    /* top: 8vh; */
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
