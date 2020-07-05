import Footer from '@components/Footer';
import Header from '@components/Header';
import SideBar from '@components/SideBar';
import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  toggleDarkMode: () => void;
  dark: boolean;
}

const ContentWrapper = styled.div`
  padding: 64px 64px 64px 128px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const MaxWrapper = styled.main`
  max-width: 1110px;
  margin: 0 auto;
`;

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <MaxWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </MaxWrapper>
      <SideBar />
      <Footer />
    </div>
  );
};

export default Layout;
