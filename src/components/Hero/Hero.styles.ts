import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 64px;

  @media (max-width: 520px) {
    font-size: 34px;
  }
`;

export const SubText = styled.span`
  font-size: 22px;
  line-height: 2;
`;
