import HeaderBar from '../src/components/HeaderBar';
import FooterBar from '../src/components/FooterBar';
import GlobalStyles from '../src/styles/GlobalStyles';

import {
  Container,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  TextContainer,
  WaveBackground,
  HappyIcon,
  LocationIcon,
  GitHubIcon,
  InfoIcon,
} from './styles';

const IndexPage: React.FC = () => (
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

        <InfoIcon />
        <p>Navigate to the contact page for more information</p>
      </TextContainer>

      <WaveBackground />
    </Container>

    <FooterBar />
    <GlobalStyles />
  </>
);

export default IndexPage;
