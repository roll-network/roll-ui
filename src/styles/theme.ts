import { ghostWhite, white, grey } from ".";

export type Theme = {
  backgroundPrimary: string;
  backgroundPage: string;
  backgroundModal: string;
  backgroundHeader: string;
  textMuted: string;
};

export const lightTheme: Theme = {
  backgroundPrimary: white,
  backgroundPage: ghostWhite,
  backgroundModal: white,
  backgroundHeader: white,
  textMuted: grey,
};
