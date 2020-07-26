import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 0;
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
