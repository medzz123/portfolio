import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.nav`
  padding: 24px 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 24px 24px;
  }
`;

export const MenuLink = styled.a<{ active: boolean }>`
  color: ${(p) => p.theme.text.primary};
  font-size: 8vw;
  font-weight: bold;
  margin-top: 50px;
  transition: all 100ms ease;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.secondary.main};
    letter-spacing: 1px;
  }

  ${(p) =>
    p.active &&
    css`
      color: ${p.theme.primary.main};
      font-weight: 700;
    `}
`;

export const Menu = styled.div<{ open: boolean }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: -100vw;
  background-color: ${(p) => p.theme.background.default};
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  transition: all 200ms ease;

  ${(p) =>
    p.open &&
    css`
      transform: translateX(100vw);
      opacity: 1;
    `};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  border: none;
  background-color: transparent;
  z-index: 8;
  cursor: pointer;
  width: 50px;
  height: 50px;
  @media (max-width: 768px) {
    display: flex;
    pointer-events: initial;
  }
`;

export const Logo = styled.img.attrs({
  src: 'logo.png',
})`
  height: 40px;
  cursor: pointer;
`;

export const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  @media (max-width: 768px) {
    display: none;
    pointer-events: none;
  }
`;

export const Item = styled.li<{ active: boolean }>`
  color: ${(p) => p.theme.text.primary};
  font-weight: bold;
  padding: 16px 24px;
  transition: all 100ms ease;
  &:hover {
    color: ${(p) => p.theme.secondary.main};
    transform: scale(1.2);
  }
  ${(p) =>
    p.active &&
    css`
      color: ${p.theme.primary.main};
      font-weight: 700;
    `}
`;
