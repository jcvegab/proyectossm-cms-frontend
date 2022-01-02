import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { AppProps /*, AppContext */ } from 'next/app';
import { Provider } from 'react-redux';

import store from '@store/index';
import { globalStyles } from '@styles/global';
import { emotionTheme, muiTheme } from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Global styles={globalStyles} />
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={emotionTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </Provider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
