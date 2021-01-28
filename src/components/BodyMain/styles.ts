import styled, { css } from 'styled-components';

import {
  WaveBackgroundImgMobile,
  HappyIconDarkTheme,
  LocationIconDarkTheme,
  GitHubIconDarkTheme,
  MessageIconDarkTheme,
} from '../../styles/Icons';

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
  @media (min-with: 100px) {
  }
`;

export const ProfileContainer = styled.div`
  display: flex;

  flex-shrink: 0;

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  @media (max-width: 360px) {
    margin: 0px;
  }

  @media (max-width: 320px) {
    margin-bottom: 40px;
  }

  // desktop layout
  @media (min-with: 100px) {
  }
`;

export const TextContainer = styled.div`
  display: grid;

  grid-template-columns: 0.1fr 3fr;

  grid-template-areas: 'IconGrid' 'IconTextGrid';

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
  @media (min-with: 100px) {
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
  @media (min-with: 100px) {
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;

  // desktop layout
  @media (min-with: 100px) {
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

export const MessageIcon = styled(MessageIconDarkTheme)`
  ${iconCSS};
`;
