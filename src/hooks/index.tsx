import { useContext } from "react";
import { ThemeCtx } from "..";
import { Theme } from "../styles/theme";

export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeCtx);
  return theme;
};
