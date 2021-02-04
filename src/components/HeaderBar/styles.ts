import styled from 'styled-components';

import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 10px 20px 50px 20px;

  background: var(--primary-color);
  color: var(--icons-and-text-color-dark-theme);

  width: 100vw;
  height: 100px;

  z-index: 0;

  > svg {
    width: 40px;
    height: 30px;

    transition: 0.3s;

    &:hover,
    &:active {
      opacity: 0.5;
    }

    // desktop layout
    @media (min-width: 1000px) {
      width: 50px;
      height: 40px;
    }
  }

  .a {
    display: flex;

    align-items: center;
    justify-content: center;

    color: var(--header-and-footer-text-color);

    > h2 {
      font-size: 20px;

      &:first-child {
        margin-right: 1.5rem;
      }

      &:last-child {
        margin-left: 1.5rem;
      }

      cursor: pointer;

      transition: 0.3s;

      &:hover,
      &:active {
        opacity: 0.5;
        color: var(--tertiary-color);
      }

      // desktop layout
      @media (min-width: 1000px) {
        font-size: 25px;

        &:first-child {
          margin-right: 1.5rem;
        }

        &:last-child {
          margin-left: 1.5rem;
        }

        cursor: pointer;

        transition: 0.3s;

        &:hover,
        &:active {
          opacity: 0.5;
          color: var(--tertiary-color);
        }
      }

      @media (max-width: 370px) {
        font-size: 16px;

        &:first-child {
          margin-right: 1rem;
        }

        &:last-child {
          margin-left: 1rem;
        }
      }
    }
  }

  // desktop layout
  @media (min-width: 1000px) {
    overflow: hidden;

    max-width: 100vw;

    padding: 10px 30px 50px 30px;
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
  @media (min-width: 1024px) {
    height: 6vh;
  }

  // tablet layout
  @media (min-width: 750px) and (max-width: 1024px) {
    height: 3.5vh;
  }

  @media (max-width: 540px) {
    height: 5vh;
  }

  @media (max-width: 280px) {
    height: 5.5vh;
  }
`;
