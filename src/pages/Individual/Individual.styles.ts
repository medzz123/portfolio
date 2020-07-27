import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 14vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${(p) => p.theme.beige} 80%,
    transparent 10%,
    transparent 10%
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
