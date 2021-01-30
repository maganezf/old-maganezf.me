import styled, { css } from 'styled-components';

import {
  WaveBackgroundImgMobile,
  HappyIconDarkTheme,
  LocationIconDarkTheme,
  GitHubIconDarkTheme,
  InfoIconDarkTheme,
} from '../src/styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

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

  @media (max-width: 320px) {
    height: 740px;
  }

  @media (max-width: 280px) {
    height: 740px;
  }

  // desktop layout
  @media (min-width: 1000px) {
    overflow: hidden;

    max-width: 100vw;
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

  // desktop layout
  @media (min-width: 750px) and (max-width: 1000px) {
    align-items: center;
    margin-bottom: 20vh;
  }

  @media (min-width: 1000px) {
    align-items: center;
    margin-bottom: 75px;
  }
`;

export const ImageProfile = styled.div`
  > img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 2.5px solid var(--tertiary-color);

    margin: 0 10px;

    &:hover {
      opacity: 0.9;
      transition: 0.2s;
    }

    @media (max-width: 280px) {
      margin-right: 15px;
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

    font-size: 22px;
    font-weight: 700;

    border-radius: 6px;
    margin: 0 15px 50px 0;

    /* font-family: Ubuntu; */

    flex-shrink: 0;

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

  > svg {
    &:hover {
      opacity: 0.7;
      transition: 0.2s;
    }

    &:nth-child(5) {
      cursor: pointer;
    }
  }

  > p {
    text-align: end;

    margin: 0 0 25px 25px;

    font-size: 21px;

    /* font-family: Ubuntu;
    font-weight: 400; */
  }

  // desktop layout
  @media (min-width: 1000px) {
    > p {
      margin-bottom: 50px;
      text-align: center;
    }
  }
`;

export const WaveBackground = styled(WaveBackgroundImgMobile)`
  border-radius: 0px 0px 0px 50px;

  max-width: 100vw;
  max-height: 100vh;

  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;

  @media (height: 567px) {
    top: 172px;
  }

  @media (max-height: 568px) and (min-height: 500px) {
    height: 75vh;
  }

  @media (max-width: 320px) {
    top: 55vh;
  }

  @media (max-width: 319px) {
    height: 380px;
  }

  // desktop layout
  @media (min-width: 1000px) {
    position: absolute;
    top: -30px;
    left: 0px;
    bottom: 0px;
  }
`;

const iconSize = css`
  width: 30px;
  height: 30px;

  // desktop layout
  @media (min-width: 1000px) {
    width: 40px;
    height: 40px;
  }
`;

export const HappyIcon = styled(HappyIconDarkTheme)`
  ${iconSize};
`;

export const LocationIcon = styled(LocationIconDarkTheme)`
  ${iconSize};
`;

export const GitHubIcon = styled(GitHubIconDarkTheme)`
  ${iconSize};
`;

export const InfoIcon = styled(InfoIconDarkTheme)`
  ${iconSize};
`;
