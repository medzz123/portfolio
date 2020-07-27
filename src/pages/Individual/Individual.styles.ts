import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 48px);
  padding-top: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${(p) => p.theme.beige} calc(100vh - 48px),
    transparent 10%,
    transparent 40%
  );

  h1 {
    text-align: center;
  }
`;

export const Align = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
