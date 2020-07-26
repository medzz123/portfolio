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

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  li {
    padding: 15px 25px;
    margin-right: 15px;
    margin-top: 15px;
    background-color: ${(p) => p.theme.beige};
    font-weight: bold;
  }
`;
