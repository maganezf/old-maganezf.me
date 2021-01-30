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
  }
`;

export const ProfileContainer = styled.div`
  width: 100vw;

  display: flex;

  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  padding: 0 15px 100px 15px;

  z-index: 2;

  @media (max-width: 360px) {
    margin: 0px;
  }

  @media (max-width: 320px) {
    margin-bottom: 40px;
  }

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const ImageProfile = styled.div`
  > img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 2.5px solid var(--border-profile-color);

    margin-right: 30px;

    @media (max-width: 280px) {
      margin-right: 15px;
    }

    // desktop layout
    @media (min-width: 1000px) {
    }
  }
`;

export const DescriptionProfile = styled.div`
  > p {
    display: flex;

    /* font-family: Ubuntu;
    font-weight: 400; */

    justify-content: center;
    align-items: center;

    color: var(--icons-and-text-color-dark-theme);
    font-size: 22px;

    flex-shrink: 0;

    // desktop layout
    @media (min-width: 1000px) {
    }
  }
`;

export const TextContainer = styled.div`
  display: grid;

  grid-template-columns: 0.1fr 3fr;

  grid-template-areas: 'IconGrid' 'IconTextGrid';

  grid-area: IconGrid;

  margin-right: 10px;

  z-index: 2;

  color: var(--icons-and-text-color-dark-theme);

  > p {
    text-align: right;

    margin-bottom: 35px;

    font-size: 21px;

    /* font-family: Ubuntu;
    font-weight: 400; */
  }

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const WaveBackground = styled(WaveBackgroundImgMobile)`
  border-radius: 0px 0px 0px 50px;

  width: 100vw;
  height: 100vh;

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
    top: 54vh;
  }

  @media (max-width: 319px) {
    height: 380px;
  }

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const HappyIcon = styled(HappyIconDarkTheme)`
  ${iconCSS};
`;

export const LocationIcon = styled(LocationIconDarkTheme)`
  ${iconCSS};
`;

export const GitHubIcon = styled(GitHubIconDarkTheme)`
  ${iconCSS};
`;

export const InfoIcon = styled(InfoIconDarkTheme)`
  ${iconCSS};
`;
