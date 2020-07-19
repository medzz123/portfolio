import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 40px;

  transition: all 250ms ease;

  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.09);

  padding: 20px;

  border-radius: 5px;
`;

export const Arrow = styled.div`
  border-style: solid;
  border-width: 0 3px 3px 0;
  border-color: '#5393fe';

  display: inline-block;
  padding: 3px;

  margin-left: 12px;

  transform: rotate(-45deg);

  transition: all 250ms ease;

  &:hover {
    transform: translateX(12px);
  }
`;
