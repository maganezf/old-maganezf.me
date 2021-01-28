import HeaderBar from '../src/components/HeaderBar';
import FooterBar from '../src/components/FooterBar';
import BodyMain from '../src/components/BodyMain';
import GlobalStyles from '../src/styles/GlobalStyles';

import ProfileAndBio from '../src/components/ProfileAndBio';

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

const IndexPage = () => (
  <>
    <HeaderBar />
    <BodyMain />

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

    <FooterBar />
    <GlobalStyles />
  </>
);

export default IndexPage;
