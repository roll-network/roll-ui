import {
  ghostWhite,
  white,
  grey,
  crimson,
  dodgerBlue,
  orange,
  solitudeGrey,
  mistyRose,
  aliceBlue,
  darkNavy
} from ".";

export type Theme = {
  backgroundPrimary: string;
  backgroundPage: string;
  backgroundSecondary: string;
  backgroundModal: string;
  backgroundHeader: string;
  backgroundGrey: string;
  backgroundError: string;
  backgroundBlue: string;
  textMuted: string;
  textError: string;
  textWarning: string;
  highlight: string;
};

export const lightTheme: Theme = {
  backgroundPrimary: white,
  backgroundPage: ghostWhite,
  backgroundSecondary: aliceBlue,
  backgroundModal: white,
  backgroundHeader: white,
  backgroundError: mistyRose,
  textMuted: grey,
  textError: crimson,
  textWarning: orange,
  highlight: dodgerBlue,
  backgroundGrey: solitudeGrey,
  backgroundBlue: darkNavy, 
};
