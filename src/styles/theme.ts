import {
  white,
  grey,
  crimson,
  dodgerBlue,
  orange,
  mistyRose,
  aliceBlue,
  darkNavy,
} from ".";
import { lavendar } from "./colors";

interface PaletteBase {
  primary: string;
  secondary: string;
  highlight: string;
  error: string;
  warning: string;
}

interface PaletteBackground extends PaletteBase {
  lowLight: string;
}

export type Theme = {
  background: PaletteBackground;
  text: PaletteBase;

  // backgroundPrimary: string;
  // backgroundPage: string;
  // backgroundSecondary: string;
  // backgroundModal: string;
  // backgroundHeader: string;
  // backgroundGrey: string;
  // backgroundError: string;
  // backgroundBlue: string;
  // textMuted: string;
  // textError: string;
  // textWarning: string;
  // highlight: string;
};

export const lightTheme: Theme = {
  background: {
    primary: white,
    secondary: aliceBlue,
    highlight: lavendar,
    lowLight: darkNavy,
    error: mistyRose,
    warning: orange,
  },
  text: {
    primary: "black",
    secondary: grey,
    highlight: dodgerBlue,
    error: crimson,
    warning: orange,
  },
  // backgroundPrimary: white,
  // backgroundPage: ghostWhite,
  // backgroundSecondary: aliceBlue,
  // backgroundModal: white,
  // backgroundHeader: white,
  // backgroundError: mistyRose,
  // textMuted: grey,
  // textError: crimson,
  // textWarning: orange,
  // highlight: dodgerBlue,
  // backgroundGrey: solitudeGrey,
  // backgroundBlue: darkNavy,
};
