import Footer from '@components/Footer';
import Header from '@components/Header';
import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  toggleDarkMode: () => void;
  dark: boolean;
}

const Wrapper = styled.div`
  padding: 24px;
`;

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
