import styled from 'styled-components';

export const Container = styled.div`
  .wave-background {
    /* height: 100vh; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
  }

  /* .wave-background-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 40px;
  } */

  @media (min-width: 1000px) {
    .wave-background {
      background-position: center center;
    }

    /* .wave-background-content {
      align-items: flex-end;
      justify-content: center;
    } */
  }
`;
