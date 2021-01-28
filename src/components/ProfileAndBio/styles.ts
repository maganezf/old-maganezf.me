import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100vw;

  padding: 0 15px;

  margin-bottom: 60px;

  z-index: 2;

  flex-shrink: 0;

  // desktop layout
  @media (min-with: 100px) {
  }
`;

export const ImageProfile = styled.div`
  > img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 2.5px solid var(--border-profile-color);

    margin-right: 30px;

    @media (max-width: 280px) {
      margin-right: 15px;
    }

    // desktop layout
    @media (min-with: 100px) {
    }
  }
`;

export const DescriptionProfile = styled.div`
  > p {
    display: flex;

    /* font-family: Ubuntu;
    font-weight: 400; */

    justify-content: center;
    align-items: center;

    color: var(--icons-and-text-color-dark-theme);
    font-size: 22px;

    flex-shrink: 0;

    // desktop layout
    @media (min-with: 100px) {
    }
  }
`;
