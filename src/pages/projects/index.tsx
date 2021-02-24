import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../components/HeaderBar';
import FooterBar from '../../components/FooterBar';
import GlobalStyles from '../../styles/GlobalStyles';
import { Props } from '../../components/HeaderBar';

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
  JQueryIcon,
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
          <h3>Career/Experience:</h3>

          <li>
            Currently studying undergraduate at UFPB in Information Systems
          </li>

          <li>
            Currently focusing on Front-end technologies (ReactJS, NextJS,
            UI/UX, Motion Design, Javascript, Typescript, CSS, SASS, Styled
            Components, TailwindCSS, JQuery, GSAP Library e Bootstrap).{' '}
          </li>
        </ExperienceContainer>

        <TitleTechsIcons>
          <h3>I have experience with such technologies:</h3>

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

            <Link href="https://jquery.com/">
              <a target="_blank" rel="noopener noreferrer">
                <JQueryIcon />
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
          <p>
            Go to bed smarter than when you woke up. <br />— Charlie Munger
          </p>
        </FirstProjectsContainer>

        <SecondProjectsContainer>
          <h3>Others Projects:</h3>
          <li>
            For more projects,
            {''}{' '}
            <a
              href="https://github.com/maganezf"
              target="_blank"
              rel="noopener noreferrer"
            >
              visit my github
            </a>{' '}
            - projects made in studies
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
