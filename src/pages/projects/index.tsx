import Link from 'next/link';
import Head from 'next/head';

import HeaderBar from '../../components/HeaderBar';
import FooterBar from '../../components/FooterBar';
import GlobalStyles from '../../styles/GlobalStyles';
import { ThemeProps } from '../../components/HeaderBar';

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
  NodeJsIcon,
  GitIcon,
  GitHubIcon,
  MongoDBIcon,
  SqliteIcon,
  FirstProjectsContainer,
  SecondProjectsContainer,
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
            <Link href="https://reactjs.org/" aria-label="Go to ReactJS Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ReactJsPage"
              >
                <ReactJsIcon />
              </a>
            </Link>

            <Link href="https://nextjs.org/" aria-label="Go to NextJS Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NextJsPage"
              >
                <NextJsIcon />
              </a>
            </Link>

            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              aria-label="Go to MDN-HTML Page"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MdnHtmlPage"
              >
                <HtmlIcon />
              </a>
            </Link>

            <Link
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              aria-label="Go to MDN-CSS Page"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MdnCssPage"
              >
                <CssIcon />
              </a>
            </Link>

            <Link href="https://sass-lang.com/" aria-label="Go to Sass Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SassPage"
              >
                <SassIcon />
              </a>
            </Link>

            <Link href="https://jquery.com/" aria-label="Go to JQuery Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="JQueryPage"
              >
                <JQueryIcon />
              </a>
            </Link>

            <Link
              href="https://tailwindcss.com/"
              aria-label="Go to TailwindCSS Page"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TailwindCssPage"
              >
                <TailwindCssIcon />
              </a>
            </Link>

            <Link
              href="https://getbootstrap.com/"
              aria-label="Go to Bootstrap Page"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BootstrapPage"
              >
                <BootstrapIcon />
              </a>
            </Link>

            <Link
              href="https://www.javascript.com/"
              aria-label="Go to Javascript Page"
            >
              <a target="_blank" rel="noopener noreferrer" aria-label="JsPage">
                <JsIcon />
              </a>
            </Link>

            <Link
              href="https://www.typescriptlang.org/"
              aria-label="Go to Typescript Page"
            >
              <a target="_blank" rel="noopener noreferrer" aria-label="TsPage">
                <TsIcon />
              </a>
            </Link>

            <Link href="https://nodejs.org/" aria-label="Go to NodeJS Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="NodeJsPage"
              >
                <NodeJsIcon />
              </a>
            </Link>

            <Link href="https://git-scm.com/" aria-label="Go to Git Page">
              <a target="_blank" rel="noopener noreferrer" aria-label="GitPage">
                <GitIcon />
              </a>
            </Link>

            <Link href="https://github.com/" aria-label="Go to GitHub Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHubPage"
              >
                <GitHubIcon />
              </a>
            </Link>

            <Link href="https://mongodb.com/" aria-label="Go to MongoDB Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MongoDBPage"
              >
                <MongoDBIcon />
              </a>
            </Link>

            <Link href="https://www.sqlite.org/" aria-label="Go to SQLite Page">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SQLitePage"
              >
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
