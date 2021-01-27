import styled from 'styled-components';
import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 15px;

  color: var(--icons-and-text-color-dark-theme);

  background: var(--primary-color);

  width: 100vw;
  height: 10vh;

  border-radius: 1.5px 1.5px 0 0;

  flex-shrink: 0;

  position: relative;
  top: 87.5vh;
  left: 0;
  right: 0;

  z-index: 2;

  > h2 {
    font-size: 22px;
  }

  @media (width: 411px) {
    height: 11.5vh;
  }

  @media (width: 360px) {
    top: 550px;
  }

  @media (width: 320px) {
    top: 654px;
  }

  @media (width: 375px) {
    top: 85.8vh;
  }

  @media (max-width: 319px) {
    top: 100vh;
  }
`;

export const LineSeparator = styled(LineSeparatorIcon)`
  height: 7vh;
`;
