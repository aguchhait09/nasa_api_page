import Wrapper from "@/layout/wrapper/Wrapper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme, darkTheme } from "../mui_theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <CssBaseline />
        <Wrapper darkMode={darkMode}>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
