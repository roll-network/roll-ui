import {
  ghostWhite,
  white,
  grey,
  crimson,
  dodgerBlue,
  orange,
  solitudeGrey,
  mistyRose,
} from ".";

export type Theme = {
  backgroundPrimary: string;
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
  backgroundGrey: string;
  backgroundError: string;
  textMuted: string;
  textError: string;
  textWarning: string;
  highlight: string;
};

export const lightTheme: Theme = {
  backgroundPrimary: white,
  backgroundPage: ghostWhite,
  backgroundModal: white,
  backgroundHeader: white,
  backgroundError: mistyRose,
  textMuted: grey,
  textError: crimson,
  textWarning: orange,
  highlight: dodgerBlue,
  backgroundGrey: solitudeGrey,
};
