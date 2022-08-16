interface PaletteBase {
    primary: string;
    secondary: string;
    highlight: string;
    error: string;
    warning: string;
}
interface PaletteBackground extends PaletteBase {
    lowLight: string;
    tertiary: string;
    page: string;
}
export declare type Theme = {
    background: PaletteBackground;
    text: PaletteBase;
};
export declare const lightTheme: Theme;
export {};
/**
 * Keeping as a reference for the time being until
 * this new theme format is more better adopted
 */
