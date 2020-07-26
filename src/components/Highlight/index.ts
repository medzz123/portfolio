import styled from 'styled-components';

const LinkHighlight = styled.div`
  box-shadow: inset 0 -10px 0 0 #ffe872;

  transition: all 250ms ease;

  &:hover {
    box-shadow: inset 0 -22px 0 0 #ffe872;
  }
`;

const HighlightBox = styled.span`
  background: linear-gradient(
    0deg,
    #ffe872 40%,
    transparent 10%,
    transparent 40%
  );
  margin-right: 10px;
`;

export { LinkHighlight, HighlightBox };
