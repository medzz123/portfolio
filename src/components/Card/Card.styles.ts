import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 40px;

  transition: all 250ms ease;

  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.09);

  padding: 20px;

  border-radius: 5px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(p) => p.theme.text.hint};
  }
`;

export const Arrow = styled.div`
  border-style: solid;
  border-width: 0 3px 3px 0;
  border-color: ${(p) => p.theme.primary.main};

  display: inline-block;
  padding: 3px;

  margin-left: 8px;

  transform: rotate(-45deg);

  transition: all 250ms ease;
`;

export const DemoLink = styled.a`
  text-decoration: underline;
`;

export const ReadMore = styled.a`
  color: ${(p) => p.theme.primary.main};
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    color: ${(p) => p.theme.secondary.main};
    ${Arrow} {
      margin-left: 16px;
      border-color: ${(p) => p.theme.secondary.main};
    }
  }
`;

export const Center = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const GithubSpan = styled.span<{ link: boolean }>`
  margin-left: 12px;
  text-decoration: ${(p) => (p.link ? 'underline' : 'none')};
`;
