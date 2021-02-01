import React, { useEffect, useState } from 'react';

import {
  WaveBackgroundImgMobile,
  WaveBackgroundImgDesktop,
} from '../../styles/Icons';

import { Container } from './styles';

const WaveBackgroundImage: React.FC = ({ children }) => {
  const imageUrl =
    useWindowWidth() >= 1000
      ? WaveBackgroundImgDesktop
      : WaveBackgroundImgMobile;

  return (
    <Container>
      <div
        className="wave-background"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {children}
        <p>aaaaaaaaa</p>
      </div>
    </Container>
  );
};

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowWidth;
};

export default WaveBackgroundImage;
