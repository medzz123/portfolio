import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 80px;

  transition: all 250ms ease;

  box-shadow: 0 0 0 8px ${(p) => p.theme.black};

  padding: 20px 20px 40px 20px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(p) => p.theme.gray};
  }
`;
