import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 8px;
  width: 100vw;
  overflow: hidden;
`;

const Progress = styled.div<{ progress: number }>`
  height: 100%;
  width: 100%;
  background-color: ${(p) => p.theme.highlighter};

  transition: all 250ms ease;

  transform: translateX(calc(-100% + ${(p) => p.progress}%));
`;

function scrollPosition() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  return scrolled;
}

const ProgressBar = () => {
  const [position, setPosition] = React.useState(0);

  if (typeof window !== `undefined`) {
    window.onscroll = () => {
      setPosition(scrollPosition);
    };
  }

  return (
    <Wrapper>
      <Progress progress={position} />
    </Wrapper>
  );
};

export default ProgressBar;
