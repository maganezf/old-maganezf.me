import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';

import { Container, TextContainer, WaveBackground } from './styles';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact | Maganez </title>
      </Head>

      <HeaderBar />

      <Container>
        {/* <TextContainer>
          <p>Contact Page - 1</p>

          <p>Contact Page - 2</p>
        </TextContainer> */}
        <WaveBackground />
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ContactPage;
