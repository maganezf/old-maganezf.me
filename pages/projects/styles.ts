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
  }

  > li {
    text-align: start;
  }

  margin-bottom: 10rem;

  z-index: 2;

  color: var(--icons-and-text-color-dark-theme);

  font-size: 21px;

  /* font-family: Ubuntu;
    font-weight: 400; */

  // desktop layout
  @media (min-width: 1000px) {
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
  }

  > li {
    text-align: start;
  }

  z-index: 2;

  color: var(--icons-and-text-color-dark-theme);

  /* margin-bottom: 50px; */

  font-size: 21px;

  /* font-family: Ubuntu;
    font-weight: 400; */

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const WaveBackground = styled(WaveBackgroundImgDesktop)`
  border-radius: 0px 0px 0px 50px;

  height: 100vh;

  position: absolute;

  top: 0;
  left: 0px;
  bottom: 0;
  right: 0;

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
