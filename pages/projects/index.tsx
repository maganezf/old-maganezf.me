import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../src/components/HeaderBar';
import FooterBar from '../../src/components/FooterBar';
import GlobalStyles from '../../src/styles/GlobalStyles';
import { Props } from '../../src/components/HeaderBar';

import {
  Container,
  ExperienceContainer,
  TitleTechsIcons,
  TechsIcons,
  ReactJsIcon,
  NextJsIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  TailwindCssIcon,
  BootstrapIcon,
  JsIcon,
  TsIcon,
  GitIcon,
  GitHubIcon,
  MongoDBIcon,
  SqliteIcon,
  FirstProjectsContainer,
  SecondProjectsContainer,
  WaveBackground,
} from './styles';

const ProjectsPage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Head>
        <title>Projects | Maganez</title>
      </Head>

      <HeaderBar toggleTheme={toggleTheme} />

      <Container>
        <ExperienceContainer>
          <h3>Experiência:</h3>

          <li>
            Formação: Atualmente graduando em bacharelado em Sistemas de
            Informação, pela UFPB
          </li>
          <li>
            Atualmente com foco em tecnologias Front-end (ReactJS, NextJS,
            UI/UX, Motion Design, Javascript, Typescript, CSS, Sass, Styled
            Components, TailwindCSS, JQuery, GSAP Library e Bootstrap).{' '}
          </li>
        </ExperienceContainer>

        <TitleTechsIcons>
          <h3>Tenho experiência com tais tecnologias:</h3>

          <TechsIcons>
            <Link href="https://reactjs.org/">
              <a target="_blank" rel="noopener noreferrer">
                <ReactJsIcon />
              </a>
            </Link>

            <Link href="https://nextjs.org/">
              <a target="_blank" rel="noopener noreferrer">
                <NextJsIcon />
              </a>
            </Link>

            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <a target="_blank" rel="noopener noreferrer">
                <HtmlIcon />
              </a>
            </Link>

            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
              <a target="_blank" rel="noopener noreferrer">
                <CssIcon />
              </a>
            </Link>

            <Link href="https://sass-lang.com/">
              <a target="_blank" rel="noopener noreferrer">
                <SassIcon />
              </a>
            </Link>

            <Link href="https://tailwindcss.com/">
              <a target="_blank" rel="noopener noreferrer">
                <TailwindCssIcon />
              </a>
            </Link>

            <Link href="https://getbootstrap.com/">
              <a target="_blank" rel="noopener noreferrer">
                <BootstrapIcon />
              </a>
            </Link>

            <Link href="https://www.javascript.com/">
              <a target="_blank" rel="noopener noreferrer">
                <JsIcon />
              </a>
            </Link>

            <Link href="https://www.typescriptlang.org/">
              <a target="_blank" rel="noopener noreferrer">
                <TsIcon />
              </a>
            </Link>

            <Link href="https://git-scm.com/">
              <a target="_blank" rel="noopener noreferrer">
                <GitIcon />
              </a>
            </Link>

            <Link href="https://github.com/">
              <a target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </Link>

            <Link href="https://mongodb.com/">
              <a target="_blank" rel="noopener noreferrer">
                <MongoDBIcon />
              </a>
            </Link>

            <Link href="https://www.sqlite.org/">
              <a target="_blank" rel="noopener noreferrer">
                <SqliteIcon />
              </a>
            </Link>
          </TechsIcons>
        </TitleTechsIcons>

        <FirstProjectsContainer>
          <h3>Some others projects:</h3>
        </FirstProjectsContainer>

        <SecondProjectsContainer>
          <h3>Projetos:</h3>
          <li>
            Para mais projetos,
            {''}{' '}
            <a
              href="https://github.com/maganezf"
              target="_blank"
              rel="noopener noreferrer"
            >
              visite meu github
            </a>{' '}
            para mais projetos realizados em estudos
          </li>
        </SecondProjectsContainer>

        <WaveBackground />
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ProjectsPage;
