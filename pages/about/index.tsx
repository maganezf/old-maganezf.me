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
  TextContainer2,
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
              src="https://github.com/maganezf.png"
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
              <h2>🏠 Where I'm from</h2>I was born in{' '}
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

          <section>
            <p>
              <h2>Hobbies 👨‍💻🎮</h2>
              Since Childhood I've always been attentive and connected with
              computer and technology, mostly playing, but just by fact it's on
              the pc this was already good for me. I started using and tinkering
              in computer by the range of my 8 years and to this day I have not
              stopped, every day I fall in love again by technology. <br />I
              also love to play, short of the most varied types, but mainly fps
              is what attracts me the most, who we did not exchange some shots
              in CS? 😉
            </p>
          </section>

          <section>
            <p>
              <h2>Programming Journey 💻</h2>
              My journey with programming started in a technical course that
              showed me a little about web, after that I got into university
              with a bachelor's degree in Information Systems and that's when I
              decided what I wanted to be. <br />
              Since I started programming, and to this day, I want to learn
              every day, to realize my dreams and help the community and
              society.
            </p>
          </section>
          {/* <ImagesContainer>
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipOnmic1_lP3OD_RBMijMXfREYHFiSkPRwxUV0JO=s452-k-no"
              alt="Guarabira Image"
            />

            <img
              src="https://lh5.googleusercontent.com/p/AF1QipPxxs3Jz5I-QKy4lRz878HNLIkyl-0_afMMGGxt=s451-k-no"
              alt="Bananeiras Image"
            />
          </ImagesContainer> */}
        </TextContainer>

        <WaveBackground />
      </Container>

      <FooterBar />

      <GlobalStyles />
    </>
  );
};

export default AboutPage;
