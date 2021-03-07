import styled from 'styled-components';
import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  animation: loadAnimation;
  animation-timing-function: ease;
  animation-duration: 250ms;

  padding: 15px 0;

  width: 100vw;
  height: 10vh;

  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.iconsTextColor};

  border-radius: 2.5px 2.5px 0 0;

  flex-shrink: 0;

  position: relative;
  top: 87.5vh;
  left: 0;
  right: 0;

  z-index: 2;

  > button {
    font-size: 23px;
    color: ${(props) => props.theme.headerFooterColor};

    transition: 0.3s;

    &:hover,
    &:active,
    &:focus {
      opacity: 0.5;
      color: ${(props) => props.theme.tertiaryColor};
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

  @media (max-width: 375px) and (max-height: 670px) {
    top: 690px;
  }

  @media (max-width: 320px) and (max-height: 570px) {
    top: 710px;
  }

  @media (max-width: 320px) and (max-height: 480px) {
    top: 700px;
  }

  // desktop layout
  @media (min-width: 1100px) {
    top: 86vh;
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
