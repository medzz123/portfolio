import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import useDarkMode from "use-dark-mode";

import Layout from "../src/components/Layout";
import { darkTheme, lightTheme } from "../src/theme";

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);

  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {isMounted && (
        <Layout dark={darkMode.value} toggleDarkMode={darkMode.toggle}>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
};

export default MyApp;
