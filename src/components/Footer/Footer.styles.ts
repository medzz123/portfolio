import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 30px 100px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(p) => p.theme.primary.main};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const Copy = styled.p`
  color: ${(p) => p.theme.text.contrast};
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
    flex-direction: column;
  }
`;

export const Rotator = styled.div`
  background-image: url('alts.png');
  background-size: contain;
  width: 35px;
  height: 35px;
  animation: rotate 2.2s infinite;
  margin-right: 35px;
  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
    margin-right: 0px;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
