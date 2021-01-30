import styled from 'styled-components';
import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  padding: 15px;

  width: 100vw;
  height: 10vh;

  color: var(--icons-and-text-color-dark-theme);

  background: var(--primary-color);

  border-radius: 1.5px 1.5px 0 0;

  flex-shrink: 0;

  position: relative;
  top: 87.5vh;
  left: 0;
  right: 0;

  z-index: 2;

  > button {
    font-size: 22px;
    background: none;
    color: var(--header-and-footer-text-color);

    // desktop layout
    @media (min-width: 1000px) {
    }
  }

  @media (width: 411px) {
    top: 85.5vh;
  }

  @media (width: 375px) {
    top: 85.7vh;
  }

  @media (width: 360px) {
    top: 86.5vh;
  }

  @media (width: 320px) {
    top: 654px;
  }

  @media (max-width: 319px) {
    top: 100vh;
  }

  @media (max-width: 280px) {
    top: 98.5vh;
  }

  // desktop layout
  @media (min-width: 1000px) {
    top: 88vh;

    overflow: hidden;

    max-width: 100vw;

    position: relative;
    left: 0;
    right: 0;
  }

  @media (min-width: 1100px) {
    top: 86vh;
  }
`;

export const LineSeparator = styled(LineSeparatorIcon)`
  height: 7vh;

  // desktop layout
  @media (min-width: 1000px) {
  }
`;
