import styled from 'styled-components';

import { WaveBackgroundImgDesktop } from '../../src/assets/icons/WaveBackgroundImgDesktop';

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  z-index: 2;

  color: var(--icons-and-text-color-dark-theme);

  margin-bottom: 50px;

  font-size: 21px;

  /* font-family: Ubuntu;
    font-weight: 400; */

  // desktop layout
  @media (min-width: 1000px) {
  }
`;

export const WaveBackground = styled(WaveBackgroundImgDesktop)`
  border-radius: 0px 0px 0px 50px;

  max-width: 100vw;
  max-height: 100vh;

  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media (min-width: 760px) and (max-width: 1024px) {
    /* top: 550px; */
  }

  @media (height: 567px) {
    top: 172px;
  }

  @media (max-height: 568px) and (min-height: 500px) {
    height: 75vh;
  }

  @media (min-width: 411px) {
    height: 98vh;
  }

  @media (width: 375px) {
    height: 100vh;

    top: 0.9vh;
  }

  @media (max-width: 320px) {
    top: 53vh;
  }

  @media (max-width: 319px) {
    height: 380px;
  }
`;
