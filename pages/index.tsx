import Link from 'next/link';

import HeaderBar from '../src/components/HeaderBar';
import FooterBar from '../src/components/FooterBar';
import GlobalStyles from '../src/styles/GlobalStyles';

// import WaveBackgroundImage from '../src/components/WaveBackgroundImage';

import {
  Container,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  TextContainer,
  WaveBackgroundDesktop,
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
          <h2>System Developer, with focus on FrontEnd</h2>
        </DescriptionProfile>
      </ProfileContainer>
      <TextContainer>
        <HappyIcon />
        <p>Hello! I’m Maganez, and I have love for Develop Systems</p>

        <LocationIcon />
        <p>Bananeiras, Paraíba, Brazil</p>

        <Link href="https://github.com/maganezf">
          <GitHubIcon />
        </Link>
        <p>maganezf</p>

        <InfoIcon />
        <p>Navigate to the contact page for more information</p>
      </TextContainer>

      <WaveBackgroundDesktop />
    </Container>

    <FooterBar />
    <GlobalStyles />
  </>
);

export default IndexPage;
