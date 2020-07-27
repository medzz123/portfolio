import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 48px);
  background-color: ${(p) => p.theme.beige};
  position: relative;

  display: flex;
  padding-top: 22vh;

  padding-bottom: 70px;

  align-items: flex-start;

  flex: 1;
  background-color: ${(p) => p.theme.beige};

  @media screen and (max-width: 479px) {
    padding-top: 120px;
  }
`;

export const HeadlineWrapper = styled.div``;

export const HeroParagraph = styled.div`
  max-width: 496px;

  p {
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 32px;
  }
`;

export const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 20px;
`;
