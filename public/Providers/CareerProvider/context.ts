import { createContext } from "react";

export type Theme = "Web dev" | "Game dev" | "Electric Design" | "Pixel Art";

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const initialValue: ThemeContextValue = {
  theme: "Web dev",
  setTheme: (theme: Theme) => {
    // Placeholder implementation; replace with actual logic if needed
    console.log(`Theme set to: ${theme}`);
  },
};

export const ThemeContext = createContext<ThemeContextValue>(initialValue);
