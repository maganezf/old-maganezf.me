import styled from 'styled-components';

export const Container = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 15px;

  background: var(--primary-color);
  color: var(--icons-and-text-color-dark-theme);

  width: 100vw;
  height: 100px;

  padding: 10px 10px 50px 10px;

  z-index: 2;

  > svg {
    width: 40px;
    height: 30px;

    // desktop layout
    @media (min-width: 100px) {
      width: 50px;
      height: 40px;
    }
  }

  > h2 {
    font-size: 25px;

    cursor: pointer;

    // desktop layout
    @media (min-width: 1000px) {
    }
  }

  // desktop layout
  @media (min-width: 1000px) {
    overflow: hidden;

    max-width: 100vw;
  }
`;
