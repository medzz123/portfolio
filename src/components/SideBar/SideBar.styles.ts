import styled from 'styled-components';

export const Positioner = styled.div`
  position: fixed;
  bottom: 0;
  left: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  @media (max-width: 768px) {
    opacity: 0;
  }
`;

export const Line = styled.div`
  width: 3px;
  height: 95px;
  background-color: ${(p) => p.theme.primary.main};
`;

export const Social = styled.a`
  margin-bottom: 24px;
  color: black;
  transition: all 200ms ease;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.primary.main};
    transform: translateY(-3px) scale(1.05);
  }
`;
