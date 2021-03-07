import Link from 'next/link';

import HeaderBar from '../src/components/HeaderBar';
import FooterBar from '../src/components/FooterBar';
import GlobalStyles from '../src/styles/GlobalStyles';
import { ThemeProps } from '../src/components/HeaderBar';

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
} from './styles';

const IndexPage: React.FC<ThemeProps> = ({ toggleTheme }) => {
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
          <p>For more information about me, click on the icon</p>
        </TextContainer>
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default IndexPage;
