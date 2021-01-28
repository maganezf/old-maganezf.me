import React from 'react';

import ProfileAndBio from '../ProfileAndBio';

import {
  ProfileContainer,
  Container,
  TextContainer,
  WaveBackground,
  HappyIcon,
  LocationIcon,
  GitHubIcon,
  MessageIcon,
} from '../../../pages/styles';

const BodyMain: React.FC = () => {
  return (
    <>
      <Container>
        <ProfileContainer>
          <ProfileAndBio />
        </ProfileContainer>

        <TextContainer>
          <HappyIcon />
          <p>Hello! I’m Maganez, and I have love for Develop Systems</p>

          <LocationIcon />
          <p>Bananeiras, Brazil</p>

          <GitHubIcon />
          <p>@maganezf</p>

          <MessageIcon />
          <p>Navigate to the contact page for more information</p>
        </TextContainer>
        <WaveBackground />
      </Container>
    </>
  );
};

export default BodyMain;
