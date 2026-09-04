import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

type AppThemeProviderProps = {
  children: ReactNode;
};

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="nnovity-theme"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
};

export default AppThemeProvider;
