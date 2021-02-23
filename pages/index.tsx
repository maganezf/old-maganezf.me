import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../src/components/HeaderBar';
import FooterBar from '../src/components/FooterBar';
import GlobalStyles from '../src/styles/GlobalStyles';
import { Props } from '../src/components/HeaderBar';

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

const IndexPage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <HeaderBar toggleTheme={toggleTheme} />

      <Container>
        <ProfileContainer>
          <ImageProfile>
            <img
              src="https://github.com/maganezf.png"
              loading="lazy"
              title="Profile Image"
              alt="Profile Image"
            />
          </ImageProfile>

          <DescriptionProfile>
            <h1>System Developer, with focus on FrontEnd</h1>
          </DescriptionProfile>
        </ProfileContainer>
        <TextContainer>
          <HappyIcon />
          <p className="hello">
            I’m Maganez, and I have love for Develop Systems
          </p>

          <LocationIcon />
          <p>Bananeiras-PB, Brazil</p>

          <Link href="https://github.com/maganezf">
            <a target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
            </a>
          </Link>
          <p>maganezf</p>

          <Link href="/about">
            <a>
              <AboutMeIcon />
            </a>
          </Link>
          <p>For more information about me, click the icon next to</p>
        </TextContainer>

        <WaveBackground />
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default IndexPage;
