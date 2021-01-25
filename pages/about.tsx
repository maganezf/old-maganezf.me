import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <>
      <h1>Hello 👋, Welcome to About Page</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </>
  );
};

export default AboutPage;
