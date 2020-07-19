import Footer from '@components/Footer';
import Header from '@components/Header';
import SideBar from '@components/SideBar';
import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  toggleDarkMode: () => void;
  dark: boolean;
}

export const MaxWrapper = styled.main`
  max-width: 1110px;
  padding: 64px 64px 64px 128px;
  @media (max-width: 768px) {
    padding: 16px;
  }
  margin: 0 auto;
`;

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
      <MaxWrapper>{children}</MaxWrapper>
      <SideBar />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
