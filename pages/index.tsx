import HeaderBar from '../src/components/HeaderBar';
import FooterBar from '../src/components/FooterBar';
import GlobalStyles from '../src/styles/GlobalStyles';

import {
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
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

    <Container>
      <ProfileContainer>
        <ImageProfile>
          <img src="/static/profile_image.png" alt="Profile Image" />
        </ImageProfile>

        <DescriptionProfile>
          <p>System Developer, with focus on FrontEnd</p>
        </DescriptionProfile>
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
