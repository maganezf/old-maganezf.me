import Head from 'next/head';
import Link from 'next/link';

import HeaderBar from '../components/HeaderBar';
import FooterBar from '../components/FooterBar';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProps } from '../components/HeaderBar';

import {
  Container,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  TextContainer,
  HappyIcon,
  LocationIcon,
  GitHubIcon,
  AboutMeIcon,
} from '../styles/pages/IndexPage';

type Props = {
  title?: string;
};

const IndexPage: React.FC<ThemeProps> = (
  { toggleTheme },
  { title = 'Home | Maganez' }: Props
) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
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
            <h1>Software Developer, with focus on FrontEnd</h1>
          </DescriptionProfile>
        </ProfileContainer>
        <TextContainer>
          <HappyIcon />
          <p className="hello">
            I’m Maganez, and I have love for Develop Systems
          </p>

          <LocationIcon />
          <p>Bananeiras-PB, Brazil</p>

          <Link
            href="https://github.com/maganezf"
            aria-label="Go to GitHub Profile Page"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHubProfile"
            >
              <GitHubIcon />
            </a>
          </Link>
          <p>maganezf</p>

          <Link href="/about" aria-label="Go to About Page">
            <a aria-label="AboutMePage">
              <AboutMeIcon />
            </a>
          </Link>
          <p>For more information about me, click on the icon</p>
        </TextContainer>
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default IndexPage;
