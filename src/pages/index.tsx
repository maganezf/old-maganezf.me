import Head from 'next/head';
import Link from 'next/link';

import FooterBar from '../components/FooterBar';
import HeaderBar, { ThemeProps } from '../components/HeaderBar';
import GlobalStyles from '../styles/GlobalStyles';

import {
  AboutMeIcon,
  Container,
  DescriptionProfile,
  GitHubIcon,
  HappyIcon,
  ImageProfile,
  LocationIcon,
  ProfileContainer,
  TextContainer,
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
            <h1>Frontend Software Developer (Web and Mobile)</h1>
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
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/maganezf"
            aria-label="Go to GitHub Profile Page"
          >
            <GitHubIcon />
          </Link>
          <p>maganezf</p>

          <Link href="/about" aria-label="Go to About Page">
            <AboutMeIcon />
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
