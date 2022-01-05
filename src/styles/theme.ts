import {
  ghostWhite,
  white,
  grey,
  crimson,
  dodgerBlue,
  orange,
  solitudeGrey,
} from ".";

export type Theme = {
  backgroundPrimary: string;
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
  textMuted: string;
  textError: string;
  textWarning: string;
  highlight: string;
  backgroundGrey: string;
};

export const lightTheme: Theme = {
  backgroundPrimary: white,
  backgroundPage: ghostWhite,
  backgroundModal: white,
  backgroundHeader: white,
  textMuted: grey,
  textError: crimson,
  textWarning: orange,
  highlight: dodgerBlue,
  backgroundGrey: solitudeGrey,
};
