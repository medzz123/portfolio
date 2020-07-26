import styled from 'styled-components';

export const Wrapper = styled.footer`
  margin-right: 24px;
  margin-left: 24px;
  margin-bottom: 24px;
  padding: 50px 60px 24px;
  background-color: #f9efe7;

  @media screen and (max-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  flex: 1;
`;

export const TopCopyContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 260px;
`;

export const SideCopy = styled.div`
  max-width: 544px;
`;
