import Head from 'next/head';
import Link from 'next/link';

import FooterBar from '../../components/FooterBar';
import HeaderBar, { ThemeProps } from '../../components/HeaderBar';
import GlobalStyles from '../../styles/GlobalStyles';

import {
  Container,
  DescriptionProfile,
  EmailIcon,
  FollowingMeOn,
  GitHubIcon,
  IconsContainer,
  ImageProfile,
  InstagramIcon,
  LinkedInIcon,
  ProfileContainer,
  SendEmailContainer,
  TwitterIcon,
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
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:maganezfilho@gmail.com"
            aria-label="Go to Send Mail"
          >
            <EmailIcon />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/maganezf/"
            aria-label="Go to LinkedIn Profile Page"
          >
            <LinkedInIcon />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/maganezf"
            aria-label="Go to GitHub Profile Page"
          >
            <GitHubIcon />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/maganezz"
            aria-label="Go to Twitter Profile Page"
          >
            <TwitterIcon />
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/maganezf/"
            aria-label="Go to Instagram Profile Page"
          >
            <InstagramIcon />
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
