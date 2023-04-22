import Head from 'next/head';
import Link from 'next/link';

import FooterBar from '../../components/FooterBar';
import HeaderBar, { ThemeProps } from '../../components/HeaderBar';
import GlobalStyles from '../../styles/GlobalStyles';

import {
  BootstrapIcon,
  Container,
  CssIcon,
  ExperienceContainer,
  FirstProjectsContainer,
  GitHubIcon,
  GitIcon,
  HtmlIcon,
  JQueryIcon,
  JsIcon,
  MongoDBIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactJsIcon,
  SassIcon,
  SecondProjectsContainer,
  SqliteIcon,
  TailwindCssIcon,
  TechsIcons,
  TitleTechsIcons,
  TsIcon,
} from '../../styles/pages/ProjectsPage';

const ProjectsPage: React.FC<ThemeProps> = ({ toggleTheme }) => {
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
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/"
              aria-label="Go to ReactJS Page"
            >
              <ReactJsIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org/"
              aria-label="Go to NextJS Page"
            >
              <NextJsIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              aria-label="Go to MDN-HTML Page"
            >
              <HtmlIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              aria-label="Go to MDN-CSS Page"
            >
              <CssIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://sass-lang.com/"
              aria-label="Go to Sass Page"
            >
              <SassIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://jquery.com/"
              aria-label="Go to JQuery Page"
            >
              <JQueryIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
              aria-label="Go to TailwindCSS Page"
            >
              <TailwindCssIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://getbootstrap.com/"
              aria-label="Go to Bootstrap Page"
            >
              <BootstrapIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.javascript.com/"
              aria-label="Go to Javascript Page"
            >
              <JsIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.typescriptlang.org/"
              aria-label="Go to Typescript Page"
            >
              <TsIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://nodejs.org/"
              aria-label="Go to NodeJS Page"
            >
              <NodeJsIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://git-scm.com/"
              aria-label="Go to Git Page"
            >
              <GitIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/"
              aria-label="Go to GitHub Page"
            >
              <GitHubIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://mongodb.com/"
              aria-label="Go to MongoDB Page"
            >
              <MongoDBIcon />
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.sqlite.org/"
              aria-label="Go to SQLite Page"
            >
              <SqliteIcon />
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
              href="https://github.com/maganezf/repositories/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHubRepositories"
            >
              visit my github
            </a>{' '}
            - all projects made in studies
          </li>
        </SecondProjectsContainer>
      </Container>

      <FooterBar />
      <GlobalStyles />
    </>
  );
};

export default ProjectsPage;
