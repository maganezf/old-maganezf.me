import styled, { css } from 'styled-components';

import {
  WaveBackgroundImgMobile,
  HappyIconDarkTheme,
  LocationIconDarkTheme,
  GitHubIconDarkTheme,
  MessageIconDarkTheme,
} from '../../styles/Icons';

export const Container = styled.div`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    padding: 0 15px;

    align-items: center;
    justify-content: center;

    border-radius: 30px 30px 0 50px;

    background: var(--background-color-dark-theme);

    position: absolute;
    top: 60px;
    left: 0px;
  }
`;

export const ProfileContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 60px;
  }
`;

export const TextContainer = styled.div`
  @media (max-width: 500px) {
    z-index: 2;

    > span {
      display: flex;

      padding-bottom: 20px;
      flex-shrink: 0;

      color: var(--icons-and-text-color-dark-theme);
      font-size: 21px;
    }
  }
`;

export const WaveBackground = styled(WaveBackgroundImgMobile)`
  @media (max-width: 500px) {
    border-radius: 0px 0px 0px 50px;

    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

const iconCSS = css`
  width: 30px;
  height: 30px;
`;

export const HappyIcon = styled(HappyIconDarkTheme)`
  @media (max-width: 500px) {
    ${iconCSS};
  }
`;

export const LocationIcon = styled(LocationIconDarkTheme)`
  @media (max-width: 500px) {
    ${iconCSS};
  }
`;

export const GitHubIcon = styled(GitHubIconDarkTheme)`
  @media (max-width: 500px) {
    ${iconCSS};
  }
`;

export const MessageIcon = styled(MessageIconDarkTheme)`
  @media (max-width: 500px) {
    ${iconCSS};
  }
`;
