import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const HomePage: React.FC = ({ children }: Props) => {
  return <>{children}</>;
};

export default HomePage;
