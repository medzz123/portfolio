import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 48px);
  background-color: ${(p) => p.theme.beige};
  position: relative;

  display: flex;
  padding: 22vh 60px 70px;

  align-items: flex-start;

  flex: 1;
  background-color: #f9efe7;

  @media screen and (max-width: 479px) {
    padding-top: 120px;
    padding-right: 20px;
    padding-left: 20px;
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
