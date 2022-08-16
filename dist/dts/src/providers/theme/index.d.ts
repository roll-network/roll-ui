/// <reference types="react" />
import { Theme } from "../../styles/theme";
declare type ThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare const ThemeCtx: import("react").Context<ThemeContext>;
export declare const ThemeProvider: React.FC;
export {};
