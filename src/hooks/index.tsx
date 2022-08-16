import { useContext } from "react";
import { ThemeCtx } from "../providers/theme";
import { ModalCtx } from "../context/modal";
import { Theme } from "../styles/theme";

export * from "./web3";

export const useTheme = (): Theme => {
	const { theme } = useContext(ThemeCtx);
	return theme;
};

export const useModal = () => useContext(ModalCtx);
