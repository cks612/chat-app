import type { AppProps } from "next/app";
import { ContextProvider } from "../context";
import GlobalStyles from "../styles/_GlobalStyles";
import { ThemeProvider } from "styled-components";
import { color, mixins } from "../styles/_theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...mixins, ...color }}>
      <ContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}
