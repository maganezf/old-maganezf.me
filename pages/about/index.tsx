import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';

import {
  Container,
  ProfileContainer,
  ImageProfile,
  DescriptionProfile,
  TextContainer,
  WaveBackground,
} from './styles';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About | maganezf</title>
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
            <h2>
              Hello World! <br /> I'm Maganez Filho 🙋‍♂️
            </h2>
          </DescriptionProfile>
        </ProfileContainer>

        <TextContainer>
          <section>
            I was born in{' '}
            <Link href="https://www.google.com/maps/place/Guarabira,+State+of+Para%C3%ADba/@-6.8640922,-35.5155381">
              <a target="_blank" rel="noopener noreferrer">
                Guarabira
              </a>
            </Link>{' '}
            - PB, Brazil, and have been living in{' '}
            <Link href="https://www.google.com/maps/place/Bananeiras+-+State+of+Para%C3%ADba/@-6.6960919,-35.6751471">
              <a target="_blank" rel="noopener noreferrer">
                Bananeiras
              </a>
            </Link>{' '}
            - PB, Brazil, to this day.
          </section>

          {/* <img
            src="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/bananeiras-paraiba.jpeg?quality=100&strip=info&w=842"
            alt="Bananeiras PB"
            style={{ width: 300, height: 300 }}
          ></img>

          <img
            src="https://pbs.twimg.com/media/CxPqyTUUcAA2epV.jpg"
            alt="Guarabira PB"
            style={{ width: 300, height: 300 }}
          ></img> */}
        </TextContainer>

        <WaveBackground />
      </Container>

      <FooterBar />

      <GlobalStyles />
    </>
  );
};

export default AboutPage;
