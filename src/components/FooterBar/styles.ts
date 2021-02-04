import styled from 'styled-components';
import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  padding: 15px 0px 15px 0px;

  width: 100vw;
  height: 10vh;

  color: var(--icons-and-text-color-dark-theme);

  background: var(--primary-color);

  border-radius: 2px 2px 0 0;

  flex-shrink: 0;

  position: relative;
  top: 87.5vh;
  left: 0;
  right: 0;

  z-index: 2;

  > button {
    font-size: 23px;
    background: none;
    color: var(--header-and-footer-text-color);

    transition: 0.3s;

    &:hover,
    &:active {
      opacity: 0.5;
      color: var(--tertiary-color);
    }

    // desktop layout
    @media (min-width: 1025px) {
      font-size: 25px;

      padding: 15px 50px 15px 50px;
    }

    @media (min-width: 760px) and (max-width: 1024px) {
      font-size: 35px;
      padding: 15px 50px 15px 50px;
    }
  }

  @media (max-width: 415px) {
    top: 88.9vh;
  }

  @media (min-width: 380px) and (max-width: 412px) {
    height: 11vh;
  }

  @media (max-width: 320px) {
    top: 41.37rem;
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

  transition: 0.3s;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  // desktop layout
  @media (min-width: 1000px) {
  }
`;
