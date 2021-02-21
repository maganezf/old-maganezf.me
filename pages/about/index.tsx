import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';
import { Props } from '../../src/components/HeaderBar';

import {
  Container,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  TextContainer,
  ImagesContainer,
  WaveBackground,
} from './styles';

const AboutPage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>About | Maganez</title>
      </Head>

      <HeaderBar toggleTheme={toggleTheme} />

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
            <h1>
              Hello World!{' '}
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                width="30px"
              />{' '}
              <br /> I'm Maganez{' '}
              <img
                src="https://media.giphy.com/media/1sMGC0XjA1Hk58wppo/giphy.gif"
                width="30px"
              />
            </h1>
          </DescriptionProfile>
        </ProfileContainer>

        <TextContainer>
          <section>
            <p>
              I was born in{' '}
              <Link href="https://www.google.com/maps/place/Guarabira,+State+of+Para%C3%ADba/@-6.8640922,-35.5155381">
                <a target="_blank" rel="noopener noreferrer">
                  Guarabira
                </a>
              </Link>
              , and have been living in{' '}
              <Link href="https://www.google.com/maps/place/Bananeiras+-+State+of+Para%C3%ADba/@-6.6960919,-35.6751471">
                <a target="_blank" rel="noopener noreferrer">
                  Bananeiras
                </a>
              </Link>
              , to this day.
            </p>
          </section>

          <ImagesContainer>
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipOnmic1_lP3OD_RBMijMXfREYHFiSkPRwxUV0JO=s452-k-no"
              alt="Guarabira Image"
            />

            <img
              src="https://lh5.googleusercontent.com/p/AF1QipPxxs3Jz5I-QKy4lRz878HNLIkyl-0_afMMGGxt=s451-k-no"
              alt="Bananeiras Image"
            />
          </ImagesContainer>
        </TextContainer>

        <WaveBackground />
      </Container>

      <FooterBar />

      <GlobalStyles />
    </>
  );
};

export default AboutPage;
