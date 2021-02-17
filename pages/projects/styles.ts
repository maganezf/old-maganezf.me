import styled, { css } from 'styled-components';

import { BsFillBootstrapFill } from 'react-icons/bs';
import { DiSqllite } from 'react-icons/di';

import {
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNextDotJs,
  SiNodeDotJs,
  SiReact,
  SiSass,
  SiTailwindcss,
} from 'react-icons/si';

import { WaveBackgroundImgDesktop } from '../../src/styles/Icons';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  z-index: 2;

  overflow: hidden;

  /* display: flex; */
  /* flex-direction: column; */

  display: grid;

  grid-template-columns: 1fr 1fr;

  grid-template-areas: 'ExperienceContainer' 'TechsIcons';

  padding: 0 15px;

  border-radius: 30px 30px 0 50px;

  background: ${(props) => props.theme.backgroundColor};
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
`;

export const ExperienceContainer = styled.div`
  width: 50vw;

  grid-area: 'ExperienceContainer';

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-self: center;

  > h3 {
    align-items: flex-start;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }
  }

  > li {
    text-align: start;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }
  }

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  font-size: 18.5px;

  // desktop layout
  @media (min-width: 1000px) {
    font-size: 22px;

    /* margin-bottom: 12.5rem; */
  }

  @media (min-width: 760px) and (max-width: 999px) {
    font-size: 29.5px;

    /* margin-bottom: 12.5rem; */
  }

  @media (min-width: 400px) and (max-width: 759px) {
    /* margin-bottom: 5rem; */
  }

  @media (max-width: 280px) {
    font-size: 17.5px;
  }
`;

export const TitleTechsIcons = styled.div`
  grid-area: 'TechsIcons';

  display: flex;
  flex-direction: column;

  width: auto;
  height: 10vh;

  align-items: flex-start;
  align-self: center;

  justify-self: flex-end;

  z-index: 2;

  > h3 {
    color: ${(props) => props.theme.iconsTextColor};

    font-size: 18.5px;

    align-items: flex-start;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    // desktop layout
    @media (min-width: 1000px) {
      font-size: 22px;
    }

    @media (min-width: 760px) and (max-width: 999px) {
      font-size: 29.5px;

      /* margin-bottom: 12.5rem; */
    }

    @media (min-width: 400px) and (max-width: 759px) {
      /* margin-bottom: 5rem; */
    }

    @media (max-width: 280px) {
      font-size: 17.5px;
    }

    @media (max-width: 1000px) {
      width: 9rem;
    }
  }

  @media (max-width: 1000px) {
    align-self: center;
    justify-content: center;

    justify-self: center;
  }
`;

export const TechsIcons = styled.div`
  width: auto;

  display: flex;

  align-items: center;
  align-self: center;

  justify-self: center;

  column-gap: 0.3rem;

  > a {
    margin-right: 0.8rem;

    z-index: 2;

    cursor: default;

    &:last-child {
      margin-right: 0;
    }

    transition: 0.3s;
    &:active,
    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 1000px) {
    width: auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > a {
      &:last-child {
        margin-right: 0.8rem;
      }
    }
  }

  @media (max-width: 280px) {
    width: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FirstProjectsContainer = styled.div`
  width: 50vw;
  height: 10vh;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-self: center;

  justify-content: center;
  justify-self: center;

  z-index: 2;

  > h3 {
    align-items: flex-start;

    color: ${(props) => props.theme.iconsTextColor};

    font-size: 18.5px;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    // desktop layout
    @media (min-width: 1000px) {
      font-size: 22px;
    }

    @media (min-width: 760px) and (max-width: 999px) {
      font-size: 29.5px;

      /* margin-bottom: 12.5rem; */
    }

    @media (min-width: 400px) and (max-width: 759px) {
      /* margin-bottom: 5rem; */
    }

    @media (max-width: 280px) {
      font-size: 17.5px;
    }
  }

  @media (max-width: 1000px) {
    width: 49.9vw;
  }
`;

export const SecondProjectsContainer = styled.div`
  width: 48vw;

  display: flex;
  flex-direction: column;

  align-self: center;

  margin-bottom: 2rem;

  > h3 {
    align-items: flex-end;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }
  }

  > li {
    text-align: start;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    > a {
      text-decoration: none;
      font-weight: bold;

      color: ${(props) => props.theme.iconsTextColor};
    }
  }

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  font-size: 18.5px;

  // desktop layout
  @media (min-width: 1000px) {
    font-size: 22px;
  }

  @media (min-width: 760px) and (max-width: 999px) {
    font-size: 29.5px;
  }

  @media (max-width: 280px) {
    font-size: 17.5px;
  }
`;

export const WaveBackground = styled(WaveBackgroundImgDesktop)`
  border-radius: 0px 0px 0px 50px;

  width: auto;
  height: 100vh;

  z-index: 0;

  overflow: hidden;

  display: block;
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  transition: 0.3s;
  &:active {
    opacity: 0.85;
  }

  @media (min-width: 1000px) {
    width: auto;
  }

  @media (min-width: 1024px) and (max-height: 1366px) {
    width: auto;
  }

  @media (min-width: 750px) and (max-width: 1000px) {
    top: 9vh;
  }

  @media (max-width: 411px) {
    top: 5.5vh;
  }

  @media (max-width: 375px) {
    top: 5vh;
  }

  @media (max-width: 320px) {
    top: 46vh;
    left: -15vw;
  }

  @media (max-width: 280px) {
    top: 8vh;
  }
`;

const iconsCSS = css`
  fill: ${(props) => props.theme.iconsTextColor};

  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  width: 23px;
  height: 23px;

  // desktop layout
  @media (min-width: 1000px) {
    width: 25px;
    height: 25px;
  }
`;

export const ReactJsIcon = styled(SiReact)`
  ${iconsCSS};
`;

export const NextJsIcon = styled(SiNextDotJs)`
  ${iconsCSS};
`;

export const HtmlIcon = styled(SiHtml5)`
  ${iconsCSS};
`;

export const CssIcon = styled(SiCss3)`
  ${iconsCSS};
`;

export const SassIcon = styled(SiSass)`
  ${iconsCSS};
`;

export const TailwindCssIcon = styled(SiTailwindcss)`
  ${iconsCSS};
`;

export const BootstrapIcon = styled(BsFillBootstrapFill)`
  ${iconsCSS};
`;

export const JsIcon = styled(SiJavascript)`
  ${iconsCSS};
`;

export const TsIcon = styled(SiTypescript)`
  ${iconsCSS};
`;

export const GitIcon = styled(SiGit)`
  ${iconsCSS};
`;

export const GitHubIcon = styled(SiGithub)`
  ${iconsCSS};
`;

export const MongoDBIcon = styled(SiMongodb)`
  ${iconsCSS};
`;

export const SqliteIcon = styled(DiSqllite)`
  ${iconsCSS};
`;

export const NodeJsIcon = styled(SiNodeDotJs)`
  ${iconsCSS};
`;
