import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../config/theme';
import { StateProvider } from '../contexts/StateManager';
import GlobalStyles from '../styles/GlobalStyles';
import 'moment/locale/pt-br';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StateProvider>
          <Component {...pageProps} />
        </StateProvider>
      </ThemeProvider>
    </>
  );
}
