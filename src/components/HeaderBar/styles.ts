import styled from 'styled-components';
import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  padding: 10px 20px 50px 20px;

  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.iconsTextColor};

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

  // desktop layout
  @media (min-width: 1000px) {
    overflow: hidden;

    max-width: 100vw;

    padding: 10px 30px 50px 30px;
  }
`;

export const ChangeThemeButton = styled.button`
  display: flex;
  align-items: center;

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
      width: 38px;
      height: 38px;
    }
  }
`;

export const TitlePages = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  > a {
    color: ${(props) => props.theme.headerFooterColor};
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
    &:active,
    &:focus {
      opacity: 0.5;
      color: ${(props) => props.theme.tertiaryColor};
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
