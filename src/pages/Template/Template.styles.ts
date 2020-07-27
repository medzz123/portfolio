import styled from 'styled-components';

export const Main = styled.main`
  height: calc(50vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.beige};
  margin-bottom: 100px;

  h1 {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`;
