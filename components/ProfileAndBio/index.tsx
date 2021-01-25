import React from 'react';

import { Container, ImageProfile, DescriptionProfile } from './styles';

const ProfileAndBio: React.FC = (props) => {
  return (
    <Container>
      <ImageProfile>
        <img src="/static/profile_image.png" alt="Profile Image" {...props} />
      </ImageProfile>

      <DescriptionProfile>
        <p>System Developer, with focus on FrontEnd</p>
      </DescriptionProfile>
    </Container>
  );
};

export default ProfileAndBio;
