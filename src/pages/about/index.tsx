import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

import FooterBar from '../../components/FooterBar';
import HeaderBar, { ThemeProps } from '../../components/HeaderBar';
import GlobalStyles from '../../styles/GlobalStyles';

import {
  Container,
  DescriptionProfile,
  FromContent,
  HobbiesContainer,
  ImageProfile,
  ImagesContainer,
  ProfileContainer,
  ProgrammingJourneyContainer,
  TextContainer,
} from '../../styles/pages/AboutPage';

const AboutPage: React.FC<ThemeProps> = ({ toggleTheme }) => {
  const [showContentFrom, setShowContentFrom] = useState(false);
  const [showHobbiesContent, setShowHobbiesContent] = useState(false);
  const [showPJContent, setShowPJContent] = useState(false);

  function handleShowHideFromContent() {
    setShowContentFrom(!showContentFrom);
  }

  function handleShowHideHobbiesContent() {
    setShowHobbiesContent(!showHobbiesContent);
  }
  function handleShowHidePJContent() {
    setShowPJContent(!showPJContent);
  }

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
          <FromContent>
            <button
              type="button"
              onClick={handleShowHideFromContent}
              aria-label="ImFromButton"
            >
              <h2>🏠 Where I'm from</h2>
            </button>

            {showContentFrom && (
              <>
                <p>
                  I'm from Brazil, I was born in{' '}
                  <Link
                    href="https://www.google.com/maps/place/Guarabira+PB/@-6.8640922,-35.5155381"
                    aria-label="Go to GMaps Guarabira Geolocation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Guarabira
                  </Link>
                  , and have been living in{' '}
                  <Link
                    href="https://www.google.com/maps/place/Bananeiras+PB/@-6.7533036,-35.6344225,17"
                    aria-label="Go to GMaps Bananeiras Geolocation"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bananeiras
                  </Link>
                  , to this day.
                  <ImagesContainer>
                    <img src="/images/guarabira.jpg" alt="Guarabira Image" />
                    <img src="/images/bananeiras.jpg" alt="Bananeiras Image" />
                  </ImagesContainer>
                </p>
              </>
            )}
          </FromContent>

          <HobbiesContainer>
            <button
              type="button"
              onClick={handleShowHideHobbiesContent}
              aria-label="HobbiesButton"
            >
              <h2>💆‍♂️ Hobbies</h2>
            </button>

            {showHobbiesContent && (
              <>
                <p>
                  Since Childhood I've always been attentive and connected with
                  computer and technology, mostly playing, but just by fact it's
                  on the pc this was already good for me. I started using and
                  tinkering in computer by the range of my 8 years and to this
                  day I have not stopped, every day I fall in love again by
                  technology. <br />I also love to play, short of the most
                  varied types, but mainly fps is what attracts me the most, who
                  we did not exchange some shots in CSGO? 😉
                </p>
              </>
            )}
          </HobbiesContainer>
          <ProgrammingJourneyContainer>
            <button
              type="button"
              onClick={handleShowHidePJContent}
              aria-label="ProgrammingJourneyButton"
            >
              <h2>💻 Programming Journey</h2>
            </button>

            {showPJContent && (
              <>
                <p>
                  My journey with programming started in a technical course that
                  showed me a little about web, after that I got into university
                  with a bachelor's degree in Information Systems and that's
                  when I decided what I wanted to be. <br />
                  Since I started programming, and to this day, I want to learn
                  every day, to realize my dreams and help the community and
                  society.
                </p>
              </>
            )}
          </ProgrammingJourneyContainer>
        </TextContainer>
      </Container>

      <FooterBar />

      <GlobalStyles />
    </>
  );
};

export default AboutPage;
