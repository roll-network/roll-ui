import { ghostWhite, white, grey, crimson, dodgerBlue } from ".";

export type Theme = {
  backgroundPrimary: string;
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
  textMuted: string;
  textError: string;
  highlight: string;
};

export const lightTheme: Theme = {
  backgroundPrimary: white,
  backgroundPage: ghostWhite,
  backgroundModal: white,
  backgroundHeader: white,
  textMuted: grey,
  textError: crimson,
  highlight: dodgerBlue,
};
