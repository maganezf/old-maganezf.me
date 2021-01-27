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

  > svg {
    width: 40px;
    height: 30px;
  }

  > h2 {
    font-size: 25px;
  }
`;
