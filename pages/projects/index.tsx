import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';

import {
  Container,
  ExperienceContainer,
  ProjectsContainer,
  WaveBackground,
} from './styles';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projects | Maganez</title>
      </Head>

      <HeaderBar />

      <Container>
        <ExperienceContainer>
          <h3>Experiência:</h3>

          <li>Graduação: Graduando em Sistemas de Informação, UFPB</li>
          <li>Estudando atualmente em: React, NextJS, Typescript, HTML, CSS</li>
        </ExperienceContainer>

        <ProjectsContainer>
          <h3>Projetos:</h3>

          <li>
            Para mais projetos fora este meu site atual hospedado atualmente,
            visite meu github para mais projetos realizados em estudos
          </li>
        </ProjectsContainer>

        <WaveBackground />
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ProjectsPage;
