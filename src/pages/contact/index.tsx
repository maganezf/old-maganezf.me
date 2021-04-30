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
  IconsContainer,
  EmailIcon,
  LinkedInIcon,
  GitHubIcon,
  TwitterIcon,
  InstagramIcon,
} from '../../styles/pages/ContactPage';

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
            <h1>Frontend Software Developer (Web and Mobile)</h1>
          </DescriptionProfile>
        </ProfileContainer>

        <FollowingMeOn>
          <p>{`<Keep connected with my work by following me on />`}</p>
        </FollowingMeOn>

        <IconsContainer>
          <Link
            href="mailto:maganezfilho@gmail.com"
            aria-label="Go to Send Mail"
          >
            <a target="_blank" rel="noopener noreferrer" aria-label="EmailIcon">
              <EmailIcon />
            </a>
          </Link>

          <Link
            href="https://www.linkedin.com/in/maganezf/"
            aria-label="Go to LinkedIn Profile Page"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedInIcon"
            >
              <LinkedInIcon />
            </a>
          </Link>

          <Link
            href="https://github.com/maganezf"
            aria-label="Go to GitHub Profile Page"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHubIcon"
            >
              <GitHubIcon />
            </a>
          </Link>

          <Link
            href="https://twitter.com/maganezz"
            aria-label="Go to Twitter Profile Page"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TwitterIcon"
            >
              <TwitterIcon />
            </a>
          </Link>

          <Link
            href="https://www.instagram.com/maganezf/"
            aria-label="Go to Instagram Profile Page"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="InstagramIcon"
            >
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
      </Container>
      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ContactPage;
