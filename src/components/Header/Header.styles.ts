import styled from 'styled-components';

export const Logo = styled.span`
  font-weight: 900;
  font-size: 22px;
`;

export const HeaderWrapper = styled.nav`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  z-index: 100;
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 24px;
  padding-top: 32px;
  padding-right: 60px;
  padding-left: 60px;
  background-color: transparent;

  @media screen and (max-width: 479px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  a {
    font-size: 18px;
    font-weight: bold;
    margin-left: 32px;
  }
`;
