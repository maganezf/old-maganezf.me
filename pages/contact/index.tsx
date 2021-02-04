import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';

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

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | Maganez </title>
      </Head>

      <HeaderBar />

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

        <label>{`<Keep connected with my work by following me on />`}</label>

        <IconsContainer>
          <Link href="mailto:maganezfilho@gmail.com">
            <EmailIcon />
          </Link>

          <Link href="https://www.linkedin.com/in/maganez-filho-b5813b188/">
            <LinkedInIcon />
          </Link>

          <Link href="https://twitter.com/maganez_">
            <TwitterIcon />
          </Link>

          <Link href="https://www.instagram.com/maganezf/">
            <InstagramIcon />
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
