import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';

import { Container, TextContainer, WaveBackground } from './styles';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects | Maganez</title>
      </Head>

      <HeaderBar />

      <Container>
        {/* <TextContainer>
          <p>Project Page - 1</p>

          <p>Project Page - 2</p>
        </TextContainer> */}
        <WaveBackground />
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ProjectsPage;
