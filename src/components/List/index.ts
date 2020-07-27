import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;

  li {
    padding: 5px 15px;
    margin-right: 15px;
    background-color: ${(p) => p.theme.beige};
    font-weight: bold;
    font-size: 13px;
  }
`;

export default List;
