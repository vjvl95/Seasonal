import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle, theme } from '@/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
