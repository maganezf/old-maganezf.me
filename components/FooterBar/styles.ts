import styled from 'styled-components';
import { LineSeparatorIcon } from '../../styles/Icons';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 15px;

  color: var(--icons-and-text-color-dark-theme);

  background: var(--primary-color);

  @media (max-width: 500px) {
    display: flex;

    width: 100vw;
    height: 10vh;

    align-items: center;
    justify-content: space-around;

    border-radius: 10px 10px 0 0;

    flex-shrink: 0;

    position: fixed;
    top: 90.5vh;
    left: 0;
    right: 0;

    z-index: 2;

    > h2 {
      font-size: 22px;
    }
  }
`;

export const LineSeparator = styled(LineSeparatorIcon)`
  height: 7vh;
`;
