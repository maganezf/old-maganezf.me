import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 500px) {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 100vw;

    padding: 0 15px;

    z-index: 2;

    @media (max-width: 325px) {
      margin-top: 150px;
    }
  }
`;

export const ImageProfile = styled.div`
  > img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 0.05px solid var(--primary-color);

    margin-right: 30px;
  }
`;

export const DescriptionProfile = styled.div`
  > p {
    display: flex;

    justify-content: center;
    align-items: center;

    color: var(--icons-and-text-color-dark-theme);
    font-size: 22px;

    flex-shrink: 0;
  }
`;
