import Link from 'next/link';
import Head from 'next/head';

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
  AboutMeIcon,
} from './styles';

const IndexPage: React.FC = () => (
  <>
    <HeaderBar />

    <Head>
      <title>Home | maganezf</title>
    </Head>

    <Container>
      <ProfileContainer>
        <ImageProfile>
          <img
            src="/static/profile_image.png"
            loading="lazy"
            alt="Profile Image"
          />
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

        <Link href="/about">
          <AboutMeIcon />
        </Link>
        <p>
          Click on the icon for more information about me, or navigate to the
          about page
        </p>
      </TextContainer>

      <WaveBackground />
    </Container>

    <FooterBar />
    <GlobalStyles />
  </>
);

export default IndexPage;
