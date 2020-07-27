import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 60px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  margin-bottom: 60px;
  padding-right: 40px;
`;

export const ImageWrapper = styled.div``;

export const RightColumn = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;
