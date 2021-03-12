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
  SiJquery,
  SiTailwindcss,
} from 'react-icons/si';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  z-index: 2;

  overflow-x: hidden;

  display: grid;

  grid-template-columns: 1fr 1fr;

  grid-template-areas: 'ExperienceContainer' 'TechsIcons';

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
  }

  @media (max-width: 320px) and (max-height: 570px) {
    height: 75rem;
  }

  @media (max-width: 320px) and (max-height: 480px) {
    height: 74rem;
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

    list-style: inside;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    margin-bottom: 0.4rem;

    :last-child {
      margin-bottom: 0px;
    }
  }

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  font-size: 1.85rem;

  // desktop layout
  @media (min-width: 1000px) {
    font-size: 2.2rem; // 22px
  }

  @media (min-width: 760px) and (max-width: 999px) {
    font-size: 2.95rem; // 29.5px
  }

  @media (min-width: 400px) and (max-width: 759px) {
    /* margin-bottom: 5rem; */
  }

  @media (max-width: 280px) {
    font-size: 1.75rem; // 17.5px
  }
`;

export const TitleTechsIcons = styled.div`
  grid-area: 'TechsIcons';

  display: flex;
  flex-direction: column;

  height: 10vh;

  align-items: flex-start;
  align-self: center;

  justify-self: flex-end;

  z-index: 2;

  > h3 {
    color: ${(props) => props.theme.iconsTextColor};
    max-width: 100%;

    font-size: 1.85rem; // 18.5px

    align-items: flex-start;

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    // desktop layout
    @media (min-width: 1000px) {
      font-size: 2.2rem; // 22px
    }

    @media (min-width: 760px) and (max-width: 999px) {
      font-size: 2.95rem; // 29.5px
    }

    @media (min-width: 400px) and (max-width: 759px) {
      /* margin-bottom: 5rem; */
    }

    @media (max-width: 280px) {
      font-size: 1.75rem; // 17.5px
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

  > p {
    align-items: flex-start;

    color: ${(props) => props.theme.iconsTextColor};

    font-size: 1.85rem; // 18.5px

    transition: 0.3s;
    &:active {
      opacity: 0.5;
    }

    // desktop layout
    @media (min-width: 1000px) {
      font-size: 2.2rem; // 22rem
    }

    @media (min-width: 760px) and (max-width: 999px) {
      font-size: 2.95rem; // 29.5px
    }

    @media (min-width: 400px) and (max-width: 759px) {
      /* margin-bottom: 5rem; */
    }

    @media (max-width: 280px) {
      font-size: 1.75rem; // 17.5px
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

  z-index: 2;

  color: ${(props) => props.theme.iconsTextColor};

  font-size: 1.85rem; // 18.5px

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
      font-weight: 700;

      color: ${(props) => props.theme.iconsTextColor};
    }
  }

  // desktop layout
  @media (min-width: 1000px) {
    font-size: 2.2rem; // 22px
  }

  @media (min-width: 760px) and (max-width: 999px) {
    font-size: 29.5px; // 29.5px
  }

  @media (max-width: 280px) {
    font-size: 1.75rem; // 17.5px
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

  width: 2.3rem;
  height: 2.3rem;

  // desktop layout
  @media (min-width: 1000px) {
    width: 2.5rem;
    height: 2.5rem;
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

export const JQueryIcon = styled(SiJquery)`
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

export const NodeIcon = styled(SiNodeDotJs)`
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
