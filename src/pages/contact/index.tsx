import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../components/HeaderBar';
import FooterBar from '../../components/FooterBar';
import GlobalStyles from '../../styles/GlobalStyles';
import { ThemeProps } from '../../components/HeaderBar';

import {
  Container,
  SendEmailContainer,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  FollowingMeOn,
  WaveBackground,
  IconsContainer,
  EmailIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from './styles';

const ContactPage: React.FC<ThemeProps> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Contact | Maganez</title>
      </Head>

      <HeaderBar toggleTheme={toggleTheme} />

      <Container>
        <ProfileContainer>
          <ImageProfile>
            <img
              src="https://github.com/maganezf.png"
              loading="lazy"
              alt="Profile Image"
            />
          </ImageProfile>

          <DescriptionProfile>
            <h1>System Developer, with focus on FrontEnd</h1>
          </DescriptionProfile>
        </ProfileContainer>

        <FollowingMeOn>
          <p>{`<Keep connected with my work by following me on />`}</p>
        </FollowingMeOn>

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

        <SendEmailContainer>
          <p>
            To have a closer contact with me, follow me and/or send me messages
            via Emails, GitHub, LinkedIn, Twitter or Instagram
          </p>
        </SendEmailContainer>

        <WaveBackground />
      </Container>
      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ContactPage;
