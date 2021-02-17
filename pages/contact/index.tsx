import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';
import { Props } from '../../src/components/HeaderBar';

import {
  Container,
  TextContainer,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  WaveBackground,
  IconsContainer,
  EmailIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from './styles';

const ContactPage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Contact | Maganez </title>
      </Head>

      <HeaderBar toggleTheme={toggleTheme} />

      <Container>
        <ProfileContainer>
          <ImageProfile>
            <img
              src="/static/profile_image.png"
              loading="lazy"
              title="Profile Image"
              alt="Profile Image"
            />
          </ImageProfile>

          <DescriptionProfile>
            <h1>System Developer, with focus on FrontEnd</h1>
          </DescriptionProfile>
        </ProfileContainer>

        <label>{`<Keep connected with my work by following me on />`}</label>

        <IconsContainer>
          <Link href="mailto:maganezfilho@gmail.com">
            <a target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </Link>

          <Link href="https://www.linkedin.com/in/maganez-filho-b5813b188/">
            <a target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </Link>

          <Link href="https://twitter.com/maganezz">
            <a target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </Link>

          <Link href="https://www.instagram.com/maganezf/">
            <a target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </Link>
        </IconsContainer>

        <TextContainer>
          <label>
            Contact Page - 1 <br />
            Contact Page - 2 <br />
            Contact Page - 3 <br />
            Contact Page - 4 <br />
            Contact Page - 5 <br />
          </label>
        </TextContainer>

        <WaveBackground />
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ContactPage;
