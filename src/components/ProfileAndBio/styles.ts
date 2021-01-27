import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100vw;

  padding: 0 15px;

  margin-bottom: 60px;

  z-index: 2;
`;

export const ImageProfile = styled.div`
  > img {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 2.5px solid var(--border-profile-color);

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
