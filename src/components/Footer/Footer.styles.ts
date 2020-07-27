import styled from 'styled-components';

export const Wrapper = styled.footer`
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
  padding-top: 50px;
  padding-bottom: 24px;
  background-color: ${(p) => p.theme.beige};
`;

export const TopCopyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  flex-wrap: wrap;

  margin-bottom: 130px;
`;

export const TitleWrapper = styled.div`
  min-width: 50%;
`;

export const SideCopy = styled.div`
  min-width: 50%;
  max-width: 544px;
  padding-top: 20px;
`;

export const SocialList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;

  li {
    padding: 0;
    margin-right: 15px;
    font-weight: bold;
  }
`;
