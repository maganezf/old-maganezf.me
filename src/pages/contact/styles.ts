import styled, { css } from 'styled-components';

import { IoIosMail } from 'react-icons/io';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter, SiInstagram } from 'react-icons/si';

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

  padding: 2rem 1.5rem 0 1.5rem;

  border-radius: 3rem 3rem 0 0;

  background: ${(props) => props.theme.backgroundColor};

  background-image: url('/wave-background-mobile.svg');
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 6rem;
  left: 0;
  right: 0;

  @media (min-width: 1000px) {
    background-image: url('/wave-background.svg');
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
    overflow: hidden;
  }

  @media (max-width: 360px) {
    overflow-y: scroll;
  }

  @media (max-width: 320px) and (max-height: 570px) {
    height: 76rem;
    overflow: hidden;
  }

  @media (max-width: 320px) and (max-height: 480px) {
    height: 74rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;

  flex-shrink: 0;

  justify-content: center;

  margin: 0 1.5rem;

  z-index: 2;

  @media (min-width: 530px) and (max-width: 700px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 280px) {
    margin-top: 8rem;
  }

  // tablet layout
  @media (min-width: 750px) and (max-width: 1024px) {
    align-items: center;
    margin-top: 0;
  }

  // desktop layout
  @media (min-width: 1025px) {
    align-items: center;

    margin: 1rem 1.5rem 2.5rem 1.5rem;
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
      margin: 0 0 0 0.5rem;
    }

    // desktop layout
    @media (min-width: 1000px) {
      position: relative;
      top: 2.5rem;
    }
  }
`;

export const FollowingMeOn = styled.section`
  z-index: 2;

  margin-bottom: 2.5rem;

  > p {
    flex-wrap: wrap;
    color: ${(props) => props.theme.iconsTextColor};

    font-size: 2.1rem;

    margin: 1.5rem 0 2.5rem 0;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
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
`;

export const SendEmailContainer = styled.section`
  display: flex;
  flex-direction: column;

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  margin-bottom: 4.5rem;

  font-size: 2.1rem;

  > p {
    font-size: 2.2rem;
    text-align: left;
    line-break: loose;

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

  width: 3rem;
  height: 3rem;

  // desktop layout
  @media (min-width: 1000px) {
    width: 4rem;
    height: 4rem;
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
