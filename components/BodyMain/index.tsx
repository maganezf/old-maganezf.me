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
} from './styles';

const BodyMain: React.FC = () => {
  return (
    <>
      <Container>
        <ProfileContainer>
          <ProfileAndBio />
        </ProfileContainer>

        <TextContainer>
          <span>
            <HappyIcon />
            <p>Hello! I’m Maganez, and I have love for Develop Systems</p>
          </span>

          <span>
            <LocationIcon />
            <p>Bananeiras, Brazil</p>
          </span>

          <span>
            <GitHubIcon />
            <p>github.com/maganezf</p>
          </span>

          <span>
            <MessageIcon />
            <p>For more information about me, navigate to the contact page</p>
          </span>
        </TextContainer>
        <WaveBackground />
      </Container>
    </>
  );
};

export default BodyMain;
