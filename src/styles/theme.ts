import { ghostWhite, white, grey, crimson, dodgerBlue, solitudeGrey } from ".";

export type Theme = {
  backgroundPrimary: string;
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
  textMuted: string;
  textError: string;
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
  highlight: dodgerBlue,
  backgroundGrey: solitudeGrey,
};
