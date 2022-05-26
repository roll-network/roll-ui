import { useContext } from "react";
import { ThemeCtx } from "..";
import { ModalCtx } from "../context/modal";
import { Theme } from "../styles/theme";

export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeCtx);
  return theme;
};

export const useModal = () => useContext(ModalCtx);
