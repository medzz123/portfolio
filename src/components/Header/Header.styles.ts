import styled from 'styled-components';

export const Logo = styled.span`
  font-weight: 900;
  font-size: 22px;
`;

export const Menu = styled.button`
  width: 25px;
  height: 21px;
  cursor: pointer;

  border: none;
  box-shadow: none;
  background-color: transparent;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    transition: all 250ms ease;
    height: 3px;
    width: 100%;
    background-color: ${(p) => p.theme.highlighter};
  }

  &:hover {
    div {
      &:nth-child(2) {
        transform: translateX(8px);
      }
    }
  }

  @media screen and (min-width: 596px) {
    display: none;
  }
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
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  align-items: center;

  a {
    font-size: 18px;
    font-weight: bold;
    margin-left: 32px;
  }

  @media screen and (max-width: 596px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;

  font-size: 18px;
  font-weight: bold;
  margin-left: 32px;

  cursor: pointer;

  font-family: 'Mulish', sans-serif;

  background-color: transparent;

  color: ${(p) => p.theme.black};
`;
