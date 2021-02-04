import styled from 'styled-components';

import { WaveBackgroundImgDesktop } from '../../src/styles/Icons';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  justify-content: center;

  padding: 0 15px;

  border-radius: 30px 30px 0 50px;

  background: var(--background-color-dark-theme);

  /* background-size: cover;
  background-position: center; */

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

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-self: flex-start;

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

  margin-bottom: 0.5rem;

  z-index: 2;

  color: var(--icons-and-text-color-dark-theme);

  font-size: 18.5px;

  /* font-family: Ubuntu; */
  /* font-weight: 400; */

  // desktop layout
  @media (min-width: 1000px) {
    font-size: 22px;

    margin-bottom: 12.5rem;
  }

  @media (min-width: 760px) and (max-width: 999px) {
    font-size: 29.5px;

    margin-bottom: 12.5rem;
  }

  @media (min-width: 400px) and (max-width: 759px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 280px) {
    font-size: 17.5px;
  }
`;

export const ProjectsContainer = styled.div`
  width: 50vw;

  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-self: flex-end;

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

  color: var(--icons-and-text-color-dark-theme);

  font-size: 18.5px;

  /* font-family: Ubuntu; */
  /* font-weight: 400; */

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
