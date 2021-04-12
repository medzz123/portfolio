import Layout from '@components/Layout';
import { pageView } from '@lib/gtag';
import GlobalStyles from '@theme/global';
import { darkTheme, lightTheme } from '@theme/theme';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

Router.events.on('routeChangeComplete', (url) => pageView(url));

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {isMounted && (
        <Layout dark={darkMode.value} toggleDarkMode={darkMode.toggle}>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default MyApp;
